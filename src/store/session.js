//https://github.com/juanwmedia/vuex-desde-cero
import { auth } from '../firebase.js'

const state = {
    user: null,
}

const getters = {}

const mutations ={
    setUser(state, user) {
        state.user = user;
    },
}

const actions = {
    getCurrentUser() {
        return new Promise((resolve, reject) => {
          const unsubscribe = auth.onAuthStateChanged(
            user => {
              unsubscribe();
              resolve(user);
            },
            () => {
              reject();
            }
            );
        });
    },

    async doLogin({ commit }, { email, password }){
        await auth.signInWithEmailAndPassword(email,password);
        //si current user (id usuario) no en usuarios
        commit("setUser", auth.currentUser);
        //si está lo echo con un logout
    },

    async doLogout({ commit }){
        await auth.signOut();
        commit("setUser", null);
    }
}

export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
};