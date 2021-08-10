
class Melody extends Module {
  constructor(args) {
    super(args)
    this.type = this.constructor.name
    // this.synth = args,synth
    this.notes = this.notes || []
    this.noteSpanSize = 17
    this.size.x = this.notes.length * this.noteSpanSize + 10
    this.size.y = 40
    this.index = -1
    this.started = false
  }
  playNextNote(delta = 1) {
    this.index += delta
    this.index = this.index % this.notes.length
    this.isTriggering = true
    this.lastTriggerTime = frameCount
    this.currentNote = this.notes[this.index]
    // console.log(this.index)
    if (this.currentNote) {
      // this.currentNote = 
      // console.log(currentNote)
      return this.currentNote
    }
    return null
  }

  updateNote(note,delta = 1) {
    this.notes[this.index % this.notes.length] = note
    // this.index--
  }

  input(args) {
    // console.log(args)
    let note
    if (args.note){
      this.updateNote(args.note)
      note = this.playNextNote(0)
      this.index++
    }else{
      note = this.playNextNote(1)
    }
    this.outputToNextNodes({
      note
    })
    // if (note) {
    // } else {

    // this.outputToNextNodes({
    //   note: ""
    // })
    // }
  }

  mouseWheel(delta) {
    if (this.isMouseInModule()) {
      this.notes.length += delta > 0 ? 1 : -1
      
      this.size.x = this.notes.length * this.noteSpanSize + 10
    }
  }
  updateModule() {
    // if ( frameCount % 20 && this.started){
    //   this.playNextNote ()
    // }
  }
  drawModule() {
    // rectMode(CENTER)
    push()
    translate(this.p.x, this.p.y)
    // translate(0,15)
    noStroke()
    // stroke(255)
    fill(105, 0, 0)
    // text(this.notes,0,0)
    if (this.isPressing) {
      stroke('red')
    }
    if (this.isTriggering) {
      fill(lerpColor(color('red'), color('black'), map(frameCount - this.lastTriggerTime, 0, 10, 0, 1, true)))
    }
    rect(0, 0, this.size.x, 5)
    fill(255)
    textAlign(CENTER, TOP)
    textSize(10)
    noStroke()
    this.notes.forEach((note, i) => {
      // rect(i*20,0,20,20)
      textAlign(LEFT, TOP)
      let freq = Tone.Frequency(note).toFrequency()
      let useR = 5
      if (this.index % this.notes.length == i) {
        fill(255, 0, 0)
        useR = 10
      } else {
        fill(255)
      }
      push()
      fill(255, 50)
      rect(i * this.noteSpanSize + 8, 15, 5, this.size.y * 0.5, 50)
      pop()
      circle(i * this.noteSpanSize + 10, map(Math.log(freq), 5, 7, this.size.y, 0), useR)

      push()
        if (note){
          text(note[0], i * this.noteSpanSize + 5, 5)
          textSize(8)
          fill(255,150)
          text(note[1], i * this.noteSpanSize + 12, 5)

        }

      pop()

    })
    pop()

    if (this.panner) {
      stroke(255)
      line(this.p.x, this.p.y, this.panner.p.x, this.panner.p.y)
    }
    if (this.scaler) {
      stroke(255)
      line(this.p.x, this.p.y, this.scaler.p.x, this.scaler.p.y)
    }
    // rectMode(CORNER)
  }
  trigger() {
    this.index = 0
    this.started = !this.started
    // this.loop.start(0)
    // Tone.Transport.start();

  }

}

