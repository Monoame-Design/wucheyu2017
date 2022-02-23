<template lang="pug">
#page_about.page.page-about.text-left
  //- pre {{anchors}}
  ul.linkList
    li(v-for="anchor in anchors")
      a(:href="'#' + anchor.href", @click="scrollTo(anchor.href)") {{ anchor.title }}
  .container.mt-5
    .row.py-5
      .col-lg-5
        img.w-100(src="/static/img/about_photo.jpg")
      .col-lg-7
        h1.mt-2 Che-Yu Wu 吳哲宇
        h5 New Media Artist / Founder of Monoame Design
        p(
          v-html="mdToHtml(`Che-Yu Wu is a new media artist dedicated to intergrade art and computer science. After acquiring a master's degree in Integrated Digital Media from New York University, he led a development team of interactive design in an A.I. company. His VR/AR and creative coding skills allow him to build an immersive audio-visual experience. The artist's generative artworks have been shown worldwide and have influenced many creators over [Art Blocks](https://www.artblocks.io/project/216) and [Foundation](https://foundation.app/@cheyuwu).`)"
        )
        p(
          v-html="mdToHtml(`Wu's online courses on creative coding and new media art have inspired tens of thousands of students in Asia. Currently based in New York City, Wu is the founder of Monoame Design and has worked with [Taipei City Government](https://english.gov.taipei/), [National Palace Museum](https://www.npm.gov.tw/?l=2), [Nissan](https://www.nissanusa.com/), and [White Castle](https://www.whitecastle.com/), to name a few.`)"
        )
  .container.pt-4.content(v-html="htmlContent")
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
import socialLinks from "@/components/socialLinks";

import showdown from "showdown";
import p5 from "p5";
import cvString from "raw-loader!@/assets/cv.md";
// https://hackmd.io/iqCoVGVATm-xEloPigNyUw

function bg(sketch) {
  sketch.setup = function () {
    var canvas = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
    sketch.colorMode(sketch.HSB);
    canvas.parent("#page_about");
    // sketch.background(0)
  };
  sketch.windowResized = function () {
    sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);
  };
  sketch.draw = function () {
    sketch.background(0);

    sketch.stroke(255);

    for (var i = 0; i < sketch.width; i += 10) {
      if (i % 50 == 0) {
        sketch.stroke(255, 255, 255, 0.2);
      } else {
        sketch.stroke(255, 255, 255, 0.05);
      }
      sketch.line(i, 0, i, sketch.height);
    }
    for (var i = 0; i < sketch.height; i += 10) {
      if (i % 50 == 0) {
        sketch.stroke(255, 255, 255, 0.2);
      } else {
        sketch.stroke(255, 255, 255, 0.05);
      }
      sketch.line(0, i, sketch.width, i);
    }

    sketch.translate((sketch.width * 1.8) / 3, (sketch.height * 1.2) / 3);
    sketch.stroke(255);
    sketch.noStroke();
    let yy = window.scrollY;
    for (var o = 0; o < 25; o++) {
      sketch.push();
      sketch.rotate((sketch.PI / 10) * 2 * o);
      for (var i = 0; i < 90; i++) {
        let r = 180 / sketch.pow(i, 0.8);
        let deg =
          o +
          sketch.sin(
            yy / 100 +
              i / 50 +
              sketch.cos(sketch.frameCount / 20) / 30 +
              sketch.frameCount / 50
          ) /
            5 +
          sketch.noise(sketch.frameCount / 50, i * 10, o * 10) +
          sketch.cos(sketch.frameCount / 200);
        sketch.rotate(deg);
        sketch.stroke(yy / 50 + i, 50, 100 - o - i / 10);
        sketch.line(0, 0, r, 0);
        sketch.noStroke();
        sketch.fill(i * 3, 70, 100 - o - i / 10);
        sketch.ellipse(0, 0, sketch.log(i) * 1, 1 * sketch.log(i));
        sketch.translate(r, 0);
      }
      sketch.pop();
    }
  };
}

let converter = new showdown.Converter({
  openLinksInNewWindow: true,
});
export default {
  mounted() {
    var cnv;
    var points = [];

    var notes = [];
    // this.bgsketch = new p5(bg,"test")
  },
  data() {
    return {
      bgsketch: null,
      cvString,
    };
  },
  components: {
    socialLinks,
  },
  methods: {
    scrollTo(id) {
      let el = document.getElementById(id);
      let elTop = el.offsetTop;
      // console.log(id,el)
      window.scrollTo(0, elTop);
    },
    mdToHtml(str) {
      return converter.makeHtml(str);
    },
  },
  beforeDestroy() {
    // this.bgsketch.remove()
  },
  computed: {
    htmlContent() {
      return this.mdToHtml(this.cvString);
    },
    anchors() {
      return this.cvString
        .split(/\r?\n/)
        .filter((str) => str.indexOf("## ") == 0)
        .map((str) => ({
          title: str.slice(3),
          href: str.slice(3).toLowerCase().split(" ").join(""),
        }));
    },
  },
};
</script>

<style lang="sass">
.page-about
  // font-size: 22px
  .linkList
    position: fixed
    left: 10px
    top: 50%
    transform: translateY(-50%)
    list-style: none
    color: black
    display: none
    @media only screen and (min-width: 1600px)
      display: block
    a
      color: black
    li
      opacity: 0.5
      transition-duration: 0.5s

      &:hover
        opacity: 1
        font-weight: 800
      &:before
        display: inline-block
        content: "- "
        margin-right: 5px
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
