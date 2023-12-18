<template lang="pug">
.page-exhibition.text-left
  .container-fluid.pb-5.px-3.pt-5
    .row
      .col-12.px-5.w-100.col-md-4
        h2.text-center.pt-5.mb-4 Soulfish 靈魂魚
        // p.text-center.pb-3 231121 Urban Contour
        p 在星塵交織的寂靜中，吳哲宇以演算法的細膩筆觸，描繪出「靈魂魚」的生動輪廓。光影之下，它們在數位海洋中躍動，每一抹擺動，不僅是情感的流露，也是靈魂的低語。它們在閃耀的鱗片中映照出生命之光，在寂靜深海的柔波裡輕盈飄動，於虛與實的縫隙中，隱約地描繪出生命的詩篇。
        p 在吳哲宇的數位神話中，這些靈魂魚遨遊於虛構的海洋，舞動著每一個故事的信仰篇章，既真切又飄渺。它們在觀者心海的深處引發迴響，默默地織出一片無邊的靈性宇宙，使每一個觀瞻之人，在這幻境的海洋中找到情感的共鳴與靈魂的歸屬。

        //- p
        //-   | In the urban mirage, phantoms dance with time's fleeting gleam,
        //-   | Where futures are still under construction, like a dream.
        //-   | With the solid forms of the material world, we trace,
        //-   | Undefined beauties and fantasies, a wistful space.
        p.float-right
          | Che-Yu Wu 吳哲宇
      .col-12.col-md-8
        iframe#work(ref="workIframe", src="/static/soulfish/index.html")
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
      // this.$refs.workIframe.contentWindow.location.reload(true);
    }, 15000);
    window.addEventListener("resize", () => {
      this.$refs.workIframe.contentWindow.location.reload(true);
    });
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
  aspect-ratio: 1920/1080
  background-color: #333
  background-size: cover

.listenbox
  padding: 10px
iframe
  width: 100%
  aspect-ratio: 1920/1080
  border: none
</style>
