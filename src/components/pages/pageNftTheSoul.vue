<template lang="pug">
.page-nft.pb-5
  section.container.text-left.section-header
    .row.pt-5
      .col-12
        //- .demo-container
        iframe.w-100(
          src="https://ipfs.io/ipfs/bafybeidjaufhp24iz36rqonu3yhbxtj2inznnzuil3jmpkhp4dynq4gxee",
          style="width: 100%; min-height: 800px; max-height: 1000px; aspect-ratio: 1; border: none; margin-bottom: -30vh; margin-top: -20vh"
        )
    .row.pt-5
      .col-12
        h1 
          a(
            href="https://www.fxhash.xyz/generative/slug/soulfish",
            target="_blank"
          ) The Soul
    .row
      a.col-md-12(
        href="https://www.fxhash.xyz/generative/slug/soulfish",
        target="_blank"
      )
        .d-flex.justify-content-start.align-items-center.mb-2
          //- img(
          //-   src="https://www.fxhash.xyz/images/logo.svg",
          //-   style="height: 50px; width: 50px"
          //- )
          pre.ml-3.mt-3 Indep Project | Che-Yu Wu Interactive Collections
            br.d-block.d-lg-hidden
            | by Che-Yu Wu
    .row
      .col-lg-12 
        p In the darkness, the vast eyes of the universe gaze upon you, their pupils aglow with hues and radiance beyond this realm, inquiring about the essence of your being.
        p "The Soul" was inspired by Olafur Eliasson's "The Weather Project" installation from 2003, as well as the brand visual for the 2022 Solana Breakpoint Conference. The use of fluorescent colours and gradients in the conference's branding inspired the use of these elements in my own work. 
        p I developed while attending the conference. The work aims to bring the outside world inside and create a cosmic vision for the audience to experience. The work is meant to resemble an immense, floating eye staring into the void and asking the audience to consider the meaning of life and their deepest desires.
    .row.my-4
      .col-12.col-lg-4
        h3 Artist
        ul
          li Project Artist: Che-Yu Wu
          li Launch editions: 1000 (ERC 1155)
          li Start Date/Time: 2023

      .col-12.col-lg-5
        h3 Functionalities
        ul 
          li Move your mouse to interact with the artwork
          li Click to enable sound
      .col-12.col-lg-3
        a.d-md-block(
          href="https://opensea.io/assets/ethereum/0xf645c744557c69de9f326468b09b27db70c27993/1",
          target="_blank"
        )
          button.btn Project Link
        //- a.d-md-block.mt-3(href="/static/artblocks_cheyu.ics", target="_blank")
        //-   button.btn 
        //-     i.far.fa-bell(style="color: white")
        //-     | &nbsp;Set Reminder
    .row.py-4
      .col-lg-12
        p(style="font-size: 50px;font-style: italic;") "Lost in the depths of the lake's shore,  
          br
          | The world's reflection is seen as a subjective projection,  
          br
          | Reflecting on unease and fear,  
          br
          | Complexifying the reality perceived."
    .row.py-4

      .col-lg-12
        p Solo Exhibtion | 2022/May in Taipei 101, Taipei, Taiwan
        img.w-100(src="/static/img/101-photo-rex-3.jpeg")
        p The Soul in the audio-visual performance We shall now delve into the depths of The Soul. This creation, the pupil's work, Was born out of a moment of self-doubt, As I attended a conference on block chain in Portugal. I was not a pioneer in the field, but rather stumbled upon it through NFT. As I sat in the conference room, surrounded by technical jargon, I was lost, confused, and questioning my existence.
    .row.py-4
      .col-lg-4
        br
        br
        h3 That's how it get started
        p A mysterious and immense presence, anonymous in the world. Staring, with big eyes and pupils, as if to ask me something. A silent conversation, leading me on a journey of self-discovery. As I explored my inner heart, I came to understand who I am. In The Soul, you will find a delicate texture, crafted with the Shader technique. Each pixel calculated to present its rule, with twists of color and form. The Soul is a departure from my previous works, which were steeped in geometry. This creation, born of self-doubt, now serves as a testament to the power of exploration and discovery.
      .col-lg-8
        img.w-100(src="/static/img/nft-the-soul-101.jpeg")
    .row.py-4
      .col-lg-12
        h2 Live performance 
    .row.py-4
      .col-lg-4
        img.w-100(src="/static/img/the-soul-with-che-yu-wu.jpeg")
      .col-lg-8
        br
        br
        p The Soul, an immersive work that captures your gaze with a giant eye, creates a new dimension of art. The projection on the floor is not only grand in scale, reaching a size of five or ten meters, but also aesthetically pleasing. The generative music in The Soul is a unique expression of art that blends with its visuals.
        p The generative music in this work is not like traditional music, with fixed length pieces. Instead, the chords are pre-set and the odds are fixed, creating a system that evolves over time. The generative music creates an organic and lively sound that never stops, with the use of digital synthetic technologies such as sine and triangle waves
        p These mathematical ways of describing waveforms serve as the building blocks of the organic sounds we hear. Whether the sound is loud or quiet, the frequency is repeated and overlapped, making the sound more complex. The combination of generative sound and visual creates a complete program, blurring the lines between art and technology.

    .row.py-4
      .col-12
        h3 The Soul in Audio-Visual Performance
        video.w-100(src="/static/img/the-soul-101-video.mp4" loop muted autoplay)


</template>

<script>
//let allSrc = Array.from(document.querySelectorAll(".CardsContainer_container__D68gk img")).map(k=>k.src)
//let allHref = Array.from(document.querySelectorAll(".CardsContainer_container__D68gk a")).map(k=>k.href)
//allSrc.map((src,id)=>({src: src,href: allHref[id]}))
export default {
  metaInfo: {
    title: "The Soul by Che-Yu Wu",
    meta: [
      {
        property: "og:image",
        content: "/static/img/the-soul-og.png"
      }
    ]
  },
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Rokkitt:wght@100;200;300;400;500;600;700;800;900&display=swap')
.page-nft
  background-color: black
  color: white
  margin-top: -15px
  font-family: 'Rokkitt', serif
  font-size: 1.2rem
  overflow: hidden
  width: 100%
  a
    color: white
  h1 a
  hr
    margin-top: 30px
    border-bottom: solid 1px white
  .demo-container
    display: flex
    justify-content: center
    align-items: center

    iframe
      border: none
      max-width: 600px
  .btn
    @media only screen and (max-width: 768px)
      width: 100%
      margin-top: 15px
  h1
    font-size: 6rem
    font-family: 'Rokkitt', serif
    @media only screen and (max-width: 768px)
      font-size: 5rem
  h2
    font-size: 3rem
  img+p,img+ul
    margin-top: 30px
  img
    width: 100%
    height: auto
    box-shadow: 0px 20px 20px -10px rgba(black,0.1)
    border-radius: 8px
    overflow: hidden
  .section-header
    button
      border: solid 1px white
      background-color: black
      color: white
      font-size: 20px
      &:hover
        background-color: white
        color: black

    pre
      color: white
</style>
