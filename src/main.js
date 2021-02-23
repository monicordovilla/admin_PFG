import Vue from 'vue'
import App from './App.vue'
import router from './router'

//Firebase
import {db} from "./firebase";

import store from './store'
console.log(db);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
