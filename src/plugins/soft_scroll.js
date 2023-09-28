// Enable scrolling to the next section on mouse scroll
// This is done by listening for the mousewheel event and
// then using GSAP to animate the window scroll to the next section.
// This is done by multiplying the amount of pixels scrolled by the
// mousewheel by 50 and then subtracting that from the current scroll position.
// The animation is done with GSAP's scrollTo plugin.
//
// This code is used on the home page of the website to allow users to
// scroll to the next section with the mouse wheel.



import $ from 'jquery'
import {
  TweenMax
} from 'gsap'

export default {
  init: function () {
    $(function () {
      // Scroll to next section on scroll
      var $window = $(window)
      var scrollTime = 1
      var scrollDistance = 50

      $window.on("mousewheel DOMMouseScroll", this.scrollHandler)
    })
  },

  scrollHandler: function (event) {
    if (!window.softScrollDisable) {
      event.preventDefault()
      var delta = event.originalEvent.wheelDelta / 40 || -event.originalEvent.detail / 0.5
      var scrollTop = $(window).scrollTop()
      var finalScroll = scrollTop - parseInt(delta * 50)

      TweenMax.to($(window), 1, {
        scrollTo: {
          y: finalScroll,
          autoKill: true
        },
        ease: Power2.easeOut,
        overwrite: 10
      })
    }
  }
}
