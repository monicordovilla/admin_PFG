import { db } from '../firebase.js'

const state = {
    facilitadores: [],
    personas: []
}

const getters = {
    //Buscamos al usuario en el estado local
    /*getUser: state => id => {
        return state.users.find(user => user.id === id);
    },*/
}

const mutations ={
    setFacilitador(state, facilitadores){
        state.facilitadores = facilitadores
    },

    setPersona(state, personas){
        state.personas = personas
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
                const facilitadores = [];
                const personas = [];
                querySnapshot.forEach(doc => {
                    let user = doc.data();
                    user.id = doc.id;
                    console.log(user);
                    console.log(user.Rol);
                    if(user.Rol == "Facilitador") facilitadores.push(user);
                    if(user.Rol == "Persona") personas.push(user);
                });
                commit("setFacilitador", facilitadores);
                commit("setPersona", personas);
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