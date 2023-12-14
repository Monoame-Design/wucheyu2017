// Artblocks injects the tokenData variable into your sketch like so
// let tokenData = {
//   hash: "0x31f2d12d85e8aeea04e79dc9ed6d3fd2377de7d17fe4233e8c34aab4b48f0f63",
//   tokenId: "18000000",
// }
// another example if you want to uncomment it to try it out
// tokenData = { hash: "0xf79f00793c585e9272d46d0437f04580a5fe9b8ebd834b6ce101f18e05d7cb16", tokenId: "18000258" }
console.log(tokenData)

// Gets you an array of 32 parameters from the hash ranging from 0-255
let rawParams = setupParametersFromTokenData(tokenData)

// your random seed
let seed = generateSeedFromTokenData(tokenData)

// the ID of the token
// let tokenId = parseInt(tokenData.tokenId.substring(2))

let colors1 = "083d77-fa664a-ebebd3-f95738-f4d35e-ee964b".split("-").map((a) => "#" + a)
let colors2 = "d7fff1-8cd790-285943-aafcb8-77af9c".split("-").map((a) => "#" + a)
let colors3 = "e9ce2c-bf211e-f9dc5c-69a197-e5f993".split("-").map((a) => "#" + a)
let colors4 = "262626-acbfa4-ff1b1c-e2e8ce-ff7f11".split("-").map((a) => "#" + a)
let colors5 = "c1a5a9-1d1a31-f08cae-4d2d52-9a4c95".split("-").map((a) => "#" + a)
let colors6 = "42e2b8-f3dfbf-2d82b7-07004d-eb8a90".split("-").map((a) => "#" + a)
let colors7 = "0081af-ff2244-00abe7-eaba6b-2dc7ff-ead2ac".split("-").map((a) => "#" + a)
let colors8 = "000-fff".split("-").map((a) => "#" + a)
let allColorSchema = {
  Nature: colors2,
  Playful: colors3,
  Vibrant: colors4,
  Romantic: colors5,
  Swift: colors6,
  Energetic: colors7,
  BlackWhite: colors8,
  Classic: colors1,
}

// params you can use throughout
let emotionList = [
  "Blanky",
  "Blanky",
  "Blanky",
  "Blanky",
  "Blanky",
  "Cool",
  "Cool",
  "Cool",
  "Cool",
  "Cool",
  "Embarassed",
  "Impatient",
  "Impatient",
  "Sad",
  "Sad",
  "Sad",
  "Sad",
  "Sad",
  "420",
  "Happy",
  "Happy",
  "Happy",
  "Sneaky",
  "Excited",
  "Shocked",
  "Shocked",
  "Shocked",
  "Shocked",
  "Shocked",
  "Naughty",
  "Naughty",
  "Grumpy",
  "Grumpy",
  "Grumpy",
  "Grumpy",
].filter((o) => o)
let eyeAddOnList = [
  "None",
  "None",
  "None",
  "None",
  "None",
  "None",
  "None",
  "None",
  "None",
  "Glasses",
  "Eyeshade",
  "None",
  "None",
].filter((o) => o)
// console.log(Object.entries(allColorSchema))
let colorKeyList = [
  "Nature",
  "Playful",
  "Playful",
  "Playful",
  "Vibrant",
  "Vibrant",
  "Romantic",
  "Romantic",
  "Romantic",
  "Swift",
  "Swift",
  "Swift",
  "Energetic",
  "Energetic",
  "Energetic",
  "BlackWhite",
  "BlackWhite",
  "Classic",
  "Classic",
  "Classic",
  "Classic",
]
let selectColorSetKey = colorKeyList[rawParams[3] % colorKeyList.length]
let selectedColorset = allColorSchema[selectColorSetKey]
let colors = selectedColorset
let bgList = [
  "Solid",
  "Solid",
  "Circle",
  "Circle",
  "Circle",
  "Tornado",
  "Rect",
  "Rect",
  "Rect",
  "Grid",
  "Grid",
  "Grid",
  "Wave",
  "Sprial",
  "Sprial",
  "Disco",
  "Disco",
  "SeaHam",
  "Dot",
  "Dot",
  "Dot",
  "Snow",
  "Space",
  "Solid",
].filter((o) => o)
let accessoryList = [
  "Bowtie",
  "Bowtie",
  "Bowtie",
  "Tie",
  "Tie",
  "Tie",
  "None",
  "None",
  "None",
  "None",
  "None",
  "Scar",
  "Arrow",
  "Earing",
  "Button",
  "None",
  "Bracelet",
  "Bowtie",
  "None",
  "None",
]
let specialSpeciesList = ["Mini", "Square", "Squiggly", "Prisoner", "Giant", "HamFan", "Normal", "Normal"].filter(
  (o) => o,
)
let hairStyleList = [
  "Crown",
  "Crown",
  "Crown",
  "Crown",
  "Afro",
  "Afro",
  "Afro",
  "Afro",
  "Afro",
  "LightRing",
  "Unicorn",
  "None",
  "None",
  "None",
  "None",
  "CentralParting",
  "Ear",
  "Ear",
  "Cap",
  "Cap",
  "Flower",
  "Flower",
  "Punk",
  "Crown",
  "Bear",
].filter((o) => o)

function performPochiAction(actionType, actionText, actionTarget, ts, blockNumber) {
  console.log(actionType, actionText, actionTarget, ts, blockNumber)
}

let activeDialog = {
  ts: -8000,
  duration: 5000,
  content: "",
}

let actionStatus = {
  action: "",
  ts: -8000,
  duration: 2500,
  jumped: false,
}

// function triggerPochiActionDialog() {}
function triggerPochiActionDialog(content, duration = 5000) {
  activeDialog.ts = Date.now()
  activeDialog.duration = duration
  activeDialog.content = content
}

function triggerPochiGoHam(duration = 2000) {
  actionStatus.ts = Date.now()
  actionStatus.action = "ham"
  actionStatus.duration = duration
}

function triggerPochiJump(duration = 100) {
  actionStatus.ts = Date.now()
  actionStatus.action = "jump"
  actionStatus.duration = duration
  actionStatus.jumped = false
}

