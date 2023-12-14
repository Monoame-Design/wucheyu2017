// noprotect
let themes = [
	"07252F-7c6a0a-babd8d-ffdac6-fa9500-eb6424-FCFBF6".split("-").map(a => "#" + a),
	"584d3d-9f956c-cbbf7a-f4e87c-ebf38b-fed766-fff-ffa856-000-e5dede".split("-").map(a => "#" + a),
	"0e131f-38405f-59546c-8b939c-ff0035-2c0735-fff".split("-").map(a => "#" + a),
	"ffc854-000-ffc854-000-fff".split("-").map(a => "#" + a),
	"e6e1c6-afac96-c0bda5-cc978e-f39c6b-f96a68-ff3864-261447-3a2958-fff".split("-").map(a => "#" + a),
	"daddd8-c7d59f-b7ce63-8fb339-4b5842-fafafa-daddd8-c7d59f-b7ce63-8fb339-4b5842-fafafa-daddd8-c7d59f-b7ce63-8fb339-4b5842-fafafa-FF715B".split("-").map(a => "#" + a),
	"d72638-3f88c5-f49d37-140f2d-f22b29-fe4a49-fed766-7fbb8f-009fb7-e6e6ea-fff-102a54".split("-").map(a => "#" + a),
	"fff-fff-333-aaa-bbb-ccc-ddd-eee".split("-").map(a => "#" + a),

]
let features = {}
let colors = []
let defaultSize = 1920
let ratio = 1080 / 1920
//001427
//p5.js shader basic structure ref from https://www.openprocessing.org/sketch/920144


let theShader, theShaderTexture;
let webGLCanvas
let originalGraphics
let particles = []
let overallTexture
let bgColor
let sortedColors = []

let useStats = false
// var stats

function assignFeatures() {
	colors = themes[$fx.getFeature("theme_id") % themes.length]

	noiseSeed($fx.getFeature("number_id"))
	randomSeed($fx.getFeature("number_id"))
	console.log(colors)
	bgColor = color(random(colors))
}

function preload() {
	if (useStats) {

		stats = new Stats();
		stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
		document.body.appendChild(stats.dom);
	}

	// getSeedAndSet()
	// randomSeed(20221030)
	// noiseSeed(19950517)


	sortedColors = colors.sort((a, b) => brightness(color(b)) - brightness(color(a)))


	theShader = new p5.Shader(this.renderer, vert, frag)
	theShaderTexture = new p5.Shader(this.renderer, vert, frag_texture)
	// overallTexture = loadImage("canvas-light.jpeg") 



	// features.style=random()<0.2?'stroke':'normal'
	features.style = 'stroke'
	features.style = random() < 0.2 ? 'shape' : features.style
	features.hasBgBorder = random() < 0.5;
	features.rotateFactors = random([
		[0],
		[0],
		[0],
		[0],
		[0, 0.05],
		[0, -0.05],
		[0.05, 0, 0, 0, 0, 0, 0, -0.05]

	])
	features.vNoiseScale = random([40, 50, 75, 100, 120])
}



