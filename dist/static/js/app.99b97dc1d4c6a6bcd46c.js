webpackJsonp([1],{"+bsb":function(t,e){},"47Wq":function(t,e){},DM3i:function(t,e){},G4H8:function(t,e){},MPx3:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),a=s("Dd8w"),n=s.n(a),o={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"page-loading"})},staticRenderFns:[]};var r=s("VU/8")({},o,!1,function(t){s("47Wq")},null,null).exports,c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"social-links"},[e("a",{attrs:{href:"https://www.linkedin.com/in/cheyuwu/?locale=en_US",target:"_blank",title:"Linkedin"}},[e("i",{staticClass:"fab fa-linkedin-in"})]),e("a",{attrs:{href:"mailto:cyw345@nyu.edu",target:"_blank",title:"Envelope"}},[e("i",{staticClass:"far fa-envelope"})]),e("a",{attrs:{href:"https://codepen.io/frank890417",target:"_blank",title:"Codepen"}},[e("i",{staticClass:"fab fa-codepen"})]),e("a",{attrs:{href:"https://github.com/frank890417",target:"_blank",title:"Github"}},[e("i",{staticClass:"fab fa-github"})]),e("a",{attrs:{href:"https://medium.com/@wucheyu",target:"_blank",title:"Medium"}},[e("i",{staticClass:"fab fa-medium"})]),e("a",{attrs:{href:"http://issuu.com/wucheyu/docs/2017_portfolio",target:"_blank",title:"Portfolio on ISSUU"}},[e("i",{staticClass:"fas fa-book"})]),e("a",{attrs:{href:"https://hahow.in/@majer",target:"_blank",title:"Portfolio on ISSUU"}},[e("img",{staticStyle:{width:"23px","margin-top":"-5px"},attrs:{src:"/static/img/hahowicon.png"}})])])}]};var l=s("VU/8")({},c,!1,function(t){s("G4H8")},null,null).exports,h=s("NYxO"),d={name:"app",components:{pageLoading:r,"social-links":l},computed:n()({},Object(h.b)(["loading"]))},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12"},[t.$route.path.includes("manage")||t.$route.path.includes("/project/")?t._e():s("nav",[s("router-link",{attrs:{to:"/"}},[s("h2",[t._v("CHE-YU WU")])]),s("div",[s("router-link",{class:{active:"/"==t.$route.path},attrs:{to:"/"}},[t._v("Works")]),s("router-link",{class:{active:"/about"==t.$route.path},attrs:{to:"/about"}},[t._v("About")]),s("router-link",{class:{active:"/experiment"==t.$route.path},attrs:{to:"/experiment"}},[t._v("Experiments")]),s("a",{class:{active:"/resume"==t.$route.path},attrs:{href:"/static/Che-Yu Wu Resume.pdf",target:"blank"}},[t._v("Resume")])],1)],1)])])]),s("transition",{attrs:{name:"page",mode:"out-in"}},[t.loading?s("pageLoading"):t._e()],1),s("transition",{attrs:{name:"page",mode:"out-in"}},[s("router-view",{key:t.$route.path})],1),s("div",{staticClass:"row copyright"},[s("div",{staticClass:"col-sm-12 mt-5 pt-5 pb-5"},[s("h5",[t._v("Copyright© Che-Yu Wu, 2019")]),s("div",{staticClass:"text-center mt-4"},[s("social-links")],1)])])],1)},staticRenderFns:[]};var u=s("VU/8")(d,p,!1,function(t){s("pc3X")},null,null).exports,m=s("//Fk"),f=s.n(m),w=s("/ocq"),g={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};s("VU/8")({mounted:function(){}},g,!1,function(t){s("knZK")},null,null).exports;var v=s("W3Iv"),b=s.n(v),k={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App",currentTag:""}},computed:n()({},Object(h.b)(["works","defaut_hashtags"]),{sortedWorks:function(){return b()(this.works).sort(function(t,e){return t[1].order-e[1].order}).map(function(t){return n()({uid:t[0]},t[1])})}}),methods:{cssbg:function(t){return{"background-image":'url("'+(t&&""!=t?t:"/img/default.jpg")+' ")'}},objCombine:function(t,e){return n()({},t,e)}},components:{"social-links":l}},y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page page-works"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12"},[s("div",{staticClass:"catas"},[s("div",{staticClass:"cata",class:{active:!t.currentTag},on:{click:function(e){t.currentTag=""}}},[t._v("All")]),t._l(t.defaut_hashtags,function(e){return s("div",{staticClass:"cata",class:{active:t.currentTag==e},on:{click:function(s){t.currentTag=e}}},[t._v(t._s(e))])})],2)])]),s("div",{staticClass:"row row-work mt-3 mb-4"},t._l(t.sortedWorks,function(e,i){return t.currentTag&&-1==e.cata.indexOf(t.currentTag)?t._e():s("router-link",{key:e.uid,staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-6 col-work animated fadeIn mb-4 mt-2",attrs:{to:"/project/"+e.uid}},[s("div",{staticClass:"work",style:t.cssbg(e.cover)}),s("h5",{staticClass:"mt-4"},[t._v(t._s(e.title))])])}))])])},staticRenderFns:[]};var _=s("VU/8")(k,y,!1,function(t){s("qAiG")},null,null).exports,x=s("RBYm"),C=s.n(x);function I(t){t.setup=function(){var e=t.createCanvas(t.windowWidth,t.windowHeight);t.colorMode(t.HSB),e.parent("#page_about")},t.windowResized=function(){t.resizeCanvas(t.windowWidth,t.windowHeight)},t.draw=function(){t.background(255);for(var e=0;e<t.width;e+=10)e%50==0?t.stroke(0,0,10,.2):t.stroke(0,0,10,.05),t.line(e,0,e,t.height);for(e=0;e<t.height;e+=10)e%50==0?t.stroke(0,0,10,.2):t.stroke(0,0,10,.05),t.line(0,e,t.width,e);t.translate(t.width/2,t.height/2),t.stroke(255),t.noStroke();for(var s=window.scrollY,i=0;i<25;i++){t.push(),t.rotate(t.PI/10*2*i);for(e=0;e<90;e++){var a=180/t.pow(e,.8),n=i+t.sin(s/100+e/50+t.cos(t.frameCount/20)/30+t.frameCount/50)/5+t.noise(t.frameCount/50,10*e,10*i)+t.cos(t.frameCount/200);t.rotate(n),t.stroke(s/50+e,50,100-i-e/10),t.line(0,0,a,0),t.noStroke(),t.fill(3*e,70,100-i-e/10),t.ellipse(0,0,1*t.log(e),1*t.log(e)),t.translate(a,0)}t.pop()}}}var j={mounted:function(){this.bgsketch=new C.a(I,"test")},data:function(){return{bgsketch:null}},components:{socialLinks:l},beforeDestroy:function(){this.bgsketch.remove()}},U={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page page-about",attrs:{id:"page_about"}},[e("div",{staticClass:"container pt-5 content"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"})]),e("div",{staticClass:"row row-info mt-5"},[e("div",{staticClass:"col-sm-12 col-info text-left"},[e("h1",[this._v("Che-Yu Wu")]),e("h5",{staticClass:"mt-1"},[this._v("Interaction Designer, Creative Technologist")]),e("pre",[this._v("MS in Integrated Digital Media @ New York University")]),e("br"),e("p",[this._v("Devoted to generative arts, immersive user experience design, full-stack development, sound synthesis, and tutoring."),e("br"),e("br")])])])])])}]};var S=s("VU/8")(j,U,!1,function(t){s("DM3i")},null,null).exports,T={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page page-experiment pt-5"},[s("div",{staticClass:"container-fluid"},t._l(t.experiments,function(e){return s("div",{staticClass:"row mb-5"},[s("div",{staticClass:"col-sm-4 text-center"},[s("h4",[t._v(t._s(e.title))]),s("pre",[t._v(t._s(e.date))])]),s("div",{staticClass:"col-sm-8"},[s("iframe",{attrs:{src:e.src}})])])}))])},staticRenderFns:[]};var M=s("VU/8")({data:function(){return{experiments:[{title:"Genrative Music String",date:"2018/10/21",src:"https://www.openprocessing.org/sketch/611472"},{title:"Genrative Music Matrix",date:"2018/10/9",src:"https://codepen.io/frank890417/pen/PypZeZ"},{title:"Drawing Machine",date:"2018/10/28",src:"https://www.openprocessing.org/sketch/616561"},{title:"FUI - DataPoints",date:"2018/9/29",src:"https://www.openprocessing.org/sketch/598254"}]}}},T,!1,function(t){s("+bsb")},null,null).exports,F={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-research"},[e("div",{staticClass:"container text-left mt-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[e("h2",[this._v("The evolution of information theory in the digital era"),e("h4",{staticClass:"date"},[this._v("2018/12/22")])]),e("a",{attrs:{href:"/static/The evolution of information theory in the digital era (Final Essay | Media theory D | Che-Yu Wu).pdf",target:"_blank"}},[this._v("Essay Link")]),e("p",[this._v("From the ancient age of human society, information is essential to human beings. We, humans, use drawing and carving to record messages on stone walls. The paintings might tell our ancestors where and how to get foods, make tools, worship their god, or record what happened that we called history. We live on messages about the ancient wisdom of our ancestors which tell us the sign of harvest and get information about our enemies to fight against with.")]),e("br"),e("p",[this._v('Since the Information Evolution, information has become the central theme of several science topics since the 1940s. It has been considered an important role of the universe. In Cybernetics1. Wiener stated: "information is information not matter or energy," and in Shannon\'s Information Theory2, he mentioned that information is a specific combination of different symbols which can be carried either by matter and energy. Information are not a sort of text or a piece of knowledge, it becomes the key basepoint of modern digital telecommunication system and the way we consider human being as a information node in “How We Became Posthuman”3.')]),e("br"),e("p",[this._v("We consider information as a phenomenon, independent from what it is transmitted with, the sender and the receiver. However, is information an isolated element not related to the other roles in the system? Does information keep its consistency throughout different receivers and mediums? How did the invention of the Internet change the way we handle, transmit and interpret the signals, and how does it perform difference to people in the modern world when we are comprehending with common online knowledge base? What happened when our medium has also improved to a high-tech version, which has the ability to process the signal and append additional information to the original one? The following passage will discuss the evolution of information from the ancient age to the future and the hypothesis of how the information model and application in the future might change.")])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[e("h2",[this._v("Generative Audio research & experiments"),e("h4",{staticClass:"date"},[this._v("2018/10/9")])]),e("br"),e("div",{staticClass:"entry-content"},[e("p",[this._v("Before I come to New York, I meet a generative audio artist – Chi Po Hao. I visited him many times for his speech and workshops about generative audio, machine learning in generative music and how to design systems for generative arts and music.")]),e("p",[this._v("This week, I read through the “How Generative Music Works, A Perspective” and I thought it is so delicate! The author well organizes the story of how generative music developed and combine live demos that you can play through your browser. It is an intense but easy to learn and feel tutorial that blows my mind!")]),e("p",[e("a",{attrs:{href:"https://teropa.info/loop/#/title"}},[this._v("https://teropa.info/loop/#/title")])]),e("p",[this._v("The website introduces how it means to define a sound system that produces music with a lot of interesting examples. Traditionally, we think music as a static thing with fixed scores and instruments, but in generative art, which is developed since the 1900s, there are a lot of tries out that attempt to design a dynamic system, which means a set of things working together as parts of a mechanism or an  interconnecting network, that can produce music.")]),e("figure",{staticClass:"wp-caption alignnone",attrs:{id:"attachment_254"}},[e("img",{staticClass:"wp-image-254",attrs:{src:"https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/螢幕截圖-2018-10-21-19.41.38-1024x535.png",alt:"",srcset:"https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/螢幕截圖-2018-10-21-19.41.38-1024x535.png 1024w, https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/螢幕截圖-2018-10-21-19.41.38-300x157.png 300w, https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/螢幕截圖-2018-10-21-19.41.38-768x402.png 768w, https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/螢幕截圖-2018-10-21-19.41.38-1200x627.png 1200w"}}),e("figcaption",{staticClass:"wp-caption-text"},[this._v("Music for Airtport")])]),e("p",[this._v("( "),e("a",{attrs:{href:"https://teropa.info/loop/#/airports"}},[this._v("https://teropa.info/loop/#/airports")]),this._v(" )")]),e("p",[this._v("This is the inspired example by delaying the track, the artist make environmental music for airport not through fixed-length tracks, but grab some notes, define a length on the loop and turn the virtual machine turn, as the wheel brings the solid line toward the play point, the flute-like sound will fade In and 7 of them made harmonic and peaceful work!")]),e("p",[this._v("I learn classical music when I was in elementary school for about 7 years, and those new techniques of creating pieces of music really change my imagination of what music heard like and how they can be, even what can be defined as music.")]),e("p",[e("img",{staticClass:"alignnone wp-image-255",attrs:{src:"https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/5bf745ca9de501e564bcc66f898fd4b4-1024x791.png",alt:"",srcset:"https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/5bf745ca9de501e564bcc66f898fd4b4-1024x791.png 1024w, https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/5bf745ca9de501e564bcc66f898fd4b4-300x232.png 300w, https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/5bf745ca9de501e564bcc66f898fd4b4-768x593.png 768w, https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/5bf745ca9de501e564bcc66f898fd4b4-1200x927.png 1200w"}})]),e("p",[e("img",{staticClass:"alignnone wp-image-256",attrs:{src:"https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/9d4a50dce3a5dc271040930e5c50e834-1024x664.png",alt:"",srcset:"https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/9d4a50dce3a5dc271040930e5c50e834-1024x664.png 1024w, https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/9d4a50dce3a5dc271040930e5c50e834-300x195.png 300w, https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/9d4a50dce3a5dc271040930e5c50e834-768x498.png 768w, https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/9d4a50dce3a5dc271040930e5c50e834-1200x778.png 1200w"}})]),e("p",[this._v("Terry Riley’s in C,"),e("br"),this._v("This “score” is defined by 53 pieces and a long rule explanation. It can be played by a group of fewer than 35 people. Everyone in the band can repeat a numbered measure whatever times he wants to. This is a great example to let me think that, maybe we can create more dynamic music for exhibitions, interactive arts, and museums and if the piece is unique at any moment the audience hears it, it might be a great experience!")]),e("figure",{staticClass:"wp-caption alignnone",attrs:{id:"attachment_257"}},[e("img",{staticClass:"wp-image-257",attrs:{src:"https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/螢幕截圖-2018-10-21-19.44.03-1024x540.png",alt:"",srcset:"https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/螢幕截圖-2018-10-21-19.44.03-1024x540.png 1024w, https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/螢幕截圖-2018-10-21-19.44.03-300x158.png 300w, https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/螢幕截圖-2018-10-21-19.44.03-768x405.png 768w, https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/螢幕截圖-2018-10-21-19.44.03-1200x633.png 1200w"}}),e("figcaption",{staticClass:"wp-caption-text"},[this._v("Terry Riley, 2014")])]),e("p",[e("a",{attrs:{href:"https://teropa.info/loop/#/incplayer"}},[this._v("https://teropa.info/loop/#/incplayer")])]),e("p",[this._v("The website also mentions two ways of generative arts, one is generative methods and one is generative products, the difference between them is one is defining a method and you will get the same result every time, but the other one is every time you play, it contains user interactive and randomness. There is already some generative synthesizer in the APP market, which allows the audience to draw, tap or tilt there phone to engage in the process of making music!")]),e("p",[this._v("The last impressed example I want to show is  Data Sonification, the author mentioned a website called “Listen to Wikipedia”, it sonify the register action and every edit actions of Wikipedia. We, human, often need visual or audio representation to trigger the subconscious that gives us the quantitative or degree of data through non-logical feelings, and I really think that is a great experience if we can perceive those cold data through a way that is so interesting.")]),e("figure",{staticClass:"wp-caption alignnone",staticStyle:{width:"562px"},attrs:{id:"attachment_258"}},[e("img",{staticClass:"wp-image-258",attrs:{src:"https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/螢幕截圖-2018-10-22-01.17.13-300x151.png",alt:"",srcset:"https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/螢幕截圖-2018-10-22-01.17.13-300x151.png 300w, https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/螢幕截圖-2018-10-22-01.17.13-768x386.png 768w, https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/螢幕截圖-2018-10-22-01.17.13-1024x514.png 1024w, https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/螢幕截圖-2018-10-22-01.17.13-1200x603.png 1200w",sizes:"(max-width: 562px) 85vw, 562px"}}),e("figcaption",{staticClass:"wp-caption-text"},[this._v("Listen to Wikipedia")])]),e("p",[e("a",{attrs:{href:"http://listen.hatnote.com/"}},[this._v("http://listen.hatnote.com/")])]),e("p",[this._v("There are lots of fascinating examples here, and after reading I definitely discover more possibilities of how to break the imagination of what we thought as music. So I try to make some generative music experiments too! The first one is Music String with particles hitting them.")]),e("p",[e("iframe",{attrs:{src:"https://www.openprocessing.org/sketch/611472/embed/?plusEmbedHash=YTczMzc0ZGFjNmViMTE5MWRiNGY0NjJhZjM2NDVmZmQ2NjQ5ZDdlODgxNjYwYjg5ZTUxOTcyODMzYmUzMjA2NmEyYmFjMzRmNWJhOTRkZmJjNTI3M2Q3MWM3NWU4Mjc5MDgyMTQxYzU5YjgzZjk0NTE5YTg0MDA3MzE0YjQ2NDhnTlFkbTlKK3lpVjhMVENIU2Y2bTU5NFhqUmk2OVp5bENsWC9RU1lvS2hrZkxUN05oNkNLMnQ5RkpDU0ltTnJrMjFhUURxSkF6dkF2RFRZWDQvdlB3Zz09&plusEmbedTitle=true",width:"100%",height:"600"}})]),e("p",[this._v("and the second one below is the music matrix, each particle has a certain cycle of triggering, and I add some drum sound through adding ADSR to noise and sine waves, it’s very playful and I hope that I can dig into the field of generative music more in the future!")]),e("p",[e("iframe",{attrs:{title:"Music Matrix",src:"//codepen.io/frank890417/embed/preview/PypZeZ/?height=521&theme-id=dark&default-tab=js,result",width:"100%",height:"600",frameborder:"no",allowfullscreen:"allowfullscreen"}},[this._v("See the Pen "),e("a",{attrs:{href:"https://codepen.io/frank890417/pen/PypZeZ/"}},[this._v("Music Matrix")]),this._v(" by Majer @Monoame Design ("),e("a",{attrs:{href:"https://codepen.io/frank890417"}},[this._v("@frank890417")]),this._v(") on "),e("a",{attrs:{href:"https://codepen.io"}},[this._v("CodePen")]),this._v(".")])])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[e("h2",[this._v("Fantasy User Interface"),e("h4",{staticClass:"date"},[this._v("2018/10/2")])]),e("div",{staticClass:"entry-content"},[e("h3",[this._v("Fall in love with FUI (Fantasy User Interface)")]),e("p",[this._v("Recently, I fall in love with FUI, the Fantasy user interface, which we often see in the sci-fi movie. FUI is the combination of the technology we do not have yet – HUD (heads-up displays) and interfaces for the future system and machines.")]),e("p",[this._v("When we are watching this kind of movies, user interfaces of the machines, which might be the control panels of iron man or AI system,  usually have lines and complicate feeling, with glowing frames and holo image floating in the air and some 3D skeleton model turning around gently. Numbers on those interfaces vary in high speed, flashing and jumping and often are about science, aviation or statistics.")]),e("figure",{staticClass:"wp-caption alignnone",staticStyle:{width:"572px"},attrs:{id:"attachment_209"}},[e("img",{staticClass:"wp-image-209",attrs:{src:"https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/Batman_vs_Superman_Cyborg_Reveal_screengraphics_by_Jayse_Hansen-300x128.jpg",alt:"",width:"572",height:"244",srcset:"https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/Batman_vs_Superman_Cyborg_Reveal_screengraphics_by_Jayse_Hansen-300x128.jpg 300w, https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/Batman_vs_Superman_Cyborg_Reveal_screengraphics_by_Jayse_Hansen-768x327.jpg 768w, https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/Batman_vs_Superman_Cyborg_Reveal_screengraphics_by_Jayse_Hansen-1024x436.jpg 1024w, https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/Batman_vs_Superman_Cyborg_Reveal_screengraphics_by_Jayse_Hansen-1200x511.jpg 1200w, https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/Batman_vs_Superman_Cyborg_Reveal_screengraphics_by_Jayse_Hansen.jpg 1280w",sizes:"(max-width: 572px) 85vw, 572px"}}),e("figcaption",{staticClass:"wp-caption-text"},[this._v("Interface design by Jayse Hansen in “Batman v.s. Superman”")])]),e("figure",{staticClass:"wp-caption alignnone",staticStyle:{width:"579px"},attrs:{id:"attachment_213"}},[e("img",{staticClass:"wp-image-213",attrs:{src:"https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/FUI-Design4-1-300x169.jpg",alt:"",width:"579",height:"326",srcset:"https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/FUI-Design4-1-300x169.jpg 300w, https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/FUI-Design4-1-768x433.jpg 768w, https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/FUI-Design4-1.jpg 905w",sizes:"(max-width: 579px) 85vw, 579px"}}),e("figcaption",{staticClass:"wp-caption-text"},[this._v("Bradley G Munkowitz’s FUI Design")])]),e("p"),e("figure",{staticClass:"wp-caption alignnone",staticStyle:{width:"582px"},attrs:{id:"attachment_214"}},[e("img",{staticClass:"wp-image-214",attrs:{src:"https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/FUI-Design36-300x133.jpg",alt:"",width:"582",height:"258",srcset:"https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/FUI-Design36-300x133.jpg 300w, https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/FUI-Design36-768x342.jpg 768w, https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/FUI-Design36.jpg 906w",sizes:"(max-width: 582px) 85vw, 582px"}}),e("figcaption",{staticClass:"wp-caption-text"},[this._v("Scene of FUI in Movies")])]),e("h3",[this._v("Psycho-Pass")]),e("p",[this._v("I get lots of interest in FUI after I watch the animation – Psycho-Pass last week. It’s a Japanese animation talking about Shibboleth, which is a judicial system of the society for the future world, can read one’s mind by an ultra-sonic scanner replaced the law system and determine what everyone’s job based on measurement. They use lots of FUI to design what the system might look like in 2100 a.c.")]),e("figure",{staticClass:"wp-caption alignnone",staticStyle:{width:"566px"},attrs:{id:"attachment_210"}},[e("img",{staticClass:"wp-image-210",attrs:{src:"https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/Screen-Shot-2018-10-01-at-8.51.24-PM-300x169.png",alt:"",width:"566",height:"319",srcset:"https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/Screen-Shot-2018-10-01-at-8.51.24-PM-300x169.png 300w, https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/Screen-Shot-2018-10-01-at-8.51.24-PM-768x434.png 768w, https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/Screen-Shot-2018-10-01-at-8.51.24-PM-1024x578.png 1024w, https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/Screen-Shot-2018-10-01-at-8.51.24-PM.png 1197w",sizes:"(max-width: 566px) 85vw, 566px"}}),e("figcaption",{staticClass:"wp-caption-text"},[this._v("Interface Demonstration in the end song of Psycho-Pass")])]),e("p",[this._v("After that, I start to search for some introductions of FUI on the internet. There’s a lot of those on Pinterest, and movie posts, and I find that there are famous artists who are noted in the FUI field, which are Ash Thorp, Jayse Hansen, and Bradley G Munkowitz. They design the interface for lots of sci-fi movie, such as "),e("em",[this._v("Ender’s Game")]),this._v(" and "),e("em",[this._v("Total Recall")]),this._v(".")]),e("p",[e("iframe",{attrs:{src:"//player.vimeo.com/video/87056142?title=0&byline=0&portrait=0&color=8dc7dc",width:"100%",height:"320px",allowfullscreen:"allowfullscreen"}}),e("br"),e("em",[this._v("Ender’s Game FUI Reel and Breakdowns by Ash Thorp and Jayse Hansen")])]),e("h3",[this._v("The beautiful and professional part of FUI")]),e("p",[this._v("The designs not only with delicate animations but also elegant graphics that reveal the beauty of structures and data. Also, to design solutions and make brand guidelines of the FUI, the designers even reference whole books, such as plane pilot manuals, to observe what data will be measured, analysis and manipulate in the real world. To be a great designer in FUI, you must have numerous amount of knowledge and imagination of how the world operates, in the field of Biology, Structural design, Computer Science and Chemsitry, and the details are undoubtedly the key point of good visuals.")]),e("p",[e("iframe",{attrs:{src:"//player.vimeo.com/video/64377100?title=0&byline=0&portrait=0&color=8dc7dc",width:"100%",height:"320px",allowfullscreen:"allowfullscreen"}},[e("span",{staticClass:"mce_SELRES_start",staticStyle:{width:"0px",overflow:"hidden","line-height":"0"}},[this._v("\ufeff")])]),e("br"),e("a",{attrs:{href:"https://gmunk.com/OBLIVION-GFX"}},[e("em",[this._v("OBLIVION GFX Montage by Joseph Kosinski")])])]),e("h3",[this._v("My Personal experiment to design FUI through p5.js")]),e("p",[this._v("After seeing the references, I pick some element from what I have seen. Using Data simulation, Perlin noise to generate a matrix of data, and then formulate the rules like: When the cell number exceeds 60, it will become red, and if it is over 80, a danger-waring circle will appear to tag in out to notify the users. Then I follow the design pattern of half-transparent lines, using lines to emphasize the structure and make some flashing and glittering numbers to show system status. After 3 hours of work with p5.js, I finally come out with an amazing dynamic website!")]),e("figure",{staticClass:"wp-caption alignnone",staticStyle:{width:"554px"},attrs:{id:"attachment_212"}},[e("img",{staticClass:"wp-image-212",attrs:{src:"https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/Screen-Shot-2018-10-01-at-9.18.33-PM-300x243.png",alt:"",width:"554",height:"449",srcset:"https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/Screen-Shot-2018-10-01-at-9.18.33-PM-300x243.png 300w, https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/Screen-Shot-2018-10-01-at-9.18.33-PM-768x621.png 768w, https://s18798.pcdn.co/cheyuideation/wp-content/uploads/sites/12292/2018/10/Screen-Shot-2018-10-01-at-9.18.33-PM.png 788w",sizes:"(max-width: 554px) 85vw, 554px"}}),e("figcaption",{staticClass:"wp-caption-text"},[this._v("FUI experiment by Che-Yu Wu(me) ("),e("a",{attrs:{href:"https://www.openprocessing.org/sketch/598254"}},[this._v("link")]),this._v(")")])]),e("h3",[this._v("Conclusion")]),e("p",[this._v("I think I try to dig into some Data Visualisation stuff to have more fundamental knowledge of how to turn data into graphical views. It’s not only an enjoyable process to create this work, and its also encouraging that after the input of style and try to simulate the legendary designers in the professional field, I might have the potential to become one. In the future, I will plan to work more and research more about the FUI!")]),e("p"),e("h4",[e("strong",[this._v("References:")])]),e("p",[this._v("Movie FUI Collections: "),e("a",{attrs:{href:"https://www.noteloop.com/kit/fui/movie/"}},[this._v("https://www.noteloop.com/kit/fui/movie/")])]),e("p",[this._v("FUI Pinterest Board: "),e("a",{attrs:{href:"https://www.pinterest.com/kghsu/%E8%99%9B%E6%A7%8B%E4%BB%8B%E9%9D%A2%E8%A8%AD%E8%A8%88fui-design/?lp=true"}},[this._v("https://www.pinterest.com/kghsu/%E8%99%9B%E6%A7%8B%E4%BB%8B%E9%9D%A2%E8%A8%AD%E8%A8%88fui-design/?lp=true")])]),e("p",[this._v("OBLIVION GFX: "),e("a",{attrs:{href:"https://gmunk.com/OBLIVION-GFX"}},[this._v("https://gmunk.com/OBLIVION-GFX")])]),e("p",[this._v("A Chinese Design Magzine post introduction of  FUI: "),e("a",{attrs:{href:"https://www.mydesy.com/fui-design"}},[this._v("https://www.mydesy.com/fui-design")])])])])])])])}]};var E=s("VU/8")({},F,!1,function(t){s("vTbA")},null,null).exports,R=s("fZjL"),A=s.n(R),D={data:function(){return{msg:"Welcome to Your Vue.js App"}},computed:n()({},Object(h.b)(["works"]),{work:function(){return this.works[this.$route.params.id]},projnav:function(){var t=A()(this.works).indexOf(this.$route.params.id),e=A()(this.works)[t-1],s=A()(this.works)[t+1];return{pre:{id:e,work:this.works[e]},nxt:{id:s,work:this.works[s]}}}}),methods:{processHTML:function(t){return t.replace(/\n/g,"<br>")},cssbg:function(t){return{"background-image":'url("'+(t&&""!=t?t:"/img/default.jpg")+' ")'}}}},W={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-project"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[e("div",{staticClass:"cover",style:this.cssbg(this.work.cover)},[e("router-link",{staticClass:"btn-back",attrs:{to:"/"}},[e("i",{staticClass:"fa fa-angle-left mr-3"}),e("span",[this._v("Back to Works")])])],1)])]),e("div",{staticClass:"container content-area"},[this.work?e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[e("h1",[this._v(this._s(this.work.title))])])]):this._e(),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12 col-content"},[e("ul",{staticClass:"text-left"},[e("li",[e("label",[this._v("Client")]),e("span",[this._v(this._s(this.work.client))])]),e("li",[e("label",[this._v("Date")]),e("span",[this._v(this._s(this.work.date))])]),e("li",[e("label",[this._v("Category")]),e("span",[this._v(this._s(this.work.type))])]),e("li",[e("label",[this._v("Responsibilities")]),e("span",[this._v(this._s(this.work.work))])]),this.work.link?e("li",[e("label",[this._v("Link")]),e("a",{attrs:{href:this.work.link,target:"_blank"}},[this._v(this._s(this.work.link))])]):this._e()]),e("p",{staticClass:"text-left",domProps:{innerHTML:this._s(this.processHTML(this.work.content))}})])])]),e("div",{staticClass:"row row-nav"},[this.projnav.pre.id?e("router-link",{staticClass:"col-sm-6 col-nav",style:this.cssbg(this.projnav.pre.work.cover),attrs:{to:"/project/"+this.projnav.pre.id}},[e("h3",[this._v(this._s(this.projnav.pre.work.title))])]):this._e(),this.projnav.nxt.id?e("router-link",{staticClass:"col-sm-6 col-nav",style:this.cssbg(this.projnav.nxt.work.cover),attrs:{to:"/project/"+this.projnav.nxt.id}},[e("h3",[this._v(this._s(this.projnav.nxt.work.title))])]):this._e()],1)])])},staticRenderFns:[]};var $=s("VU/8")(D,W,!1,function(t){s("nYa4")},null,null).exports,P=s("m6he"),B={components:{VueEditor:P.VueEditor},data:function(){return{nowId:0}},computed:n()({},Object(h.b)(["works","defaut_hashtags"]),{work:function(){return-1!=this.nowId?this.works[this.nowId]:null},sortedWorks:function(){var t=b()(this.works).sort(function(t,e){return t[1].order-e[1].order}).map(function(t){return n()({uid:t[0]},t[1])});return t.forEach(function(t,e){t.order=e}),t}}),mounted:function(){var t=this;b()(this.works).forEach(function(e,s){e[1].order||t.$set(e[1],"order",s+1)})},methods:{save:function(){window.firebase.database().ref("works/"+this.nowId).set(this.work)},addItem:function(){window.firebase.database().ref("works").push({title:"新項目"})},removeItem:function(t){var e=this;this.$confirm("你確定要刪除專案嗎","刪除",{confirmButtonText:"確定",cancelButtonText:"取消",type:"warning"}).then(function(){window.firebase.database().ref("works/"+t).remove(),e.$message({type:"success",message:"已刪除!"})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},saveAll:function(){window.firebase.database().ref("works").set(this.works),this.$message("儲存成功！")},handleAvatarSuccess:function(t,e){this.imageUrl=URL.createObjectURL(e.raw)},uploadImage:function(t){var e=this;firebase.app().storage("gs://wucheyu-portfolio.appspot.com").ref().child("images/"+this.work.title+"/cover.jpg").put(t.file).then(function(t){console.log("Uploaded a blob or file!"),console.log(t.downloadURL),e.$message("封面上傳成功"),e.work.cover=t.downloadURL})},handleImageAdded:function(t,e,s){var i=firebase.app().storage("gs://wucheyu-portfolio.appspot.com").ref(),a=Math.random().toString(36).substring(2),n=this;i.child("images/"+this.work.title+"/img/"+a+".jpg").put(t).then(function(t){console.log("Uploaded a blob or file!"),console.log(t.downloadURL),n.$message("圖片上傳成功"),e.insertEmbed(s,"image",t.downloadURL)})}}},H={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-edit page-project-edit"},[s("div",{staticClass:"container-fluid pt-5"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-3 col-list"},[s("el-button",{staticClass:"pt-4 pb-4",staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:t.addItem}},[t._v("+ Add Item ")]),s("ul",{staticClass:"list-group text-left"},t._l(t.sortedWorks,function(e,i){return s("li",{staticClass:"list-group-item",class:{active:t.nowId==e.uid},on:{click:function(s){t.nowId=e.uid}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-8"},[s("span",[t._v(t._s(i+1)+". ")]),s("span",[t._v(t._s(e.title))])]),s("div",{staticClass:"col-2"},[s("div",{staticClass:"btn btn-danger btn-xs",on:{click:function(e){t.removeItem(i)}}},[t._v("-")])]),s("div",{staticClass:"col-2"},[s("el-input",{staticClass:"input-order-number",attrs:{type:"number"},model:{value:e.order,callback:function(s){t.$set(e,"order",s)},expression:"w.order"}})],1)])])}))],1),s("div",{staticClass:"col-sm-3"}),t.work?s("div",{key:t.nowId,staticClass:"col-sm-9"},[s("div",{staticClass:"container-fluid text-left"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12"},[s("h2",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-9"},[s("el-input",{staticClass:"input-title",model:{value:t.work.title,callback:function(e){t.$set(t.work,"title",e)},expression:"work.title"}})],1),s("div",{staticClass:"col-3"},[s("router-link",{staticClass:"btn btn-secondary float-right",attrs:{to:"/project/"+t.nowId,target:"_blank"}},[t._v("Open Project")]),s("button",{staticClass:"btn btn-primary float-right mr-2",on:{click:t.saveAll}},[t._v("Save")])],1)])]),s("hr")])]),s("div",{staticClass:"row pt-3"},[s("div",{staticClass:"col-sm-3"},[s("el-form",{attrs:{"label-width":"60px"}},[s("el-form-item",{attrs:{label:"連結"}},[s("el-input",{model:{value:t.work.link,callback:function(e){t.$set(t.work,"link",e)},expression:"work.link"}})],1),s("el-form-item",{attrs:{label:"顏色"}},[s("el-color-picker",{model:{value:t.work.color,callback:function(e){t.$set(t.work,"color",e)},expression:"work.color"}})],1),s("el-form-item",{attrs:{label:"客戶"}},[s("el-input",{model:{value:t.work.client,callback:function(e){t.$set(t.work,"client",e)},expression:"work.client"}})],1),s("el-form-item",{attrs:{label:"類別"}},[s("el-input",{model:{value:t.work.type,callback:function(e){t.$set(t.work,"type",e)},expression:"work.type"}})],1),s("el-form-item",{attrs:{label:"Tag"}},[s("el-select",{attrs:{multiple:"multiple",filterable:"filterable","allow-create":"allow-create","default-first-option":"default-first-option",placeholder:"請選擇Hashtag或建立"},model:{value:t.work.cata,callback:function(e){t.$set(t.work,"cata",e)},expression:"work.cata"}},t._l(t.defaut_hashtags,function(t){return s("el-option",{key:t,attrs:{label:t,value:t}})}))],1),s("el-form-item",{attrs:{label:"職責"}},[s("el-input",{model:{value:t.work.work,callback:function(e){t.$set(t.work,"work",e)},expression:"work.work"}})],1),s("el-form-item",{attrs:{label:"封面"}},[s("el-input",{model:{value:t.work.cover,callback:function(e){t.$set(t.work,"cover",e)},expression:"work.cover"}}),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-3"},[t.work.cover?s("img",{staticClass:"avatar",attrs:{src:t.work.cover,width:"100px"}}):t._e()]),s("div",{staticClass:"col-sm-9"},[s("el-upload",{staticClass:"avatar-uploader",attrs:{action:"string","http-request":t.uploadImage,"show-file-list":!1}},[s("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)])],1),s("el-form-item",{attrs:{label:"日期"}},[s("el-input",{model:{value:t.work.date,callback:function(e){t.$set(t.work,"date",e)},expression:"work.date"}})],1)],1)],1),s("div",{staticClass:"col-sm-9"},[s("el-form",[s("el-form-item",{attrs:{label:""}},[s("VueEditor",{staticClass:"ve",staticStyle:{height:"700px","margin-bottom":"50px"},attrs:{id:"content",useCustomImageHandler:!0},on:{imageAdded:t.handleImageAdded},model:{value:t.work.content,callback:function(e){t.$set(t.work,"content",e)},expression:"work.content"}})],1)],1)],1)])])]):t._e()])])])},staticRenderFns:[]};var N=s("VU/8")(B,H,!1,function(t){s("MPx3")},null,null).exports;i.default.use(w.a);var L=new w.a({mode:"history",routes:[{path:"/",name:"index",component:_},{path:"/about",name:"about",component:S},{path:"/research",name:"research",component:E},{path:"/experiment",name:"experiment",component:M},{path:"/work",name:"work",component:_},{path:"/manage",name:"project_edit",component:N},{path:"/project/:id",name:"project",component:$}],scrollBehavior:function(t,e,s){return new f.a(function(t,e){setTimeout(function(){t(s||{x:0,y:0})},500)})}});i.default.use(h.a);var z=new h.a.Store({state:{works:[],loading:!0,defaut_hashtags:["Visual","Hardware","Sound","3D"]},mutations:{setWorks:function(t,e){t.works=e},setLoading:function(t,e){t.loading=e}}}),V=s("zL8q"),Y=s.n(V),O=(s("tvR6"),s("7t+N"),s("R5/K"),s("aykR"),s("AYPi")),G=s.n(O);"wucheyu.monoame.com"==document.domain&&i.default.use(G.a,{id:"UA-52977512-26",router:L}),i.default.config.productionTip=!1,i.default.use(Y.a);new i.default({el:"#app",router:L,store:z,template:"<App/>",components:{App:u}});setTimeout(function(){z.commit("setLoading",!1)},100),i.default.mixin({methods:{cssbg:function(t){return{"background-image":'url("'+(t&&""!=t?t:"/img/default.jpg")+' ")'}}}});window.firebase=firebase,firebase.initializeApp({apiKey:"AIzaSyCRwI0dpZtehRK1QGeQk9qpOGmtJIbH68g",authDomain:"wucheyu-portfolio.firebaseapp.com",databaseURL:"https://wucheyu-portfolio.firebaseio.com",projectId:"wucheyu-portfolio",storageBucket:"",messagingSenderId:"531217018941"}),firebase.database().ref("works").on("value",function(t){z.commit("setWorks",t.val())})},knZK:function(t,e){},nYa4:function(t,e){},pc3X:function(t,e){},qAiG:function(t,e){},tvR6:function(t,e){},vTbA:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.99b97dc1d4c6a6bcd46c.js.map