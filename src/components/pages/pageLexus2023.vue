<template lang="pug">
.page-exhibition.text-left.lexus-2023
  .container-fluid.pb-5.px-3.pt-5
    .row
      .col-md-6.px-5.h-100
        h2.text-center.pt-5 《城市輪廓》
        p.text-center.pb-3 231121 Urban Contour
        p.poem 「在都市的幻影中，時間的蜃樓閃爍不已，<br>
          | 未來如同未完成的畫，仍在慢慢描繪，<br>
          | 我們透過物質世界的輪廓，<br>
          | 勾勒出那些未被定義，卻美好的幻想。」<br>
        br
        p
          | "In the urban mirage, phantoms dance with time's fleeting gleam,<br>
          | Where futures are still under construction, like a dream.<br>
          | With the solid forms of the material world, we trace,<br>
          | Undefined beauties and fantasies, a wistful space."
        pre.mt-5 藉由與Lexus驚探生活誌的雜誌封面共創<br>
          | 串連汽車與人、人與未來的三方對話，<br>
          | 完美詮釋第100期主題「登入未來Next Generation」
        .mt-5
          p.float-right
            //- | Che-Yu Wu 吳哲宇
            a(href="https://www.instagram.com/cheyuwu345/", target="_blank")
              img.sign(
                src="/static/img/cheyuwu/CHEYUWU__Primary Logo_White.png"
              ) 
      .col-md-6.order-first.order-md-last
        iframe#work(
          ref="workIframe",
          src="/static/231121_UrbanContour/index.html"
        )
</template>

<script>
import socialLinks from "@/components/socialLinks";
export default {
  metaInfo() {
    return {
      title: "《萬物公式》數位生命演化之旅",
      meta: [
        {
          property: "og:image",
          content: "/static/img/ex2023.jpeg",
        },
      ],
    };
  },
  mounted() {
    setInterval(() => {
      this.$refs.workIframe.contentWindow.location.reload(true);
    }, 15000);
  },
  // computed: {
  //   workName() {
  //     return this.$route.params.name;
  //   },
  // },
  components: {
    "social-links": socialLinks,
  },
  //   ElectrizDemo,
  //   PageNftElectriz,
  //   PageNftSoulFish,
  //   PageNftFoundation,
  //   PageNftTheSoul,
  // },
};
</script>

<style lang="sass">
// @import url('https://fonts.googleapis.com/css2?family=Rokkitt:wght@100;200;300;400;500;600;700;800;900&display=swap')
.page-exhibition.lexus-2023
  background-color: black
  color: white
  min-height: 100vh
  overflow-x: hidden
  h2
    font-size: 3rem
  pre
    color: rgba(255,255,255,0.9)

  .poem
    font-size: 1.5rem
    font-family: 'NotoSans', sans-serif
    letter-spacing: 0.1
  .imagebox
    width: 100%
    aspect-ratio: 1/0.8
    background-color: #333
    background-size: cover

  .listenbox
    padding: 10px
  iframe
    width: 100%
    aspect-ratio: 5/6
    border: none
  .sign
    width: 100%
    max-width: 300px

  .social-links
    a
      color: white
      margin-left: 6px
      margin-right: 6px
      font-size: 2rem
      transition: 0.5s
      display: none
      &:hover i
        transform: scale(1.2)

      &:nth-child(2)
        display: block
</style>
