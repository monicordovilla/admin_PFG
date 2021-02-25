//Agradecimientos a https://github.com/juanwmedia/vuex-desde-cero
import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'
import {auth} from '../firebase'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    checkAuth({commit}){
      auth.onAuthStateChanged(function (user){
        if(user){
          commit("user/setUser", user)
        }else{
          commit("user/setUser", null)
        }
      })
    }
  },
  modules: {
    user,
  }
})


export default store

store.dispatch("checkAuth");