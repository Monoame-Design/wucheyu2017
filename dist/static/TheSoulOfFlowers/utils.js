function div(x, y, w, h, z, colorFunc) {
    if (z > 0 && random() < 0.9) {
        if (random() < 0.5) {
            div(x, y, w / 2, h, z - 1, colorFunc)
            div(x + w / 2, y, w / 2, h, z - 1, colorFunc)
        } else {
            div(x, y, w, h / 2, z - 1, colorFunc)
            div(x, y + h / 2, w, h / 2, z - 1, colorFunc)
        }
        // return
    } else {
        push()
        let particleSpan = random([3, 4, 5, 6])
        let colorH = random(100, 50), colorS = random(20, 70), colorB = random(30, 100)
        //yellow
        if (random() < 0.4) {

            colorH = random(40, 50)
            colorS = random(50, 150)
            colorB = random(50, 200)
        }
        if (colorFunc) {
            let clrs = colorFunc()
            colorH = clrs[0]
            colorS = clrs[1]
            colorB = clrs[2]
        }
        colorMode(HSB)
        if (random() < 0.5) {
            for (let xx = 0; xx <= w; xx += particleSpan) {

                particles.push(new Particle({
                    p: createVector(x + xx + random(-20, 20), y),
                    r: (0.5 + noise(x + xx, y) / 2) * random(2, 4),
                    color: color(colorH, colorS, colorB),
                    v: createVector(0, 2).rotate(noise(xx / 3, y) / 5),
                    live: w / 2 * random(0.9, 1.1)
                }))

            }
        } else {
            for (let yy = 0; yy <= h; yy += particleSpan) {

                particles.push(new Particle({
                    p: createVector(x, yy + y + random(-20, 20)),
                    r: (0.5 + noise(x, yy + y) / 2) * random(2, 4),
                    color: color(colorH, colorS, colorB),
                    v: createVector(2, 0).rotate(noise(yy / 3, x) / 5),
                    live: h / 2 * random(0.9, 1.1)
                }))

            }

        }

        pop()

    }
}

/**
 * Performs the even-odd-rule Algorithm (a raycasting algorithm) to find out whether a point is in a given polygon.
 * This runs in O(n) where n is the number of edges of the polygon.
 *
 * @param {Array} polygon an array representation of the polygon where polygon[i][0] is the x Value of the i-th point and polygon[i][1] is the y Value.
 * @param {Array} point   an array representation of the point where point[0] is its x Value and point[1] is its y Value
 * @return {boolean} whether the point is in the polygon (not on the edge, just turn < into <= and > into >= for that)
 */
const pointInPolygon = function (polygon, point) {
    //A point is in a polygon if a line from the point to infinity crosses the polygon an odd number of times
    let odd = false;
    //For each edge (In this case for each point of the polygon and the previous one)
    for (let i = 0, j = polygon.length - 1; i < polygon.length; i++) {
        //If a line from the point into infinity crosses this edge
        if (((polygon[i][1] > point[1]) !== (polygon[j][1] > point[1])) // One point needs to be above, one below our y coordinate
            // ...and the edge doesn't cross our Y corrdinate before our x coordinate (but between our x coordinate and infinity)
            && (point[0] < ((polygon[j][0] - polygon[i][0]) * (point[1] - polygon[i][1]) / (polygon[j][1] - polygon[i][1]) + polygon[i][0]))) {
            // Invert odd
            odd = !odd;
        }
        j = i;

    }
    //If the number of crossings was odd, the point is in the polygon
    return odd;
};