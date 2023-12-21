var seaweeds = []
class Fish {
	constructor({
		p,
		size,
		fishDirectionLimit
	}) {
		this.p = p ?? createVector(0, 0)
		this.size = size ?? createVector(width * 0.8, height * 0.3)
		this.fishStyle = random({
			line: 1,
			particle: 0
		})
		this.fishDirectionLimit = fishDirectionLimit ?? random([0.6, 0.8, 1, 1, 2, 1.4, 1.6, 1.8, 2, 2.2])
		this.fishDirectionSpan = random([0.06, 0.08, 0.1])
		this.fishScaleSpan = random([16, 20, 24, 28, 32])
		this.tailWaveFactor = random([0.1, 0.5, 1])
		this.upFinSize = features.upFinSize
		this.downFinSize = features.downFinSize
		this.fishColor = features.fishColor
		this.fishMinColor = features.fishMinColor
		this.blackwhite = features.pallate == 'blackwhite'
		this.pointCount = features.fishThickness
		this.tailPos = random([1 / 4, 1 / 3, 1 / 5]) * PI
		this.subNoiseRatio = random([0, 0, 0, 0, 0, 0.1, 0.2])
		this.subNoiseRatio2 = random([0, 0, 0, 0, 0, 0.1, 0.2])
		this.hasUpDownFin = features.hasUpDownFin
		this.hasSpot = random() < 0.7
		this.withEye = random() < 0.95
		this.overallScale = 1.15
		this.tailComplexFactor = random([0, 0, 0, 0.05, 0.1])
		this.tailComplexDensity = random([30, 50, 100, 200])
		this.withFin = features.withFin
		this.verticalFin = features.verticalFin
		this.hasBone = features.hasBone
		this.fishUpdownFinStartFactor = 1 * random({
			'5': 1,
			'4': 1,
			'3': 3,
			'2': 1
		})
		this.fishUpdownFinEndFactor = 1 * random({
			'1.8': 2,
			'1.5': 1
		})
		seaweeds = Array.from({
			length: 1
		}, () => {
			return new Seaweed({
				mpos: createVector(0, 0)
			})
		})
		this.scaleType = features.scaleType

		if (this.fishStyle == 'particle') {
			this.pointCount = 50
		}
	}
	draw(fishGraphics) {
		let headYPan = sin(frameCount / 50 + mouseY / 50) * this.size.y / 40
		fishGraphics.push()
		fishGraphics.translate(this.p.copy())
		fishGraphics.scale(this.overallScale)
		// fishGraphics.translate(sin(mouseX/width*10)*width/16,
		// 											cos(mouseY/height*10)*height/16)
		fishGraphics.translate(-sin(frameCount / 100) * width / 32, 0)
		fishGraphics.translate(-this.size.x / 2, 0)

		for (let direction = -this.fishDirectionLimit; direction <= this.fishDirectionLimit; direction += this.fishDirectionSpan) {

			fishGraphics.push()
			fishGraphics.beginShape()
			fishGraphics.curveVertex(0, 0)
			let clr = color(
				map(direction, -1, 1, this.fishMinColor.r + noise(direction * 60) * this.fishColor.r, this.fishColor.r),
				map(direction, -1, 1, this.fishMinColor.g + noise(direction * 50) * this.fishColor.g, this.fishColor.g + map(sin(frameCount / 50), -1, 1, 20, 50)),
				map(direction, -1, 1, this.fishMinColor.b + noise(direction * 40) * this.fishColor.b, this.fishColor.b)
			)
			if (this.blackwhite) {
				clr = color(
					map(direction, -1, 1, this.fishMinColor.r + noise(direction * 60) * this.fishColor.r * 1.2, this.fishColor.r + map(sin(frameCount / 50), -1, 1, 20, 50)),
				)
			}

			fishGraphics.stroke(clr)
			fishGraphics.strokeWeight(2)
			fishGraphics.noFill()
			let upFinPoints = [],
				downFinPoints = []
			// drawingContext.setLineDash([30+int(sin(direction/4)*20 ),5+sin(direction*10+frameCount/100)*5+5])
			let f = map(sin(frameCount / 10), -1, 1, 1, 1.1)
			let lastX, lastY, lastBoneX,
				lastBoneY

			for (let i = 0; i < this.pointCount; i += 1) {
				let heightRatio = sin(i / this.pointCount * 4)
				let x = i * this.size.x / this.pointCount

				if ((i - 1) / this.pointCount > this.tailPos) {
					x += (sin(i) * 20 + i) * this.tailWaveFactor;



					// central tail will be shorter
					//tail
					// if (abs(direction) > 0.5 && i / this.pointCount >= this.tailPos) {
					// 	x += map((abs(direction) - 0.5), 0, 0.5, 1, 5)
					// }
					x *= 1. + this.tailComplexFactor * abs(sin(direction / this.tailComplexDensity))
				}



				let rawY = heightRatio * (this.size.y / 2.2 +
					cos(-frameCount / 80 + i / 40 + x / 50 + bgX / 50) * 20 +
					sin(x / 16) * 5 +
					cos(x / 50 + i * 5 + frameCount / 20) * 5 +
					noise(-frameCount / 40 + i / 20 + x / 500) * 50 +
					this.subNoiseRatio * cos(x * 20 + direction) * 30 +
					this.subNoiseRatio2 * sin(x * 55 + direction) * 20
				)

				let y = rawY * direction
				x += (1 - fishSettings.alpha) * map(noise(x / 1, direction * 50), 0, 1, -1, 1) * 200
				y += (1 - fishSettings.alpha) * map(noise(100, direction * 50), 0, 1, -1, 1) * 300


				//tail part
				if (i / this.pointCount > PI / 4) {
					// x*=1.05
					y *= log(map(i / this.pointCount, PI / 4, PI / 2, 1, 5)) * 3
					x += (map(sin(x + frameCount / 20 + bgX / 50), -1, 1, 0.2, 1.2) +
							sin(direction * 3 + frameCount / 20 + bgX / 30) / 4) *
						this.size.x / 10 *
						map(i / this.pointCount, PI / 4, PI / 2, 0, 4)
				} else {
					y *= 0.4
				}
				y += headYPan

				if (this.scaleType && (int(i * 5 + direction * 45)) % this.fishScaleSpan == 0 && i > 3) {
					fishGraphics.push()
					fishGraphics.blendMode(SCREEN)
					fishGraphics.noStroke()
					clr.setAlpha(70)
					fishGraphics.fill(clr)
					fishGraphics.translate(x, y)
					clr.setAlpha(90)
					fishGraphics.strokeWeight(5)
					fishGraphics.stroke(clr)
					fishGraphics.rotate(atan2(lastY - y, lastX - x) + PI)

					let r = map(sin(x / 5), -1, 1, 80, 90)
					if (this.scaleType == "fan") {
						fishGraphics.arc(0, 0, r, r, PI * 1.85, PI * 2.2)
					} else if (this.scaleType == "dot") {
						let dotSpan = 30
						let dotSize = 8

						clr.setAlpha(100)
						fishGraphics.strokeWeight(1)
						fishGraphics.stroke(clr)
						fishGraphics.line(0, 0, dotSpan, 0)
						clr.setAlpha(120)
						fishGraphics.fill(clr)
						fishGraphics.noStroke()
						fishGraphics.ellipse(dotSpan, 0, dotSize, dotSize, PI * 1.85, PI * 2.2)
					} else if (this.scaleType == "arrow") {
						let arrowSize = 20

						clr.setAlpha(100)
						fishGraphics.stroke(clr)
						fishGraphics.line(arrowSize, arrowSize, 0, 0)
						fishGraphics.line(arrowSize, -arrowSize, 0, 0)

					} else if (this.scaleType == "strip") {
						if (noise(direction, i * 50) < 0.4) {
							let arrowSize = 20
							fishGraphics.push()
							fishGraphics.strokeWeight(3)
							fishGraphics.stroke(clr)
							fishGraphics.beginShape()
							fishGraphics.triangle(arrowSize, arrowSize)
							fishGraphics.triangle(0, 0)
							fishGraphics.triangle(arrowSize, -arrowSize)
							fishGraphics.endShape()
							fishGraphics.pop()

						}
					}


					fishGraphics.pop()



				}

				let boneSpan = this.pointCount >= 20 ? 2 : 1
				// draw bone
				if (this.hasBone && i % boneSpan == 0 && (abs(direction) < this.fishDirectionSpan / 2) && (i / this.pointCount < this.tailPos * 0.8) && i / this.pointCount >= 0.1) {
					// console.log(lastBoneX)
					let ang = frameCount / 30 + i / 1
					let useX = x + (cos(ang) + 1) * boneSpan,
						useY = y + (sin(ang) + 1) * boneSpan
					if (lastBoneX) {
						pushpop(() => {
							let oldAlpha = clr._getAlpha()
							fishGraphics.blendMode(SCREEN)
							fishGraphics.strokeWeight(3)
							clr.setAlpha(120)

							let dd1 = dist(useX, useY, lastBoneX, lastBoneY)
							let boneLenRatio = pow(rawY / this.size.y, 1) * 3.2
							let ang1 = atan2(lastBoneY - useY, lastBoneX - x)
							fishGraphics.translate(useX, useY)
							fishGraphics.rotate(ang1)

							fishGraphics.stroke(clr)
							fishGraphics.strokeWeight(1)
							fishGraphics.line(3, -2 - 1.5, 3, 2 - 1.5)
							fishGraphics.line(3, -1.5, dd1 - 3, -1.5)
							fishGraphics.line(3 + 4 + 1.5, -2, 3 + 4, 2 + 1.5)
							fishGraphics.line(3 + 4, 1.5, dd1 - 3 + 4, 1.5)
							fishGraphics.strokeWeight(2)
							clr.setAlpha(60)
							fishGraphics.stroke(clr)
							fishGraphics.line(3, 2, -dd1 / 4 * boneLenRatio, dd1 / 3 * boneLenRatio)
							fishGraphics.line(3 + 4, -2, -dd1 / 4 * boneLenRatio + 4, -dd1 / 3 * boneLenRatio)
							clr.setAlpha(oldAlpha)
						}, fishGraphics)
					}
					lastBoneX = useX
					lastBoneY = useY
				}

				//updown fin
				if (direction <= -this.fishDirectionLimit + this.fishDirectionSpan * 0.9 && i >= int(this.pointCount / this.fishUpdownFinStartFactor) && i <= int(this.pointCount / this.fishUpdownFinEndFactor)) {
					upFinPoints.push(createVector(x, y))
				}
				//updown fin
				if (direction >= this.fishDirectionLimit - this.fishDirectionSpan && i >= int(this.pointCount / this.fishUpdownFinStartFactor) && i <= int(this.pointCount / this.fishUpdownFinEndFactor)) {
					downFinPoints.push(createVector(x, y))


				}

				//effect by mouse
				// let mouseDist = dist(x * M, y * M, mouseX, mouseY)
				// if (mouseDist < 300) {
				// 	let mouseEffectRatio = map(mouseDist, 0, 200, 1, 0)
				// 	// mouseEffectRatio *= mouseEffectRatio
				// 	x += 50 * mapN(noise(x / 10, y / 10, frameCount / 200)) * mouseEffectRatio
				// 	y += 50 * mapN(noise(y / 10, -x / 10, 1000 + frameCount / 200)) * mouseEffectRatio
				// }

				fishGraphics.curveVertex(x, y)


				if (this.hasSpot && i / this.pointCount < PI / 4) {
					// if (int(i + direction * 5 + frameCount / 500 + noise(i, direction * 5, frameCount / 500)) % 2 < 1) {
					fishGraphics.push()
					clr.setAlpha(255, 20)
					fishGraphics.blendMode(SCREEN)
					fishGraphics.stroke(clr)
					fishGraphics.strokeWeight(0.2)

					fishGraphics.translate(lastX, lastY)
					// fishGraphics.scale(2)
					// fishGraphics.rotate(noise(lastX * 5, lastY * 5, frameCount / 50) / 4)
					fishGraphics.line(0, 0, x - lastX, y - lastY)
					fishGraphics.pop()
					// }
				}

				if (this.fishStyle == 'particle') {
					fishGraphics.push()
					fishGraphics.fill(clr)
					fishGraphics.noStroke()
					fishGraphics.blendMode(SCREEN)
					fishGraphics.ellipse(
						x + mapN(noise(frameCount / 500, i * 500, direction * 50)) * 50 * mouseDelta,
						y + mapN(noise(frameCount / 50, direction * 500, i * 50)) * 50 * mouseDelta,
						mapN(noise(frameCount / 5000, direction * 500, i * 50)) * 10,
						mapN(noise(frameCount / 5000, direction * 500, i * 50)) * 10)
					fishGraphics.pop()
				}

				lastX = x
				lastY = y



			}

			fishGraphics.curveVertex(lastX, lastY)

			//make a bit variation on lines
			pushpop(() => {
				let oldAlpha = clr._getAlpha()

				clr.setAlpha(noise(direction, this.pointCount) * 50 + 50)
				fishGraphics.noStroke()
				fishGraphics.fill(clr)
				fishGraphics.rect(lastX, lastY, 5, 5)
				clr.setAlpha(oldAlpha)
			}, fishGraphics)


			if (this.fishStyle == 'line' || direction <= -this.fishDirectionLimit + 0.1 || direction >= this.fishDirectionLimit - 0.1) {
				fishGraphics.push()
				clr.setAlpha(60)
				fishGraphics.stroke(clr)
				fishGraphics.blendMode(SCREEN)
				fishGraphics.strokeWeight(8)
				fishGraphics.endShape()
				fishGraphics.pop()
			}

			//fin
			if (this.withFin) {
				fishGraphics.push()
				fishGraphics.translate(this.size.x * 0.2, 0)
				fishGraphics.strokeWeight(1.5)

				for (let direction = -this.fishDirectionLimit * 0.8; direction <= this.fishDirectionLimit * 0.8; direction += this.fishDirectionSpan * 2) {
					let clr = color(
						map(direction, -1, 1, this.fishMinColor.r + noise(direction * 60) * this.fishColor.r, this.fishColor.r),
						map(direction, -1, 1, this.fishMinColor.g + noise(direction * 50) * this.fishColor.g, this.fishColor.g + map(sin(frameCount / 50), -1, 1, 20, 50)),
						map(direction, -1, 1, this.fishMinColor.b + noise(direction * 40) * this.fishColor.b, this.fishColor.b)
					)
					if (this.blackwhite) {
						clr = color(map(direction, -1, 1, this.fishMinColor.r + noise(direction * 60) * this.fishColor.r, this.fishColor.r))
					}
					clr.setAlpha(5)
					fishGraphics.stroke(clr)
					// fishGraphics.noStroke()
					// clr.setAlpha(2)
					// fishGraphics.fill(clr)
					fishGraphics.push()
					fishGraphics.rotate(direction / 2 + sin(bgX / 30 + frameCount / 50) / 6)
					fishGraphics.scale(sin(frameCount / 100) * 0.05 + 0.95, 1)
					fishGraphics.blendMode(SCREEN)
					fishGraphics.beginShape()
					// fishGraphics.strokeWeight(5)
					for (let xx = 0; xx < this.size.x / 6; xx += this.size.x / 30) {

						fishGraphics.curveVertex(
							xx * (1.2 + cos(xx / 20 + frameCount / 40) / 10),
							xx / 40 * sin(xx / 20 + frameCount / 40 + bgX / 20) * 20)

						// fishGraphics.curveVertex(xx,sin(xx/10+frameCount/20)*50)

					}
					fishGraphics.endShape()
					fishGraphics.pop()
				}
				fishGraphics.pop()
			}


			//up fin
			if (this.withFin && !this.verticalFin) {
				[upFinPoints, downFinPoints].forEach((finPoints, finId) => {
					let finDirection = map(finId, 0, 1, 1, -1)
					let sizeCount = [this.upFinSize, this.downFinSize][finId]
					let pointSets = []
					let sidePoints = []
					let topSidePoints = []

					for (let upIndex = 0; upIndex <= sizeCount; upIndex++) {
						let direction = -upIndex / 40 - 1
						let clr = color(
							1.05 * map(direction, -1, 1, this.fishMinColor.r + noise(direction * 6) * this.fishColor.r, this.fishColor.r),
							1.05 * map(direction, -1, 1, this.fishMinColor.g + noise(direction * 5) * this.fishColor.g, this.fishColor.g + map(sin(frameCount / 50), -1, 1, 20, 50)),
							1.05 * map(direction, -1, 1, this.fishMinColor.b + noise(direction * 4) * this.fishColor.b, this.fishColor.b)
						)
						if (this.blackwhite) {
							clr = color(map(direction, -1, 1, this.fishMinColor.r + noise(direction * 60) * this.fishColor.r, this.fishColor.r))
						}
						fishGraphics.push()
						clr.setAlpha(90)
						fishGraphics.strokeWeight(2)
						fishGraphics.blendMode(SCREEN)
						fishGraphics.stroke(clr)
						fishGraphics.beginShape()
						finPoints.forEach((point, pointIndex) => {
							let deltaY = -pointIndex * upIndex +
								pow(pointIndex, 0.2) * (upIndex) +
								pow(pointIndex - 1, 0.1) * map(upIndex, 10, 20, 0, 1, true) * sin(pointIndex + frameCount / 20) * 10
							//  +pow(pointIndex, 0.2) * sin(point.x / 50 + frameCount / 20) * 10
							// fishGraphics.ellipse(point.x, point.y + deltaY, 10, 10)
							let xx = point.x + pointIndex * sqrt(upIndex),
								yy = point.y + deltaY * finDirection
							fishGraphics.curveVertex(xx, yy)
							if (upIndex == 0) {
								pointSets.push({
									x: xx,
									y: yy
								})
							}
							if (pointIndex == finPoints.length - 2) {
								sidePoints.push({
									x: xx,
									y: yy
								})
							}
							if (upIndex == sizeCount) {
								topSidePoints.push({
									x: xx,
									y: yy
								})
							}
							// * sin(pointIndex / 2 + frameCount / 50)
							// fishGraphics.ellipse(point.x, point.y, 5, 5)
						})

						fishGraphics.endShape()
						fishGraphics.pop()
					}
					//fin fill
					fishGraphics.push()
					clr.setAlpha(85)
					fishGraphics.noStroke()
					fishGraphics.blendMode(SCREEN)
					fishGraphics.fill(clr)
					fishGraphics.beginShape()

					pointSets.slice().reverse().forEach(point => fishGraphics.curveVertex(point.x, point.y))
					topSidePoints.forEach(point => fishGraphics.curveVertex(point.x, point.y))
					sidePoints.slice().reverse().forEach(point => fishGraphics.curveVertex(point.x, point.y))

					fishGraphics.endShape()
					fishGraphics.pop()

				})
			}

			if (this.withFin && this.verticalFin) {
				[upFinPoints, downFinPoints].forEach((finPoints, finId) => {
					let finDirection = map(finId, 0, 1, 1, -1)
					let sizeCount = [this.upFinSize, this.downFinSize][finId]
					let pointSets = []
					let sidePoints = []
					finPoints.forEach((point, pointIndex) => {
						clr.setAlpha(100)
						fishGraphics.strokeWeight(4)
						fishGraphics.blendMode(SCREEN)
						fishGraphics.stroke(clr)
						fishGraphics.beginShape()
						fishGraphics.curveVertex(point.x, point.y)
						for (let upIndex = 0; upIndex <= sizeCount; upIndex++) {
							let direction = -upIndex / 30 - 1
							let clr = color(
								map(direction, -1, 1, this.fishMinColor.r + noise(direction * 6) * this.fishColor.r, this.fishColor.r),
								map(direction, -1, 1, this.fishMinColor.g + noise(direction * 5) * this.fishColor.g, this.fishColor.g + map(sin(frameCount / 50), -1, 1, 20, 50)),
								map(direction, -1, 1, this.fishMinColor.b + noise(direction * 4) * this.fishColor.b, this.fishColor.b)
							)
							if (this.blackwhite) {
								clr = color(map(direction, -1, 1, this.fishMinColor.r + noise(direction * 60) * this.fishColor.r, this.fishColor.r))
							}

							let deltaY = 1 + -pointIndex * upIndex +
								pow(pointIndex, 0.2) * (upIndex) +
								pow(pointIndex - 1, 0.1) * map(upIndex, 10, 20, 0, 1, true) * sin(pointIndex + frameCount / 20) * 10
							//  +pow(pointIndex, 0.2) * sin(point.x / 50 + frameCount / 20) * 10
							// fishGraphics.ellipse(point.x, point.y + deltaY, 10, 10)
							let xx = point.x + pointIndex * sqrt(upIndex) + upIndex * 2 + sin(frameCount / 20) * upIndex,
								yy = point.y + deltaY * finDirection * 1.1
							if (upIndex == sizeCount - 1) {

								pointSets.push({
									x: xx,
									y: yy
								})
							}
							if (pointIndex == finPoints.length - 1) {
								sidePoints.push({
									x: xx,
									y: yy
								})
							}
							fishGraphics.curveVertex(xx, yy)
							// * sin(pointIndex / 2 + frameCount / 50)
							// fishGraphics.ellipse(point.x, point.y, 5, 5)
						}
						fishGraphics.push()
						clr.setAlpha(80)
						fishGraphics.strokeWeight(3)
						fishGraphics.blendMode(SCREEN)
						fishGraphics.stroke(clr)
						fishGraphics.endShape()
						fishGraphics.pop()


					})

					//fin fills
					fishGraphics.push()
					clr.setAlpha(85)
					fishGraphics.noStroke()
					fishGraphics.blendMode(SCREEN)
					fishGraphics.fill(clr)
					fishGraphics.beginShape()
					pointSets.forEach(point => fishGraphics.curveVertex(point.x, point.y))

					sidePoints.slice().reverse().forEach(point => fishGraphics.curveVertex(point.x, point.y))
					// fishGraphics.curveVertex(pointSets.slice(-1)[0])
					// fishGraphics.curveVertex(sidePoints.slice(-1)[0])
					finPoints.slice().reverse().forEach(point => fishGraphics.curveVertex(point.x, point.y))
					fishGraphics.curveVertex(sidePoints[0])

					fishGraphics.endShape()
					fishGraphics.pop()
				})
			}

			//eye
			if (this.withEye) {
				fishGraphics.push()
				fishGraphics.strokeWeight(0.3)
				clr.setAlpha(20)
				fishGraphics.blendMode(SCREEN)
				fishGraphics.stroke(clr)
				clr.setAlpha(5)
				// fishGraphics.fill(clr)
				fishGraphics.stroke(this.fishColor.r, this.fishColor.g, this.fishColor.b, 100)
				// if (features.pallate == 'blackwhite') {
				// 	fishGraphics.blendMode(MULTIPLY)
				// 	fishGraphics.stroke(0, 50)
				// }
				fishGraphics.circle(width / 26, headYPan + height / -150 * this.fishDirectionLimit, width / 140)

				// fishGraphics.stroke(this.fishMinColor.r, this.fishMinColor.g, this.fishMinColor.b, 100)
				// fishGraphics.circle(width / 24, height / -150 * this.fishDirectionLimit, width / 80)
				fishGraphics.pop()
			}
			fishGraphics.pop()
		}

		fishGraphics.push()
		fishGraphics.blendMode(SCREEN)
		angleMode(DEGREES)
		// fishGraphics.ellipse(0,0,40,40)
		seaweeds.forEach(seaweed => {
			seaweed.p.set(0, headYPan)
			seaweed.update()
			seaweed.draw(fishGraphics)
		})
		angleMode(RADIANS)
		fishGraphics.pop()

		fishGraphics.pop()
	}
	update() {
		if (this.p.x < -this.size.x * this.overallScale) {
			this.p.x += DEFAULT_SIZE + this.size.x * this.overallScale * 1.5
		}
		// if (keyIsDown(LEFT_ARROW) || (mouseIsPressed && mouseX / M < width * 0.3)) {
		// 	this.p.x -= 2
		// 	// console.log('left')
		// }
		// if (keyIsDown(RIGHT_ARROW) || (mouseIsPressed && mouseX / M > width * 0.7)) {
		// 	this.p.x += 2
		// 	// console.log('right')
		// }
		// if (keyIsDown(UP_ARROW) || (mouseIsPressed && mouseY / M < height * 0.3)) {
		// 	this.p.y -= 2
		// 	// console.log('up')
		// }
		// if (keyIsDown(DOWN_ARROW) || (mouseIsPressed && mouseY / M > height * 0.7)) {
		// 	this.p.y += 2
		// 	// console.log('down')
		// }
	}
}