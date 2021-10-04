<template lang="pug">
  #app
    .container-fluid
      .row
        .col-sm-12
          nav(v-if="!$route.path.includes('manage') && !$route.path.includes('/project/')",
              
              )
            //- router-link(to="/" :class="{active: $route.path=='/'}") Index
            //- router-link(to="/about" :class="{active: $route.path=='/about'}") About
            router-link(to="/")
              h2 CHE-YU WU
            div.subroute(:class="{white: $route.path=='/about'}")
              router-link(to="/" :class="{active: $route.path=='/'}") Works
              router-link(to="/about" :class="{active: $route.path=='/about'}") About
              //router-link(to="/experiment" :class="{active: $route.path=='/experiment'}") Experiments
              router-link(to="/arts" :class="{active: $route.path=='/arts'}") Arts
              router-link(to="/thesis" :class="{active: $route.path=='/thesis'}") Thesis
              //- router-link(to="/research" :class="{active: $route.path=='/research'}") Research
              a(href="/static/Che-Yu Wu Resume.pdf" target="blank" :class="{active: $route.path=='/resume'}") Resume
    transition(name="page" , mode="out-in")
      pageLoading(v-if="loading")
    transition(name="page" , mode="out-in")
      router-view(:key="$route.path")
    .row.copyright.mt-5(v-if="$route.path!='/thesis'")
      .col-sm-12.mt-2.pt-1.pb-5
        label Copyright© Che-Yu Wu, 2020
        .text-center.mt-2
          social-links
</template>

<script>
import pageLoading from '@/components/pages/pageLoading'
import socialLinks from '@/components/socialLinks'
import {mapState} from 'vuex'

export default {
  name: 'app',
  components: {
    pageLoading,
    'social-links': socialLinks
  },
  computed: {
    ...mapState(['loading'])
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i&display=swap');
canvas
  position: absolute
  z-index: -1
  left: 0
  top: 0

body
  font-family: 'IBM Plex Sans', sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  // color: #fff
  background-color: #fff
  color: #111
  overflow-x: hidden
  overflow-y: scroll

.page
  min-height: 100vh
  // height: auto
  // height: 100vh
  // overflow: hidden
  // border: solid 15px white

h1,h2,h3,h4,h5,h6
  font-weight: bold

nav
  margin: 15px
  font-weight: bold
  display: flex
  justify-content: space-between
  transition: 0.5s
  h2,a
    transition: 0.5s
  h2
    font-size: 1.5rem
    font-weight: 900
    color: black
  a
    color: black
    transition: 0.5s
    &:hover,&.active
      // border-bottom: solid 3px
      text-decoration: none
      padding-bottom: 0px
  &.white
    a,h2 
      color: white
  .subroute
    &.white
      color: white
    a
      margin-left: 10px
      margin-right: 10px
      padding-left: 10px
      padding-right: 10px
      transition: 0.5s
      
      &:hover,&.active
        // border-bottom: solid 2px
        // text-decoration: none
        // color: black
        background-color: black
        color: white
      // padding-left: 15px
      // padding-right: 15px
    
      // color: #ff8c11
  
  // margin-top: 60px

.page-enter-active,.page-leave-active
  transition: 0.5s
  // &:before
  //   display: block
  //   content: ""
  //   width: 100vw
  //   height: 100vh
  //   background-color: #222
  //   position: fixed
  //   top: 100vh
  //   left: 0
  //   transition: 0.5s
  //   transition-timing-function: ease-in
  //   z-index: 100
.page-leave-active
  &:before
    transition-timing-function: ease-out
.page-enter
  opacity: 0
  &:before
    top: 0vh
.page-enter-to
  opacity: 1

  &:before
    top: 100vh

.page-leave
  opacity: 1
  // &:before
  //   top: -100vh
.page-leave-to
  opacity: 0
  // &:before
  //   top: 0






.social-links
  a
    color: black
    margin-left: 6px
    margin-right: 6px
    font-size: 1.2rem
    transition: 0.5s
    &:hover i
      transform: scale(1.2)
        
.copyright
  opacity: 0.6
  h5
    font-weight: normal


</style>
