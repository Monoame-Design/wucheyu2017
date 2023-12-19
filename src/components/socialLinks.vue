This is the data for the social links in the footer. The data is in the form of an array of objects. Each object has the data for a link, including the href, target, label, and iconClass for the link. The href is the link that the link tag will direct the user to when clicked, the target is the tab that the link will open in, the label is the name of the link, and the iconClass is the class that will be used to render the icon for the link.

<template lang="pug">
.social-links
  a(
    v-for="(link, index) in socialLinks",
    :key="index",
    :href="link.href",
    :target="link.target",
    :title="link.label"
  ) 
    |
    |
    |
    i(:class="link.iconClass")
</template>
<script>
export default {
  data() {
    return {
      socialLinks: [
        {
          href: "https://www.linkedin.com/in/cheyuwu/?locale=en_US",
          target: "_blank",
          label: "Linkedin",
          iconClass: "fab fa-linkedin-in",
        },
        {
          href: "https://www.instagram.com/cheyuwu345/",
          target: "_blank",
          label: "Instagram",
          iconClass: "fab fa-instagram",
        },
        {
          href: "mailto:cyw345@nyu.edu",
          target: "_blank",
          label: "Envelope",
          iconClass: "far fa-envelope",
        },
        {
          href: "https://codepen.io/frank890417",
          target: "_blank",
          label: "Codepen",
          iconClass: "fab fa-codepen",
        },
        {
          href: "https://github.com/frank890417",
          target: "_blank",
          label: "Github",
          iconClass: "fab fa-github",
        },
        {
          href: "https://medium.com/@wucheyu",
          target: "_blank",
          label: "Medium",
          iconClass: "fab fa-medium",
        },
        {
          href: "http://issuu.com/wucheyu/docs/2017_portfolio",
          target: "_blank",
          label: "Portfolio on ISSUU",
          iconClass: "fas fa-book",
        },
      ],
    };
  },
};
</script>
  