function drawSceneFlowerGrass() {
    let bH = hue(bgColor); // Get the hue
    let bS = saturation(bgColor); // Get the saturation
    let bV = brightness(bgColor); // Get the brightness (value)


    div(0, 0, width, height, 5, () => {
        // let colorH = random(20, 100)
        // let colorS = random(0, 15)
        // let colorB = random(80, 150)
        colorH = bH + random(-50, 50)
        colorS = bS + random(-10, 10)
        colorV = bV + random(-30, 30)

        return [colorH, colorS, colorV]
    })

    let grassColor = random(colors)
    let gH = hue(grassColor); // Get the hue
    let gS = saturation(grassColor); // Get the saturation
    let gV = brightness(grassColor); // Get the brightness (value)

    for (let i = 0; i < 15; i++) {
        addBranch({
            x: random(width),
            y: random(0.3, 1) * height,
            preDelay: 60 * 3,
            bH: bH + random(-20, 20),
            bS: bS / 3 + random(-10, 10),
            bV: bV / 3 + random(-30, 30)
        })
    }

    let flowerColor = random(colors)

    let fH = hue(flowerColor); // Get the hue
    let fS = saturation(flowerColor); // Get the saturation
    let fV = brightness(flowerColor); // Get the brightness (value)



    let flowerCount = int(random(13, 18) * 1.5)
    let positions = Array.from({
        length: flowerCount
    }, () => [random(-0.3, 1.3) * width, random(0.1, 1.3) * height])
    positions = positions.sort((a, b) => a[1] - b[1])
    let flowerType = 1
    for (let i = 0; i < flowerCount; i++) {
        let pos = positions[i]
        emitFlower({
            p: createVector(pos[0], pos[1]),
            preDelay: 60 * 7 + i * 30,
            // preDelay: i * 40,
            flowerColorH: constrain(fH * 0.3, 0, 50) - 5 + random(-20, 10),
            flowerType
            // bH: fH / 2,
            // bS: fS / 2,
            // bV: fV / 2
        })

    }
}