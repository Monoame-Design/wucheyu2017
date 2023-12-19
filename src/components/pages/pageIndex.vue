<template lang="pug">
.page-index
  iframe.index_yt.w-100(
    ref="yt_video",
    src="https://www.youtube.com/embed/B3mqk5w8FVo?autoplay=1&origin=https://cheyuwu.com&control=0&info=0&loop=1",
    title="YouTube video player",
    frameborder="0",
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
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
  .index_yt
    aspect-ratio: 16/9
    border: none
</style>
