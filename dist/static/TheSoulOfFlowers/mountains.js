function addBranch({
    x,
    y,
    z = 3,
    rotateAng = 0,
    preDelay = 0,
    bH,
    bS,
    bV
}) {
    // let bH = hue(bgColor); // Get the hue
    // let bS = saturation(bgColor); // Get the saturation
    // let bV = brightness(bgColor); // Get the brightness (value)


    // let startH = random(0, 40)
    // let startS = random(2, 40)
    // let startB = random(0, 30)
    let startH = bH || random(0, 40)
    let startS = bS || random(2, 40)
    let startB = bV || random(0, 30)
    for (let b = 0; b < 1; b++) {

        for (let o = 0; o < z + 3; o++) {
            let colorH = startH + random(10, 40),
                colorS = startS + random(40, 50),
                colorB = startB + random(10, 50)
            push()
            colorMode(HSB)
            let newP = new Particle({
                p: createVector(x + random(-10, 10), y + random(-10, 10)),
                r: random(2, 4 - z / 5),
                v: createVector(random(-3, 3), random(-3, 3)).rotate(-PI / 2 + noise(o) * 2 + b + rotateAng),
                color: color(colorH, colorS, colorB),
                live: random(50, 170),
                leafFreq: int(random(30, 80)),
                randomId: 0,
                preDelay,
                branchable: o == 0,
                tick: (_this) => {

                    _this.v.rotate(map(noise(_this.randomId, _this.p.x / 50, _this.p.y / 50), 0, 1, -1, 1) * PI / 16)
                    _this.v.y -= 0.05
                    _this.v.mult(0.99)
                    if (z > 0 && _this.branchable) {
                        if (frameCount % 70 == 0) {

                            for (let k = 0; k < 3; k++) {
                                if (random() < 0.5)
                                    addBranch({
                                        x: _this.p.x + random(-1, 1),
                                        y: _this.p.y,
                                        z: z - 1,
                                        rotateAng: random(PI / 2),
                                        bH,
                                        bS,
                                        bV
                                    })
                            }
                        }
                        // _this.branchable = false
                    }
                    if (frameCount % _this.leafFreq == 0) {
                        if (random() < 0.95)
                            emitLeaf({
                                x: _this.p.x,
                                y: _this.p.y,
                                bH,
                                bS,
                                bV
                            })

                    }
                }
            })
            particles.push(newP)
            pop()
        }
    }
}

function emitLeaf({
    x,
    y,
    bH,
    bS,
    bV
}) {
    let minX = x
    let maxX = minX + 20
    let mountainY = y
    let startH = bH || random(0, 40)
    let startS = bS || random(0, 30)
    let startB = (bV || random(0, 30)) + mountainY / height * 10
    let lastPX = 0,
        lastPY = 0
    let leafCount = int(random(20, 100))
    let maxLen = random(20, 100)
    let hasFlower = random() < 0.1
    let spreadRatio = random(0, 1)
    for (i = 0; i < leafCount; i++) {
        let pointX = x
        let pointY = (pointX / 300) * height / 10 + noise(pointX / 50) * 100 * noise(mountainY / 100) + mountainY
        let ang = atan2(pointY - lastPY, pointX - lastPX)
        let colorH = startH + random(100, noise(mountainY / 50, pointX / 50, pointY / 50) * 100),
            colorS = startS + random(0, noise(mountainY / 50, pointX / 50, pointY / 50) * 100),
            colorB = startB + random(10, noise(mountainY / 50, pointX / 50, pointY / 50) * 100)
        push()
        colorMode(HSB)
        particles.push(new Particle({

            p: createVector(x, y),
            r: random(0.8, 2),
            v: createVector(2, 0).rotate(random(-1, 1) * PI / 2 * spreadRatio - PI / 2),
            color: color(colorH, colorS, colorB),
            randomId: int(random(0, 5000)),

            live: random(10, maxLen) * random(),
            tick: (_this) => {


                _this.v.rotate(map(noise(_this.randomId, _this.p.x / 50, _this.p.y / 50), 0, 1, -1, 1) * PI / 32)

                if (hasFlower && (frameCount + int(_this.randomId)) % 35 == 0) {
                    push()
                    colorMode(HSB)
                    let flowerColor = color(random(0, 50), random(10, 100), random(50, 100), 0.8)
                    if (random() < 0.3) {
                        colorMode(HSB)
                        flowerColor = color(255, 0.8)
                    }
                    particles.push(new Particle({

                        p: createVector(_this.p.x, _this.p.y),
                        r: random(1, 4),
                        v: createVector(random(1, 5)).rotate(random(2 * PI)),
                        color: flowerColor,
                        preDelay: 80,
                        live: random(0, 2),

                    }))
                    pop()

                }
            }
        }))

        // particles.push(new Particle({

        //     p: createVector(pointX, pointY),
        //     r: random(1, 2),
        //     v: createVector(2, 0).rotate(ang / 3 + noise(pointX / 5, pointY / 5) * 2),
        //     color: color(colorH, colorS, colorB),
        //     preDelay: int(mountainY),
        //     live: random(10, 50)
        // }
        // ))
        pop()

        lastPX = pointX
        lastPY = pointY

    }

}