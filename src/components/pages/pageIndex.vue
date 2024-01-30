<template lang="pug">
.page-index
  .container
    //- .row
    //-   .col-12
      //- iframe.w-100(src="https://deca.art/cheyuwu?subscribe=true")
    .row
      .col-12
        h2 2023 - 萬物公式 The Great Equation
        iframe.index_yt.w-100(
          ref="yt_video",
          src="https://www.youtube.com/embed/9CAwja6UBJs?autoplay=1&origin=https://cheyuwu.com&control=0&info=0&loop=1",
          title="YouTube video player",
          frameborder="0",
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowfullscreen
        )
        iframe.index_yt.w-100(
          ref="yt_video",
          src="https://www.youtube.com/embed/czsaFHdBfJQ?autoplay=1&origin=https://cheyuwu.com&control=0&info=0&loop=1",
          title="YouTube video player",
          frameborder="0",
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowfullscreen
        )
    .row
      .col-12
        h2 2022 - 混沌實驗室
        iframe.index_yt.w-100(
          ref="yt_video",
          src="https://www.youtube.com/embed/B3mqk5w8FVo?autoplay=1&origin=https://cheyuwu.com&control=0&info=0&loop=1",
          title="YouTube video player",
          frameborder="0",
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowfullscreen
        )
</template>

<script>
export default {
  mounted() {
    // this.$refs.yt_video.style.height = window.innerHeight + "px";
    // // this.$refs.yt_video.style.marginTop = "-70px";
    // this.$refs.yt_video.style.zIndex = 0;
    console.log(this.$refs.yt_video.style.height);
  },
};
</script>

<style lang="sass">
.page-index
  h2
    margin: 30px 0px
  .index_yt
    aspect-ratio: 16/9
    border: none
</style>