class Transporter extends Module {
  constructor(args) {
    super(args)
    this.type = this.constructor.name
    this.keyCount = 5
    this.span = 20
    this.size.x = this.span * this.keyCount
    this.size.y = this.span
    this.panValue = this.panValue || 0

  }
  mouseWheel(delta) {
    if (this.isMouseInModule()) {
      this.panValue += delta > 0 ? 1 : -1
    }
  }
  drawModule() {
    push()

    translate(this.p.x, this.p.y)
    let keys = ["⎵","↓",,"↑","⎴"]
    for (var i = 0; i < 5; i++) {
     
      // if 
      // fill(255)
      if (i!=2){
        fill('white')
        // if (this.panValue == i - Math.floor(this.keyCount / 2)) {
        //   fill('red')
        // }
        
      }else{
        fill('black')
        // stroke('white')
      }
      rect(i * this.span, 0, this.span, this.span)
      fill(0)
      noStroke()
      if (i==2){
        colorMode(HSB)
        fill(map(this.panValue, -12,12, 180, 0,true), 40, 255)
        colorMode(RGB)
      } 
      textStyle(BOLD)
      text(keys[i] || this.panValue, 10 + i * this.span, 15)
    }
    fill('red')
    pop()
  }
  mousePressedModule(){
    let btnIndex= Math.floor((mouseX - this.p.x) / this.span) - Math.floor(this.keyCount / 2)
    if (btnIndex==-2) this.panValue=-12
    if (btnIndex==-1) this.panValue-=1
    if (btnIndex==1) this.panValue+=1
    if (btnIndex==2) this.panValue=12
  }
  trigger() {
    
    


  }
  handleNote(note) {
    return Tone.Midi(note).transpose(this.panValue).toNote()
  }
  input(args) {
    this.outputToNextNodes({
      note: this.handleNote(args.note)
    })
  }


}
class Randomizer extends Module {
  constructor(args) {
    super(args)
    this.type = this.constructor.name
    this.panScale = 10
    this.panValue = 20
    this.size.x = 50
    this.size.y = 50
    this.panValue = 0

  }
  mouseWheel(delta) {
    if (this.isMouseInModule()) {
      this.panScale += Math.round(delta / 5)
    }
  }
  drawModule() {
    push()
    translate(this.p.x + this.size.x / 2, this.p.y + this.size.y / 2)
    noFill()
    stroke(255, 100)
    circle(0, 0, this.panScale * 2)

    translate(this.panValue.x * this.panScale, this.panValue.y * this.panScale)
    rotate(this.panValue.x)
    fill(0, 0, 255)
    stroke(255)

    rect(0, 0, 10, 10)
    pop()
  }
  updateModule() {
    let x = noise(frameCount / 30, 5000) - 0.5
    let y = noise(frameCount / 30, 10000) - 0.5
    this.panValue = createVector(x, y)
  }
  trigger() {


  }
  handleNote(note) {
    return Tone.Midi(note).transpose(this.panValue.x * this.panScale).toNote()
  }
  input(args) {
    this.outputToNextNodes({
      note: this.handleNote(args.note)
    })
  }


}
class Emotioner extends Module {
  constructor(args) {
    super(args)
    this.type = this.constructor.name
    this.spanSize = 40
    this.size.x =  this.spanSize*3
    this.size.y =  this.spanSize
    this.majorChord = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
    this.minorChord = ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb']
    this.currentMapping = this.majorChord
    this.targetMapping = this.majorChord
    this.mood = this.mood || "Happy"
    this.moods = ["Happy","Sad","Lazy"]
    this.emojies = ["🙂","🙁","🥱"]
  }
  drawModule() {
    push()
      translate(this.p.x, this.p.y)
      this.moods.forEach((m,mId)=>{
        push()
          translate(mId* this.spanSize,0)
          fill(this.mood === m ? 150 : 0)
          rect(0, 0,  this.spanSize,  this.spanSize) 

          fill(255)
          textSize( this.spanSize-10)
          textAlign(LEFT, TOP)
          if (this.mood === m ) {
            translate(0, sin(frameCount / 10) * 5)
          }
        translate(5, 5)
        text(this.emojies[mId], 0, 0)
        pop()
    })
    pop()
  }
  trigger() {
    this.mood = this.moods[int((mouseX - this.p.x)/ this.spanSize)]
  }
  input(args) {
    let note = args.note
    this.targetMapping = (this.mood=="Sad" )?this.minorChord:this.majorChord
    let options = {}
    this.currentMapping.forEach((n, nid) => {
      note = (note || "").replace(n, this.targetMapping[nid])
    })
    if (this.mood=="Lazy"){
      options = {
        adsr: {
          attack: 0.10,
          decay: 0.3,
          release: 3,
          sustain: 0.5
        },
        detune: 2,
        len: "4n"
      }
    }
    if (this.mood=="Angry"){
      options = {
        adsr: {
          attack: 0.001,
          decay: 0.1,
          release: 0.1,
          sustain: 0
        },
        detune: 5,
        volume: 0,
        len: "8n"
      }
    }
    if (this.mood=="Lazy"){
      setTimeout(()=>{
        this.outputToNextNodes({
          note: note,
          ...options
        })
      },random(50))
    }else{

      this.outputToNextNodes({
        note: note,
        ...options
      })
      if (this.mood=="Angry"){
        setTimeout(()=>{
          this.outputToNextNodes({
            note: note,
            ...options
          })
        },100)
      }
    }
  }
}
class Metro extends Module {
  constructor(args) {
    super(args)
    this.type = this.constructor.name
    this.swing = this.swing || 0
    this.triggerCount = 0

    this.span = 12
    this.lastTriggerTime = 0
    this.isTriggering = false
  }
  mouseWheel(delta) {
    if (this.isMouseInModule()) {
      if (key == "Alt" && keyIsPressed) {
        this.swing += delta>0?3:-3
      } else {
        this.span += delta>0?1:-1
      }

    }
  }
  updateModule() {
    if (this.isTriggering && frameCount % this.span == 0) {
      this.triggerCount++

      setTimeout(() => {
        this.lastTriggerTime = frameCount
        this.outputToNextNodes(1)
      }, this.triggerCount % 2 == 1 ? 0 : this.swing)
    }

  }
  drawModule() {
    push()
    translate(this.p.x + this.size.x / 2, this.p.y + this.size.y / 2)
    if (this.isTriggering) {
      fill(lerpColor(color('red'), color('black'), map(frameCount - this.lastTriggerTime, 0, 10, 0, 1, true)))
    } else {
      fill(0)
    }
    stroke(255)
    circle(0, 0, this.size.x - 5)
    ellipse(this.swing / 4, 0, this.size.x / 3, this.size.y / 3)

    fill(255)
    text(this.span, this.size.x / 2, this.size.y / 2)

    pop()

  }
  trigger() {
    this.isTriggering = !this.isTriggering
  }
  input(args) {
    this.lastTriggerTime = frameCount
    this.outputToNextNodes(1)
  }
}
class Synth extends Module {
  constructor(args) {
    super(args)
    this.type = this.constructor.name
    this.symbol = this.symbol || "🎺"
    this.synth = this.synth || new Tone.PolySynth({
      polyphony: 4,
      volume : -5
    },Tone.Synth,
    {
      oscillator : {
      type : triangle
      } ,
      envelope : {
      attack : 0.005 ,
      decay : 0.1 ,
      sustain : 0.3 ,
      release : 1
      }
    }).toDestination()
    this.lastTriggerTime = 0
    this.isTriggering = false
    this.volume = this.volume || -8
  }

