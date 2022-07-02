<template lang="pug">
.page-project
  .container-fluid
    .row
      .col-sm-12
        .cover(:style="cssbg(work.cover)")
          router-link.btn-back(to="/") 
            i.fa.fa-angle-left.mr-3
            span Back to Works
    .container.content-area
      .row(v-if="work")
        .col-sm-12
          h1 {{ work.title }}

      .row
        .col-sm-6.col-content
          ul.text-left
            li 
              label Client
              span {{ work.client }}
            li 
              label Date
              span {{ work.date }}
            li 
              label Category
              span {{ work.type }}
            li 
              label Responsibilities
              span {{ work.work }}
            li(v-if="work.link")
              label Link
              a(:href="work.link", target="_blank") {{ work.link }}
        .col-sm-6.col-content
          ul.text-left
            li 
              label Honors
              p(v-html="processHTML(work.honor)")
      .row
        .col-sm-12.col-content
          p.text-left(v-html="processHTML(work.content)")
        //- h3 Project Information
    .row.row-nav
      router-link.col-sm-6.col-nav(
        :to="`/project/${projnav.pre.id}`",
        v-if="projnav.pre.id",
        :style="cssbg(projnav.pre.work.cover)"
      )
        h3 {{ projnav.pre.work.title }}

      router-link.col-sm-6.col-nav(
        :to="`/project/${projnav.nxt.id}`",
        v-if="projnav.nxt.id",
        :style="cssbg(projnav.nxt.work.cover)"
      )
        h3 {{ projnav.nxt.work.title }}
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  computed: {
    ...mapState(["works"]),
    work() {
      if (isNaN(this.$route.params.id)) {
        let toComp = (title) =>
          (title || "")
            .replace(/[\ ]/g, "_")
            .replace(/\//g, "_")
            .replace(/\&/g, "_")
            .toLowerCase();
        return Object.values(this.works).find(
          (w) => toComp(w.title) == toComp(this.$route.params.id)
        );
      } else {
        return this.works[this.$route.params.id];
      }
    },
    projnav() {
      let currentId = Object.keys(this.works).indexOf(this.$route.params.id);
      let pre = Object.keys(this.works)[currentId - 1];
      let nxt = Object.keys(this.works)[currentId + 1];
      return {
        pre: {
          id: pre,
          work: this.works[pre],
        },
        nxt: {
          id: nxt,
          work: this.works[nxt],
        },
      };
    },
  },
  methods: {
    processHTML(text) {
      return (text || "").replace(/\n/g, "<br>");
    },
    cssbg(url) {
      let use_url = url && url != "" ? url : "/img/default.jpg";
      let result = {
        "background-image": `url("${use_url} ")`,
      };
      // console.log(result)
      return result;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
@keyframes coveropen
  0%
    height: 0
  100%
    height: 60vh

.page-project
  // padding-bottom: 20vh
  // color: white

  .content-area
    padding-top: 50px
  .btn-back
    position: fixed
    left: 0
    top: 0
    background-color: black
    color: white
    padding: 10px
  h1, h2
    font-weight: normal
  h1
    font-weight: bold
    margin-bottom: 30px
  h2,h3,h4
    font-weight: bold
    margin-top: 50px
  // p
    // margin-top: 10px
  // h2
  //   border-bottom: 4px solid #000

  .cover
    height: 60vh
    min-height: 60vh
    background-color: #eee
    background-position: center center
    // background-attachment: fixed
    // margin-top: 30px
    margin-bottom: 50px
    background-size: cover
    margin-left: -30px
    margin-right: -30px
    margin-bottom: 30px
    margin-top: -30px
    animation: coveropen 1s

  .content-area
    img
      // margin-top: 30px
      // margin-bottom: 30px
      width: 100%
      // min-height: 300px
      background-color: #eee

  label
    width: 140px
    font-weight: 600
    &:after
      content: ":"

.row-nav
  padding: 0
  margin: -30px

.col-nav
  cursor: pointer
  background-color: #eee
  background-size: cover
  height: 500px
  background-position: center center
  color: transparent
  margin-top: 200px
  tranisiton: 0.5s
  display: flex
  justify-content: center
  align-items: center
  // margin: -15px
  // width: calc( 100% + 30px )
  &:hover
    text-decoration: none !important
  h3
    position: relative
    z-index: 3
    transition: 0.5s
    text-decoration: none

  &:hover
    color: white
    &:before
      opacity: 0.7

  &:before
    transition: 0.5s
    content: ""
    display: block
    position: absolute
    width: 100%
    height: 100%
    left: 0
    top: 0
    background-color: rgba(black,1)
    opacity: 0
</style>
