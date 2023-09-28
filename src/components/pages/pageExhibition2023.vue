<template lang="pug">
.page-exhibition.text-left
  .container.pt-md-5.pb-md-5
    h1.text-center.mt-4 《萬物公式》數位生命演化之旅
    img.w100.mt-2(
      src="https://systemeblob.blob.core.windows.net/allticket-prod/media/93dfc599-ee3f-4203-b7f7-b0b820ed95cd.jpg"
    )
    h3.mt-5 語音導聆（暫定）
</template>

<script>
export default {
  metaInfo() {
    return {
      title: "Interactive Memes by Che-Yu Wu",
      meta: [
        {
          property: "og:image",
          content: "/static/img/memes-og.png",
        },
      ],
    };
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
</style>