  mouseWheel(delta) {
    if (this.isMouseInModule()) {
      this.volume += delta > 0 ? 1 : -1
    }
  }
  updateModule() {
    // console.log(this.synth)
    this.synth.volume.value = this.volume
    this.volume=constrain( this.volume,-40,0)
  }
  drawModule() {
    push()

    let volumeH = map( this.volume,0,-40,this.size.y,0)
    fill(255,50)
    rect(this.p.x+this.size.x+4,this.p.y,2,this.size.y,10)
    fill(255,180)
    rect(this.p.x+this.size.x+4,this.p.y+this.size.y-volumeH,2,volumeH,10)

    translate(this.p.x + this.size.x / 2, this.p.y + this.size.y / 2)
    
    
    


    // if (this.isTriggering) {
    fill(lerpColor(color('yellow'), color('black'), map(frameCount - this.lastTriggerTime, 0, 10, 0, 1, true)))
    // } else {
    //   fill(0)
    // }
    rectMode(CENTER)
    rect(0, 0, this.size.x / 3, this.size.y / 3)
    textSize(40)
    text(this.symbol, 0, 20)
    // ellipse(0, 0, this.size.x, this.size.y)
    pop()

  }
  trigger() {
    // this.isTriggering = !this.isTriggering
    this.input({
      note: "440Hz"
    })
    this.synth.options.envelope.attack=0.5
    console.log( this.synth)
  }
  input(args) {
    // this.trigger(args.note)
    // console.log(args)
    if (args.adsr){
      this.synth.options.envelope.attack= args.adsr.attack || 0.5
      this.synth.options.envelope.decay = args.adsr.decay || 0.1
      this.synth.options.envelope.release = args.adsr.release || 1
      this.synth.options.envelope.sustain = args.adsr.sustain || 0.3
      // this.synth.options.envelope.attak=0.5
    }
    if (args.detune){
      this.synth.options.detune = args.detune
      // this.synth.options.envelope.attak=0.5
    }
    if (args.volume){
      this.volume = map(args.volume,0,127,-20,0)
      // this.synth.options.envelope.attak=0.5
    }
    let noteLen = args.len || "16n"

    this.lastTriggerTime = frameCount
    args = Array.isArray(args) ? args : [args]
    args.forEach(obj => {
      if ( obj && obj.note && (obj.note + "").indexOf('undefined')==-1 ){
        this.synth.triggerAttackRelease((obj || {}).note || "440Hz", noteLen)
      }
    })
  }
}
class Moduler extends Module {
  constructor(args) {
    super(args)
    this.type = this.constructor.name
    this.modulo = this.modulo || 4
    this.size.x = this.modulo * 20 + 5
    this.size.y = 30
    this.triggerCount = 0

    this.span = 8
    this.lastTriggerTime = 0
    this.isTriggering = false
  }

