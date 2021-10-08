<template lang="pug">
  .page.page-about#page_about
    .container.pt-5.content(v-html="htmlContent")
      //- .row
      //-   .col-sm-12
      //- .row.row-info.mt-5
      //-   .col-sm-12.col-info.text-left
          //- img.head.animated.fadeIn(src="/static/img/head2.jpg")
          //- h1 Che-Yu Wu
          //- h5.mt-1 New Media Artist, Interaction Designer, Creative Technologist
          //- pre Senior Product Manager @ Outernets
          //- br
          //- p Devoted to Creative Coding, immersive user experience design,<br> full-stack development, sound synthesis, and tutoring.
          //- ul.mt-4
          //-   li 
          //-     b 2020-2021 
          //-     span  | Senior Product Manager / Creative Technologist @ Outernets
          //-   li 
          //-     b 2018-2020 
          //-     span  | NYU IDM Graduate Research Assistant @ New York University
          //-   li 
          //-     b 2019 
          //-     span  | VR / AR Development Intern @ New Reality Co.
          //-   li 
          //-     b 2018
          //-     span  | System Engineer @Research Center for Technology and art, Tsing Hua College
          //-   li 
          //-     b 2017
          //-     span  | Teacher @ Hahow, Startup of Online education
          //-   li 
          //-     b 2014-2018
          //-     span  | Designer / Full-stack Developer @ Monoame Design Studio
          //-   li 
          //-     b 2014
          //-     span  | Cartography and AutoLISP Revelopmer @ Shyang-Horng AutoCAD Tech. Center
          //- //- social-links

</template>

<script>
import socialLinks from '@/components/socialLinks'

