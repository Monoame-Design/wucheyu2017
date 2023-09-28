<template lang="pug">
.page-art
  .container
    .row.mt-3
      .col-12
        h1 Generative Arts
        p.mb-5 Keep exploring the world with curious mind and imaginations.
        .row.display-flex.justify-content-center.align-items-center
          .col-lg-6.text-left
            input.d-none.d-lg-block(v-model="keyword", placeholder="Search")
          .col-lg-6.text-center 
            |
            a.mr-5(
              href="https://www.instagram.com/bosscodingplease/",
              target="_blank",
              title="Instagram"
            )
              i.fab.fa-instagram
              span.ml-1 Bosscodingplease
            a(
              href="https://twitter.com/cheyuwu345",
              target="_blank",
              title="Instagram"
            )
              i.fab.fa-twitter 
              span.ml-1 Twitter
            a(
              href="https://foundation.app/@cheyuwu",
              target="_blank",
              title="Instagram"
            ) 
              |
              img.icon.mr-1(src="/static/icon_foundation.jpeg")
              span.ml-1 Foundation
            a(
              href="https://opensea.io/account?tab=created",
              target="_blank",
              title="Instagram"
            ) 
              |
              img.icon.mr-1(src="/static/icon_opensea.png")
              span.ml-1 Opensea

  .container
    .row.mt-4
      a.col-sm-6.col-md-4.col-lg-3.wow.fadeIn(
        v-for="(item, itemId) in filteredSketches",
        :href="`https://www.openprocessing.org/sketch/${item.visualID}`",
        target="_blank",
        @mouseenter="hoveringItem = item",
        @mouseleave="hoveringItem = null",
        :key="item.title"
      )
        img(
          :src="hoveringItem === item && getGifUrl(item) ? getGifUrl(item) : getThumbnail(item)"
        )
        //img(:src="( hoveringItem===item && getGifUrl(item))? getGifUrl(item): getCacheUrl(getThumbnail(item),item.title)")
        h5.mb-5 \#{{ item.title }}
</template>

<script>
import axios from "axios";
import { WOW } from "wowjs";
import { mapState } from "vuex";

export default {
  data() {
    return {
      // userData: {}
      hoveringItem: null,
      keyword: "",
    };
  },
  mounted() {
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)

      scrollContainer: null, // optional scroll container selector, otherwise use window
    });
    wow.init();
  },
  computed: {
    ...mapState(["userData"]),
    sketches() {
      if (this.userData.user) {
        let results = this.userData.user.visuals.filter((p) => p.pinnedOn);
        results.sort((a, b) => (a.createdOn > b.createdOn ? -1 : 1));
        return results;
      }
      return [];
    },
    filteredSketches() {
      if (!this.keyword) {
        return this.sketches;
      } else {
        return this.sketches.filter(
          (sk) =>
            sk.title.toLowerCase().indexOf(this.keyword.toLowerCase()) != -1
        );
      }
    },
  },
  methods: {
    getCacheUrl(url, name) {
      return `https://cheyuwu.com/static/img/cache.php?url=${url}&imgname=${name}`;
    },
    getGifUrl(item) {
      return ((item.description || "").split("[GIF ")[1] || "").split("]")[0];
    },
    getThumbnail(item) {
      return `https://openprocessing-usercontent.s3.amazonaws.com/thumbnails/visualThumbnail${item.visualID}@2x.jpg`;
    },
  },
  created() {},
};
</script>
<style lang="sass">
.page-art
  background-color: #000
  color: white
  padding-top: 50px
  min-height: 100vh
  *
    color: white
  .container
    max-width: 1700px
  a
    color: white
    padding: 5px 10px
    &:hover
      text-decoration: none
  a h5
    color: white
    margin-top: 15px
    margin-bottom: 30px
    border-bottom: 2px solid white

    font-weight: 600
    font-size: 1.4rem
    text-align: left
  img
    width: 100%
    height: auto
    box-shadow: 0px 20px 20px -10px rgba(black,0.1)
    border-radius: 5px
    overflow: hidden

  input
    width: 100%
    max-width: 300px
    border: solid 1px rgba(black,0.3)
    padding: 5px 20px
    border-radius: 500px
    background-color: transparent
    border: solid 2px white

  .icon
    filter: saturate(0)
    height: 25px
    width: auto
    margin-left: 50px
</style>