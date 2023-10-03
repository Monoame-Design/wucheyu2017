// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import $ from 'jquery'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/fontawesome-pro-5.8.1-web/css/all.min.css'
import '@/assets/fontawesome-pro-5.8.1-web/js/all.min.js'
import VueMeta from 'vue-meta'
Vue.use(VueMeta)
import SoftScroll from './plugins/soft_scroll.js'
// import p5 from 'p5'
import VueAnalytics from 'vue-analytics'

// import VueCodemirror from 'vue-codemirror'
// import 'codemirror/mode/javascript/javascript.js'
// import 'codemirror/lib/codemirror.css'
import pvm from 'p5-vue-mirror'
Vue.use(pvm)
// import 'font-awesome/css/all.css'

import CodeArea from './components/CodeArea'
Vue.component("CodeArea", CodeArea)

if (document.domain == "cheyuwu.com") {
  Vue.use(VueAnalytics, {
    id: 'UA-52977512-26',
    router
  })
}

// SoftScroll.init()
// import Tether from "tether"
// import $ from "jquery"
// window.jQuery = $
// window.Tether = Tether
// require('bootstrap')

Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
setTimeout(() => {
  store.commit("setLoading", false)
}, 100);
//https://www.openprocessing.org/api/user/139364/sketchs.json

// this.$set(this,"userData",data)
// console.log(data)

try {
  $.getJSON("/static/sketchs.json", (data) => {
    store.commit("setUserData", data)
    // $.getJSON("/static/sketchs.php", (data) => {
    //   store.commit("setUserData", data)
    // })
  })
} catch (err) {
  $.getJSON("/static/sketchs.json", (data) => {
    store.commit("setUserData", data)
  })
}



Vue.mixin({
  methods: {
    cssbg(url) {
      let use_url = (url && url != '') ? url : '/img/default.jpg'
      let result = {
        'background-image': `url("${use_url} ")`
      }
      // console.log(result)
      return result
    }
  }
})

var config = {
  apiKey: "AIzaSyCRwI0dpZtehRK1QGeQk9qpOGmtJIbH68g",
  authDomain: "wucheyu-portfolio.firebaseapp.com",
  databaseURL: "https://wucheyu-portfolio.firebaseio.com",
  projectId: "wucheyu-portfolio",
  storageBucket: "",
  messagingSenderId: "531217018941"
};
window.firebase = firebase
firebase.initializeApp(config);

var worksRef = firebase.database().ref('works');
worksRef.on('value', function (snapshot) {

  store.commit("setWorks", snapshot.val())
  // snapshot.forEach(function (childSnapshot) {

  //   var childKey = childSnapshot.key;
  //   var childData = childSnapshot.val();
  //   store.commit("setWorks", childData)
  //   // console.log(childData);
  //   // ...
  // });
});