//https://www.fxhash.xyz/doc/artist/project-sdk#fxcontext
function setup() {

	if ($fx.context === "capture") {
		pixelDensity(0.9)
	} else if ($fx.context === "standalone" || $fx.context === "minting") {
		pixelDensity(2)
	}
	createCanvas(defaultSize, ratio * defaultSize);
	initResize()



	//prepare texture
	overallTexture = createGraphics(width, height, WEBGL)
	overallTexture.shader(theShaderTexture)
	theShaderTexture.setUniform('u_resolution', [width, height])
	// theShaderTexture.setUniform('u_canvas_tex',overallTexture)
	overallTexture.noStroke()
	overallTexture.rect(-width / 2, -height / 2, width, height)


	webGLCanvas = createGraphics(width, height, WEBGL)
	originalGraphics = createGraphics(width, height)

	webGLCanvas.noStroke()
	originalGraphics.noStroke()
	// originalGraphics.translate(random([-0.1, -0.05, 0, 0, 0.05, 0.1]) * width,
	// 	random([-0.1, -0.05, 0, 0, 0.05, 0.1]) * height)

	originalGraphics.translate(width / 2, height / 2)

	originalGraphics.rotate(random([0, random(-0.2, 0.2)]))
	// if (!features.style == "normal") {
	// 	originalGraphics.scale(random([1.5, 2]))
	// }
	originalGraphics.translate(-width / 2, -height / 2)


	background(0)

	originalGraphics.noStroke()

	// bgColor = color(random(['#dfddd1']))

	bgColor = color(random(['#efede1']))

	assignFeatures()

	// bgColor = color(random(['#']))
	// bgColor = color(random(['#030303']))
	// bgColor = color('#187795')


	// div(0, 0, width, height * 0.2, 4, () => {
	// 	let colorH = random(200, 220), colorS = random(0, 30), colorB = random(150, 150)

	// 	return [colorH, colorS, colorB]
	// })

	// // sky
	// for (let y = 0; y < height * 0.4; y += 8) {
	// 	for (let x = -width * 0.2; x < width; x += width / 5) {
	// 		// let x = random(10)
	// 		let ang = random(-0.5, 0.5)
	// 		push()
	// 		colorMode(HSB)

	// 		let colorH = random(5 + y / 2) + y / 20 - 100, colorS = random(0, 10), colorB = random(200, 300)
	// 		let newP = new Particle({
	// 			p: createVector(x + random(-20, 20), y),
	// 			r: (0.5 + noise(x, y) / 2) * random(1, 5),
	// 			v: createVector(2, 0).rotate((ang + noise(x / 20, y / 20) - 0.5) * 0.2),
	// 			a: createVector(0, 0),
	// 			live: width / 5,
	// 			color: color(colorH, colorS, colorB),

	// 		})
	// 		particles.push(newP)
	// 		pop()
	// 	}

	// }


	// setTimeout(() => {

	// 	div(0, height / 3, width, height * 0.6, 9)
	// }, 2000)

	// setTimeout(() => {

	// 	div(0, height * 0.7, width, height * 0.2, 1, () => {
	// 		let colorH = random(200, 220)
	// 		let colorS = random(50, 120)
	// 		let colorB = random(100, 200)
	// 		return [colorH, colorS, colorB]
	// 	})
	// }, 3000)


	// for (let i = 0; i < 50; i++) {

	// 	let flowerColors = [
	// 		[random(0, 50), random(10, 100), random(100, 170)],
	// 		[random(0, 50), random(10, 100), random(100, 170)],
	// 		[random(0, 50), random(10, 100), random(100, 170)],
	// 		// [random(300, 320), random(10, 30), random(100, 170)],
	// 		// [random(100,50)*2,random(20,100)+50,random(20,100)+50],
	// 		// [random(100,50)+50,random(20,100)+100,random(20,100)+50]
	// 	]
	// 	setTimeout(() => {
	// 		//emit flower
	// 		let x = random(width), y = random(0.4, 0.9) * height
	// 		for (let o = 0; o < 10; o++) {
	// 			push()

	// 			let colorH = random(100, 50), colorS = random(20, 60), colorB = random(40, 120)
	// 			let useFlowerColor = random(flowerColors)
	// 			colorMode(HSB)
	// 			let newP = new Particle({
	// 				p: createVector(x,
	// 					y),
	// 				r: (0.5 + noise(x, y) / 2) * random(2, 5),
	// 				v: createVector(0, -2),
	// 				a: createVector(random(-1, 1) / 50, 0),
	// 				live: noise(i) * 70 + 70 * random(),
	// 				color: color(colorH, colorS, colorB),

	// 			})
	// 			particles.push(newP)
	// 			newP.endCallback = () => {
	// 				push()
	// 				colorMode(HSB)
	// 				let petalCount = random([10, 15, 20, 24]), petalSize = random(1, 1.2)
	// 				for (let f = 0; f < petalCount; f++) {
	// 					let newP2 = new Particle({
	// 						p: createVector(newP.p.x,
	// 							newP.p.y),
	// 						r: (0.5 + noise(x, y) / 2) * random(0.8, 4),
	// 						v: createVector(0, -2).rotate(random(-1, 1)),
	// 						a: createVector(0, random(0.2)),
	// 						jitterFactor: 0.5,
	// 						live: noise(i) * 40 * random() + petalSize * 5,
	// 						color: color(useFlowerColor[0] + random(-10, 10), useFlowerColor[1] + random(-10, 10), useFlowerColor[2] + random(-20, 10)),

	// 					})
	// 					originalGraphics.push()
	// 					originalGraphics.blendMode(MULTIPLY)
	// 					originalGraphics.colorMode(HSB)
	// 					originalGraphics.fill(useFlowerColor[0], useFlowerColor[1], useFlowerColor[2], 0.001)
	// 					originalGraphics.ellipse(newP.p.x, newP.p.y, random(50, 100))
	// 					originalGraphics.pop()
	// 					particles.push(newP2)
	// 				}
	// 				pop()
	// 			}
	// 			pop()
	// 		}
	// 	}, random(10, 50) + 4000)
	// }


	// // //flower Sketch
	// // //----------------
	// div(0, 0, width, height, 5, () => {
	// 	let colorH = random(20, 100)
	// 	let colorS = random(0, 15)
	// 	let colorB = random(80, 150)
	// 	return [colorH, colorS, colorB]
	// })

	// let flowerCount = 20
	// let positions = Array.from({ length: flowerCount }, () => [random(-0.1, 1) * width, random(0.2, 1.2) * height])
	// positions = positions.sort((a, b) => a[1] - b[1])
	// for (let i = 0; i < flowerCount; i++) {
	// 	let pos = positions[i]
	// 	setTimeout(() => {
	// 		emitFlower({
	// 			p: createVector(pos[0], pos[1])
	// 		})

	// 	}, 1000 * i + 4000)

	// }
	// //----------------

	//flower & grass	
	drawSceneFlowerGrass()

	// drawSceneTest()


	// drawSceneLandscape() 
	// drawPhysics()
	// drawSea() 
	// drawSea2()

}


