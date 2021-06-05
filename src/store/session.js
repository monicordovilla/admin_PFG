//https://github.com/juanwmedia/vuex-desde-cero
import { auth, db } from '../firebase.js'

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
        //si current user (id usuario) no en personas ni facilitadores
        const document = await db.doc(`users/${auth.currentUser}`).get();

        if (document.exists){
            if (document.data.Rol!="Facilitador" && document.data.Rol!="Persona"){
                commit("setUser", auth.currentUser);
            } else {
                //si está lo echo con un logout
                await auth.signOut();
                commit("setUser", null);
            }
        } else {
            commit("setUser", auth.currentUser);
        }


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