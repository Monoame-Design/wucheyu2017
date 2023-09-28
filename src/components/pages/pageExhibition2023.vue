<template lang="pug">
.page-exhibition.text-left
  .container-fluid
    img.w-100.mt-2(
      src="https://imgs2.utiki.com.tw/Data/TIXFUN/Images/UTK2401/Q014H0GW_Other.JPG?v=202309141017),%20url(https://imgs2.utiki.com.tw/Data/TIXFUN_RWD/Images/DefaultImage_Large.gif"
    )
  .container.pt-md-5.pb-md-5
    //- h1.text-center.mt-4 《萬物公式》數位生命演化之旅

    iframe.mt-5(
      width="100%",
      height="600",
      src="https://www.youtube.com/embed/J99tOkS0a44?si=Z92PPJ-OPTO5lxOO",
      title="YouTube video player",
      frameborder="0",
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      allowfullscreen
    )

    h3.mt-5 「生命從哪個時刻誕生？具有什麼樣的特徵時，我們會稱之為生命呢？」
    h1.font-italic F''(x) = LIFE？

    p 新媒體藝術家吳哲宇繼2022年的個展《混沌實驗室》，2023年全新個展《萬物公式》再度集結了全新數位藝術作品、音像即時互動技術，與團隊重構一系列「數位生命」藝術創作，創造以「萬物公式」為題的藝術場域；結合大自然、物理、現代藝術、數學韻律等與古典及現代電音的譜曲結合，精選13件生成式藝術演算作品作為演繹主軸，結合現場即時音像展演，邀請觀眾打開五感官能，一同走進宇宙的無限集合。購票看展還可兌換展覽期間限定「起源光片」NFT！

    p 藝術家與電子音樂家的現場表演
    p 直達心底的靈魂叩問，感受數位生命延展張力！
    p 本次展演除了常設互動式藝術輪播以及每日作品導覽，也推出了限定單/雙人表演場次；單人表演場將由跨領域新媒體藝術家吳哲宇進行即興演奏與作品導覽，雙人場則是榮幸地邀請到電子音樂家KIVΛMKII進行現場演出。KIVΛMKII擅長Bass Music / Sci-Fi / Cinematic 等曲風，作品常見於電視劇、音樂遊戲、樂團及歌手單曲，是引領臺灣電子音樂界的重要人物，為本次展出的藝術作品注入音樂底蘊。

    p KIVΛMKII：「我們將嘗試用光的頻譜，音的震盪，創造屬於我們的生命樂章，描繪萬物在宇宙中的無盡旅程。透過藝術那無窮的方程式，解讀生命的奧秘。」

    p 透過程式、音樂與現場的即時互動展演，從生命的起點踏上演化的旅程，12幕場景即時演繹——從宇宙的虛空中誕生，跨過群山百岳的感動，潛入深海當中的靜止，在巨幕與音響的雙重包覆之下，30分鐘的視覺與聽覺饗宴，搭配双融域AMBI SPACE ONE獨特的環繞式音場，邀請各位觀眾在秋分後前來，享受這場結合生成式藝術與沉浸式體驗的感官饗宴。

    h3.mt-5 語音導聆（暫定）
    .mb-5
</template>

<script>
export default {
  metaInfo() {
    return {
      title: "Interactive Memes by Che-Yu Wu",
      meta: [
        {
          property: "og:image",
          content: "/static/img/memes-og.png",
        },
      ],
    };
  },
  // computed: {
  //   workName() {
  //     return this.$route.params.name;
  //   },
  // },
  // components: {
  //   ElectrizDemo,
  //   PageNftElectriz,
  //   PageNftSoulFish,
  //   PageNftFoundation,
  //   PageNftTheSoul,
  // },
};
</script>

<style lang="sass">
// @import url('https://fonts.googleapis.com/css2?family=Rokkitt:wght@100;200;300;400;500;600;700;800;900&display=swap')
.page-exhibition
  background-color: black
  color: white
  min-height: 100vh
</style>
