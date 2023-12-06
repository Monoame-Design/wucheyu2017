<template lang="pug">
.page-exhibition.text-left
  .container-fluid.pb-5.px-3.pt-5
    .row
      .col-md-6.px-5.h-100
        h2.text-center.pt-5 《城市輪廓》
        p.text-center.pb-3 231121 Urban Contour
        p 在都市的幻影中，時間的蜃樓閃爍不已，<br>
          | 未來如同未完成的畫，仍在慢慢描繪，<br>
          | 我們透過物質世界的輪廓，<br>
          | 勾勒出那些未被定義，卻美好的幻想。<br>
        p
          | In the urban mirage, phantoms dance with time's fleeting gleam,
          | Where futures are still under construction, like a dream.
          | With the solid forms of the material world, we trace,
          | Undefined beauties and fantasies, a wistful space.
        p.float-right
          | Che-Yu Wu 吳哲宇
      .col-md-6.order-first.order-md-last
        iframe#work(
          ref="workIframe",
          src="/static/231121_UrbanContour/index.html"
        )
</template>

<script>
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
  // components: {
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
.page-exhibition
  background-color: black
  color: white
  min-height: 100vh
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
</style>
