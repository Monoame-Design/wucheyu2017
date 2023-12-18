let colors2 = "f9c80e-f86624-ea3546-662e9b-43bccd-022b3a-1f7a8c-bfdbf7-e1e5f2-ffffff-999-999-999-999-999-fff-00916e-feefe5-ffcf00-ee6123-fa003f-ff6700-ebebeb-c0c0c0-3a6ea5-004e98-f8f4e3-d4cdc3-d5d0cd-a2a392-9a998c-d72638-3f88c5-f49d37-140f2d-f22b29-2b2d42-8d99ae-edf2f4-fff-333-555-2b2d42-8d99ae-edf2f4-fff-333-555-2b2d42-8d99ae-edf2f4-fff-333-555-ef233c-d90429".split("-").map(a => "#" + a)

let colors_1 = "aaa-88a2aa-ada296-e2856e-f42c04-0f1a20-fff-000-022b3a-1f7a8c-bfdbf7-e1e5f2-022b3a-1f7a8c-bfdbf7-e1e5f2-ffffff-000".split("-").map(a => "#" + a)
let colors_2 = "022b3a-1f7a8c-bfdbf7-e1e5f2-022b3a-1f7a8c-bfdbf7-e1e5f2-ffffff-000".split("-").map(a => "#" + a)
let colors_3 = "574ae2-222a68-654597-ab81cd-e2adf2-fff05a-ffd25a-ffaa5a-ff785a-191919-000-fff".split("-").map(a => "#" + a)


let colors = []

// let colors2 = "091e05-004f2d-d87cac-f9b9c3-ffda22".split("-").map(a=>"#"+a)

// let colors = "a20021-f52f57-f79d5c-f3752b-ededf4".split("-").map(a=>"#"+a)
// let colors = "151e3f-030027-f2f3d9-dc9e82-c16e70".split("-").map(a=>"#"+a)
let graphics




function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 2))
}
class Particle {
  constructor(args) {
    let def = {
      p: createVector(0, 0),
      v: createVector(0, 0),
      a: createVector(0, 0),
      r: 20,
      powFac: random(0, 100),
      color: color(255),
      dashSpan: random([3, 10, 15, 20, 25, 30]),
      shrinkRatio: random([1, 1, 1, 1, 1, 0.99]),
      endColor: random([color(255, 0), color(0)]),
      rot: random([0, 0, 0, 0, 0.1]),
      rotFac: random(10, 100),
      dashVSpan: int(random(0, 30)),
      depth: 0,
      randomId: int(random(100000)),
      rSpeed: random([0, 0.1, 0.2, 0.3]),
      buildingRFac: random([0.5, 1]),
      mode: random([0, 1, 2])
    }
    Object.assign(def, args)
    Object.assign(this, def)
  }
  draw() {
    graphics.push()



    graphics.noStroke()
    let time = map(constrain(frameCount / 100, 0, 1), 0, 1, 1, 0)
    let factor = 1 - pow(easeOutCirc(time), this.powFac)
    let clr = lerpColor(this.color, this.endColor, factor)

    graphics.push()
    graphics.noFill()
    graphics.stroke(clr)
    graphics.translate(this.p.x, this.p.y)

    // if (this.mode==0){
    // 	graphics.blendMode(SOFT_LIGHT)
    // }
    // if (this.mode==1){
    // 	graphics.blendMode(SOFT_LIGHT)
    // }

    if (this.randomId % 2 == 0) {
      graphics.rotate(PI / 6)
    } else {
      graphics.rotate(-PI / 6)


    }
    // graphics.rotate(sin(this.p.y/10)/50)


    if (noise(this.p.x / 100, this.p.y / 100) < 0.4) {
      graphics.translate(random(-2, 2), random(-2, 2))
    }

    if (frameCount % this.dashVSpan < this.dashVSpan - 3) {
      graphics.drawingContext.setLineDash([this.dashSpan, 5])

    } else {
      graphics.drawingContext.setLineDash([0])

    }

    if (random() < 0.01) {
      this.p.x += random(-50, 50)
    }
    if (random() < 0.01) {
      this.p.y += random(-50, 50)
    }

    graphics.strokeWeight(2)
    graphics.line(0, 0, this.r * this.buildingRFac, 0)




    // 			if (random()<0.01){
    // 				// graphics.blendMode(SCREEN)
    // 				graphics.fill(0)
    // 				graphics.circle(0,0,random(10))
    // 			}


    // 			if (random()<0.01){
    // 				graphics.blendMode(SCREEN)
    // 				graphics.rect(random(-10,10),random(-10,10),this.r*random(2,10),0.5)
    // 			}

    graphics.pop()
    if (time == 1) {
      graphics.blendMode(SCREEN)
      graphics.rect(0, 0, this.r, 5)
      graphics.rect(0, 0, this.r, 5)
      graphics.rect(0, 0, this.r, 5)

    }
    graphics.stroke(clr)
    for (let i = 0; i < 5; i++) {
      graphics.point(this.p.x, this.p.y + random(-this.r / 5, this.r / 5))
    }

    graphics.point(this.p.x + 50, this.p.y + 50)






    // if (random()<0.1){
    // 	let _r = random(50)
    // 	graphics.arc(0,0,_r,_r,0,PI/3)
    // }
    // if (random()<0.001 && this.depth<1){
    // 	for(let i=0;i<3;i++){
    // 		let obj = new Particle({
    // 			p: createVector(this.p.x,this.p.y),
    // 			v: createVector(random(-1,1),random(-1,-2)),
    // 			r: random(1),
    // 			color: this.color,
    // 			endColor:  this.color,
    // 			depth: this.depth+1,

    // 			shrinkRatio: 0.5
    // 		})
    // 		particles.push(obj)
    // 	}
    // }



    graphics.pop()
  }
  update() {
    this.p.add(this.v)
    this.v.add(this.a)
    this.r *= this.shrinkRatio

    if (this.randomId % 4 == 0) {
      this.v.rotate(sin(this.p.x / this.rotFac + this.p.y / this.rotFac) / 10 * this.rot)

      this.v.rotate(sin(this.p.x / this.rotFac * 5 + this.p.y / this.rotFac * 5) / 5 * this.rot)
      this.v.rotate(this.rSpeed)

      this.v.rotate(this.rSpeed / 50)
      // this.v.rotate(-this.rSpeed/3)

    }
  }

}

