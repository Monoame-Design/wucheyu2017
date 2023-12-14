let brushCache = {};

function rDistributeFunc(r) {
  return r * (1 - Math.random(Math.random()));
}

function angDistributeFunc() {
  return Math.random(2 * Math.PI);
}

let brushDelicateFactor = 10;

function generateBrushHead({
  brushColor,
  brushAlpha = 0.8,
  brushNoiseScale = 2
}) {
  const color = brushColor; // Assuming brushColor is a p5 color
  const brushR = 200; // Default brush radius
  const key = `${color.levels.join("_")}_${parseInt(Math.random(4))}`;

  if (!brushCache[key]) {
    const buffer = createGraphics(brushDelicateFactor * 1.6 * brushR, brushDelicateFactor * 1.6 * brushR);
    buffer.stroke(color);

    const brushDensity = (Math.pow(brushR, 1.8) * 1.3 + map(brushR, 5, 0.3, 30, 0, true)) * 1.2;
    for (let i = 0; i < brushDensity; i++) {
      let rr = rDistributeFunc(brushR),
        ang = angDistributeFunc();
      let xx = rr * Math.cos(ang),
        yy = rr * Math.sin(ang);
      buffer.strokeWeight(0.01);
      buffer.drawingContext.globalAlpha = Math.random(1);
      buffer.point(brushR + xx, brushR + yy);
    }

    brushCache[key] = buffer;
  }

  return brushCache[key];
}

function brush({
  x,
  y,
  brushR = 200,
  color,
  graphics
}) {
  graphics = graphics || window;
  color = color || graphics.color(255); // Ensure color is created with the correct context

  graphics.push();
  let brushGraphics = generateBrushHead({
    brushColor: color,
    brushAlpha: 0.8,
    brushNoiseScale: 2
  });
  graphics.image(brushGraphics, x, y, brushR * brushDelicateFactor, brushR * brushDelicateFactor);
  graphics.pop();
}