let getPochiParams = (rid) => {
  let result = {
    eyeDist: mapParam(rawParams[7 + rid], 0.8, 1.25),
    spanSize: mapParam(rawParams[2 + rid], 6.5, 9.5),
    emotion: emotionList[rawParams[4 + rid] % emotionList.length],
    bodySize: [parseInt(mapParam(rawParams[5 + rid], 13, 20)), parseInt(mapParam(rawParams[5 + rid], 7, 9))],
    eyeAddOn: eyeAddOnList[rawParams[8 + rid] % eyeAddOnList.length],
    hairStyle: hairStyleList[rawParams[10 + rid] % hairStyleList.length],
    accessory: accessoryList[rawParams[6 + rid] % accessoryList.length],
    // isSpecial: true,
    isSpecial: rawParams[9 + rid] < 256 / 7.5,
    species: "Normal",
  }

  result.pochiColor = colors[rawParams[6 + rid] % colors.length]
  result.pochiColor2 = colors[(rawParams[6 + rid] + 1) % colors.length]
  result.pochiHairColor = colors[rawParams[7 + rid] % colors.length]
  if (result.pochiHairColor == result.pochiColor) {
    result.pochiHairColor = colors[(1 + rawParams[6 + rid]) % colors.length]
  }
  result.eyeSize = result.spanSize * 3.6

  if (result.isSpecial) {
    result.species = specialSpeciesList[rawParams[5 + rid] % specialSpeciesList.length]
    if (result.species == "Mini") {
      result.spanSize = 6
      result.bodySize = [
        parseInt(mapParam(rawParams[5 + rid], 13 - 2, 19 - 2)),
        parseInt(mapParam(rawParams[5 + rid], 5, 8 - 1)),
      ]
      result.eyeSize = result.spanSize * 3
    }
    if (result.species == "Square") {
      result.bodySize[0] = result.bodySize[1] + 2
    }

    if (result.species == "Giant") {
      if (useParams.count == 1) {
        result.bodySize = [20, 20]
        result.eyeSize = result.spanSize * 4
      } else {
        result.species = "Normal"
        result.isSpecial = false
      }
    }
  }

  return result
}
let useParams = {
  bgColor: colors[rawParams[0] % colors.length],
  bgColor2: colors[(rawParams[0] + 1) % colors.length],
  bgStyle: bgList[rawParams[2] % bgList.length],
  count: (rawParams[1] > 100 ? 1 : 0) + (rawParams[1] > 190 ? 1 : 0) + 1,
  hamily: rawParams[10] < 5,
  pochis: [],
}
useParams.variationCount = Math.min((rawParams[3] > 50 ? 1 : 0) + (rawParams[3] > 100 ? 1 : 0) + 1, useParams.count)

for (var i = 0; i < useParams.count; i++) {
  if (i < useParams.variationCount) {
    useParams.pochis[i] = getPochiParams(i * 3)
  } else {
    useParams.pochis[i] = useParams.pochis[useParams.variationCount - 1]
  }
}

//please define feature obj in index.html
features["Color"] = selectColorSetKey
features["Background"] = useParams.bgStyle
features["Count"] = useParams.count
features["Variation"] = useParams.variationCount
features["Hamily"] = useParams.hamily ? "True" : "False"
for (var i = 0; i < useParams.count; i++) {
  let pochiData = useParams.pochis[i]
  // for (var o = 0; o < Object.keys(pochiData).length; o++) {
  features["P" + i + "_" + "emotion"] = pochiData.emotion
  features["P" + i + "_" + "hairStyle"] = pochiData.hairStyle
  features["P" + i + "_" + "eyeAddOn"] = pochiData.eyeAddOn
  features["P" + i + "_" + "accessory"] = pochiData.accessory
  features["P" + i + "_" + "species"] = pochiData.species
  // }
}

var Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Composites = Matter.Composites,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Body = Matter.Body

let pushpop = (func) => {
  push()
  func()
  pop()
}
var engine
var boxes = []
let allBlocks = []
let overAllTexture
let manualControl = false

function mouseMoved() {
  manualControl = true
}

function setup() {
  pixelDensity(1)
  canvas = createCanvas(windowWidth, windowHeight)
  // canvas = createCanvas(1920, 1080)
  // pixelDensity(2)
  randomSeed()

  //generate noise texture
  overAllTexture = createGraphics(width, height)
  overAllTexture.loadPixels()
  for (var i = 0; i < width + 50; i++) {
    for (var o = 0; o < height + 50; o++) {
      overAllTexture.set(i, o, color(180, noise(i / 5, o / 5, (i * o) / 50) * random([0, 10, 40])))
    }
  }
  overAllTexture.updatePixels()

  // create an engine
  engine = Engine.create()
  world = engine.world

  world.gravity.y = 0.4
  if (useParams.bgStyle == "Space") {
    world.gravity.y = -0.001
  }

  var mouse = Mouse.create(canvas.elt)
  var mouseParams = {
    mouse: mouse,
    constraint: {
      stiffness: 0.5,
    },
  }
  mouseConstraint = MouseConstraint.create(engine, mouseParams)
  mouseConstraint.mouse.pixelRatio = pixelDensity()
  World.add(world, mouseConstraint)

  var wallParams = {
    isStatic: true,
  }
  var ground = Bodies.rectangle(width / 2, height - 50, width + 100, 100, wallParams)
  var wall1 = Bodies.rectangle(-50, height / 2, 100, height, wallParams)
  var wall2 = Bodies.rectangle(width + 50, height / 2, 100, height, wallParams)
  var top = Bodies.rectangle(width / 2, -50, width, 100, wallParams)
  World.add(world, [ground, wall1, wall2, top])
  //
  // for(var i=0;i<width;i+=width/2){
  let cc = 0
  for (var o = 0; o < useParams.count; o++) {
    addBlock(random(width / 5), o * 160, cc++, useParams.pochis[o])
  }
  // }
  Engine.run(engine)
}
let isColorDark = (clr) => {
  let c = color(clr)
  // console.log(c._getRed() + c._getBlue() + c._getGreen())
  if (c._getRed() * 0.2126 + c._getBlue() * 0.7152 + c._getGreen() * 0.0722 < 92) {
    return true
  }
  return false
}

function addBlock(x, y, id, pochiParams) {
  var particleOptions = {
    friction: 0.05,
    frictionStatic: 0.2,
    density: 0.5,
    render: {
      visible: true
    },
  }
  let ww = pochiParams.bodySize[0]
  let hh = pochiParams.bodySize[1]
  //Matter.Composites.softBody(xx, yy, columns, rows, columnGap, rowGap, crossBrace, particleRadius, particleOptions, constraintOptions) → Composite
  let currentSoftBody = Composites.softBody(
    x,
    y,
    ww,
    hh,
    pochiParams.spanSize / 2.5,
    pochiParams.spanSize / 2.5,
    true,
    10,
    particleOptions,
  )
  // console.log(currentSoftBody)
  currentSoftBody.color = pochiParams.pochiColor
  currentSoftBody.color2 = pochiParams.pochiColor2
  currentSoftBody.hairColor = pochiParams.pochiHairColor
  currentSoftBody.size = {
    w: ww,
    h: hh
  }
  currentSoftBody.id = id
  currentSoftBody.isColorDark = isColorDark(currentSoftBody.color)
  currentSoftBody.activeTs = frameCount
  currentSoftBody.emotion = pochiParams.emotion
  currentSoftBody.eyeSize = pochiParams.eyeSize
  currentSoftBody.eyeDist = pochiParams.eyeDist
  currentSoftBody.eyeAddOn = pochiParams.eyeAddOn
  currentSoftBody.spanSize = pochiParams.spanSize
  currentSoftBody.hairStyle = pochiParams.hairStyle
  currentSoftBody.accessory = pochiParams.accessory
  currentSoftBody.species = pochiParams.species
  // Matter.Composite.rotate(currentSoftBody, PI / 2)
  allBlocks.push(currentSoftBody)
  World.add(engine.world, [currentSoftBody])
}

function drawDialog(content, x, y) {
  pushpop(() => {
    textSize(30)
    let tw = textWidth(content)
    translate(x, y)
    fill(255)
    triangle(0, 0, 30, -10, 10, -40)
    rect(0, -60, tw + 40, 50, 50)

    fill(0)
    textStyle(BOLD)
    text(content, 20, -25)
  })
}

