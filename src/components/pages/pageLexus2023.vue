<template lang="pug">
.page-exhibition.text-left.lexus-2023
  .container.pb-5.mt-md-5
    .row
      .col-lg-6.col-xl-5.px-4.px-md-5.h-100
        .mt-lg-5
        h2.text-center.pt-4 《城市輪廓》
        p.text-center.pb-3 231121 Urban Contour
        hr
        p.poem 在都市的幻影中，時間的蜃樓閃爍不已<br>
          | 未來如同未完成的畫，仍在慢慢描繪<br>
          | 我們透過物質世界的輪廓<br>
          | 勾勒出那些未被定義，卻美好的幻想<br>
        p.mt-2 藉由與Lexus驚探生活誌的雜誌封面共創，串連汽車與人、人與未來的三方對話，
          br.d-none.d-md-block
          | 完美詮釋第100期主題「登入未來Next Generation」
        p.mt-3
          | "In the urban mirage, phantoms dance with time's fleeting gleam,<br>
          | Where futures are still under construction, like a dream.<br>
          | With the solid forms of the material world, we trace,<br>
          | Undefined beauties and fantasies, a wistful space."
        .mt-5
          p.float-none.float-md-right.text-center
            //- | Che-Yu Wu 吳哲宇
            a(href="https://www.instagram.com/cheyuwu345/", target="_blank")
              img.sign(
                src="/static/img/cheyuwu/CHEYUWU__Primary Logo_White.png"
              ) 
      .col-lg-6.col-xl-7.order-first.order-md-last.p-0.p-md-3.p-lg-5
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
      title: "《城市輪廓》與 Lexus 驚探生活誌的雜誌封面共創",
      meta: [
        {
          property: "og:image",
          content: "/static/img/city.jpeg",
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
  font-family: serif
  .container
    max-width: 2000px
  h2
    font-size: 2.1rem
    font-family: serif
  pre
    color: rgba(255,255,255,0.9)

  .poem
    font-size: 1.1rem
    font-family: serif
    letter-spacing: 0.2
    border-left: solid 1px rgba(255,255,255,0.2)
    padding-left: 10px

  .imagebox
    width: 100%
    aspect-ratio: 1/0.8
    background-color: #333
    background-size: cover
  hr
    border: solid 0.5px white
    margin-bottom: 30px
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
