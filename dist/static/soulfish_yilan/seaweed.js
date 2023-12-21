class Leg {
	constructor(r, angle, p) {
		this.angle = angle + 120
		this.r = r
		this.segCount = 30
		this.points = Array.from({
			length: this.segCount
		}, (d, i) => {
			return p.copy().add(createVector(cos(this.angle) * this.r * i / this.segCount, sin(this.angle) * this.r * i / this.segCount))
		})
	}
	draw(graphics) {
		graphics.push()
		graphics.strokeWeight(2)
		graphics.noFill()
		graphics.beginShape()
		this.points.forEach((p, pid) => {
			graphics.vertex(p.x, p.y)
			p.x += 5 + cos(mouseY + pid)
			p.y += (sin(p.x * 4 + pid * 5 + frameCount / 1 + mouseX) * 4)
			// p.y+=noise(p.x*5+pid*10+frameCount/1)*5-0.5
			graphics.fill(5)
			graphics.rect(p.x, p.y, 5, 5)
			if (pid % 50 == 0) {

				// 				graphics.push()
				// 					graphics.fill("white")
				// 					graphics.ellipse(p.x,p.y,2,2)

				// 				graphics.pop()
			}


		})
		// stroke(255,255,255,200)

		graphics.push()
		graphics.fill("white")
		graphics.ellipse(this.points.slice(-1)[0].x, this.points.slice(-1)[0].y, 3, 3)

		graphics.pop()
		// graphics.fill(255,255,255,20)
		graphics.noFill()
		graphics.stroke(255, 255, 255, 60)
		graphics.endShape()
		graphics.pop()
	}
	update(cp) {
		// console.log(cp)
		let target = cp.copy()
		let fragLen = this.r / this.segCount
		let lastang = this.angle
		this.points[0].set(target)

		this.points.forEach((p, i) => {
			p.add(p5.Vector.fromAngle(radians(this.angle + noise(i, frameCount)), 3 * i / this.points.length))
			let ang = p.sub(target).heading() + 720

			if (ang * lastang < 0) {
				ang = lerp((ang + 180), (lastang + 180), 0.2) - 180

			} else {
				ang = lerp(ang, lastang, 0.05)

			}


			p.set(target.add(p5.Vector.fromAngle(radians(ang), i == 1 ? 0 : fragLen)))
			target = p
			lastang = ang

		})

	}
}

class Seaweed {
	constructor({
		mpos
	}) {
		this.p = mpos || createVector(width / 2, height / 2)
		let p = this.p
		this.v = createVector(0, 0)
		this.a = createVector(0, 0.0)
		this.legCount = features.seaweed
		this.legLen = 200
		this.legs = Array.from({
			length: this.legCount
		}, (d, i) => {
			// console.log(p)
			return new Leg(this.legLen * random(0.5, 1), i / this.legCount * 360, p)
		})
	}
	update() {
		// this.p.x = mouseX
		// this.p.y = mouseY
		this.p = this.p.add(this.v)
		this.v = this.v.add(this.a)
		this.legs.forEach(leg => leg.update(this.p))
		this.legs.forEach((leg, lid) => {
			leg.angle += sin(noise(lid) + frameCount) * 2
		})
	}
	draw(graphics) {
		this.legs.forEach(leg => leg.draw(graphics))
	}
}