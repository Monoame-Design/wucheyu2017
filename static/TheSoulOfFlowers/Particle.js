class Particle {
    constructor(args) {
        let def = {
            lastP: createVector(0, 0),
            p: createVector(0, 0),
            v: createVector(0, 0),
            a: createVector(0, 0),
            r: random(100),
            preDelay: 0,
            //relative position scale
            pScale: 1,
            swirlPanFactor: random(1),
            jitterFactor: 1,
            splash: false,
            followRotateFactor: random(features.rotateFactors),
            color: random(colors),
            lerpColor: true,
            //200 is original (x moving a lot)
            alive: true,
            steps: [int(random([2, 3, 10, 20, 30, 50, 120, 150])), int(random([2, 3, 4]))],
            shrinkRatio: 1,
            vNoiseScale: features.vNoiseScale,
            color2: random([255, 255, random(colors)]),
            randomId: int(random(10000)),
            xSpeedFactor: random([6, 8, 10, 12]),
            ySpeedFactor: random([6, 8, 10, 12]),
            live: 1000,
            tick: null,
            endCallback: null

        }

        Object.assign(def, args)
        Object.assign(this, def)
        this.lastP = this.p.copy()
        this.originP = this.p.copy()
        this.originLive = this.live
        if (this.targetR == null) {
            this.targetR = this.r
        }
    }
    draw(g) {
        if (this.preDelay >= 0) {
            return
        }
        if (this.alive) {


            g.push()
            // g.blendMode(MULTIPLY)
            g.translate(this.jitterFactor * noise(this.randomId, this.p.x / 3, this.p.y / 3) * 2, this.jitterFactor * noise(this.p.x / 3, this.p.y / 3, this.randomId / 5000) * 2)
            g.translate(this.jitterFactor * noise(this.randomId, this.p.x / 10, this.p.y / 10) * 2, this.jitterFactor * noise(this.p.x / 10, this.p.y / 10, this.randomId / 5000) * 2)
            g.translate(this.jitterFactor * noise(this.randomId, this.p.x / 50, this.p.y / 50) * 20, this.jitterFactor * noise(this.p.x / 50, this.p.y / 50, this.randomId / 5000) * 20)
            g.translate(this.jitterFactor * noise(this.randomId, this.p.x / 100, this.p.y / 100) * 10, this.jitterFactor * noise(this.p.x / 100, this.p.y / 100, this.randomId / 5000) * 10)

            g.translate(this.swirlPanFactor * cos(frameCount / 30 + this.p.x / 800 + this.p.y / 800),
                this.swirlPanFactor * sin(frameCount / 30 + this.p.x / 800 + this.p.y / 800))

            //relative position scale
            g.translate(this.originP.x, this.originP.y)
            g.translate((this.p.x - this.originP.x) * this.pScale, (this.p.y - this.originP.y) * this.pScale)
            g.fill(this.color)

            if (this.brush) {
                g.imageMode(CENTER)
                // g.tint(255, map(this.live, 0, this.originLive / 2, 0, 255, true) + map(this.live, this.originLive / 2, this.originLive, 0, 255, true))
                g.image(this.brush, 0, 0, this.r, this.r)
            } else {
                g.ellipse(0, 0, this.r * 1.1, this.r * 1.1)

            }
            if (this.lastP.dist(this.p) > 0.1) {
                let xx = (this.lastP.x - this.p.x) / 2
                let yy = (this.lastP.y - this.p.y) / 2


                if (this.brush) {
                    g.imageMode(CENTER)
                    g.image(this.brush, xx, yy, this.r, this.r)
                } else {
                    g.ellipse(xx, yy, this.r * 1.1, this.r * 1.1)
                }


            }
            if (this.splash) {
                let spClr = color(this.color)
                for (let i = 0; i < 10; i++) {
                    spClr.setAlpha(random(100))
                    g.fill(spClr)
                    g.ellipse(random(-this.r, this.r), random(-this.r, this.r), random(1), random(1))
                }
            }
            g.pop()
        }
    }
    update() {
        if (this.preDelay >= 0) {
            this.preDelay--
            return
        }
        if (this.r < this.targetR && this.live > this.originLive / 2) {
            this.r = lerp(this.r, this.targetR, 0.1)
        }
        if (this.alive) {
            this.lastP.set(this.p)
            this.p.add(this.v)
            this.v.add(this.a)
            this.r *= this.shrinkRatio
            this.alive = this.r > 0.1 && this.live > 0
            this.live--
            if (this.lerpColor && random() < 0.25 && frameCount % 15 == 0 && this.randomId % 5 == 0) {
                this.color = lerpColor(color(this.color), color(random(colors)), 0.25)
            }


        }
        if (this.aliveBoundary) {
            if (!pointInPolygon(this.aliveBoundary, [this.p.x, this.p.y])) {
                this.live -= random(0, 50)
            }
        }
        if (!this.alive) {
            if (this.endCallback) {
                this.endCallback(this)
            }
        }
        if (this.tick) { this.tick(this) }
    }

}