<template lang="pug">
.page-nft-all.text-left.p-3
  .container.pt-md-5.pb-md-5(v-if="!workName")
    component.row.py-3.nft-item(
      v-for="item in nftItems",
      :is="getLinkComponent(item.url)",
      :href="item.url",
      :to="item.url",
      target="_blank",
      :key="item.id"
    )
      .col-md-5.col-lg-6
        img.w-100(:src="item.imageUrl", :alt="item.title")
      .col-md-7.col-lg-6
        h2 {{ item.title }}
        h3
        h5 {{ item.platform }}, {{ item.date }}, {{ item.editions }} editions
        p(v-html="item.description1")
        p(v-html="item.description2")

    a.row.py-3.nft-item(
      href="https://opensea.io/assets/ethereum/0x33fd426905f149f8376e227d0c9d3340aad17af1/74",
      target="_blank"
    )
      .col-md-5.col-lg-6
        img.w-100(src="/static/nft/hamilywagmi.gif")
        //- iframe.w-100(
        //-   src="https://ipfs.io/ipfs/bafybeig7eymxakrydhgok5ixunaxszoewdizlkw2afohg6js5j7ajjiuvi",
        //-   style="width: 100%; aspect-ratio: 1; border: none"
        //- )

      .col-md-7.col-lg-6
        h2 Hamily x The Memes by 6529 x Che-Yu Wu
        h3
        h5 Season 2, Card 2 | 2023/3/2 | 690 editions
        p Amidst the crowd, the hams lie low,
          br
          | Scaling peaks and valleys, high and low,
          br
          | We're a meme community, unique and bold,
          br
          | Creating waves of madness, untold.
        p Our force is strong, our power great,
          br
          | Recreating trends, we never wait,
          br
          | Stealing the spotlight with style and flair,
          br
          | Leaving the world in awe and in despair.
        p Join us now, be a part of this art,
          br
          | The world of hams and memes, it's just the start,
          br
          | For we'll keep on rising, day by day,
          br
          | With our crazed creativity on full display.
        h3 Interactivity:
        ul
          li Move the mouse around to WAGMI with the hams
          li Press S to download image
          li Press H to go to the Hamily website

    a.row.py-3.nft-item(
      href="https://app.manifold.xyz/c/230206-Memegineering",
      target="_blank"
    )
      .col-md-5.col-lg-6
        img.w-100(
          src="https://i.seadn.io/gcs/files/548b31d254f1caf5a115304d9b3cff76.gif?auto=format&w=960",
          alt=""
        )

      .col-md-7.col-lg-6
        h2 230206 MEMEGINEERING
        h3
        h5 Che-Yu Wu Interactive Memes | 2023 | 420 editions
        p Piping interactive memes as the digital blood of the internet.
        p Memegineering is all about bringing dynamic and interactive experiences to the world of memes. These memes are not just static images, but rather they are designed to be interactive, allowing users to engage with the content in a unique and exciting way. Whether you're clicking, tapping, or scrolling, these memes are sure to provide a fun and dynamic experience that will keep you entertained for hours. With 420 editions, there's a never-ending supply of interactive memes to explore, making Memegineering a must-see for anyone who loves humor, memes, and the internet.
    router-link.row.py-3.nft-item(to="/nft/thesoul")
      .col-md-5.col-lg-6
        iframe.w-100(
          src="https://ipfs.io/ipfs/bafybeidjaufhp24iz36rqonu3yhbxtj2inznnzuil3jmpkhp4dynq4gxee",
          style="width: 100%; aspect-ratio: 1; border: none"
        )

        //- img.w-100(
        //-   src="https://gateway.fxhash2.xyz/ipfs/QmSjD9c2S8tN4f8QpJSRtxHhkKRtpiA8LmEoNRWAdxANW7",
        //-   alt=""
        //- )
      .col-md-7.col-lg-6
        h2 The Soul
        h3
        h5 Che-Yu Wu Interactive Collection | 2023 | 100 editions
        p In the darkness, the vast eyes of the universe gaze upon you, their pupils aglow with hues and radiance beyond this realm, inquiring about the essence of your being.
        p "The Soul" was inspired by Olafur Eliasson's "The Weather Project" installation from 2003, as well as the brand visual for the 2022 Solana Breakpoint Conference. The use of fluorescent colours and gradients in the conference's branding inspired the use of these elements in my own work.
        p I developed while attending the conference. The work aims to bring the outside world inside and create a cosmic vision for the audience to experience. The work is meant to resemble an immense, floating eye staring into the void and asking the audience to consider the meaning of life and their deepest desires.
    router-link.row.py-3.nft-item(to="/nft/soulfish")
      .col-md-5.col-lg-6
        iframe.w-100(
          src="https://gateway.fxhash2.xyz/ipfs/QmWYvkFHPLBkmv1CSCK5vpm3MSBggbALDqRZQXitzPPLJn/?fxhash=oodGicCkjQy2pe9gZLrDXhTnYHP4hfsKY1QizPyuRdmVNzvUEzu",
          style="width: 100%; aspect-ratio: 1; border: none"
        )

        //- img.w-100(
        //-   src="https://gateway.fxhash2.xyz/ipfs/QmSjD9c2S8tN4f8QpJSRtxHhkKRtpiA8LmEoNRWAdxANW7",
        //-   alt=""
        //- )
      .col-md-7.col-lg-6
        h2 SoulFish
        h3
        h5 fxhash, June 2nd 2022, 1000 editions
        p Named after the artist Wu Che-Yu, the soul fish was born in the void and crystallized from human emotions.
        p Fluttering silently and slowly, their bodies almost disappeared in the light of the deep sea.<br></br>The fish swims freely, and this is the happiness of the fish.
        p If we are not a fish, how do we know the joy of a fish?<br>How do we know that we do not know the joy of fish?
        p We will only learn about it when we come to the riverside.

    a.row.py-3.nft-item(href="https://fab.tw/", target="_blank")
      .col-md-5.col-lg-6
        img.w-100(src="/static/img/Projectp.png", alt="")
      .col-md-7.col-lg-6
        h2 Project % - FABDAO
        h3
        h5 The Largest Charity NFT fundraising project in Taiwan
        p Establish by Formosa Art Bank DAO (FAB DAO).
          br
          | One hundred mountains rise, one island is built;
          br
          | One hundred people rise, a culture is built.
        p FAB DAO, also known as Formosa Art Bank DAO, is a self-governing organization for charity NFT. The founders, Huang Dou Ni and Wu, Che-Yu, launched the largest charity NFT fundraising project in Taiwan, the "Project Percentage, %", which brings together cross-disciplinary organizations and individuals to create a new system and style in Taiwan NFT market that combines the theme of charity, art and culture.
        p FAB DAO focuses on minting and selling non-profit NFT, creating artist and collector communities, building blockchain experiences and designing blockchain education for the public. With goodness and eternity as our starting point, we are building a connected Web3 metaverse. We will apply the good features of blockchain to take the real actions in the real world.
    a.row.py-3.nft-item(
      href="https://www.fxhash.xyz/generative/5438",
      target="_blank"
    )
      .col-md-5.col-lg-6
        img.w-100(src="/static/img/soulsea.png", alt="")

        //- iframe.w-100(
        //-   src="https://gateway.fxhash2.xyz/ipfs/QmPDfMShxb1iQ12bwV4LivT5pC1UXoL9ZRcjjC7grr3r9P/?fxhash=ooto45sU86CaUZFWxUduRyCPqRYpVoSmKrcRcrkJ8DCxwziDb6o",
        //-   style="width: 100%; aspect-ratio: 1; border: none"
        //- )
      .col-md-7.col-lg-6
        h2 SoulSea
        h3
        h5 fxhash, Dec 29th 2021, 300 editions
        p You look down and find that the ocean in your heart is a sine wave.<br>The tide gently laps onto the shore.
        p The soul is the sea. You are the land.<br/>There are waves on the shore, and the waves are slices.
        p Gazing at the slices, you feel the coldness of the Arctic Ocean, the permafrost of the Antarctic Sea, the deep darkness of the bottomless sea.
        p Stay silent, hear the sound of the waves lapping at the innumerable shores far away.<br>Feel the soul of the digital ocean.

    a.row.py-3.nft-item(
      href="https://sliderverse.doodlelabs.io/",
      target="_blank"
    )
      .col-md-5.col-lg-6
        img.w-100(
          src="https://doodlelabs.mo.cloudinary.net/mainnet/1001272.png?tx=w_600",
          alt=""
        )
      .col-md-7.col-lg-6
        h2 Sliderverse
        h3
        h5 Doodle Lab, Dec 15th 2021 | 1284/5001 editions
        p In honor of White Castle’s 100th Birthday, renowned multimedia artist Che-Yu Wu has reimagined the White Castle menu through a generative art lens. Each unique edition within this series of collectible NFTs is generated by an algorithm at the time of mint, pushing the boundaries of physics, mathematics, and art. This series combines Che-Yu’s signature, interactive style with White Castle’s legendary sliders to explore the intersection between food, art, tech and culture.
        p And in keeping with White Castle’s spirit of feeding the souls of their communities and team members, a portion of the proceeds from Sliderverse will directly benefit our Team Member Relief Fund and the Ingram-White Castle Team Member Scholarship.

    router-link.row.py-3.nft-item(to="/nft/electriz")
      .col-md-5.col-lg-6
        img.w-100(src="https://media.artblocks.io/216000000.png", alt="")
      .col-md-7.col-lg-6
        h2 Electriz
        h3
        h5 Artblocks, Dec 7th 2021, 910 editions
        p "Electriz" is a series of works that use digital cloud chambers to observe the traces of unidentified particles. When doing art creation, just like scientists discovering new particles, artists continue to draw interesting ideas from reality and fantasy to collide with each other, trying to find a unique existence at the moment of collision in the process of mixing ideas.
        p The space in the work "Electriz" is divided into parts with different physical characteristics, which affect the movement, rotation, splitting, and annihilation of particles. It is an unpredictable experimental system with unlimited possibilities to explore the intersection of physics, mathematics, and art.

    a.row.py-3.nft-item(href="https://cryptopochi.com/", target="_blank")
      .col-md-5.col-lg-6
        img.w-100(
          src="https://pochi.nyc3.digitaloceanspaces.com/mainnet/0x26cb33fba22f213952b8b3f3af006913b6c5b5e91081bb5c9c7764c66c98b44b.gif",
          alt=""
        )
      .col-md-7.col-lg-6
        h2 Crypto Pochi
        h3
        h5 Sep 5th 2021 | 732/732 editions
        p CryptoPochis are mysterious creatures that capture different emotions in your daily life. Their faces speak for themselves. They simply lie on the ground and play all day. We catch and wrap them as NFTs for you to play with.

    a.row.py-3.nft-item(href="https://hamily.life/", target="_blank")
      .col-md-5.col-lg-6
        img.w-100(src="/static/img/strange robot.png", alt="")
      .col-md-7.col-lg-6
        h2 Seaham - Strange Robot
        h3
        h5 March 28th 2021
        p Seaham
        p Sail-o-bots is based on the original generative project Strange Robots by Che-Yu WuSource code derived from https://openprocessing.org/sketch/1150492 under CC-BY-SA 3.0 license. Modifications include: custom botGlasses variable added with 3 different cases; custom botLips variable added with 3 different cases; 10 sets of custom colors added; antennas, ear and nose size and geometric shape types updated.

    router-link.row.py-3.nft-item(to="/nft/foundation")
      .col-md-5.col-lg-6
        img.w-100(
          src="https://f8n-ipfs-production.imgix.net/QmdDNqJ9J9fEsTAaBjmdnHZ1px2zGS8BXnUnBvzdQCwSaN/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&max-w=1680&max-h=1680",
          alt=""
        )
      .col-md-7.col-lg-6
        h2 Foundation Classic Series
        h3
        h5 July 1st 2021
        p [Che-Yu Wu | Generative Art 4K Classic series]
        p Classic series will only mint a maximum of 10 works per algorithm on Foundation.
  .container.pt-2.pb-md-4
    router-link(to="/nft", v-if="workName") < Back
  PageNftMemes(v-if="workName == 'memes'")
  PageNftElectriz(v-if="workName == 'electriz'")
  PageNftSoulFish(v-if="workName == 'soulfish'")
  PageNftFoundation(v-if="workName == 'foundation'")
  PageNftTheSoul(v-if="workName == 'thesoul'")
  PageNftTheSoulOfFlowers(v-if="workName == 'thesoulofflowers'")