function draw() {
  blendMode(BLEND)
  //background
  noStroke()
  background(useParams.bgColor)
  if (useParams.bgStyle == "Circle") {
    for (var i = 0; i < 30; i++) {
      if (i % 6 == 0) {
        noFill()
        stroke(255, 50)
      } else {
        noStroke()
        fill(255, noise(i) * 100)
      }
      ellipse(
        noise(i, 500 + frameCount / 500) * width,
        noise(i, 1) * height * 1,
        noise(i + frameCount / 500) * 200,
        noise(i + frameCount / 500) * 200,
      )
    }
  }
  if (useParams.bgStyle == "Wave") {
    let clc = color(useParams.bgColor)
    let clc2 = color(useParams.bgColor2)
    let colorSpan = 5
    for (var i = 0; i < colorSpan; i++) {
      fill(lerpColor(clc, clc2, i / colorSpan))
      beginShape()
      // strokeWeight(3)
      // stroke(255, 150)
      for (var o = 0; o <= width; o += 5) {
        vertex(
          o,
          (i * height) / colorSpan +
          sin(
            o / 20 +
            frameCount / 15 +
            noise(i, o / 500, frameCount / 200) * 5 +
            noise(i, o / 50, frameCount / 200) * 5,
            +i * o * 50,
          ) *
          20,
        ) * 10
      }

      // endShape()
      noStroke()
      vertex(width, height)
      vertex(0, height)
      endShape()
    }
  } else if (useParams.bgStyle == "Snow") {
    for (var i = 0; i < 100; i++) {
      if (i % 6 == 0) {
        noFill()
        stroke(255, 50)
      } else {
        noStroke()
        fill(255, noise(i) * 300)
      }
      ellipse(
        map(noise(i, 500 + frameCount / 500), 0, 1, -width * 0.2, width * 1.2) + cos(i + frameCount / 50) * 20,
        ((frameCount + sin(i) * height) % (height + 100)) - 50,
        noise(i + frameCount / 500) * 30,
        noise(i + frameCount / 500) * 30,
      )
    }
  } else if (useParams.bgStyle == "Rect") {
    for (var i = 0; i < 10; i++) {
      fill(255, i % 2 == 0 ? 45 : 0)
      rect(0, (i / 10) * height, width, height / 10)
    }
  } else if (useParams.bgStyle == "rainbow") {
    let span = height / 50
    for (var i = 0; i < height / span; i++) {
      push()
      colorMode(HSB)
      fill((frameCount + i * 3) % 360, 100, 40)
      rect(0, i * span, width, span)
      pop()
    }
    rect(0, 0, width, height)
  } else if (useParams.bgStyle == "Grid") {
    let span = height / 15
    for (var x = 0; x <= width; x += span) {
      for (var y = 0; y <= height; y += span) {
        fill(useParams.bgColor == "#fff" ? 200 : 255, int(x / span + y / span) % 2 == 0 ? 40 : 0)
        rect(x, y, span, span)
      }
    }
    // rect(0, 0, width, height)
  } else if (useParams.bgStyle == "Dot") {
    let span = height / 12
    for (var x = 0; x < width; x += span) {
      for (var y = 0; y < height; y += span) {
        if (int(x / span + (y / span) * 14) % 3 == 0) {
          fill(useParams.bgColor == "#fff" ? 200 : 255, 100)
          circle(x, y, span)
        }
      }
    }
  } else if (useParams.bgStyle == "Sprial") {
    fill(useParams.bgColor == "#fff" ? 50 : 255, 15)
    pushpop(() => {
      rectMode(CENTER)
      translate(width / 2, height / 2)
      rotate(frameCount / 50)
      for (var i = 0; i < width; i += 25) {
        rotate(0.1)
        rect(0, 0, i, i)
      }
    })
  } else if (useParams.bgStyle == "Tornado") {
    fill(255, 15)
    pushpop(() => {
      rectMode(CENTER)
      background(0)
      strokeWeight(2)
      translate(width / 2, height / 2)
      // rotate(frameCount / 50)

      for (var i = 0; i < height; i += 10) {
        stroke(255, 100)
        fill(255, 20)
        // rotate(0.1)
        let ang = frameCount / 15 + i / 20
        let rx = map(i, 0, height, width, width * 0.3) + noise(i, frameCount / 30, 50) * 50
        let ry = map(i, 0, height, width, width * 0.3) / 2 + noise(i, frameCount / 30, 50) * 50
        arc(0, i - height / 3, rx, ry, ang, PI * 1.6 * noise(i) + ang)
        if (i % 3 == 0) {
          fill(255)
          circle(rx * cos(ang), ry * sin(ang), 5)
        }
      }
    })
  } else if (useParams.bgStyle == "Disco") {
    for (var i = 0; i < 20; i++) {
      push()
      fill(255, int(i) % 2 == 0 ? 40 : 0)
      translate(width / 2, 0)
      rotate(sin(i / 2 + frameCount / 300) * 2 + PI / 2)
      triangle(0, 0, height * 1.2, 150, height * 1.2, -150)
      pop()
    }
  } else if (useParams.bgStyle == "SeaHam") {
    push()
    background(0)
    noStroke()
    for (var i = 10; i > 0; i--) {
      fill(244, 220 - i * 8, 36)
      ellipse(width / 2, height / 2.1 - i * 5, 20 * i, 20 * i)
    }

    fill(37, 142, 247)
    rect(0, height / 2, width, height / 2)
    for (var x = 0; x < width + 100; x += 30) {
      let r = noise(x, frameCount / 100) * 200

      circle(x, height / 2, r)
    }

    strokeWeight(2)
    noFill()
    color(HSB)
    for (let y = height * 0.6; y < height; y += 5) {
      beginShape()
      stroke(50 + map(y, height * 0.6, height, 0, 200), 300, 300, 100 - y / 2 + height * 0.6)
      for (let x = -50; x < width; x += 3) {
        vertex(x, y + noise(x / 200, y / 200, frameCount / 100 + mouseX / 200 + mouseY / 200) * 120)
      }
      endShape()
    }
    pop()
  } else if (useParams.bgStyle == "Space") {
    background("#0f133f")
    for (var i = 0; i < 150; i++) {
      if (i % 6 == 0) {
        noFill()
        stroke(255, 200)
      } else if (i % 4 == 0) {
        fill(255, 255, 0)
      } else {
        noStroke()
        fill(255, noise(i) * 255 + sin(i + frameCount / 30) * 100)
      }
      circle(noise(i, 500) * width * 2 - width / 2, noise(i, 1) * height * 2 - height / 2, noise(i) * 10)
      if (i % 100 == 0) {
        push()
        fill("#f7b345")
        rotate(sin(frameCount / 1000 + i * 50) / 5)
        circle(noise(i, 500) * width * 2 - width / 2, noise(i, 1) * height * 2 - height / 2, 40)
        noFill()
        stroke(255, 100)
        strokeWeight(2)
        arc(noise(i, 500) * width * 2 - width / 2, noise(i, 1) * height * 2 - height / 2, 80, 20, PI * 0.8, PI * 2.2)
        pop()
      }
    }
  }
  fill(255)
  noStroke()
  allBlocks.forEach((block, blockId) => {
    if (useParams.bgStyle == "Tornado") {
      block.bodies[3].position.x += (cos(frameCount / 15) * width) / 60
      block.bodies[3].position.y += (sin(frameCount / 15) * width) / 60
      block.bodies[10].position.x += (cos(frameCount / 15) * width) / 60
      block.bodies[10].position.y += (sin(frameCount / 15) * width) / 60
    } else if (block.emotion != "Lazy" && useParams.bgStyle != "Space") {
      if (frameCount < 60) {
        block.bodies[3].position.y -= 5
        block.bodies[3].position.x -= map(block.id, 0, useParams.count, -1, 1) * 5
      } else if (!manualControl) {
        block.bodies[3].position.x -= map(block.id, 0, useParams.count, -1, 1) * 1
        block.bodies[2].position.y -= sin(frameCount / 15 + block.id * 0.5) * 7
        if (block.bodies[40]) {
          block.bodies[40].position.y += sin(frameCount / 12) * 9
        }
      }
    } else if (useParams.bgStyle == "Space") {
      block.bodies[2].position.y -= sin(frameCount / 15 + block.id * 0.5) * 7
    }
    push()

    let currentColor = color(block.color)
    let getBody = (i, o) => {
      let result = block.bodies[o * block.size.w + i]

      if (block.species == "Squiggly") {
        return {
          position: {
            x: result.position.x + noise((frameCount / 5 + i * 5 + o * 5 + block.id) / 5) * 40,
            y: result.position.y + noise((frameCount / 5 + i * 5 + o * 5 + block.id) / 5) * 40,
          },
        }
      }
      if (block.emotion == "420") {
        return {
          position: {
            x: result.position.x,
            y: result.position.y + cos((frameCount + i * 5 + o * 5 + block.id) / 5) * 20,
          },
        }
      }
      return result
    }
    let getMidBodyPosAndAngle = (i) => {
      let PosSt = getBody(i, 0).position
      let PosEd = getBody(i, block.size.h - 1).position
      let Angle = atan2(PosSt.y - PosEd.y, PosSt.x - PosEd.x)
      let Pos = {
        x: (PosSt.x + PosEd.x) / 2,
        y: (PosSt.y + PosEd.y) / 2,
      }
      return {
        position: createVector(Pos.x, Pos.y),
        st: createVector(PosSt.x, PosSt.y),
        ed: createVector(PosEd.x, PosEd.y),
        angle: Angle,
      }
    }
    pushpop(() => {
      drawingContext.shadowColor = color(0, 50)
      drawingContext.shadowOffsetX = 2
      drawingContext.shadowOffsetY = 2
      if (block.hairStyle == "LightRing") {
        drawingContext.shadowColor = color(255, 255, 10)
        drawingContext.shadowBlur = 30
      }
      fill(currentColor)
      beginShape()
      //bodydot
      let dr = (body, bid) => {
        currentColor.setRed(
          currentColor._getRed() +
          (block.species == "Toxic" ? sin(bid + frameCount) * 50 : 0) +
          50 * (noise(block.id * 10 + body.position.x / 30, body.position.y / 30, frameCount / 80) - 0.5),
        )
        currentColor.setGreen(
          currentColor._getGreen() +
          (block.species == "Toxic" ? sin(bid + frameCount) * 50 : 0) +
          50 * (noise(block.id * 10 + body.position.x / 30, body.position.y / 30, frameCount / 80 + 5000) - 0.5),
        )
        currentColor.setBlue(
          currentColor._getBlue() +
          (block.species == "Toxic" ? sin(bid + frameCount) * 50 : 0) +
          50 * (noise(block.id * 10 + body.position.x / 30, body.position.y / 30, frameCount / 80 + 10000) - 0.5),
        )
        // currentColor.setAlpha(noise(body.position.x/50,body.position.y/50)*100+150)
        fill(currentColor)
        ellipse(body.position.x, body.position.y, noise(body.position.x / 50, body.position.y / 50) * 40 + 20)
      }
      //drawing boundary
      for (var i = 0; i < block.size.w; i++) {
        let body = getBody(i, 0)
        vertex(body.position.x, body.position.y)
        dr(body)
      }
      for (var i = 0; i < block.size.h; i++) {
        let body = getBody(block.size.w - 1, i)
        vertex(body.position.x, body.position.y)
        dr(body)
      }

      for (var i = block.size.w - 1; i >= 0; i--) {
        let body = getBody(i, block.size.h - 1)
        vertex(body.position.x, body.position.y)
        dr(body)
      }
      for (var i = block.size.h - 1; i >= 0; i--) {
        let body = getBody(0, i)
        vertex(body.position.x, body.position.y)
        dr(body)
      }

      drawingContext.shadowOffsetX = 0
      drawingContext.shadowOffsetY = 0
    })

    currentColor.setAlpha(255)
    fill(block.color)
    endShape(CLOSE)
    if (block.species == "Prisoner" || block.emotion == "420" || block.species == "HamFan") {
      push()
      let stI = int(block.size.w / 3)
      let edI = block.size.w - 1
      if (block.emotion == "420") {
        stI = 0
      } else if (block.species == "Prisoner") {} else if (block.species == "HamFan") {
        stI = int(block.size.w * 0.4)
        edI = int(block.size.w * 0.9)
      }
      for (let i = stI; i < edI; i++) {
        let v1 = getBody(i, 0).position
        let v2 = getBody(i, block.size.h - 1).position
        let v3 = getBody(i + 1, block.size.h - 1).position
        let v4 = getBody(i + 1, 0).position
        if (block.species == "Prisoner") {
          fill(i % 2 == 0 ? 255 : 30)
        } else if (block.emotion == "420") {
          colorMode(HSB)
          stroke((frameCount + i * 11 + block.id * 50) % 360, 100, 100)
          fill((frameCount + i * 10 + block.id * 50) % 360, 100, 100)
          colorMode(RGB)
        } else if (block.species == "HamFan") {
          stroke(block.hairColor)
          fill(block.hairColor)
        }
        beginShape()
        vertex(v1.x, v1.y)
        vertex(v2.x, v2.y)
        vertex(v3.x, v3.y)
        vertex(v4.x, v4.y)
        endShape(CLOSE)
        if (block.species == "HamFan") {
          fill(block.hairColor)

          if (i == stI) {
            let ang = atan2(v1.y - v4.y, v1.x - v4.x)
            push()
            translate((v1.x + v2.x) / 2, (v1.y + v2.y) / 2)
            rotate(ang)
            translate(5, 0)
            fill(block.color)
            stroke(block.color)
            arc(0, 0, 40, 40, PI * 0.5, PI * 1.5)
            pop()
          }
        }
      }
      if (block.species == "HamFan") {
        let hamPosSt = getBody(int((stI + edI) / 2), 0).position
        let hamPosEd = getBody(int((stI + edI) / 2), block.size.h - 1).position
        let hamAngle = atan2(hamPosSt.y - hamPosEd.y, hamPosSt.x - hamPosEd.x)
        let hamPos = {
          x: (hamPosSt.x + hamPosEd.x) / 2,
          y: (hamPosSt.y + hamPosEd.y) / 2,
        }
        push()
        translate(hamPos.x, hamPos.y)
        rotate(hamAngle)
        rectMode(CENTER)
        fill("#ffc32D")
        rect(0, 0, 80, 60)
        fill("#f4585a")
        ellipse(20, 0, 30, 30)
        fill(30)
        ellipse(20, 0, 20, 20)
        fill("#2d57ff")
        ellipse(-20, 0, 30, 30)
        fill(30)
        ellipse(-20, 0, 10, 10)

        rect(0, 20, 30, 6)

        fill("#fff")
        rect(50, 0, 8, 15)
        fill("#2d57ff")
        rect(-50, 0, 8, 15)

        fill("#fff")
        rect(0, -40, 8, 15)

        textSize(20)
        fill(255)
        textAlign(CENTER)
        // text("HAMILY", 0, 50)

        pop()
      }
      pop()
    }

    let headSt = getBody(0, int(block.size.h / 2 + 0.5))
    let eyeSt = getBody(2, int(block.size.h / 2 + block.eyeDist))
    let eyeEd = getBody(2, int(block.size.h / 2 - block.eyeDist))
    let NosePos = getBody(2, int(block.size.h / 2))
    let MouthPos = getBody(3, int(block.size.h / 2))
    let TiePos = getMidBodyPosAndAngle(max(int(block.size.w * 0.4), 5))
    let eyeAngle = atan2(eyeSt.position.y - eyeEd.position.y, eyeSt.position.x - eyeEd.position.x)

    let drawEye = (x, y, blink = 1, lr = 0, lrRot = 0.5) => {
      if (useParams.hamily) {
        fill(block.hairColor)
        circle(x, y, 30 + sin(frameCount / 40 + lr) * 5)
        fill(block.color)
        circle(x, y, 20 + sin(frameCount / 40 + lr) * 5)
      } else {
        //eyeball
        pushpop(() => {
          scale(1, blink)
          fill(255)
          if (block.color == "#000") {
            stroke(255)
            strokeWeight(3)
          }
          if (block.color == "#fff") {
            stroke(0)
            strokeWeight(3)
          }
          ellipse(x, y, block.eyeSize)
        })
        //eye
        pushpop(() => {
          scale(1, blink)
          fill(0)
          if (block.emotion == "Impatient") {
            translate(0, block.eyeSize / 5)
          }
          let eyePan = block.emotion == "Embarassed" ? block.eyeSize / 5 : 3
          let embP = block.emotion == "Embarassed" && sin(frameCount / 20 + blockId) > 0.3
          if (mouseX > (width * 1) / 3 || embP) {
            translate(-eyePan, 0)
          } else if (mouseX < (width * 2) / 3 || embP) {
            translate(eyePan, 0)
          }
          if (block.emotion == "Sneaky") {
            translate((noise(frameCount / 60 + mouseX / 50) - 0.5) * block.eyeSize, 0)
          }
          ellipse(x, y, block.eyeSize * (block.emotion == "Sneaky" || block.emotion == "Excited" ? 0.35 : 0.6))
        })
      }

      if (
        (!useParams.hamily &&
          block.emotion != "Shocked" &&
          block.emotion != "Excited" &&
          block.emotion != "Impatient") ||
        block.active
      ) {
        fill(lerpColor(color(block.color), color(30), 0.1))
        arc(x, y, block.eyeSize + 4, block.eyeSize + 4, 0, PI)
      }
      // if (block.emotion == "Sad" && lr == 0) {
      //   push()
      //   let pr = ((frameCount / 3 + lr * 20) % 50) / 50
      //   fill(block.isColorDark ? 255 : 0, 255 - pr * 255)
      //   translate(lr * -40 + 20, y - 20 - lr * 50 - pr * 50)
      //   rotate(sin(pr) / 5)
      //   scale(0.6)

      //   triangle(-10, 0, 0, 30, 10, 0)
      //   ellipse(0, 0, 20, 20)
      //   pop()
      // }
      pushpop(() => {
        fill(lerpColor(color(block.color), color(color(block.color == "#fff" ? 0 : 255)), 0.7))
        rectMode(CENTER)
        if (block.emotion == "Sneaky") {
          if (lr == 1) {
            translate(0, sin(mouseY / 50 + lr * PI * 0.5 + block.id) * 10)
          } else {
            translate(0, -10)
          }
        } else {
          translate(0, sin(mouseY / 50 + lr * PI * 0.5 + block.id) * 10)
        }
        if (block.emotion == "Grumpy" || block.emotion == "Impatient") {
          rotate(-(lr - 0.5) * lrRot * 1.2)
        } else if (block.emotion == "Sneaky") {
          if (lr == 1) {
            rotate(-(lr - 0.5) * lrRot * 1.3)
          }
        } else {
          rotate((lr - 0.5) * lrRot)
        }
        rect(x, y + 20, 30, 8)
      })
    }

    let isBlinking = (frameCount + block.id * 5) % 80 < 10 ? 0.1 : 1

    //draw eyes
    pushpop(() => {
      translate(eyeSt.position.x, eyeSt.position.y)
      rotate(eyeAngle)
      drawEye(0, 0, isBlinking, 0)
    })

    pushpop(() => {
      translate(eyeEd.position.x, eyeEd.position.y)
      rotate(eyeAngle)
      drawEye(0, 0, isBlinking, 1)
    })
    if (block.eyeAddOn == "Glasses" || block.eyeAddOn == "Sunglasses") {
      let glassesD = block.eyeSize * 1.5
      let shapeFunc = ellipse
      noFill()
      // block.eyeAddOn == "Sunglasses" && fill(0)
      pushpop(() => {
        rectMode(CENTER)
        stroke(0)
        strokeWeight(5)
        translate(eyeSt.position.x, eyeSt.position.y)
        rotate(eyeAngle)
        shapeFunc(0, 0, glassesD, glassesD)
      })
      pushpop(() => {
        rectMode(CENTER)
        stroke(0)
        strokeWeight(5)
        translate(eyeEd.position.x, eyeEd.position.y)
        rotate(eyeAngle)
        shapeFunc(0, 0, glassesD, glassesD)
      })
    } else if (block.eyeAddOn == "Eyeshade") {
      pushpop(() => {
        let st = getBody(0, 2)
        let ed = getBody(4, block.size.h - 1)
        stroke(block.isColorDark ? 255 : 0)
        strokeWeight(5)
        line(st.position.x, st.position.y, ed.position.x, ed.position.y)

        rectMode(CENTER)
        fill(block.isColorDark ? 255 : 0)
        translate((st.position.x + ed.position.x) / 2, (st.position.y + ed.position.y) / 2)
        rotate(eyeAngle)
        ellipse(0, 0, 40, 40)
      })
    }

    if (block.hairStyle == "Afro") {
      pushpop(() => {
        translate(headSt.position.x, headSt.position.y)
        rotate(eyeAngle)

        //hair
        for (var i = 0; i < 20; i++) {
          currentColor = color(block.color)
          currentColor = lerpColor(currentColor, color(block.hairColor), noise(i))
          fill(currentColor)
          noStroke()
          circle(
            map(noise(i + headSt.position.x / 100, blockId, 500), 0, 1, -100, 100),
            map(noise(i * 2 + headSt.position.x / 100, blockId, blockId, 3000), 0, 1, -50, 50),
            map(noise(i * 2 + headSt.position.x / 100, blockId, blockId, 9000), 0, 1, 30, 60),
          )
          //   translate(-10, 0);
          //   line(0, -20, 0, 0);
        }
      })
    } else if (block.hairStyle == "Curly") {
      pushpop(() => {
        translate(headSt.position.x, headSt.position.y)
        rotate(eyeAngle)
        translate(-10, 0)
        let headW = block.spanSize * block.size.h * 0.8

        strokeWeight(5)
        stroke(block.hairColor)
        noFill()
        for (var i = 0; i < 14; i++) {
          beginShape()
          for (var o = 0; o < 40; o++) {
            vertex(
              o * 3 + i * 5 - headW / 2 + cos(o / 3 + i + noise(i) * 50) * 8,
              sin(o / 3 + i + noise(i) * 50) * 40 + o / 5,
            )
          }
          endShape()
        }
      })
    } else if (block.hairStyle == "Crown") {
      pushpop(() => {
        fill(block.hairColor)
        if (block.hairColor == useParams.bgColor) {
          drawingContext.shadowColor = color(150)
          // drawingContext.shadowOffsetX = -10
          drawingContext.shadowOffsetY = -5
          drawingContext.shadowBlur = 20
        }
        translate(headSt.position.x + 10, headSt.position.y)
        rotate(eyeAngle)
        let headW = block.spanSize * block.size.h * 0.8
        beginShape()
        vertex(-headW, 0)
        vertex(-headW, headW)
        for (var i = 0; i < 12; i++) {
          vertex(-headW + (i / 13) * headW * 2, i % 2 == 0 ? headW : 30)
        }
        vertex(headW, headW)
        vertex(headW, 0)
        endShape(CLOSE)
      })
    } else if (block.hairStyle == "Punk") {
      pushpop(() => {
        translate(headSt.position.x, headSt.position.y - 10)
        rotate(eyeAngle)
        let headW = block.spanSize * block.size.h * 0.8

        let hb = color(block.hairColor)
        for (var i = 0; i < 6; i++) {
          hb.setRed(i * 80)
          fill(hb)
          push()
          translate(i * -10, 0)
          rotate(i / 2 - 1)
          triangle(-20, 0, 0, 70, 20, 0)
          pop()
        }
      })
    } else if (block.hairStyle == "BdayHat") {
      pushpop(() => {
        fill(block.hairColor)
        translate(headSt.position.x + 10, headSt.position.y)
        rotate(eyeAngle)
        let headW = block.spanSize * block.size.h * 0.8

        for (var i = 0; i < 12; i++) {
          triangle(-50, 0, 0, 100, 50, 0)
        }
        endShape(CLOSE)
      })
    } else if (block.hairStyle == "Ear") {
      pushpop(() => {
        fill(block.color)
        translate(headSt.position.x, headSt.position.y)
        rotate(eyeAngle)
        arc(0, 0, 50, 50, 0, PI / 2)
        arc(-50, 0, 50, 50, PI * 2.5, PI * 3)
        fill(block.hairColor)
        arc(0, 0, 30, 30, 0, PI / 2)
        arc(-50, 0, 30, 30, PI * 2.5, PI * 3)
      })
    } else if (block.hairStyle == "Bear") {
      pushpop(() => {
        fill(block.color)
        translate(headSt.position.x, headSt.position.y + 5)
        rotate(eyeAngle)
        arc(0, 0, 40, 40, 0, PI)
        arc(-50, 0, 40, 40, PI * 2, PI * 3)
        fill(block.hairColor)
        arc(0, 0, 25, 25, 0, PI)
        arc(-50, 0, 25, 25, PI * 2, PI * 3)
      })
    } else if (block.hairStyle == "LightRing") {
      noFill()
      pushpop(() => {
        stroke("#f9de40")
        strokeWeight(8)
        translate(headSt.position.x, headSt.position.y)
        rotate(eyeAngle)
        translate(0, 50)
        drawingContext.shadowColor = color(255, 255, 0)
        drawingContext.shadowBlur = 50
        ellipse(0, sin(frameCount / 50) * 10, 70 + sin(frameCount / 50) * 5, 30)
      })
    } else if (block.hairStyle == "Cap") {
      pushpop(() => {
        fill(block.hairColor)
        translate(headSt.position.x + 10, headSt.position.y)
        rotate(eyeAngle)
        let headW = block.spanSize * block.size.h * 0.8
        arc(5, 5, 70, 70, 0, PI)
        rect(5, 5, 50, 10)
        fill(block.color)
        // textSize(20)
        // text("d", 0, 30)
      })
    } else if (block.hairStyle == "Unicorn") {
      pushpop(() => {
        if (block.hairColor == useParams.bgColor) {
          drawingContext.shadowColor = color(120, 50)
          drawingContext.shadowOffsetX = -10
          drawingContext.shadowOffsetY = -10
          drawingContext.shadowBlur = 30
        }
        fill(block.hairColor)
        translate(headSt.position.x, headSt.position.y)
        rotate(eyeAngle)
        let headW = block.spanSize * block.size.h * 0.8
        translate(-headW / 2, 0)
        triangle(-15, 0, 15, 0, 0, 50)
        translate(0, 10)
        scale(0.8)
        fill(255, 30)
        triangle(-15, 0, 15, 0, 0, 50)
        // fill(block.color)
        // textSize(20)
        // text("d", 0, 30)
      })
    } else if (block.hairStyle == "CentralParting") {
      pushpop(() => {
        if (block.hairColor == useParams.bgColor) {
          drawingContext.shadowColor = color(150, 50)
          // drawingContext.shadowOffsetX = -10
          drawingContext.shadowOffsetY = -5
          drawingContext.shadowBlur = 20
        }
        translate(headSt.position.x, headSt.position.y)
        fill(block.hairColor)
        rotate(eyeAngle)
        translate(5, 5)
        noStroke()
        let headW = block.spanSize * block.size.h * 0.98
        arc(headW * 1.35 - headW / 2, 30, headW * 3.1, headW * 2.6, PI, PI * 1.5)
        push()
        rotate(sin(headSt.position.y / 20) / 30)
        arc(-headW * 1.35 - headW / 2, 30, headW * 3.1, headW * 2.6, PI + PI / 2, PI * 1.5 + PI / 2)
        pop()
        noFill()
        stroke(255, 150)
        for (let i = 0; i < 5; i++) {
          arc(headW * 1.35 - headW / 2, 30, headW * 2.5, ((headW * 2.5) / 5) * i, PI, PI * 1.5)
          push()
          rotate(sin(headSt.position.y / 20) / 30)
          arc(-headW * 1.35 - headW / 2, 30, headW * 2.5, ((headW * 2.5) / 5) * i, PI + PI / 2, PI * 1.5 + PI / 2)
          pop()
        }
      })
    } else if (block.hairStyle == "Flower") {
      pushpop(() => {
        translate(headSt.position.x + 10, headSt.position.y)
        rotate(eyeAngle)
        for (var i = 0; i < 5; i++) {
          push()
          rotate((i / 5) * 2 * PI)
          translate(10, 0)
          fill(block.hairColor)
          circle(0, 0, 15)
          pop()
        }
        fill(block.hairColor == "#fff" ? 0 : 255)
        circle(0, 0, 10)
      })
    }

    //mouth
    pushpop(() => {
      translate(MouthPos.position.x, MouthPos.position.y)
      rotate(eyeAngle)
      fill(block.isColorDark ? 255 : 20)
      // scale(1,(frameCount+block.id*5)%80<10?0.1:1)
      if (block.emotion == "Blanky") {
        rectMode(CENTER)
        let hh = 20 + sin(headSt.position.y / 50 + headSt.position.x / 50) * 10
        rect(0, -10, 50, hh, 40)
        fill(255)
        noStroke()
        fill(block.isColorDark ? 20 : 255)
        rect(0, -10 + hh / 3, 20, 10)
      } else if (block.emotion == "Shocked") {
        beginShape()
        stroke(block.isColorDark ? 255 : 20)
        strokeWeight(5)
        noFill()
        for (var i = -10; i < 10; i++) {
          vertex(i * 3, sin(i + int(headSt.position.y / 5 + headSt.position.x / 5)) * 5)
        }
        endShape()
        // rectMode(CENTER);
        // rotate(sin(headSt.position.x / 40) / 3);
        // rect(0, 0, 50, 5, 40);
      } else if (block.emotion == "Sad") {
        rectMode(CENTER)
        strokeWeight(5)
        rotate(sin(headSt.position.y / 30) / 3)
        stroke(block.isColorDark ? 255 : 20)
        noFill()
        arc(0, -20, 40 + 10 * sin(frameCount / 50), 30, 0, PI)
      } else if (block.emotion == "Happy") {
        rectMode(CENTER)
        strokeWeight(5)
        rotate(sin(headSt.position.y / 30 + mouseX / 40 + frameCount / 50) / 3)
        translate(0, 15)
        stroke(block.isColorDark ? 255 : 20)
        noFill()
        arc(0, -20, 40 + 10 * sin(frameCount / 50), 30, PI, PI * 2)
      } else if (block.emotion == "Sneaky") {
        rectMode(CENTER)
        stroke(block.isColorDark ? 255 : 20)
        strokeWeight(5)
        noFill()
        // fill(block.isColorDark ? 255 : 20)
        // fill(lerpColor(color(block.color), color("#f24"), 0.7))
        rotate(sin(headSt.position.y / 30 + mouseX / 40 + frameCount / 50) / 3)
        translate(0, 0)

        arc(0, 0, 20, 30 + 5 * sin(frameCount / 50), PI, PI * 2)
      } else if (block.emotion == "Naughty") {
        rectMode(CENTER)
        strokeWeight(4)
        stroke(block.isColorDark ? 255 : 20)
        rotate(sin(headSt.position.y / 30 + mouseX / 50) / 7 + PI - PI / 12)
        translate(10, 10)
        stroke(block.isColorDark ? 255 : 20)
        line(-25, 0, 25, 0)
        noStroke()
        fill(lerpColor(color(block.color), color("#f24"), 0.8))
        rectMode(CORNER)
        rect(0, 2, 20, 20 + sin(frameCount / 50 + mouseX / 40 + frameCount / 50) * 5, 0, 0, 40, 40)
      } else if (block.emotion == "Excited") {
        rectMode(CENTER)
        strokeWeight(5)
        rotate(sin(headSt.position.y / 30 + mouseX / 40 + frameCount / 50) / 3)
        translate(0, 15)
        fill(block.isColorDark ? 255 : 20)
        ellipse(0, -20, 30 + 5 * sin(frameCount / 50), 20 + 15 * sin(frameCount / 50 + headSt.position.y / 15))
      } else if (block.emotion == "Grumpy") {
        rectMode(CENTER)
        strokeWeight(4)
        rotate(sin(headSt.position.y / 30 + PI / 2) / 3)
        stroke(block.isColorDark ? 255 : 20)
        translate(0, 5)
        line(-20, -10, 0, 0)
        line(0, 0, 20, -10)
      } else if (block.emotion == "Party") {
        // beginShape()
        stroke(255)
        strokeWeight(7)
        translate(-20, -10)
        push()
        let p = sin(frameCount / 10) + 1
        for (var i = 0; i < 50; i++) {
          line(0, 0, 2, 0)
          translate(2, 0)
          rotate(i > p * 50 + 10 ? 0.25 : 0)
        }
        pop()
        // endShape()
      } else if (block.emotion == "Embarassed") {
        rectMode(CENTER)
        rotate(sin(headSt.position.y / 30 + PI / 2) / 5)
        noStroke()
        fill(255, 50, 50, 100)
        ellipse(-30, 0, 30, 10)
        ellipse(30, 0, 30, 10)

        stroke(block.isColorDark ? 255 : 20)
        translate(0, -10)
        strokeWeight(4)
        noFill()
        arc(0, 0, 10, 10, PI * 0.5, PI * 1.5)
        arc(0, 10, 10, 10, PI * 0.5, PI * 1.5)
      } else {
        rectMode(CENTER)
        rotate(sin(headSt.position.x / 40) / 3)
        rect(0, 0, 50, 5, 40)
      }
    })
    //accessory
    if (block.accessory == "Arrow") {
      let result = getMidBodyPosAndAngle(max(int(block.size.w * 0.45), 5))
      push()
      translate(result.position.x, result.position.y)
      strokeWeight(3)
      rotate(result.angle + sin(result.position.y / 20) / 5)
      fill(block.color2)
      circle(-10, 0, 22)
      circle(10, 0, 22)
      triangle(-22, 2, 22, 2, 0, 28)
      translate(0, 5)
      rotate(result.angle + PI / 4)
      stroke(block.isColorDark ? 255 : 0)
      line(0, 0, 80, 0)

      stroke(block.color2)
      strokeWeight(5)
      translate(60, 0)
      line(0, 0, 20, 10)
      line(0, 0, 20, -10)
      translate(20, 0)
      line(0, 0, 20, 10)
      line(0, 0, 20, -10)
      pop()
    }
    if (block.accessory == "Button") {
      let result = getMidBodyPosAndAngle(max(int(block.size.w * 0.45), 5))
      let result2 = getMidBodyPosAndAngle(max(int(block.size.w * 0.65), 7))
      fill(block.color2)
      let drawBtn = (obj) => {
        pushpop(() => {
          translate(obj.position.x, obj.position.y)
          // rect(0, 0, 50, 50)
          rotate(obj.angle + sin(obj.position.y / 20) / 5)
          circle(0, 0, block.spanSize * 5)
          strokeWeight(3.5)
          stroke(block.color2 == "#fff" ? 0 : 255)
          line(-block.spanSize * 0.9, block.spanSize * 0.9, block.spanSize * 0.9, -block.spanSize * 0.9)
          line(-block.spanSize * 0.9, -block.spanSize * 0.9, block.spanSize * 0.9, block.spanSize * 0.9)
        })
      }
      drawBtn(result)
      drawBtn(result2)
    }
    if (block.accessory == "Earing") {
      let result = getBody(4, block.size.h - 1).position
      pushpop(() => {
        translate(result.x, result.y)
        translate(-22, 0)
        rotate(eyeAngle + PI + sin(result.y / 10) / 5 - PI / 4)
        stroke(block.color2)
        strokeWeight(10)
        noFill()
        arc(0, 0, 40, 13, -PI * 0.05, PI * 1.7)
      })
      // let result2 = getBody(4, 0).position
      // pushpop(() => {
      //   translate(result2.x, result2.y)
      //   translate(22, 0)
      //   rotate(eyeAngle + PI + sin(result2.y / 20) / 5 + PI / 2.6)
      //   stroke(block.color2)
      //   strokeWeight(8)
      //   noFill()
      //   ellipse(0, 0, 40, 13, 50)
      // })
    } else if (block.accessory == "Scar") {
      let result = getMidBodyPosAndAngle(max(int(block.size.w * 0.42), 4))
      pushpop(() => {
        stroke(block.isColorDark ? 255 : 0)
        translate(result.position.x, result.position.y)
        rotate(eyeAngle + PI)
        translate(0, 19)
        rotate(PI * 0.05)
        strokeWeight(3)
        line(-10, 0, 50, 0)
        for (var i = 0; i < 4; i++) {
          line(i * 15, -5, i * 15, 5)
        }
      })
    } else if (block.accessory == "Bowtie") {
      pushpop(() => {
        // fill("#f43333")
        fill(block.color == block.color2 ? "#f43333" : block.color2)
        translate(TiePos.position.x, TiePos.position.y)
        rotate(eyeAngle + PI + -sin(TiePos.position.x / 20) * 0.3)
        translate(0, -10)
        beginShape()
        vertex(-25, 10)
        vertex(25, -10)
        vertex(25, 10)
        vertex(-25, -10)
        endShape(CLOSE)
      })
    } else if (block.accessory == "Bracelet") {
      pushpop(() => {
        let result = getMidBodyPosAndAngle(max(int(block.size.w * 0.42), 4))
        let st = result.st,
          ed = result.ed
        strokeWeight(3)
        for (var i = 0; i < 16; i++) {
          let xx1 = lerp(st.x, ed.x, i / 16),
            yy1 = lerp(st.y, ed.y, i / 16) + sin((i / 16) * PI) * 30
          let xx2 = lerp(st.x, ed.x, (i + 1) / 16),
            yy2 = lerp(st.y, ed.y, (i + 1) / 16) + sin(((i + 1) / 16) * PI) * 30
          stroke(block.color2)
          line(xx1, yy1, xx2, yy2)
          if (i > 3 && i < 14 && i % 2 == 0) {
            if (i % 4 == 0) {
              fill(block.hairColor)
              stroke(block.hairColor)
            } else {
              fill(block.color2)
              stroke(block.color2)
            }
            ellipse(xx1, yy1, 12)
          }
        }
        // ellipse(position.x, position.y, 30)
        // for (var i = 0; i < 20; i++) {
        // line(st.x, st.y, ed.x.ed.y)
        // }
      })
    } else if (block.accessory == "Tie") {
      pushpop(() => {
        fill(block.color == block.color2 ? "#f43333" : block.color2)
        translate(TiePos.position.x, TiePos.position.y)
        rotate(eyeAngle + PI + sin(TiePos.position.x / 20 + frameCount / 10) * 0.2)
        translate(0, 10)
        beginShape()
        vertex(0, -30)
        vertex(15, 40)
        vertex(0, 60)
        vertex(-15, 40)
        endShape(CLOSE)
        fill(255, 40)
        beginShape()
        vertex(0, -30)
        vertex(15, 40)
        vertex(-15, 40)
        endShape(CLOSE)
      })
    }

    //Dialog
    // if (frameCount > 60 * 5) {

    let delay = (blockId / 2) * 1000
    if (Date.now() - activeDialog.ts - delay < activeDialog.duration) {
      // console.log(blockId)
      let easeOutCubic = (t) => --t * t * t + 1
      let ratio = (Date.now() - activeDialog.ts - delay) / activeDialog.duration
      push()
      translate(headSt.position.x + 50, headSt.position.y)
      scale(easeOutCubic(map(ratio, 0, 0.1, 0, 1, true)) + -easeOutCubic(map(ratio, 0.9, 1, 0, 1, true)))
      rotate(eyeAngle + PI)
      drawDialog(activeDialog.content, 0, 0)
      pop()
    }

    if (Date.now() - actionStatus.ts - delay < actionStatus.duration) {
      let ratio = (Date.now() - activeDialog.ts - delay) / activeDialog.duration

      if (actionStatus.action == "ham") {
        // console.log("haming")
        allBlocks.forEach((block, blockId) => {
          block.bodies.forEach((body, bodyId) => {
            if (bodyId % 3 == 0) {
              Matter.Body.setVelocity(
                body,
                Matter.Vector.create(sin(frameCount / 2 + bodyId * PI) * 15, cos(frameCount / 2 + bodyId * PI) * 15),
              )
            }
          })
        })
      }
      if (actionStatus.action == "jump") {
        if (actionStatus.jumped == false) {
          actionStatus.jumped = true
          actionStatus.originalGravity = world.gravity.y
          world.gravity.y = -1
          setTimeout(() => {
            world.gravity.y = actionStatus.originalGravity
          }, 500)
        }
      }
    }

    // }
  })

  var a = mouseConstraint.constraint.pointA
  var bodyB = mouseConstraint.constraint.bodyB
  if (bodyB) {
    cursor("grab")
    strokeWeight(2)
    stroke(255, 20)
    line(a.x, a.y, bodyB.position.x, bodyB.position.y)
    bodyB.active = true
  } else {
    cursor("")
  }

  push()
  blendMode(MULTIPLY)
  image(overAllTexture, 0, 0)
  pop()
}

