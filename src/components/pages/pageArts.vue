<template lang="pug">
.page-art
  .container
    .row
      .col-12.mt-0
        //- h1.mb-3 Generative Arts
        //- p.mb-5 Keep exploring the world with curious mind and imaginations.
        .row.display-flex.justify-content-center.align-items-center
          .col-12
            input.float-right.d-none.d-lg-block(
              v-model="keyword",
              placeholder="Search"
            )
          //.col-lg-6.text-center 
            a.mr-5(
              href="https://www.instagram.com/bosscodingplease/",
              target="_blank",
              title="Instagram"
            )
              i.fab.fa-instagram
              span.ml-1 Che-Yu Wu
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
              img.icon.mr-1(src="/static/icon_foundation.jpeg")
              span.ml-1 Foundation
            a(
              href="https://opensea.io/account?tab=created",
              target="_blank",
              title="Instagram"
            )
              img.icon.mr-1(src="/static/icon_opensea.png")
              span.ml-1 Opensea

  .container
    .row.mt-4
      a.item.col-xl-4.col-lg-6.col-md-6.wow.fadeIn(
        v-for="(item, itemId) in filteredSketches",
        :href="`https://www.openprocessing.org/sketch/${item.visualID}`",
        target="_blank",
        @mouseenter="hoveringItem = item",
        @mouseleave="hoveringItem = null",
        :key="item.title"
      )
        .item-inner
          //- img(
          //-   :src="hoveringItem === item && getGifUrl(item) ? getGifUrl(item) : getThumbnail(item)"
          //- )
          img.bg(
            :src="hoveringItem === item && getGifUrl(item) ? getGifUrl(item) : getThumbnail(item)"
          )
          .container-fluid
            .row.align-items-center
              .col-md-4.col-sm-5
                img(
                  :src="hoveringItem === item && getGifUrl(item) ? getGifUrl(item) : getThumbnail(item)"
                )
              .col-md-8.col-sm-7
                h5 {{ getTitleInfo(item.title).name }}
                .barcode
                  img(
                    :src="hoveringItem === item && getGifUrl(item) ? getGifUrl(item) : getThumbnail(item)"
                  )
                pre.text-left.mt-5 Date: {{ getTitleInfo(item.title).date }}
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
      // console.log(this.userData.user);
      if (this.userData.user) {
        let results = (this.userData.user.visuals || []).filter(
          (p) => p.pinnedOn
        );
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
    getTitleInfo(title) {
      title = title || " ";
      return {
        date: title.split(" ")[0],
        name: title.slice(title.indexOf(" ")),
      };
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
  .barcode
    // transform: scaleY(100)
    overflow: hidden
    height: 20px
    width: 100%
    @keyframes moving
      0%
        transform: scaleY(500) translateY(5%)
      100%
        transform: scaleY(500) translateY(15%)
    img
      transform: scaleY(500)
      transition-duration: 1s
      animation: moving 40s infinite alternate

  *
    color: white
  .container
    max-width: 100%
  a
    color: white
    padding: 5px 10px
    &:hover
      text-decoration: none
  a h5
    color: white
    margin-top: 15px
    margin-bottom: 30px
    // border-bottom: 2px solid white

    font-weight: 600
    font-size: 1.6rem
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
  .item
    // padding: 5px
    padding: 0
  .item-inner
    border: solid 1px rgba(255,255,255,0.3)
    padding: 3vmin
    transition-duration: 1s
    position: relative
    overflow: hidden
    .bg
      position: absolute
      left: 50%
      top: 50%
      transform: translate(-50%,-50%)
      width: 100%
      opacity: 0
      z-index: 100
      pointer-events: none
      display: none
    &:hover
      border: solid 1px rgba(255,255,255,0.5)
      background-color: rgba(255,255,255,0.1)
      .barcode
        img
          transform: scaleY(500) translateY(1%)
      .bg
        opacity: 0.1
</style>