</template>

<script>
import ElectrizDemo from "@/components/ElectrizDemo";
import PageNftElectriz from "./pageNftElectriz";
import PageNftSoulFish from "./pageNftSoulFish";
import PageNftFoundation from "./PageNftFoundation";
import PageNftTheSoul from "./pageNftTheSoul.vue";
import PageNftMemes from "./pageNftMemes.vue";
import PageNftTheSoulOfFlowers from "./PageNftTheSoulOfFlowers.vue";
export default {
  data() {
    return {
      nftItems: [
        {
          id: 1,
          title: "Urban Contour",
          platform: "Fxhash",
          date: "Jan 5th 2024",
          editions: "114",
          description1: `「 In the urban mirage, phantoms dance with time's fleeting gleam,
                          <br> Where futures are still under construction, like a dream.
                          <br> With the solid forms of the material world, we trace,
                          <br> Undefined beauties and fantasies, a wistful space. 」 / Che-Yu Wu`,
          description2: `"Urban Contour" is a generative Impressionist program art piece that constructs a collective subconscious of a city. In many fragments, we can discover aspects similar to our own living environments. This artwork is a collective made up of everyone's impressions of the city. Within its abstract lines and structures, it connects the memories of each individual, carrying our dreams and fantasies about the future and ourselves.`,
          imageUrl: "/static/nft/urban_contour/main.jpeg",
          url: "https://www.fxhash.xyz/generative/0x1B80898BaD0f98ACf278E5F6db7bB98c0977444f",
        },
        {
          id: 2,
          title: "The Soul of Flowers",
          platform: "Fxhash",
          date: "Dec 6th 2022",
          editions: "200",
          description1: `In the vast open fields, I once glimpsed the beauty of blooming flowers, Heard indescribable murmurs that became unforgettable. With longing and pain, I moved slowly forward, crossing the northern seas. In a blink, the origin of this long journey seemed lost.`,
          description2: `Lost in the dawn before the storm, I discovered that some things in life were quietly changing direction. Perhaps, we are living more transparently, more authentically. After releasing this series of works, I am filled with indescribable complex emotions. Perhaps a fragment of the soul has indeed achieved life and will eternally exist. Eventually blossoming into a field of flowers, existing forever. What's wrong with living willfully? Forget everything. On the island of flowers, it's best to be a happy caterpillar.`,
          imageUrl: "/static/nft/the_soul_of_flowers/flower demo.jpeg",
          url: "/nft/thesoulofflowers",
        },
      ],
    };
  },
  metaInfo() {
    if (workName == "electriz") {
      return {
        title: "Electriz by Che-Yu Wu",
        meta: [
          {
            property: "og:image",
            content: "/static/img/electriz-og.png",
          },
        ],
      };
    } else if (workName == "soulfish") {
      return {
        title: "Soul Fish by Che-Yu Wu",
        meta: [
          {
            property: "og:image",
            content:
              "https://gateway.fxhash2.xyz/ipfs/QmUxarxjf9JtSpfVAaKVEWt2sjChzwsL2A3az9bvivA9Fj",
          },
        ],
      };
    } else if (workName == "foundation") {
      return {
        title: "Foundation by Che-Yu Wu",
        meta: [
          {
            property: "og:image",
            content: "/static/img/foundation-og.png",
          },
        ],
      };
    } else if (workName == "thesoul") {
      return {
        title: "The Soul by Che-Yu Wu",
        meta: [
          {
            property: "og:image",
            content: "/static/img/the-soul-og.png",
          },
        ],
      };
    } else if (workName == "thesoulofflowers") {
      return {
        title: "The Soul of Flowers by Che-Yu Wu",
        meta: [
          {
            property: "og:image",
            content: "/static/nft/the_soul_of_flowers/flower demo.png",
          },
        ],
      };
    } else if (workName == "memes") {
      return {
        title: "Interactive Memes by Che-Yu Wu",
        meta: [
          {
            property: "og:image",
            content: "/static/img/memes-og.png",
          },
        ],
      };
    }
  },
  computed: {
    workName() {
      return this.$route.params.name;
    },
  },
  methods: {
    isInternalLink(url) {
      // Implement logic to determine if the URL is an internal link
      // For example, check if URL starts with '/' for simplicity
      return url.startsWith("/");
    },
    getLinkComponent(url) {
      // Returns 'router-link' for internal links, otherwise returns 'a'
      return this.isInternalLink(url) ? "router-link" : "a";
    },
  },
  components: {
    ElectrizDemo,
    PageNftElectriz,
    PageNftSoulFish,
    PageNftFoundation,
    PageNftTheSoulOfFlowers,
    PageNftTheSoul,
  },
};
</script>

<style lang="sass">
// @import url('https://fonts.googleapis.com/css2?family=Rokkitt:wght@100;200;300;400;500;600;700;800;900&display=swap')
.page-nft-all
  background-color: black
  color: white
  h2
    margin-top: 50px
  a
    color: white
    &:hover
      text-decoration: none
  .container
    max-width: 1500px
  .nft-item
    border: solid 1px rgba(white,0.3)
    transition: 0.2s
    margin-top: 30px
    border-radius: 10px
    &:hover
      background-color: rgba(white,0.1)
</style>
