import { db } from '../firebase.js'

const state = {
    users: [],
}

const getters = {
    //Buscamos al usuario en el estado local
    /*getUser: state => id => {
        return state.users.find(room => room.id === id);
    },*/
}

const mutations ={
    setUsers(state, users){
        state.users = users
    }
}

const actions = {    
    async getUser(userID) {
        return await db
          .collection("users")
          .doc(userID)
          .get();
    },

    //Buscamos usuarios en Cloud Firestore
    async getUsers({ commit }) {
        const query = db.collection("users").orderBy("Nombre", "desc");
        query.onSnapshot(
            querySnapshot => {
                const users = [];
                querySnapshot.forEach(doc => {
                    let user = doc.data();
                    user.id = doc.id;
                    console.log(doc.data())
                    users.push(user);
                });
                commit("setUsers", users);
            },
          error => this.$toast.error(error.message)
        );
    },
}

export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
};