function draw() {
	if (frameCount == 2000) {
		$fx.preview()
	}
	if (useStats) {
		stats.begin();

	}

	webGLCanvas.shader(theShader)
	theShader.setUniform('u_resolution', [width, height])
	theShader.setUniform('u_time', millis() / 1000)
	theShader.setUniform('u_mouse', [mouseX / width, mouseY / height])
	theShader.setUniform('u_tex', originalGraphics)
	theShader.setUniform('u_bgColor', [bgColor._getRed() / 255., bgColor._getGreen() / 255., bgColor._getBlue() / 255.])
	theShader.setUniform('u_canvas_tex', overallTexture)

	webGLCanvas.clear()

	webGLCanvas.background(bgColor)
	background(bgColor)

	webGLCanvas.rect(-width / 2, -height / 2, width, height)
	particles.forEach(p => {
		p.update()
		p.draw(originalGraphics)
	})
	particles = particles.filter(p => p.alive)

	originalGraphics.noStroke()

	fill(bgColor);
	rect(0, 0, width, height)

	push()
	blendMode(MULTIPLY)
	let gridSpan = 40
	//test grid
	// for(let x=0;x<width;x+=gridSpan){
	// 	stroke(0,20)
	// 	line(x,0,x,height)
	// }
	// for(let y=0;y<height;y+=gridSpan){
	// 	stroke(0,20)
	// 	line(0,y,width,y)
	// }
	blendMode(BLEND)
	image(webGLCanvas, 0, 0)
	pop()
	// pop()
	// 	push()
	// 		blendMode(MULTIPLY)

	// 		image(originalGraphics,0,0)
	// 	pop()
	// push()
	// 	// blendMode(ADD)
	// 	stroke(bgColor)
	// 	noFill()
	// 	strokeWeight(40)
	// 	rect(0,0,width,height)
	// pop()

	push()
	blendMode(MULTIPLY)
	image(overallTexture, 0, 0, 1920 * 1.3, 1080 * 1.3)
	// blendMode(SCREEN)
	// image(overallTexture,0,0,1920,1080)
	// image(overallTexture,0,0,height/1080*1920 ,height)
	pop()

	if (useStats) {
		stats.end();
	}

}