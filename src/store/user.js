//https://github.com/juanwmedia/vuex-desde-cero
import { auth } from '../firebase.js'

const state = {
    user: null,
}

const getters = { }

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
        commit("setUser", auth.currentUser);
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