require("../css/styles.css");

import Vue from "vue";
import Main from "./components/Main.vue";

var vm = new Vue({
  el: '#appContainer',

  components: {
    'my-main': Main
  }
});