import showdown from 'showdown'
import p5 from 'p5'
let pData = `
# Che-Yu Wu 吳哲宇

New Media Artist / Senior Product Manager at Outernets / Founder of Monoame Design / Interaction Engineer / Graphic Designer / Musician / Lecturer / Tech Youtuber

![](https://i.imgur.com/fYCLCmn.jpg =300x300) 

## Bio

Che-Yu Wu is the founder of [Monoame Design](https://monoame.com/), **New media artist, designer, engineer, speaker, and entrepreneur** who enjoys quirky and unique things. By combining the rationality of his electrical engineering background in [National Yang Ming Chiao Tung University](https://www.nycu.edu.tw/) with the sentimentality of visual design, he draws inspirations from **nature, physics, modern art, mathematical rhythm, and music** to create compounding algorithmic works, explore the border between art and engineering, and establish unparalleled interactive experiences. 

Che-Yu founded [Monoame Design](https://monoame.com/) 8 years ago and worked with clients like [Department of Rapid Transit Systems](https://en.wikipedia.org/wiki/Department_of_Rapid_Transit_Systems,_Taipei_City_Government), [Nissan](https://www.nissanusa.com/), [National Palace Museum](https://www.npm.gov.tw/?l=2) and [Industrial Technology Research Institute](https://www.itri.org.tw/english/), [Taipei Computer Association](https://www.tca.org.tw/en/), [Taipei City Government ](https://english.gov.taipei/), [National Center for High‑Performance Computing](https://www.nchc.org.tw/?langid=2), [RemyMartin & Selinko](https://selinko.com/press/remy-martin-club-connected-bottle/) ... to provide dynamic experience applications and solutions.

In recent years after graduating from [**New York University, Integrated Digital Media MS**](http://idm.engineering.nyu.edu/), he devoted himself to advocating for and introducing over ten thousands students to **creative coding and new media art** through his Hahow online courses on animated website development and creative coding for interactive experience design.

## Research Interest
- Generative Art (Creative Coding)
- Sound Synthesis and genrative audio
- Human Computer Interaction
- Immersive User Experience Design
- Digital Visual and branding strategies for companies

## Profile
[Facebook](https://www.facebook.com/cheyuwu345/) ,[Twitter](https://twitter.com/cheyuwu345), [Instagram](https://www.instagram.com/cheyuwu345/), [Instagram (Generative Artworks)](https://www.instagram.com/cheyuwu345/), [Linkedin](https://www.linkedin.com/in/cheyuwu/?locale=en_US), [Youtube](https://www.youtube.com/channel/UCHX_XMhPrtvOmgGOnA2eTmA), [Portfolio](https://cheyuwu.com/), [Online Course](https://hahow.in/@majer?tr=majer), [Github](https://github.com/frank890417), [Codepen](https://codepen.io/frank890417), [Open Processing](https://openprocessing.org/user/139364/)

## Contact
* Main Email: cyw345@nyu.edu
* Web Project inquries: info@monoame.com


## Work Experience
- **Founder / Full-Stack Developer / [Monoame Design](https://monoame.com/)** / 2014/01 - present
    - Leaded teams of 3-8 people and execute 40+ company website development and branding projects for clients such as RemyMartin, Department of Rapid Transit Systems, National Palace Museum and Industrial Technology Research Institute.
    - Focused on createing unique digital experience, branding strategy, visual guidelines, interactive website solution for brands.
    - Founded CreativeCoding.in media & tutorial platform to organize creative coding & new media art materials for who want to get familiar with the field
- **Senior Product Manager / Senior Creative Technologist** / [Outernets](https://outernets.ai/) / 2020/07 - present
    - Lead the design and dev team to develop the leading-edge new interactive experience solution management and creation system.
    - Apply Computer Vision, game/application design, and data analytics to provide interactive advertisements experience for brands.
- **Unreal VR/AR Engineer  / [New Reality Company, R/GA](http://newreality.co/)** / 2019/05 - 2019/08
    - Develop VR and AR projects, Iterating prototypes using Unreal Game Engine (UE5).
    - Lead the intern team develop applications on Oculus Rift S, Leap Motion, Vive Pro and Magic Leap
    - Direct the demo video for Rain Forest MR project applying to the Epic Game Grant.
    - Integrating Evolution Algorithm in Unreal Engine, controlling AI plant placement.
- **Research Assistant / [New York University, Integrated Digital Media](http://idm.engineering.nyu.edu/)** / 2018/09 - 2020/05
    - Construct the TA system of Creative Coding class on IDM, assisted more than 40 students.
    - Provide technical support for 6 class sessions on p5.js, coding arts, interactive games, data visualization, and Arduino & Wearable hardware development projects.
    - Participate in Machine Learning Art projects and assist Course Material Management.
- **Interactive Design Engineer / [Research Center for Technology and art, Tsing Hua College](https://techart.nthu.edu.tw/)** / 2018/02 - 2018/06
    - Work as senior engineer and system architect for the Internet of Things exhibition “Image of NTHU”, which daily attract 500+ people interact with the exhibition works.
    - Using socket.io, Arduino, MaxMSP and Speech Synthesis to create user-participating art works.
    - Participate in ESP32, PCB board and prototyping hardware / software development. Exhibiting with work “English 8-2” and “Mushroom Talker”.
- **Cartography and AutoLISP Development / [Shyang-Horng AutoCAD Tech. Center](http://www.autocad.tw/)** / 2014/05- 2016/06
    - Produce Animation for Chang Gung Memorial Hospital Technique press release
    - Development Automated Cartography Solution for Apex Material Technology Corp.
    - Produce Production 3D graphics for Energy technology & Elevator manufacturers

## Honors
- FutureTech Showcase Selected Work - Floating in the Sky / **Palpable Media & Deloitte** / 2020
- Accepted VR Work - Floating in the Sky, an experience of exploring the VR world with a floating umbrella (physical computing + VR) / **[NYC Media Lab](https://www.nycmedialab.org/) Exhibition** / 2020
- [1st Prize and Grand Prize of the Practitioner Group](https://digi.ey.gov.tw/Page/1538F8CF7474AB4E/cd53e320-984b-426b-ac0a-2cdf0bc6083a)  / **Smart City Hackathon hosted by Industrial Development Bureau Taiwan** / Taipei / 2016
- 1st Prize and Grand Prize of the Microsoft group / **Meizhu Hachthon (National Tsing Hua University & National Chiao Tung University)** / 
- 1st Prize / **Intelligent Ironman Creativity Contest** / 2013
- 1st Prize and Grand Prize of the Jury / **9th Acer Digital Innovation Award** / Taipei / 2013
- 2nd Prize of the Jury / **8th Acer Digital Innovation Award** / Taipei / 2012
- 1st Prize and Grand Prize of the Jury / **7th Acer Digital Innovation Award** / Taipei / 2011
- 1st Prize / **6th Acer Digital Innovation Award** / Taipei / 2010
- 1st Prize / **5th Acer Digital Innovation Award** / Taipei / 2009

## Selected Projects

![](https://i.imgur.com/g6CzpEG.jpg)

* [Thesis - Intuitive Music Expression Tool ](https://cheyuwu.com/thesis) / **[New York University, Integrated Digital Media](http://idm.engineering.nyu.edu/)** / [Demo](https://www.youtube.com/watch?v=iclQBGiTfiQ) - A web-based tool (made with p5.js) that allowed people to work together, edit and change the melody in an intuitive way. 
* [Floating in the sky - VR experience](https://cheyuwu.com/project/Floating_in_the_sky_-_VR_experience) / **[New York University, IDM](http://idm.engineering.nyu.edu/)**
    Floating in the sky is a first person VR experience, which allows you to escape from the dark city and explore the beautiful world using a magic umbrella to control your movement in the sky.
* [EXPLODE - Motion Capture Performance](https://cheyuwu.com/project/EXPLODE_-_Motion_Capture_Performance) / **[New York University, IDM](http://idm.engineering.nyu.edu/)**
    [EXPLODE](https://www.youtube.com/watch?v=-HFV1YAOq28) is a unique motion capture experience of the daydream world. From a small bottle of coke, we took the audiences away from reality. Explore the joyful moments of life and stimulation.
* VR L-system tree planting experience / [**New Reality Company**](http://newreality.co/) / [Demo](https://www.youtube.com/watch?v=GnyrFudDV6I)
    Making an interactive seed-planting experience using Oculus Rift * Leap motion to create a intuitive and immersive application.
* [Taipei Metro Soundscape - Interactive Website](https://cheyuwu.com/project/Taipei_Metro_Soundscape_-_Interactive_Website) / **[Monoame Design](https://monoame.com/)**
    This project was in cooperation with Harvest Music Production. Together we ordinated the 2017 Metro Soundscape Contest, hoping to collect musical works from local musicians and providing sounds exclusively belonging to the metro stations. 
* [Nissan New Juke Presale website](https://monoame.com/works/33) / **[Monoame Design](https://monoame.com/)**
    NISSAN teamed up with Warner Music to create "the first domestic cranial orgasm sensory singer", which shocked the pop music circle
* [RemyMartin & Selinko UI/UX Design & 3D modeling](https://monoame.com/works/5)/ **[Monoame Design](https://monoame.com/)**

## Teaching
![](https://i.imgur.com/CI0fE9u.png)

Online Course at [Hahow](https://hahow.in/)(Taiwan's biggest online academy)

- [Dynamic Interactive website Introduction HTML/CSS/JS 動態互動網頁程式入門](https://hahow.in/cr/monoame-webdesign1) at Hahow (9829 students, NT $2,000) 
- [Dynamic advanced WebFX introduction (JS/CANVAS/GSAP) 動態互動網頁特效入門](https://hahow.in/cr/monoame-webdesign2) at Hahow (4594 students, NT $2,500)
- [Generative Art & p5.js introduction (Creatie Coding) 互動藝術程式創作入門](https://hahow.in/cr/creative-coding-1) (2150 students, NT $2,400) 

## Tutorials 
Developer Youtube Channel [Boss, Coding Please](https://www.youtube.com/channel/UCHX_XMhPrtvOmgGOnA2eTmA) (6000 followers) 

### Web developments
- [Lets use socket.io to make a real-time interactive game! ](https://www.youtube.com/watch?v=QVZcMx3jtG8) 來用socket.io做個即時互動的遊戲吧！
- [Making Interactive emojis with Vue.js & GSAP](https://www.youtube.com/watch?v=VMjBnzeYhsI) 【互動網頁程式教學】用 GSAP 製作直播互動動態效果
- [Making a real-time postit board with Vue.js and Firebase ](https://www.youtube.com/watch?v=xOAHnDsd2BQ) 來做換色與快速整理的便利貼牆吧！
- [Student Presenation of Creative Coding class p5.js hahow](https://www.youtube.com/watch?v=w-K94aGZsYo) 互動藝術程式創作入門同學作品成果發表
- [How to Make SVG animaitons to make Scallion pancakes fly](https://www.youtube.com/watch?v=oB3lv1wW_I4) 來做SVG動畫讓蔥油餅翻滾吧!

### Creative Coding
- [Genrative Art and works in New York](https://www.youtube.com/watch?v=vjDLLqR5jks) 聊聊生成式藝術與工作
- [Introduction of Shaders and graphic rendering](https://www.youtube.com/watch?v=hN9FFM9GX6E) 聊聊圖像渲染與Shader
- [Making Fireworks festival with p5.js](https://www.youtube.com/watch?v=vvVwUMqoxIM) Creative Coding 花火大會教學


## Speakership
![](https://i.imgur.com/vkmXPWN.jpg)

- p5.js Creative Coding for Interactive Art 101 (upcoming) / [**Taiwan Contemporary Culture Lab (C-LAB)**](https://clab.org.tw/en/) / Taipei, Taiwan
- The Interaction of generative music / [**Live Code NYC**](https://livecode.nyc/) / New York
- [Creative Coding and Generative Art Seminar](https://www.youtube.com/watch?v=a0mhixudWE4) / [**Instutute of Inforamtion Systems and Applications, National Tsing Hua University** ](https://isa.site.nthu.edu.tw/p/406-1182-187768,r2619.php?Lang=zh-tw) / Hsinchu, Taiwan
- [Making interactive robots with p5.js & Creative coding](https://www.youtube.com/watch?v=oPDW3huKK-Y) / **Hahow 好學校** / Taipei, Taiwan
- [Making Interactive website with Vue, GSAP and d3.js and the strategy to intergrate the frameworks](https://www.youtube.com/watch?v=XLZ3lahTOWU) / [**MOPCON 2017**](https://mopcon.org/2017/?&lang=en) / Kaohsiung, Taiwan
- Getting onboard and experience the magic of Vue.js in 2hr  / [**Alpha Camp**](https://tw.alphacamp.co/) / Taipei, Taiwan
- [Making modern web games with canvas](https://www.youtube.com/watch?v=sOHcx9jekzs&t=9s) / [**Hex School**](https://www.hexschool.com/)) / Taipei, Taiwan
- [TEDxNCUE「嚮」- Creating possibilities with a multidisciplinary mindset](https://www.youtube.com/watch?v=bl5MrZ6GA98) / **[National Changhua University of Education](https://en.ncue.edu.tw/bin/home.php)** / Changhua, Taiwan
- The journey of self-learning Graphics Design 自學者之夜3｜平面設計篇 / [**Self-study night**](https://www.accupass.com/event/1609260802316724526560) / Taipei, Taiwan
- [Presentation Contest](https://www.youtube.com/watch?v=OF9wkZGrGPQ) / **National Chiao Tung University** / Hsinchu, Taiwan
 

## Writing

* [Being a Research Assistant at New York University (在紐約大學讀研當助教的進化日誌)](https://medium.com/%E8%80%81%E9%97%86%E4%BE%86%E9%BB%9E%E5%AF%87%E6%B1%80%E5%90%A7/%E5%9C%A8%E7%B4%90%E7%B4%84%E5%A4%A7%E5%AD%B8%E8%AE%80%E7%A0%94%E7%95%B6%E5%8A%A9%E6%95%99%E7%9A%84%E9%80%B2%E5%8C%96%E6%97%A5%E8%AA%8C-b5f0d604201a) (2.5k claps)
* [Making an online course that combine Web development, design, math and VFX (釀造一門結合網頁-設計-數學與特效的線上程式課程)](https://medium.com/%E8%80%81%E9%97%86%E4%BE%86%E9%BB%9E%E5%AF%87%E6%B1%80%E5%90%A7/%E9%87%80%E9%80%A0%E4%B8%80%E9%96%80%E7%B5%90%E5%90%88%E7%B6%B2%E9%A0%81-%E8%A8%AD%E8%A8%88-%E6%95%B8%E5%AD%B8%E8%88%87%E7%89%B9%E6%95%88%E7%9A%84%E7%B7%9A%E4%B8%8A%E7%A8%8B%E5%BC%8F%E8%AA%B2%E7%A8%8B-cef5d998c707) (4.2k claps)
* [Not only an online web course, but a bet to evolve the community (從不只是一門線上課程-而是一場推動進化的豪賭)](https://medium.com/%E8%80%81%E9%97%86%E4%BE%86%E9%BB%9E%E5%AF%87%E6%B1%80%E5%90%A7/%E5%BE%9E%E4%B8%8D%E5%8F%AA%E6%98%AF%E4%B8%80%E9%96%80%E7%B7%9A%E4%B8%8A%E8%AA%B2%E7%A8%8B-%E8%80%8C%E6%98%AF%E4%B8%80%E5%A0%B4%E6%8E%A8%E5%8B%95%E9%80%B2%E5%8C%96%E7%9A%84%E8%B1%AA%E8%B3%AD-2016%E8%88%8A%E6%96%87%E6%95%B4%E7%90%86-48d90fee113a) 

## Artworks
![](https://i.imgur.com/OimOeuY.jpg)

- [Foundation | Classic Series](https://foundation.app/@cheyuwu) Classic series will only mint a maximum of 10 works per algorithm on Foundation.
- [Opensea  | Crypto Pochi](https://opensea.io/collection/cryptopochi) CryptoPochi is an interactive NFT project that captures your daily life emotions and shapes. They laugh, cry, being lazy all the times.
- [Generative Art NFT - Che-Yu Wu](https://opensea.io/collection/che-yu-wu-generative-art) Creative Coding Art Source Code (21 items, Out of Print Collection at 07/20/2021.) 
- [Open Processing | Daily Creative Coding (400 works)](https://openprocessing.org/user/139364/?view=sketches#sketches)
- [Why hams](https://blog.floors.cafe/why-hams/)

## Exhibition
![](https://i.imgur.com/UTTpQ5T.jpg)

2021/07 - 2021/08 - [PARAÌSO](https://www.madsgallery.art/item/6c595765-f20b-44a8-a22b-30dcf7e13ba4/artist/che---yu-wu) International Contemporary Art exhibition


## Media Exposure
![](https://i.imgur.com/Nz5RAHE.jpg)

* Online Courses
    * [用 50 個小時，與 4,300 位同學一起「自己動畫互動網頁自己做」/ Crowd Watch](http://crowdwatch.tw/post/2735/?fbclid=IwAR2M0U_m0vXuHVrSixxmNcdA58TgeXUV1uf6tskwa8s5Hfila5Ppnq9sN6Y)
    * [突破線上課程低完課率，引領 4,300 名學生走入程式設計！](https://www.inside.com.tw/article/9629-how-to-create-successful-online-curriculum-fund-raising-plan) / Inside 關鍵評論網
    * [大學倒光光，為什麼它吸引6萬學生？](https://www.cw.com.tw/article/5090677) / 天下雜誌
 
* Growth & Life Style
    * [為何台灣人總要等「準備好了」才敢行動？或許我們從小教育就少了這一種態度......](https://www.storm.mg/lifestyle/251519?page=1) / 風傳媒
    * [專訪吳哲宇：人生沒有完全準備好的時候，唯有不停進化才能騰空翱翔 / Hahow好學校](https://blog.hahow.in/interview-of-hahow-teacher-che-yu/) 


* New Media Art
    * [PODCAST 程式語言與互動設計的火花 / 不停Butin](https://www.butin.co/episode/s2ep26)
    * [技術宅的浪漫　交大生自制「超閃」聖誕樹](https://www.bg3.co/a/ji-zhu-zhai-de-lang-man-jiao-da-sheng-zi-zhi-chao-shan-sheng-dan-shu.html)
    * [用一點固執和無限新奇，開啟這場程式大冒險！ / Hahow ](https://blog.hahow.in/teacher-interview-creative-coding/)

* Contest & Honors
    * [數位小王子吳哲宇連四年抱回宏碁獎](http://edushare.sclub.com.tw/viewthread.php?tid=5894) /  United Daily News 聯合報
    * [鼓勵數位創作 宏碁提供獎金150萬元](https://tw.news.yahoo.com/%E9%BC%93%E5%8B%B5%E6%95%B8%E4%BD%8D%E5%89%B5%E4%BD%9C-%E5%AE%8F%E7%A2%81%E6%8F%90%E4%BE%9B%E7%8D%8E%E9%87%91150%E8%90%AC%E5%85%83-093800165.html) / Rti 中央廣播電台
    * [宏碁數創獎 建中復興商工掄元](https://www.ntdtv.com/b5/2013/02/06/a844245.html) / 新唐人電視台 / Yahoo奇摩新聞
    * [宏碁數創獎 150萬獎金徵創意作品](https://tw.news.yahoo.com/%E5%AE%8F%E7%A2%81%E6%95%B8%E5%89%B5%E7%8D%8E-150%E8%90%AC%E7%8D%8E%E9%87%91%E5%BE%B5%E5%89%B5%E6%84%8F%E4%BD%9C%E5%93%81-105500066.html) / Yahoo 奇摩新聞
* Others
    * [建中生拍祈福影片「日本加油」 - 蘋果日報](https://tw.appledaily.com/headline/20110320/LNX3FN4T7KRXNOG2SHLBPFXY64/ )  /  Apple Daily News 蘋果日報
    * [UDN TV：【為自己按讚】吳哲宇.林自均](https://www.youtube.com/watch?v=uWG3IgBa6-0) / United Daily News 聯合報

`

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

