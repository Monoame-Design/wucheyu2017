<template lang="pug">
  .page.page-about#page_about
    .container.pt-5.content
      .row
        .col-sm-12
      .row.row-info.mt-5
        .col-sm-12.col-info.text-left
          //- img.head.animated.fadeIn(src="/static/img/head2.jpg")
          h1 Che-Yu Wu
          h5.mt-1 New Media Artist, Interaction Designer, Creative Technologist
          pre Senior Product Manager @ Outernets
          br
          p Devoted to Creative Coding, immersive user experience design,<br> full-stack development, sound synthesis, and tutoring.
          ul.mt-4
            li 
              b 2020-2021 
              span  | Senior Product Manager / Creative Technologist @ Outernets
            li 
              b 2018-2020 
              span  | NYU IDM Graduate Research Assistant @ New York University
            li 
              b 2019 
              span  | VR / AR Development Intern @ New Reality Co.
            li 
              b 2018
              span  | System Engineer @Research Center for Technology and art, Tsing Hua College
            li 
              b 2017
              span  | Teacher @ Hahow, Startup of Online education
            li 
              b 2014-2018
              span  | Designer / Full-stack Developer @ Monoame Design Studio
            li 
              b 2014
              span  | Cartography and AutoLISP Revelopmer @ Shyang-Horng AutoCAD Tech. Center
          //- social-links

</template>

<script>
import socialLinks from '@/components/socialLinks'

import p5 from 'p5'
function bg(sketch){
  sketch.setup=function(){
    var canvas = sketch.createCanvas(sketch.windowWidth,sketch.windowHeight)
    sketch.colorMode(sketch.HSB)
    canvas.parent('#page_about')
    // sketch.background(0)
  }
  sketch.windowResized=function(){
    sketch.resizeCanvas(sketch.windowWidth,sketch.windowHeight)
  }
  sketch.draw = function(){
    sketch.background(0)

    sketch.stroke(255)
    
    for(var i=0;i<sketch.width;i+=10){
      if (i% 50==0){
        sketch.stroke(255,255,255,0.2)
      }else{
        sketch.stroke(255,255,255,0.05)
      }
      sketch.line(i,0,i,sketch.height)
      
    }
    for(var i=0;i<sketch.height;i+=10){
      if (i% 50==0){
        sketch.stroke(255,255,255,0.2)
      }else{
        sketch.stroke(255,255,255,0.05)
      }
      sketch.line(0,i,sketch.width,i)
    }


    sketch.translate(sketch.width*1.8/3,sketch.height*1.2/3)
    sketch.stroke(255)
    sketch.noStroke()
    let yy = window.scrollY
    for(var o=0;o<25;o++){
      sketch.push()
      sketch.rotate(sketch.PI/10*2*o)
      for(var i=0;i<90;i++){
        let r = 180/sketch.pow(i,0.8)
        let deg = o  + sketch.sin(yy/100+ i/50 + sketch.cos(sketch.frameCount/20  )/30+ sketch.frameCount/50)/5+ sketch.noise(sketch.frameCount/50,i*10,o*10) + sketch.cos(sketch.frameCount/200)
        sketch.rotate(deg )
        sketch.stroke(yy/50+ i,50,100-o-i/10)
        sketch.line(0,0,r,0)
        sketch.noStroke()
        sketch.fill(i*3,70,100-o-i/10)
        sketch.ellipse(0,0,sketch.log(i)*1,1*sketch.log(i))
        sketch.translate(r,0)
      }
      sketch.pop()
      
    }
    
  }
  }

export default {
  mounted(){
      var cnv 
      var points = []

      var notes = []
      this.bgsketch = new p5(bg,"test")

    
  },
  data(){
    return {
      bgsketch: null
    }
  },
  components: {
    socialLinks
  },
  beforeDestroy(){
    this.bgsketch.remove()
  }
}
</script>

<style lang="sass">
.page-about
  line-height: 2rem
  min-height: 100vh
  // background-color: black
  color: white
  // position: relative
  .container.content
    position: static

  .row-info
    position: absolute
    bottom: 50px
    left: 50px
    padding: 20px
    display: flex
    justify-content: center
    min-height: 60vh
    align-items: flex-end
    img
      // border-radius: 50%
      width: 150px
      margin-bottom: 50px
    // align-items: center
  .background
    position: fixed
    left: 0
    top: 0
  .content
    position: relative
    z-index: 1
    padding-left: 20px
  ul
    padding: 0
    margin: 0
    list-style: none

  p
    opacity: 1
    font-size: 2rem
    line-height: 1.5
    
  .year
    color: #333
    font-size: 2rem
    font-weight: bold

    background-color: #fff
    display: inline-block
    padding: 10px
  h1
    font-size: 4rem
    font-weight: 500
  h3
    font-weight: bold
  pre
    background-color: white
    color: black
    display: inline-block
    padding: 0px 10px
  
  .yearlist
    list-style: none
    padding: 20px 0px
    &>li
      margin-bottom: 50px
      padding: 20px 20px
      // border-left: solid 2px 
      
      
    h4
      margin: 0
      margin-top: 30px
      margin-bottom: 20px
      font-weight: bold
    h5
      margin-top: 15px
      
      

</style>
