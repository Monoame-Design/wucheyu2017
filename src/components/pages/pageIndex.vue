<template lang="pug">
  <iframe ref="yt_video" width="100%" src="https://www.youtube.com/embed/B3mqk5w8FVo?autoplay=1&origin=https://cheyuwu.com&control=0&info=0&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</template>

<script>
export default {
  mounted() {
    this.$refs.yt_video.style.height = window.innerHeight + "px";
    // this.$refs.yt_video.style.marginTop = "-70px";
    this.$refs.yt_video.style.zIndex = 0;
    console.log(this.$refs.yt_video.style.height);
  }
};
</script>

<style>
</style>
