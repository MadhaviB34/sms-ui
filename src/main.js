import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResoure from 'vue-resource'
import VuejsDialog from "vuejs-dialog"
import App from './App.vue'
import Routes from './routes'
import VeeValidate from 'vee-validate';
import VueCookie from 'vue-cookie';
import  VueD3Uxgraph  from 'vue-d3-uxgraph';
import VueChartkick from 'vue-chartkick';
import Chart from 'chart.js';
import VueCharts from 'vue-chartjs';
import VueHighcharts from 'vue-highcharts';
import Highcharts from 'highcharts';
import ToggleButton from 'vue-js-toggle-button'

Vue.use(VueRouter);
Vue.use(VueResoure);
Vue.use(VuejsDialog);
Vue.use(VeeValidate);
Vue.use(require('vue-moment'));
Vue.use(VueCookie);
Vue.use(VueD3Uxgraph);
Vue.use(VueChartkick, {adapter: Chart});
Vue.use(VueHighcharts, { Highcharts: Highcharts });
Vue.use(ToggleButton)





const router = new VueRouter({
    routes: Routes,
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0}
    }
});
new Vue({
  el: '#app',
   router: router,
  render: h => h(App),
 


})
