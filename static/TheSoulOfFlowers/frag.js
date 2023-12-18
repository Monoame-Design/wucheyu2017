const frag = `
	precision highp float;

	uniform vec2 u_resolution;
	uniform vec2 u_mouse;
	uniform float u_time;
	uniform vec3 u_lightDir;
	uniform vec3 u_col;
	uniform vec3 u_bgColor;
	uniform mat3 uNormalMatrix;
	uniform float u_pixelDensity;
	uniform sampler2D u_tex;
	uniform sampler2D u_canvas_tex; 

	//attributes, in
	varying vec4 var_centerGlPosition;
	varying vec3 var_vertNormal;
	varying vec2 var_vertTexCoord;

	${frag_functions_default}

	void main(){
		vec2 st = var_vertTexCoord.xy /u_resolution.xy*min(u_resolution.x,u_resolution.y);
		st.x*=u_resolution.x/u_resolution.y;
		vec2 stBorder =st;
		
		stBorder.x+=cnoise(vec3(st*1000.,100.))/400.;
		stBorder.y+=cnoise(vec3(st*1000.,1000.))/400.; 
		
		stBorder.x+=cnoise(vec3(st*100.,100.))/400.;
		stBorder.y+=cnoise(vec3(st*100.,1000.))/400.; 



		float borderWidth = 20.;
	
		vec3 canvasOffset = texture2D(u_canvas_tex,st* vec2(u_resolution.x/u_resolution.y,1.)).rgb;
		st.x+=0.25/255.- canvasOffset.r/255.*3. ;
		st.y+=0.25/255.- canvasOffset.g/255.*3.  ;
		
		
		st.x+=cnoise(vec3(st*2.,100.))/80.  ;
		st.y+=cnoise(vec3(st*20.,1000.))/80.;
		
		st.x+=cnoise(vec3(st*50.,100.))/300.  ;
		st.y+=cnoise(vec3(st*100.,1000.))/300.;
		
		vec4 texColor0 = texture2D(u_tex,st);
		
		//offset color Blocks
		float offsetColor = 1./300.;
		stBorder.x-= texColor0.r*offsetColor;
		stBorder.y-=texColor0.g*offsetColor+ texColor0.b*offsetColor;
		
		vec4 texColor1 = texture2D(u_tex,st);
		 
		
		vec2 st2 = st;
		//brush feeling  
		float brushFactor = 100.;
		st2.x+=cnoise(vec3(st*1000.,100.))/brushFactor;
		st2.y+=cnoise(vec3(st*1000.,1000.))/brushFactor; 
 
		vec4 texColor2 = texture2D(u_tex,st2);
		
		float d = distance(vec2(0.5) ,st);  
		// texColor*=1.-d+0.3;
		// gl_FragColor= vec4(color,1.0)+texColor2; 
		
		bool isBorder = stBorder.x*u_resolution.x<borderWidth
		|| (1.-stBorder.x)*u_resolution.x<borderWidth 
		|| stBorder.y*u_resolution.y<borderWidth 
		|| (1.-stBorder.y)*u_resolution.y<borderWidth;
		
		vec4 result ;
		if ( isBorder){
			result = vec4(u_bgColor,1.0);
		} else {
			result = texColor1*0.8 + (texColor1*texColor2/1.9+texColor1/4.+texColor2/4.)/5.;
		
			// if ( distance(result.rgb, u_bgColor.rgb)<0.01 ){
			// 	result.a=0.;
			// }
		}
		gl_FragColor =result;	
	}
`