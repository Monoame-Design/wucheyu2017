

function drawSceneLandscape() {

    push()
    colorMode(HSB)
    let startColor = color(
        190,
        48
        , 66
        , 0.2)
    let endColor = color(
        91,
        6
        , 86
        , 0.2)
    let skyColors = Array.from({ length: 10 }, (v, i) => lerpColor(startColor, endColor, random(0, 0.5) * random()))

    let skyBrushes = Array.from({ length: 10 }, (v, i) => generateBrushHead({ brushColor: skyColors[i] }))
    let whiteBrushes = Array.from({ length: 10 }, (v, i) => generateBrushHead({ brushColor: color(51, 4, 85 + random(30)), brushAlpha: random(0.025) }))
    pop()

    //sky blue
    for (let i = 0; i < 800; i++) {
        particles.push(new Particle({
            p: createVector(random(-width * 0.2, width * 1.2), random(0 - height * 0.1, height * 0.3)),
            r: random(5, 200),
            v: createVector(2, 0).rotate(random(-0.1, 0.1)),
            brush: random(skyBrushes),
            live: 5,
            shrinkFactor: 0.9
        }))
    }

    //sky white
    for (let i = 0; i < 200; i++) {
        particles.push(new Particle({
            p: createVector(random(-width * 0.2, width * 1.2), random(0 - height * 0.1, height * 0.3)),
            r: random(50, 500),
            targetR: random(20, 500),
            v: createVector(random(2), 0).rotate(random(-0.3, 0.3)),
            brush: random(whiteBrushes),
            brushNoiseScale: 50,
            live: random(100, 300),
            splash: true,
            preDelay: 30,
            shrinkRatio: random(0.5, 0.9),

        }))
    }

    colorMode(HSB)


    let blackGrassColor1 = color(276, 31, 13)
    let blackGrassColor2 = color(353, 47, 29)
    let blackGrassColors =
        Array.from({ length: 20 }, (v, i) => lerpColor(blackGrassColor1, blackGrassColor2, random(0, 1)))
    let blackGrassBrushes = Array.from({ length: 20 }, (v, i) => generateBrushHead({ brushColor: blackGrassColors[i] }))

    for (let x = 0; x < width; x += 2) {
        particles.push(new Particle({
            p: createVector(x, random(height * 0.25, height * 0.3)),
            r: random(2, 50),
            v: createVector(0, 2).rotate(random(-0.4, 0.4)),
            brush: random(blackGrassBrushes),
            preDelay: 120,
            splash: true,
            live: random(20, 60),
            jitterFactor: 0,
            shrinkFactor: 0.9
        }))
    }


    let grassColor1 = color(20, 65, 85)
    let grassColor2 = color(15, 75, 48)
    let grassColors =
        Array.from({ length: 20 }, (v, i) => lerpColor(grassColor1, grassColor2, random(0, 0.2) + i / 20))
    let grassBrushes = Array.from({ length: 20 }, (v, i) => generateBrushHead({
        brushColor: grassColors[i]
        , brushAlpha: random(0.5, 0.8)
    }))
    for (let i = 0; i < 1000; i++) {
        let yy = random(height * 0.4, height)
        let newP = new Particle({
            p: createVector(random(-width * 0.2, width * 1.2), yy),
            r: random(20, 400),
            v: createVector(0, random(1, 3)).rotate(3 * random(-0.1, 0.1)),

            splash: true,
            preDelay: 200,
            splash: true,
            live: random(10, 40),
            jitterFactor: 0,
            shrinkFactor: 0.9
        })
        newP.brush = grassBrushes[int(map(newP.p.y + random(-300, 500), height * 0.4, height, 0, 19, true))]
        particles.push(newP)
    }


    colorMode(HSB)
    let frontGrassColor1 = color(32, 54, 94)
    let frontGrassColor2 = color(30, 36, 94)
    let frontGrassColors =
        Array.from({ length: 20 }, (v, i) => lerpColor(frontGrassColor1, frontGrassColor2, random(0, 1)))
    let frontGrassBrushes = frontGrassColors.map((v, i) => generateBrushHead({
        brushColor: frontGrassColors[i],
        brushAlpha: random(0.1, 1)
    }))
    for (let x = 0; x < width; x += 5) {
        for (let y = height * 0.28; y < height; y += 5) {
            let useX = noise(x, y) * width / 5 + x
            let useY = noise(50, x, y) * height / 5 + y
            if (noise(x / 50, y / 50) < 0.64) continue
            particles.push(new Particle({
                p: createVector(useX, useY),
                r: random(1, 3) * map(useY, height * 0.3, height, 0.5, 1),
                v: createVector(0, -random(1, 4 * map(useY, height * 0.3, height, 0, 1))).rotate(0.2 * (noise(useX / 5, useY / 5) - 0.5)),
                brush: random(frontGrassBrushes),
                preDelay: 250 + random(0, 5),
                splash: true,
                color: random(frontGrassColors),
                color2: random(frontGrassColors),
                live: random(20, 50),
                jitterFactor: 0.1,
                shrinkFactor: 0.9,
                swirlPanFactor: 0,
                tick: (_this) => {
                    _this.v.rotate(map(noise(_this.randomId, _this.p.x / 50, _this.p.y / 50), 0, 1, -1, 1) * PI / 64)

                    if ((frameCount + int(_this.randomId)) % 35 == 0) {
                        push()
                        colorMode(HSB)
                        let flowerColor = color(random(0, 50), random(10, 100), random(50, 100), 0.8)
                        if (random() < 0.2) {
                            colorMode(HSB)
                            flowerColor = color(255, 0.8)
                        }
                        particles.push(new Particle({

                            p: createVector(_this.p.x, _this.p.y),
                            r: random(1, 4),
                            v: createVector(random(1, 5)).rotate(random(2 * PI)),
                            color: flowerColor,
                            preDelay: 40,
                            live: random(0, 2),

                        }
                        ))
                        pop()

                    }
                }
            }))

        }
    }


}

function addTree({ p }) {

    colorMode(HSB)
    let treeColor1 = color(30, 41, 75)
    let treeColor2 = color(314, 36, 14)
    let treeColors =
        Array.from({ length: 20 }, (v, i) => lerpColor(treeColor1, treeColor2, i / 20))
    let treeBrushes = Array.from({ length: 20 }, (v, i) => generateBrushHead({
        brushColor: treeColors[i],
        brushAlpha: random(0.5)
    }))

    let treeRadius = random(50, 100)
    for (let i = 0; i < 150; i++) {
        let newP = new Particle({
            p: p.copy().add(createVector(random(treeRadius, 0), 0).rotate(random(4 * PI))),
            r: random(5, 80),
            v: createVector(0.1, 0).rotate(random(-0.4, 0.4)),
            preDelay: 400,
            splash: true,
            live: random(20, 60),
            jitterFactor: 0,
            shrinkFactor: 0.9
        })
        newP.brush = treeBrushes[int(map(newP.p.y, 0, height / 3, 0, 20, true))]
        particles.push(newP)
    }

}