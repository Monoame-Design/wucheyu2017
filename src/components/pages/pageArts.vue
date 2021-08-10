<template lang="pug">
  .page-art
    .container-fluid
      .row.mt-4
        .col-12
          h1 Generative Arts
          pre by Che-Yu Wu 
          p Keep exploring the world with curious mind and imaginations.
          
            
          a(href="https://www.instagram.com/bosscodingplease/" target="_blank" title="Instagram").mr-5
            i.fab.fa-instagram 
            span  bosscodingplease
          a(href="https://twitter.com/Majer666666" target="_blank" title="Instagram")
            i.fab.fa-twitter 
            span  Twitter
          a(href="https://foundation.app/@cheyuwu" target="_blank" title="Instagram") 
            img.icon(src="/static/icon_foundation.jpeg" )
            span  Foundation
          a(href="https://opensea.io/account?tab=created" target="_blank" title="Instagram") 
            img.icon(src="/static/icon_opensea.png" )
            span  Opensea
          
      .row.mt-4
        a.col-sm-6.col-md-4.col-lg-3.wow.fadeIn(v-for="(item,itemId) in sketches", 
          :href="`https://www.openprocessing.org/sketch/${item.visualID}`",
                target="_blank",@mouseenter="hoveringItem=item", @mouseleave="hoveringItem=null")
          img(:src="( hoveringItem===item && getGifUrl(item))? getGifUrl(item): getThumbnail(item)")
          //img(:src="( hoveringItem===item && getGifUrl(item))? getGifUrl(item): getCacheUrl(getThumbnail(item),item.title)")
          h5.mb-5 \#{{item.title}}
          
</template>

<script>
import axios from 'axios'
import {WOW} from 'wowjs'
import {mapState} from 'vuex'

export default {
  data(){
    return {
      // userData: {}
      hoveringItem: null
    }
  },
  mounted(){
    var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();
  },
  computed:{
    ...mapState(['userData']),
    sketches(){
      if (this.userData.user){
        let results= this.userData.user.visuals.filter(p=>p.pinnedOn)
        results.sort((a,b)=>a.createdOn>b.createdOn?-1:1)
        return results
      }
      return []
    }
  },
  methods: {
    getCacheUrl(url,name){
      return `https://cheyuwu.com/static/img/cache.php?url=${url}&imgname=${name}`
    },
    getGifUrl(item){
      return ((item.description || "").split("[GIF ")[1] || "").split("]")[0]
    },
    getThumbnail(item){
      return `https://openprocessing-usercontent.s3.amazonaws.com/thumbnails/visualThumbnail${item.visualID}@2x.jpg`
    }
  },
  created(){
    
  }
}
</script>
<style lang="sass">
.page-art 
  a
    color: black
    // padding: 15px
  a h5
    // background-color: black
    // color: white
    color: black
    margin-top: 10px
    font-weight: 500
    font-size: 1.2rem
    text-align: left
  img
    width: 100%
    height: auto
    box-shadow: 0px 40px 30px -20px rgba(black,0.1)
  .icon
    filter: saturate(0)
    height: 25px
    width: auto
    margin-left: 50px
  
  
</style>