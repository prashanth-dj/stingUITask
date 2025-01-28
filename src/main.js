import Vue from 'vue'
import App from './App.vue'
import StingUI from '@chargebee/sting-vue';
import store from "./stores";


import '@chargebee/sting-vue/src/styles/sting.css';
import './assets/tailwind.css'
import 'v-calendar/lib/v-calendar.min.css';
import './main.css'


Vue.config.productionTip = false

Vue.use(StingUI)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