  mouseWheel(delta) {
    if (this.isMouseInModule()) {
      this.modulo += delta > 0 ? 1 : -1
      this.size.x = this.modulo * 20 + 5
    }
  }
  updateModule() {
    //     if (this.isTriggering && frameCount % this.span == 0) {
    //       this.triggerCount++

    //       setTimeout(() => {
    //         this.lastTriggerTime = frameCount
    //         this.outputToNextNodes(1)
    //       }, this.triggerCount % 2 == 1 ? 0 : this.swing)
    //     }

  }
  drawModule() {
    push()
    translate(this.p.x + 10, this.p.y)

    for (var i = 0; i < this.modulo; i++) {
      fill(255)
      if (i <= (this.triggerCount+2) % this.modulo) {
        fill('red')
      }
      ellipse(i * 20, this.size.y / 2, 10, 10)
    }
    // if (this.isTriggering) {
    //   fill(lerpColor(color('red'), color('black'), map(frameCount - this.lastTriggerTime, 0, 10, 0, 1, true)))
    // } else {
    //   fill(0)
    // }
    // stroke(255)
    // ellipse(0, 0, this.size.x, this.size.y)
    // fill(255)
    // text(this.span, this.size.x / 2, this.size.y / 2)

    pop()

  }
  trigger() {
    this.isTriggering = !this.isTriggering
  }
  input(args) {
    if (this.triggerCount % this.modulo == 0) {
      this.outputToNextNodes(args)
    }
    this.triggerCount++
    
  }
}
class Delayer extends Module {
  constructor(args) {
    super(args)
    this.type = this.constructor.name
    this.duration = this.duration || 50
    this.lastTriggerTime = 0
  }

  mouseWheel(delta) {
    if (this.isMouseInModule()) {
      this.duration += Math.round(delta / 5)
    }
  }
  updateModule() {}
  drawModule() {
    push()
    translate(this.p.x, this.p.y + 10)
    textSize(40)
    text("🐢", this.size.x / 2, this.size.y / 2 + map(frameCount - this.lastTriggerTime, 0, this.duration / 10, -15, 0, true))
    fill(255);
    textSize(12)
    text(this.duration, this.size.x / 2, this.size.y / 2 + 10)
    pop()

  }
  trigger() {
    this.isTriggering = !this.isTriggering
  }
  input(args) {
    this.lastTriggerTime = frameCount
    setTimeout(() => {
      this.outputToNextNodes(args)
    }, this.duration)
  }

}
class Harmonizer extends Module {
  constructor(args) {
    super(args)
    this.type = this.constructor.name
    this.harmony =  this.harmony || 3
    // this.lastTriggerTime = 0
  }

