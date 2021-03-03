//Agradecimientos a https://github.com/juanwmedia/vuex-desde-cero
import Vue from 'vue'
import Vuex from 'vuex'

import session from './session'
import users from './users'
import {auth} from '../firebase'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    checkAuth({dispatch, commit}){
      auth.onAuthStateChanged(function (session){
        if(session){
          commit("session/setUser", session);
          dispatch("users/getUsers")
        }else{
          commit("session/setUser", null)
          commit("users/setUsers", [])
        }
      })
    }
  },
  modules: {
    session,
    users,
  }
})


export default store

store.dispatch("checkAuth");