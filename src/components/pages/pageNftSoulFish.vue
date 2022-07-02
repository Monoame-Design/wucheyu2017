<template lang="pug">
.page-nft.pb-5
  section.container.text-left.section-header
    .row.pt-5
      .col-12
        //- .demo-container
        iframe.w-100(
          src="https://gateway.fxhash2.xyz/ipfs/QmWYvkFHPLBkmv1CSCK5vpm3MSBggbALDqRZQXitzPPLJn/?fxhash=oodGicCkjQy2pe9gZLrDXhTnYHP4hfsKY1QizPyuRdmVNzvUEzu",
          style="width: 100%; min-height: 500px; max-height: 1000px; aspect-ratio: 1; border: none; margin-bottom: -20vh; margin-top: -20vh"
        )
    .row.pt-5
      .col-12
        h1 
          a(
            href="https://www.fxhash.xyz/generative/slug/soulfish",
            target="_blank"
          ) Soul Fish
    .row
      a.col-md-12(
        href="https://www.fxhash.xyz/generative/slug/soulfish",
        target="_blank"
      )
        .d-flex.justify-content-start.align-items-center.mb-2
          img(
            src="https://www.fxhash.xyz/images/logo.svg",
            style="height: 50px; width: 50px"
          )
          pre.ml-3.mt-3 FXHASH Project #15625
            br.d-block.d-lg-hidden
            | by Che-Yu Wu
    .row
      .col-lg-12
        p Named after the artist Wu Che-Yu, the soul fish was born in the void and crystallized from human emotions.
        p Fluttering silently and slowly, their bodies almost disappeared in the light of the deep sea.The fish swims freely, and this is the happiness of the fish.
        p If we are not a fish, how do we know the joy of a fish? How do we know that we do not know the joy of fish? We will only learn about it when we come to the riverside.
        p Inspired by Zhuāngzǐ: "The Debate on the Joy of Fish" c. 3rd century BC
    .row.my-4
      .col-12.col-lg-4
        h3 Artist
        ul
          li Project Artist: Che-Yu Wu
          li Launch editions: 1000
          li Start Date/Time: June 30th, 2022

      .col-12.col-lg-5
        h3 Functionalities
        ul
          li Key S: Save
          li Holding mouse in different directions: Swim
          li Click and let the fish touch the Bubbles
          li Key B: Toggle border
          li Key P: Pause
      .col-12.col-lg-3
        a.d-md-block(
          href="https://www.fxhash.xyz/generative/slug/soulfish",
          target="_blank"
        )
          button.btn Project Link
        //- a.d-md-block.mt-3(href="/static/artblocks_cheyu.ics", target="_blank")
        //-   button.btn 
        //-     i.far.fa-bell(style="color: white")
        //-     | &nbsp;Set Reminder
  .container-fluid.pt-5(v-if="soulFishData")
    .row 
      a.col-lg-2.col-sm-6.col-xs-4(
        v-for="objkt in soulFishData",
        :href="objkt.href",
        target="_blank"
      )
        span \#{{ objkt.href.split('/').slice(-1)[0] }}
        //- span {{ objkt.metadata.thumbnailUri }}
        img.w-100(:src="objkt.src", style="aspect-ratio: 1")
  //.container-fluid.text-left.pb-5
    img.w-100(src="/static/img/nft_cover.png")
  //.container.text-left
    .row.py-4
      .col-lg-12
        h2 Project Concept
        p In physics, scientists collect debris through colliders hitting particles at high speeds, trying to find the smallest unit in the world, but such a small particle cannot be seen with the naked eye. How to detect it?
          br 
          | Traditionally, we use cloud chambers to make tiny particles leave tracks. When they pass through the foggy space, they will leave traces to symbolize their existence. If we want to judge the physical properties of the particles-mass, size with the strength of the electric charge, it can apply an electric or magnetic field to space. When the charged particles penetrate the electromagnetic field, they will be affected by the Lauren force and will be affected by the force perpendicular to the direction of motion, resulting in a vortex-like trajectory, leaving a picture the shape of a digital fern is similar, and its exact physical properties can be known by judging the mass of the particle and the radius of the trajectory.

    .row.py-4
      .col-lg-6
        h2 Cloud chamber
        p When doing art creation, just like scientists discovering new particles, artists are constantly drawing interesting ideas from reality and fantasy to collide with each other, trying to find a unique existence at the moment of collision, and in the process of fusion of ideas. Each thought in the book will shape the core creative concept through a series of brushstrokes, different experimental works, color blends, and trajectories. Art is the same as physics. Through continuous proof of concept (Prototyping), we find the most the real appearance, each artist is like a parallel universe with independent laws of physics, searching for the root through creation, searching for the self who has experienced countless differences and accumulations after being born in this world, and then interpreting the artist's own imagination through observable works and perspectives.
      .col-lg-6
        img.w-100(src="/static/img/nft_exp_1.png")
    .row.py-4
      .col-12
        h2 Space division and particle movement.
        p Use right-angle dividing lines and angle divisions to create different worlds. In each world, there are different laws of physics: electric field, noise, positive and negative rotation particle charge, or grid force, in the particles when crossing the boundary of space, there is a certain probability that new particles will be split out. When entering the space, it will be affected by the divided space and draw different trajectories. Each space also has its own gravitational acceleration and electromagnetic field, which can produce similar external particles. Star totem braided shape.

      .col-12
        h3 Space Division
        p The space is divided into the following categories:
        img.w-100(src="/static/img/nft_exp_3.png")
        ul 
          li Field → Electromagnetic field, the force is determined by sin and cos according to the current position, which will produce a trajectory like a vine or a winding picture
          li Noise → Perlin Noise, will randomly determine the direction of force and movement according to the noise distribution
          li Curl → According to the magnitude/mass and polarity of the charge, a vortex-like trajectory will be produced.
          li Step → Bring the grid coordinates of the discretized particles into the cos to calculate the force and generate a dynamic extending along the separation line and the diagonal line.

    .row.py-4
      .col-lg-6
        h3 Particles
        p Particles will be released from a point in space, giving random initial speed and direction to influence each other in space.
        p When particles are produced and moved, they will gradually consume their own mass and charge, change the trajectory of their movement, and observe the gradually shrinking vortex in the force of the electric field.
        p When the particles are split, the maximum number of splits and the generation limit of each particle prevents infinitely generated particles from occupying the screen.
        p There are eight combinations of colors, which are named after objects or scenes, so that the color combinations and particle trajectories can be matched into unique paintings, such as Taxi, Grass, Mint, NewsPaper to Kimono... etc.

      .col-lg-6
        img.w-100(src="/static/img/nft_exp_4.png")

    .row.mt-5
      .col-12
        h1 Renders
  //.container-fluid.mb-5
    .row
      .col-lg-6.mt-3
        img.w-100(src="/static/img/nft_render_1.png")
      .col-lg-6.mt-3
        img.w-100(src="/static/img/nft_render_2.png")

      .col-lg-6.mt-3
        img.w-100(src="/static/img/nft_render_3.png")

      .col-lg-6.mt-3
        img.w-100(src="/static/img/nft_render_4.jpg")

      .col-lg-6.mt-3
        img.w-100(src="/static/img/nft_render_5.png")

      .col-lg-6.mt-3
        img.w-100(src="/static/img/nft_render_6.png")
</template>

<script>
import soulFishData from "@/assets/soulfish.json";
//let allSrc = Array.from(document.querySelectorAll(".CardsContainer_container__D68gk img")).map(k=>k.src)
//let allHref = Array.from(document.querySelectorAll(".CardsContainer_container__D68gk a")).map(k=>k.href)
//allSrc.map((src,id)=>({src: src,href: allHref[id]}))
export default {
  data() {
    return {
      soulFishData,
    };
  },
  components: {},
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
