let fishes = []
let bubbles = []
let overallTexture
let cnv
let theShader, theShader2, theShader3;
let whirls = []
let whirlCount = 40
let bgGraphics
let fishGraphics
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var DIM = Math.min(WIDTH, HEIGHT);
var DEFAULT_SIZE = 1080;
let ratio = 1920 / 1080;
var M = DIM / DEFAULT_SIZE;
var stats = new Stats();
let globalBgAlpha = 0
let fishSettings = {
	alpha: 0
}



function preload() {

	window.$fxhashFeatures = JSON.parse(JSON.stringify(features))
	if (features.pallate == 'purewhite') {
		window.$fxhashFeatures.fishColor = getColorLabel(color(255 -
			features.fishColor.r, 255 - features.fishColor.g, 255 - features.fishColor.b)).label
		window.$fxhashFeatures.fishMinColor = getColorLabel(color(
			255 - (features.fishMinColor.r + features.fishColor.r),
			255 - (features.fishMinColor.g + features.fishColor.g),
			255 - (features.fishMinColor.b + features.fishColor.b)
		)).label

	} else {
		window.$fxhashFeatures.fishColor = getColorLabel(color(features.fishColor.r, features.fishColor.g, features.fishColor.b)).label
		window.$fxhashFeatures.fishMinColor = getColorLabel(color(
			features.fishMinColor.r + features.fishColor.r,
			features.fishMinColor.g + features.fishColor.g,
			features.fishMinColor.b + features.fishColor.b
		)).label
	}
	theShader = new p5.Shader(this.renderer, vert, frag)
	theShader2 = new p5.Shader(this.renderer, vert, frag2)
	theShader3 = new p5.Shader(this.renderer, vert, frag3)
	noiseSeed(seed)
	randomSeed(seed)
	overAllTexture = loadImage("overallTextureCache.png")

}

let lastChangeFishTs = 0

function setup() {
	startAllAudio()

	console.log("Artist: Che-Yu Wu")
	console.log("Project: SoulFish")
	console.log("Date: 2022/06/29")
	console.log("https://twitter.com/cheyuwu345")
	gsap.to(fishSettings, {
		alpha: 1
	}, 1)
	stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
	// document.body.appendChild(stats.dom);
	// 	console.log(`......................................................................................................................................................
	// ......................................................................................................................................................
	// ......................................................................................................................................................
	// ......................................................................................................................................................
	// .................................................................................................................:....................................
	// .................................................::..................:FV:.:::::::::::::::::......::::::****FFIIIIF:...................................
	// .............:*****:..........................:F$$*:*VVII$*:::::**IVI***FFFF************FFFFFFFFFFF*****::::..........................................
	// ..........:FVF*:::**......................:*I$M$FVVF*....:*******:....................................................................................
	// ........*VV:...........................*FVI*:FVF*:....................................................................................................
	// ......:VV:........................::*VV*:.........................................................................................:F:........:*:......
	// .....*$*.....................:**IVF*:................................................................:*...........::..::***......*$*..:FII*:NV$$VV:...
	// ....:N*.............:::**FIVIF*:...............................................................::....:N:....:$F...*$.:F***$V...:F$:....*VV:.****$*....
	// .....*VVFFFFFFFIIIIIFF**::.....................................................:****F*.:*I*:..*VN*...:N:...*$*....V*...:$M$V:.*$*....:$$I*F:..:N*.....
	// .........::::...............................................................*VF***:*$I*NFF$N$::N$****V$..:V$:...........::..:VI:.....:*::::...:*......
	// ................................................................................*I$$F..:****:..::::::::.:$*.................**........................
	// ................................................................................****:....................:............................................
	// ......................................................................................................................................................
	// ......................................................................................................................................................`)
	pixelDensity(1)
	cnv = createCanvas(DIM * ratio, DIM);
	width = DEFAULT_SIZE * ratio;
	height = DEFAULT_SIZE;

	bgGraphics = createGraphics(width, height, WEBGL);
	fishGraphics = createGraphics(width, height);
	fishGraphicsWebGL = createGraphics(width, height, WEBGL);
	bgGraphics.background(0)
	fishGraphics.background(0)
	fishGraphicsWebGL.background(0)


	// // frameRate(20)
	// createCanvas(DIM * ratio, DIM);

	background(100);
	fill(0)
	rect(0, 0, width, height)



	// overAllTexture = createGraphics(width, height)

	// overAllTexture.loadPixels()

	// noStroke()
	// for (var i = 0; i < width + 50; i++) {
	// 	for (var o = 0; o < height + 50; o++) {
	// 		overAllTexture.set(i, o, color(200, noise(i / 10, i * o / 300) * random([1, 10, 50, 100])))
	// 	}
	// }
	// overAllTexture.updatePixels()

	// overAllTexture.save()

	// for(let x = 0;x<width;x+=400){
	// for(let y = 0;y<height;y+=400){
	// fishes.push(new Fish({
	// 	p: createVector(x,y),
	// 	size: createVector(width*0.3,height*0.1)
	// }))
	// 	}
	// }
	for (var i = 0; i < whirlCount; i++) {
		let p = createVector(random(), random());
		whirls.push({
			id: random(100000),
			p: p,
			r: random(0.5, 0.9),
			distortForce: random() * random(0., 0.2),
		})
		lastP = p
	}

	addNewFish()
	noisePan = createVector(random(-1.5, 1.5), random(-1.5, 1.5))
}