function keyPressed() {
  if (key == "s") {
    save()
  }
}

/*
  Helper functions
*/

// parse parameters
function setupParametersFromTokenData(token) {
  let hashPairs = []
  //parse hash
  for (let j = 0; j < 32; j++) {
    hashPairs.push(token.hash.slice(2 + j * 2, 4 + j * 2))
  }
  // map to 0-255
  return hashPairs.map((x) => {
    return parseInt(x, 16)
  })
}

function generateSeedFromTokenData(token) {
  return parseInt(token.hash.slice(0, 16), 16)
}

/*
  Random setup and helper functions, some of these are taken from
  @mattdesl's canvas-sketch-util Random library and adapted to work
  with this
*/

function rnd() {
  seed ^= seed << 13
  seed ^= seed >> 17
  seed ^= seed << 5

  let result = ((seed < 0 ? ~seed + 1 : seed) % 1000) / 1000
  return result
}

function range(min, max) {
  if (max === undefined) {
    max = min
    min = 0
  }

  if (typeof min !== "number" || typeof max !== "number") {
    throw new TypeError("Expected all arguments to be numbers")
  }

  return rnd() * (max - min) + min
}

function rangeFloor(min, max) {
  if (max === undefined) {
    max = min
    min = 0
  }

  if (typeof min !== "number" || typeof max !== "number") {
    throw new TypeError("Expected all arguments to be numbers")
  }

  return Math.floor(range(min, max))
}

function pick(array) {
  if (array.length === 0) return undefined
  return array[rangeFloor(0, array.length)]
}

function shuffleArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Expected Array, got " + typeof arr)
  }

  var rand
  var tmp
  var len = arr.length
  var ret = arr.slice()
  while (len) {
    rand = Math.floor(rnd() * len--)
    tmp = ret[len]
    ret[len] = ret[rand]
    ret[rand] = tmp
  }
  return ret
}

function distance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1))
}

function sampleSize(arr, num) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Expected Array, got " + typeof arr)
  }

  if (arr.length < num) {
    throw new TypeError("Array is has less elements than sample size, " + arr.length + " vs " + num)
  }

  let shuffled = shuffleArray(arr)

  return {
    samples: shuffled.slice(0, num),
    leftOver: shuffled.slice(num)
  }
}

function mapd(n, start1, stop1, start2, stop2) {
  return ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2
}

function mapParam(n, start, stop) {
  return mapd(n, 0, 255, start, stop)
}