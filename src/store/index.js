//Agradecimientos a https://github.com/juanwmedia/vuex-desde-cero
import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    checkAuth(){}
  },
  modules: {
    user,
  }
})


export default store