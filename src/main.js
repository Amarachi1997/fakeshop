import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import jQuery from 'jquery';
import Popper from 'popper.js';
global.jQuery = jQuery;
global.Popper = Popper;
global.$ = jQuery;
let Bootstrap = require('bootstrap');
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false;

Vue.use(VueResource);


new Vue({
  el: '#app',
  render: h => h(App)
}).$mount("#app");