  mouseWheel(delta) {
    if (this.isMouseInModule()) {
      this.harmony += delta > 0 ? 1 : -1
    }
  }
  updateModule() {}
  drawModule() {
    push()
    translate(this.p.x, this.p.y)
    colorMode(HSB)
    noFill()
    let span = this.harmony + 3

    strokeWeight(this.size.x / span / 2)
    for (var i = 0; i < span; i++) {
      let r = this.size.x / span * i
      stroke(360 / span * i, 100, 100)
      arc(this.size.x / 2, this.size.y / 2, r, r, PI, 0)
    }


    pop()

  }
  trigger() {
    this.isTriggering = !this.isTriggering
  }
  input(args) {
    let results = Tone.Frequency((args || {}).note).harmonize([0, 4, 7, 12, 13, 17, 20, 25].slice(0, this.harmony)).map(note => ({
      note
    }))
    // this.outputToNextNodes(
    //  results[8]
    // )
    this.lastTriggerTime = frameCount
    // console.log(results.map(n=>n.note))
    this.outputToNextNodes(results)
  }

}
class Keyboard extends Module{
  constructor(args) {
    super(args)
    this.type = this.constructor.name
    this.keyW = 12
    this.keyH = 50
    this.keyCount = 15
    this.size.set(this.keyW*this.keyCount,this.keyH)
  }
  drawModule() {
    push()
    translate(this.p.x, this.p.y)
    fill(255)
    stroke(0)
    let blackIndex = [0,1,3,4,5]
    blackIndex = blackIndex.concat(blackIndex.map(o=>o+7))
    let keyInfo = this.getKeyPlace()
    for(var i=0;i<this.keyCount;i++){
      push()
      if (!keyInfo.black){
        if (keyInfo.index==i && this.isMouseInModule()){
          fill(200)
        }
        if (mouseIsPressed && keyInfo.index==i && this.isMouseInModule() ){
          fill(100)
        }

      }
        rect(i*this.keyW,0,this.keyW,this.keyH)
      pop()
    } 
    for(var i=0;i<this.keyCount;i++){
      push()
        if (blackIndex.indexOf(i)!=-1){
          fill(0)
          if (keyInfo.black){
           
            if (keyInfo.index==i && keyInfo.black && this.isMouseInModule()){
              fill(100)
            }
            if (mouseIsPressed && keyInfo.black && keyInfo.index==i && this.isMouseInModule() ){
              fill(150)
            }
          
          }
          rect(i*this.keyW+this.keyW*0.6,0,this.keyW*0.6,this.keyH/1.6)

        }
      pop()
    }
    pop()
  }
  getKeyPlace(){
    let hoveringIndex = floor((mouseX-this.p.x)/ this.keyW)
    let hoveringIndexBlack = floor((mouseX-this.p.x-this.keyW/2)/ this.keyW)
    let res = {
      index: 0,
      black: false
    }
    if (mouseY-this.p.y<this.keyH/1.6){
      res.black=true
      res.index = hoveringIndexBlack
    }else{
      res.index = hoveringIndex
    }
    return res
  }
  getkey(){
    
    let blackIndex = [0,1,3,4,5]
    blackIndex = blackIndex.concat(blackIndex.map(o=>o+7))
    let soundBase = 60
    let whiteMapping = [0,2,4,5,7,9,11]
    whiteMapping = whiteMapping.concat(whiteMapping.map(o=>o+12))
    whiteMapping = whiteMapping.concat(whiteMapping.map(o=>o+24))
    let blackMapping = [1,3,0,6,8,10,0]
    blackMapping = blackMapping.concat(blackMapping.map(o=>o+12))
  
    let keyInfo = this.getKeyPlace()
    if (keyInfo.black){
      return blackMapping[keyInfo.index]+soundBase
    }else{
      return whiteMapping[keyInfo.index]+soundBase

    }
  }
  mousePressedModule(k) {
    this.isTriggering = !this.isTriggering
    this.outputToNextNodes({
      note: Tone.Midi(k || this.getkey()).toNote()
    })
    
  }



}
// class MidiInput extends Module{

// }

class SoundSofter extends Module {
  constructor(args) {
    super(args)
    this.type = this.constructor.name
    this.duration = this.duration || 50
    this.lastTriggerTime = 0
  }

  mouseWheel(delta) {
    if (this.isMouseInModule()) {
      this.duration += Math.round(delta / 5)
    }
  }
  updateModule() {}
  drawModule() {

    push()
    translate(this.p.x, this.p.y + 10)
    textSize(40)
    text("☁️", this.size.x / 2, this.size.y / 2)
    fill(255);
    textSize(12)
    text(this.duration, this.size.x / 2, this.size.y / 2 + 10)
    pop()

  }
  trigger() {
    console.log(this.nextNodes)
    this.nextNodes.forEach(node=>{
      node.synth.context.options.envelope.attack=1
    })
  }
  input(args) {
    this.lastTriggerTime = frameCount
    setTimeout(() => {
      this.outputToNextNodes({
        ...args,
        adsr: {
          attack: this.duration/100,
          decay: 0.2,
          release: 3,
          sustain: 0.5
        }
      })
    }, this.duration)
  }

}