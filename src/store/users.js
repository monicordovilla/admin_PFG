import { db } from '../firebase.js'

const state = {
    facilitadores: [],
    personas: []
}

const getters = {
    getFacilitador: state => id => {
        return state.facilitadores.find(facilitador => facilitador.id === id);
    },
    getPersona: state => id => {
        return state.personas.find(persona => persona.id === id);
    },
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
    async getFacilitador({ getters }, userID) {
        // Buscamos en local si tenemos guardado el facilitador
        let user = getters["getFacilitador"](userID);
        //Si no tenemos a la persona la sacamos de Cloud Firestore
        if (!user) {
            user = await db
            .collection("users")
            .doc(userID)
            .get();
    
            if (!user.exists) throw new Error("No se ha encontrado al facilitador");
            user = user.data();
        }
    
        return user;
    },

    async getPersona({ getters }, userID) {
        // Buscamos en local si tenemos guardado la persona
        let user = getters["getPersona"](userID);
        //Si no tenemos a la persona la sacamos de Cloud Firestore
        if (!user) {
            user = await db
            .collection("users")
            .doc(userID)
            .get();
    
            if (!user.exists) throw new Error("No se ha encontrado a la persona");
            user = user.data();
        }
    
        return user;
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