function addNewFish({
	clear,
	color
} = {}) {
	if (clear) fishes = []
	fishes.push(new Fish({
		p: createVector(width / 2, height / 2),
		size: createVector(height * 0.55 * useFishSize, height * 0.25 * useFishSize),

	}))
	gsap.to(fishSettings, {
		alpha: 1,
		duration: 4,
	})
	lastChangeFishTs = frameCount

}

let transitionDuration = 5
let targetFishColor

function smoothChangeNewFish(clr) {
	targetFishColor = clr
	gsap.to(fishSettings, {
		alpha: 0,
		duration: transitionDuration / 2,
		onComplete: () => {
			renderFeatures(clr)
			addNewFish({
				clear: true,
				color
			})
			gsap.to(fishSettings, {
				alpha: 1,
				duration: transitionDuration,
			})
		}
	})

}

let mouseDelta = 0
let fishImageCount = 4
let noisePan
let bubbleClickCount = 0
let bgX = 0

function draw() {

	if (frameCount - lastChangeFishTs > 30 * 60 * 3) {
		lastChangeFishTs = frameCount
		smoothChangeNewFish()
	}

	stats.begin();
	scale(M)

	noteScale = lerp(noteScale, 0, 0.06)

	fishGraphics.fill(0, 10)
	fishGraphics.rect(0, 0, width, height)

	bgX -= mouseDelta

	mouseDelta = map(sin(frameCount / 600), -1, 1, 0, 8) + map(noise(frameCount / 10), 0, 1, -0.1, 0.1)
	mouseDelta += 10 * (1 - (fishSettings.alpha || 0) * 1)
	globalBgAlpha = pow(map(sin(frameCount / 500), -1, 1, 0, 0.6), 2)

	// mouseX -= mouseDelta
	Tone.Transport.bpm.value = 50 + map(mouseDelta, 0, 20, 0, 150);



	if (mouseIsPressed || keyIsDown(32) || keyIsDown(LEFT_ARROW) || keyIsDown(UP_ARROW) || keyIsDown(DOWN_ARROW) || keyIsDown(RIGHT_ARROW)) {
		mouseDelta = 15
	} else {
		mouseDelta = 0
	}

	//draw background------
	if (features.background == 'deepsea') {
		bgGraphics.shader(theShader3)
	} else {
		bgGraphics.shader(theShader)
	}

	fishGraphicsWebGL.shader(theShader2)
	let arr = whirls.map(b => ([b.p.x, b.p.y, b.distortForce, b.r]))
	let passData = []
	arr.forEach(a => passData = passData.concat(a))

	whirls.forEach((w, wid) => {
		w.r = sin(wid + frameCount / 30) / 2. + 0.5
	})
	theShader.setUniform('u_resolution', [width / 1000, height / 1000])
	theShader.setUniform('u_time', millis() / 1000 / 2)
	theShader.setUniform('u_mouse', [bgX / 5 / width, mouseY / height])
	theShader.setUniform('u_noise_pan', [bgX / width / 5 + frameCount / 5000 + noisePan.x, mouseY / height / 5 + noisePan.y])
	theShader.setUniform('u_light_scale', bgLightScale)
	theShader.setUniform('whirls', passData)
	theShader.setUniform('u_tex', fishGraphics)

	theShader2.setUniform('u_resolution', [width / 1000, height / 1000])
	theShader2.setUniform('u_time', millis() / 1000 / 2)
	theShader2.setUniform('u_mouse', [bgX / 5 / width, mouseY / height])
	theShader2.setUniform('u_noise_pan', [bgX / width + frameCount / 5000 + 2, mouseY / height + -2])
	theShader2.setUniform('u_light_scale', bgLightScale)
	theShader2.setUniform('whirls', passData)
	theShader2.setUniform('u_tex', fishGraphics)

	theShader3.setUniform('u_time', millis() / 1000)

	// if (features.background == 'wave' || features.background == 'deepsea') {

	bgGraphics.rect(0, 0, width, height)
	image(bgGraphics, 0, 0)

	// push()
	// drawingContext.globalAlpha = globalBgAlpha

	// pop()
	// }

	// if (features.background == 'grid') {
	// 	pushpop(() => {
	// 		bgGraphics.translate(-width / 2, -height / 2)
	// 		bgGraphics.stroke(255, 2)
	// 		for (let x = 0; x <= width; x += 40) {
	// 			bgGraphics.line(x, 0, x, height)
	// 		}
	// 		for (let y = 0; y <= height; y += 40) {
	// 			bgGraphics.line(0, y, width, y)
	// 		}
	// 	}, bgGraphics)
	// 	image(bgGraphics, 0, 0)
	// }

	fishes.forEach(fish => {
		fish.update()
		fish.draw(fishGraphics)
	})

	fishes[0].overallScale = constrain(lerp(fishes[0].overallScale, targetFishScale, 0.1),
		1.2, 2)

	if (frameCount % 20 == 0) {

		bubbles.push({
			x: random(width),
			y: height + 50,
			r: random(80) * random() * random(),
			vy: random(-1, -3),
			vx: 0,
			opacity: random(0, 1)
		})
	}
	const isBubbleNearFish = (fish, bubblePos) => {
		let fishW = fish.overallScale * fish.size.x
		let fishH = fish.overallScale * fish.size.y / 2
		let fishX = fish.p.x - fishW / 2
		let fishY = fish.p.y - fishH / 2

		// fishGraphics.stroke('red')
		// fishGraphics.rect(fishX, fishY, fishW, fishH)
		// console.log((fish.x, fish.y, fishW, fishH))
		let isFishInRange = (bubblePos.x > fishX && bubblePos.x <= fishX + fishW) && (bubblePos.y > fishY && bubblePos.y <= fishY + fishH)
		return isFishInRange

	}
	pushpop(() => {
		// fishGraphics.blendMode(SCREEN)
		bubbles.forEach(bubble => {
			fishGraphics.stroke(255, 40 * bubble.opacity)
			fishGraphics.fill(255, 50 * bubble.opacity)
			fishGraphics.strokeWeight(2)
			bubble.y += bubble.vy
			bubble.x += bubble.vx
			bubble.vx *= 0.99
			let bubbleXPan = +noise(bubble.y / 10) * 20

			let mouseInBubble = dist(mouseX / M, mouseY / M, bubble.x + bubbleXPan, bubble.y) < bubble.r / 1.6

			if (!mouseIsPressed && mouseInBubble) {
				bubble.vx = random(-2, 2)
			}

			if (((mouseIsPressed && mouseInBubble) || isBubbleNearFish(fishes[0], bubble)) && !bubble.remove) {
				bubble.remove = true
				bubbleClickCount += 1
				fishGraphics.stroke(255, 180)
				fishGraphics.noFill()
				musicStarted && sampler.triggerAttackRelease(raiseOct(random(useMusicSet.notes.filter(note => note))), "1")

			}
			fishGraphics.ellipse(bubble.x + bubbleXPan, bubble.y, bubble.r)
			fishGraphics.blendMode(SCREEN)
			fishGraphics.ellipse(bubble.x + bubbleXPan, bubble.y, bubble.r)

		})
		bubbles.filter(bubble => bubble.y >= -30 - bubble.r)
		bubbles = bubbles.filter(b => !b.remove)

	}, fishGraphics)
	// if (bubbleClickCount % 20 > 10) {
	// 	mouseDelta = lerp(mouseDelta, 30, 0.1)
	// }
	pushpop(() => {
		// blendMode(SCREEN)
		fishGraphics.blendMode(MULTIPLY)
		pushpop(() => {
			fishGraphics.blendMode(SCREEN)
			fishGraphics.push()
			fishGraphics.drawingContext.globalAlpha = globalBgAlpha

			fishGraphics.image(bgGraphics, 0, 0)
			fishGraphics.pop()
		}, fishGraphics)

		fishGraphics.image(fishGraphics, 1, sin(frameCount / 10), width, height)
		// fishGraphics.image(fishGraphics, 0, 0, width, height)
		// fishGraphics.image(fishGraphics, 1, sin(frameCount / 10), width, height)
		theShader2.setUniform('u_tex', fishGraphics)

		fishGraphics.blendMode(MULTIPLY)
		// fishGraphics.fill(0, 10)
		// fishGraphics.rect(0, 0, width, height)
		fishGraphics.image(overAllTexture, 0, 0, width, height)

		if (features.pallate == 'purewhite') {
			fishGraphicsWebGL.rect(0, 0, width, height)

			push()
			drawingContext.globalAlpha = fishSettings.alpha
			image(fishGraphicsWebGL, 0, 0)
			image(fishGraphicsWebGL, 0, 0)
			image(fishGraphicsWebGL, 0, 0)

			pop()
			// image(fishGraphicsWebGL, 0, 0)

		} else {
			push()
			drawingContext.globalAlpha = fishSettings.alpha
			for (let i = 0; i < fishImageCount; i++) {

				image(fishGraphics, 0, 0)
			}
			pop()



		}
	}, fishGraphics)

	// pushpop(() => {
	// 	fishGraphics.blendMode(MULTIPLY)
	// 	// fishGraphics.fill(0, 10)
	// 	// fishGraphics.rect(0, 0, width, height)
	// 	fishGraphics.image(overAllTexture, 0, 0)
	// }, fishGraphics)

	//darts
	pushpop(() => {
		blendMode(SCREEN)
		for (var i = 0; i < 300; i++) {

			let dartSize = map(noise(i, 3000), 0, 1, 1, 30)
			let x = map(noise(i, frameCount / 8000), 0, 1, -width * 0.5, width * 1.5)
			// - map(mouseX, 0, width, -width / 12, width / 12) * (dartSize - 0.5) / 1
			let y = map(noise(frameCount / 8000, i, 1000), 0, 1, -height * 0.5, height * 1.5)
			// - map(mouseY, 0, height, -height / 12, height / 12) * (dartSize - 0.5) / 1

			let alpha =
				map(noise(i, frameCount / 500, 6000), 0, 1, 0, map(dartSize, 0, 50, 140, 0)) +
				140 * (i % (noteIndex % 30 + 20) == 0 ? noteScale : 0)
			fill(255, alpha / 3)

			noStroke()
			// circle(x,y,dartSize/2)
			circle(x, y, dartSize / 4)
			// circle(x,y,dartSize/16)
			circle(x, y, dartSize / 32)

		}
	})

	pushpop(() => {
		fill(255)
		textSize(50)
	})

	// let useSignPoints = signPoints.slice(0, parseInt(frameCount))
	let useSignPoints = signPoints
	// let useSignPoints = []
	if (showBorder) {
		pushpop(() => {
			stroke(features.pallate == "purewhite" ? 0 : 255)
			beginShape()
			noFill()
			translate(0, height - 100)
			scale(0.6)
			rotate(0.05)
			for (let p of useSignPoints) {
				curveVertex(p[0], p[1])
			}
			strokeWeight(2.5)
			endShape()
		})


		let useUIColor = features.pallate == 'purewhite' ? 0 : 255
		stroke(useUIColor, 220)
		strokeWeight(3)
		noFill()

		let borderSpan = 15
		rect(borderSpan, borderSpan, width - borderSpan * 2, height - borderSpan * 2)
		strokeWeight(1)
		line(borderSpan, height - 115, width - borderSpan, height - 115)
		fill(useUIColor)
		// rect(borderSpan, borderSpan, 50, 5)

		noStroke()
		let useText = "#FISH ECHO [" + useMusicSet.name + "]\nNotes: " + useMusicSet.notes.join(" ") + "\nBass: " + useMusicSet.bass.join(" ")
		textSize(12)
		text(fxhash, width / 4, height - 85)

		//fish color
		if (fishes[0].fishColor) {
			let f = fishes[0]
			fill(color(f.fishColor.r, f.fishColor.g, f.fishColor.b))
			stroke(255)
			rect(width / 5, height - 85, 50, 50)

		}
		for (var i = 0; i < fxhash.length; i++) {
			push()
			translate(width / 4 + i * 8, height - 75)
			stroke(useUIColor)
			strokeCap(SQUARE)
			strokeWeight(fxhash[i] * 1.5)
			line(0, 0, 0, height / 30)
			pop()
		}
		textSize(15)
		text(useText, width * 0.7, height - 80)
	}

	let tranProgress = 1 - pow(fishSettings.alpha, 2)
	if (targetFishColor) {
		let f = fishes[0]
		fill(red(targetFishColor), green(targetFishColor), blue(targetFishColor), tranProgress * 15)
		for (let i = 0; i < 20; i++) {
			let hh = i * 5
			noStroke()
			rect(0, height - hh, width, hh)
		}

	}

	stats.end();
}
let keyPPressed = false
let showBorder = true

function keyPressed() {

	if (key == "s") {
		save("SoulFish - " + tokenData.hash + ".png");
	}

	if (key == "p") {
		keyPPressed = !keyPPressed
		if (keyPPressed) {
			noLoop()
		} else {
			loop()
		}
	}
	if (key == 'b') {
		showBorder = !showBorder
	}
	if (key == " ") {
		smoothChangeNewFish()
	}
}

function mousePressed() {
	startAllAudio()
}

function doubleClicked() {
	showBorder = !showBorder
}




let targetFishScale = 2

// function mouseWheel(wheel) {
// 	console.log(wheel)
// 	targetFishScale += wheel.deltaY / 500
// }