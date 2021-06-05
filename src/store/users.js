import { db, storage } from '../firebase.js'

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
    getNewUserId(){
        return db.collection("users").doc
    },

    async uploadUserImage(context, { userID, file }) {
        const uploadPhoto = () => {
            let fileName = `user/${userID}/${userID}-image.jpg`;
            return storage.ref(fileName).put(file);
        };

        function getDownloadURL(ref) {
            return ref.getDownloadURL();
        }

        try {
            let upload = await uploadPhoto();
            return await getDownloadURL(upload.ref);
        } catch (error) {
            throw Error(error.message);
        }
    },

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

    async Vincular({dispatch} , { userID, persona }) {
        try {
            const user = await dispatch("getFacilitador", userID);
            let newPersonas =[];

            if(user.Personas != null){
                user.Personas.push(persona);
                
                for(var x=0; x<user.Personas.length; x++){
                    newPersonas.push(user.Personas[x]);
                }
            }else{
                newPersonas.push(persona);
            }
            console.log(newPersonas);

            await db
                .collection("users")
                .doc(userID)
                .update({
                    "Personas" : newPersonas
                });
        } catch (error) {
            console.error(error.message);
        }    
    },

    async Desvincular({dispatch} , { userID, persona }) {
        try {
            const user = await dispatch("getFacilitador", userID);
            let newPersonas = [];

            if(user.Personas.length >= 1){
                let index = user.Personas.indexOf(persona);                
                newPersonas = user.Personas.splice(index, 1);
            }
            console.log(newPersonas)

            await db
                .collection("users")
                .doc(userID)
                .update({
                    "Personas" : newPersonas
                });
        } catch (error) {
            console.error(error.message);
        }    
    },
}

export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
};