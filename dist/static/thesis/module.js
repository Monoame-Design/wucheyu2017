class Module {
  constructor(args) {
    let p = args.p? createVector(args.p.x,args.p.y):createVector(30,30) 
    let size = args.size? createVector(args.size.x,args.size.y):createVector(50,50)
    let def = {
      size: createVector(50,50) ,
      p: createVector(30,30),
      isPressing: false,
      type: "Module",
      nextNodes: []
    }
    Object.assign(def, args)
    // def.p = p
    // def.size = size
    Object.assign(this, def)
    this.p = p
    this.size=size
  }
  drawReact() {
    push()
      translate(this.p.x, this.p.y)
      stroke(255, 100)
      if (linkSource && this.isMouseInModule()) {
        stroke(50, 50, 255, 400)
        strokeWeight(4)
      }
      if (selectedModule===this) {
        stroke(50, 50, 255, 400)
        strokeWeight(4)
      }
      // fill(255)
      noFill()
      if (this.isPressing) {
        stroke('red')
      }
      rect(0, 0, this.size.x, this.size.y,2)
    pop()
  }
  draw() {
    push()
      fill(255)
      textAlign(LEFT, BOTTOM)
      noStroke()
      text(this.type, this.p.x, this.p.y-3)
    pop()
    push()
      fill(255)
      ellipse(this.p.x, this.p.y, 5, 5)
      ellipse(this.p.x, this.p.y + this.size.y, 5, 5)
    pop()
    push()
      this.drawReact()
    pop()
    this.nextNodes.forEach(node => {
      push()
        stroke(255)
        noFill()
        line(this.p.x, this.p.y + this.size.y, node.p.x, node.p.y)
      pop()
    })
    this.drawModule && this.drawModule()
  }
  update() {
    if (this.isPressing) {
      let span = 10
      this.p.add(createVector(mouseX - pmouseX, mouseY - pmouseY))
      // this.p=createVector(Math.round(this.p.x/span)*span,Math.round(this.p.y/span)*span)
    }
    this.updateModule && this.updateModule()
    // if (this.nextNodes.length && this.isPressing){

    //   this.nextNodes[0].p.x = this.p.x
    // }
  }
  trigger() {

  }
  mouseWheel() {}
  isMouseInModule() {
    return (mouseX > this.p.x && mouseX < this.p.x + this.size.x &&
      mouseY > this.p.y && mouseY < this.p.y + this.size.y)
  }
  isClickedOnOutputPoint() {
    let d = dist(mouseX,mouseY,this.p.x,this.p.y+ this.size.y)
    // console.log(d)
    return d < 10
  }
  
  isClickedOnInputPoint() {
    let d = dist(mouseX,mouseY,this.p.x,this.p.y)
    // console.log(d)
    return d < 10
  }
  mousePressed() {
    if (this.isMouseInModule()) {
      this.mousePressedModule && this.mousePressedModule()
      this.isPressing = true
    } else {
      this.isPressing = false
    }
    return this.isPressing
  }
  mouseReleased() {
    this.isPressing = false
    return this.isMouseInModule()
  }
  connectTo(node) {
    if (this.nextNodes.indexOf(node)==-1){
      this.nextNodes.push(node)
    }
    return this
  }
  input(args) {
    // console.log(args)
    this.outputToNextNodes(args)
  }
  outputToNextNodes(data) {
    this.nextNodes.forEach(node => {
      node.input(data)
    })
  }
}