let particles = []

function setup() {
  colors = random([colors_1, colors_2, colors_3])
  initResize()

  pixelDensity(2)
  createCanvas(1000, 1200);
  graphics = createGraphics(width, height)
  background(0);
  rectMode(CENTER)
  for (let x = 0; x < width; x += 20) {
    for (let y = 0; y < height; y += 20) {
      if (random() < 0.5) {
        y += 20
      }

      let colorPick = [colors, colors2][int(noise(x / 10, y / 10) * noise(x / 30, y / 30) < 0.2 ? 1 : 0)]

      let clr = color(random(colorPick))
      let clr2 = color(random(colorPick))
      let _x = x,
        _y = y
      if (noise(x / 10, y / 10) > 0.3) {
        _x += noise(x / 50, y / 50) * 50
        _y += noise(500, x / 50, y / 50) * 50
      }
      clr2.setAlpha(0)

      if (noise(x / 50, y / 50, 1000) < 0.3) {
        continue
      }
      let obj = new Particle({
        p: createVector(_x, _y),
        v: createVector(0, random(-1, -2)),
        r: random(5, 15),
        color: clr,
        endColor: clr2
      })
      particles.push(obj)
    }
  }

  for (let x = 0; x < width; x += 50) {
    for (let y = 0; y < height; y += 50) {
      let clr = color(random(colors))
      let clr2 = color(random(colors))
      let _x = x,
        _y = y
      if (noise(x / 10, y / 10) > 0.3) {
        _x += noise(x / 50, y / 50) * 50
        _y += noise(500, x / 50, y / 50) * 50
      }
      clr2.setAlpha(0)
      let obj = new Particle({
        p: createVector(_x, _y),
        v: createVector(0, random(-1, -2)),
        r: 100,
        color: clr,
        endColor: clr2
      })
      particles.push(obj)
    }
  }


  for (let x = 0; x < width; x += 100) {
    for (let y = 0; y < height; y += 100) {
      let clr = color(random(colors))
      let clr2 = color(random(colors))
      let _x = x,
        _y = y
      if (noise(x / 10, y / 10) > 0.3) {
        _x += noise(x / 50, y / 50) * 50
        _y += noise(500, x / 50, y / 50) * 50
      }
      clr2.setAlpha(0)
      let obj = new Particle({
        p: createVector(_x, _y),
        v: createVector(0, random(-1, -2)),
        r: 200,
        color: clr,
        endColor: clr2
      })
      particles.push(obj)
    }
  }

  for (let x = 0; x < width; x += 200) {
    for (let y = 0; y < height; y += 200) {
      let clr = color(random(colors))
      let clr2 = color(random(colors))
      let _x = x,
        _y = y
      if (noise(x / 10, y / 10) > 0.3) {
        _x += noise(x / 50, y / 50) * 50
        _y += noise(500, x / 50, y / 50) * 50
      }
      clr2.setAlpha(0)
      let obj = new Particle({
        p: createVector(_x, _y),
        v: createVector(0, random(-1, -2)),
        r: 400,
        color: clr,
        endColor: clr2
      })
      particles.push(obj)
    }
  }

  particles.forEach(p => {
    if (random() < 0.1) {
      p.color.setAlpha(0.5)
    }
    if (random() < 0.01) {
      p.color = color("#f24")
    }

  })

  fitCanvasSize()
}

function draw() {
  graphics.push()
  graphics.rotate(frameCount / 10000)
  particles.forEach(p => {
    p.update()
    p.draw()
  })
  graphics.pop()

  push()
  image(graphics, 0, 0)
  blendMode(MULTIPLY)
  image(graphics, 0, 0)
  blendMode(MULTIPLY)
  image(graphics, 0, 0)
  blendMode(SOFT_LIGHT)
  image(graphics, 0, 0)
  blendMode(SOFT_LIGHT)
  image(graphics, 0, 0)
  // blendMode(MULTIPLY)
  // image(graphics,0,0)
  // blendMode(HARD_LIGHT)
  // image(graphics,0,0)
  // blendMode(SOFT_LIGHT)
  // image(graphics,0,0)
  pop()
  // circle(mouseX, mouseY, 20);
}

function keyPressed() {
  if (key == ' ') {
    save("231121 Urban Contour.jpg")

  }
}