let converter = new showdown.Converter({
  openLinksInNewWindow: true,
});
export default {
  mounted(){
      var cnv 
      var points = []

      var notes = []
      // this.bgsketch = new p5(bg,"test")

  },
  data(){
    return {
      bgsketch: null,
      pData,
    }
  },
  components: {
    socialLinks
  },
  beforeDestroy(){
    this.bgsketch.remove()
  },
  computed: {
    htmlContent(){
      return converter.makeHtml(this.pData)
    }
  }
}
</script>

<style lang="sass">
.page-about
  // font-size: 22px
  img
    width: 100%
    max-width: 100% 
  h1+p+p>img
    max-width: 500px
    height: auto
      // max-width: 500px
  text-align: left
  h1
    font-size: 2.2rem
  h2
    font-size: 1.5rem
    margin-top: 36px
    border-bottom: solid 2px black

  *
    line-height: 1.7
  // line-height: 2rem
  // min-height: 100vh
  // // background-color: black
  // color: white
  // // position: relative
  // .container.content
  //   position: static

  // .row-info
  //   position: absolute
  //   bottom: 50px
  //   left: 50px
  //   padding: 20px
  //   display: flex
  //   justify-content: center
  //   min-height: 60vh
  //   align-items: flex-end
  //   img
  //     // border-radius: 50%
  //     width: 150px
  //     margin-bottom: 50px
  //   // align-items: center
  // .background
  //   position: fixed
  //   left: 0
  //   top: 0
  // .content
  //   position: relative
  //   z-index: 1
  //   padding-left: 20px
  // ul
  //   padding: 0
  //   margin: 0
  //   list-style: none

  // p
  //   opacity: 1
  //   font-size: 2rem
  //   line-height: 1.5
    
  // .year
  //   color: #333
  //   font-size: 2rem
  //   font-weight: bold

  //   background-color: #fff
  //   display: inline-block
  //   padding: 10px
  // h1
  //   font-size: 4rem
  //   font-weight: 500
  // h3
  //   font-weight: bold
  // pre
  //   background-color: white
  //   color: black
  //   display: inline-block
  //   padding: 0px 10px
  
  // .yearlist
  //   list-style: none
  //   padding: 20px 0px
  //   &>li
  //     margin-bottom: 50px
  //     padding: 20px 20px
  //     // border-left: solid 2px 
      
      
  //   h4
  //     margin: 0
  //     margin-top: 30px
  //     margin-bottom: 20px
  //     font-weight: bold
  //   h5
  //     margin-top: 15px
      
      

</style>
