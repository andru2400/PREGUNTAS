import Vue from 'vue'
import App from './App.vue'
const $ = require('jquery')
window.$ = $
// import $ from 'jquery'
import 'popper.js';
import 'bootstrap';
import './assets/css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
window.axios = require('axios')
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
