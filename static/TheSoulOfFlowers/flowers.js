function getScaledP(obj) {
    // extract frequently used variables
    const {
        originP,
        p,
        pScale
    } = obj;

    // perform scaling calculation and return scaled coordinates
    const scaledX = originP.x + (p.x - originP.x) * pScale;
    const scaledY = originP.y + (p.y - originP.y) * pScale;
    return [scaledX, scaledY];
}

function emitFlower({
    p,
    preDelay,
    bH,
    bS,
    bV,
    flowerColorH,
    flowerType
}) {
    let x = p?.x,
        y = p?.y
    let pScale = random(0.8, 1)
    let startH = 100
    let startS = 40
    let startV = 60

    //plant
    for (let i = 0; i < 10; i++) {
        let colorH = random(80, 130),
            colorS = random(0, 50),
            colorB = random(20, 90)

        push()
        colorMode(HSB)
        particles.push(new Particle({
            p: createVector(x, y),
            r: random(1, 3),
            color: color(colorH, colorS, colorB),
            v: createVector(1, 4),
            live: 500,
            randomId: i,
            preDelay: preDelay,
            pScale,
            swingFactor: 50,
            leafDelay: int(random(0, 200)),
            tick: (_this) => {
                _this.v.x = (noise(_this.p.x / 100, _this.p.y / 100) - 0.5) * 2
                _this.v.y = noise(_this.p.x / 100, _this.p.y / 100) * 2 + 1
                //leaf

                if ((frameCount + _this.leafDelay) % 500 == 0) {
                    push()
                    colorMode(HSB)
                    let flowerHPan = random(0, 40)
                    let flowerSize = random(1, 1)
                    let len = random(30, 50)
                    let wFactor = random(0.5, 0.2)
                    let bStart = random(-20, 50)
                    let sStart = random(-10, 10)
                    let ang = random(-1, 1) * PI
                    for (let i = -10; i <= 10; i++) {
                        let colorH = startH + random(-20, 20),
                            colorS = startS + random(-30, 20),
                            colorB = startV + random(-30, 30)

                        let wFactor = 1
                        particles.push(new Particle({
                            p: createVector(_this.p.x, _this.p.y),
                            r: random(1, 3),
                            color: color(colorH, colorS, colorB),
                            v: createVector(0, flowerSize * 1 * wFactor + abs(i) / 80).rotate(i / 10 + ang).add(createVector(0, -1)),
                            a: createVector(0, flowerSize * 0.05 * wFactor + abs(i) / 3000).rotate(-i / 15 + ang),
                            live: len,
                            swingFactor: 5
                        }))

                    }
                    pop()
                }
            }

        }))
        pop()
    }
    push()
    colorMode(HSB)
    let flowerHPan = (random(-10, 10) + (flowerColorH || 0) + 360) % 360
    let flowerSize = random(0.8, 2)
    let flowerAng = random(-PI, PI)
    let RootfRot = random([0, 0, 0, 0.01])

    for (let ang = 0; ang < PI * 2 - PI / 5; ang += PI / 3) {
        push()
        colorMode(HSB)
        let len = random(50, 65) * (1 + flowerSize / 5)
        let wFactor = random(0.5, 0.8)
        let bStart = random(-20, 40)
        let sStart = random(-10, 0)
        let flowerPCount = 60
        let petalGravity = random(0, -3)
        let petalRot = random(-0.01, 0.01)
        for (let i = -flowerPCount; i <= flowerPCount; i += 1) {
            let colorH = (flowerHPan + random(-15, 15) + 360) % 360,
                colorS = sStart + random(40, 100),
                colorB = bStart + random(60, 100)

            let newP = new Particle({
                p: createVector(x, y),
                r: random(1, 2.8),
                preDelay: preDelay + ang * 5 + 10 + 60 * 3,
                pScale,
                color: color(colorH - 50, colorS * 0.9, colorB * 0.8),
                color2: color(colorH, colorS * 1.2, colorB * 1.2),
                v: createVector(0, flowerSize * 1 * wFactor + abs(i) / (flowerPCount * 0.72)).rotate(i / (flowerPCount * 0.8) + ang + PI / 2 + flowerAng).add(createVector(0, petalGravity)),
                a: createVector(0, flowerSize * 0.05 * wFactor + abs(i) / (flowerPCount * 60)).rotate(-i / (flowerPCount * 1.1) + ang + PI / 2 + flowerAng),
                live: len * 0.95,
                swingFactor: 5,
                fRot: random(-0.001, 0.001) + RootfRot + petalRot,
                flowerType,
                tick: (_this) => {
                    _this.color = lerpColor(_this.color, _this.color2, 0.05)
                    _this.v.rotate(_this.fRot)
                    if (_this.flowerType == 1) {
                        //     _this.v.rotate(cos(_this.p.x / 10 + _this.p.y / 10) / 10)
                    }
                }
            })
            particles.push(newP)

        }
        pop()

    }

    for (let i = -5; i <= 5; i++) {
        colorMode(RGB)
        let newP = new Particle({
            p: createVector(x, y),
            r: random(1, 2),
            color: color(255, 200),
            preDelay: preDelay + 60 * 4,
            pScale,
            v: createVector(0, 1.73 * random(1, 1.2)).rotate(i / 30 + PI),
            a: createVector(0, 0.02).rotate(-i / 50),
            live: 100
        })
        newP.endCallback = () => {
            particles.push(new Particle({
                p: createVector(...getScaledP(newP)),
                r: random(2, 5),
                color: color(random(250, 255), random(150, 200), 0),
                v: createVector(0, 1.73).rotate(random(-2, 2)),
                a: createVector(0, 0.02).rotate(random(-2, 2)),
                live: 5
            }))
        }
        particles.push(newP)
    }

    pop()
}