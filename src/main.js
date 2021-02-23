//import { from } from 'core-js/fn/array'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

//Firebase
import {db} from "./firebase";
console.log(db);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
