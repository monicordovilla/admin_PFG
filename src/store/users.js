import { db } from '../firebase.js'

const state = {
    users: [],
}

const getters = {
    getUser: state => id => {
        return state.users.find(room => room.id === id);
    },
}

const mutations ={ }

const actions = {
    getNewUserId() {
        return db.collection("rooms").doc();
    },
}

export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
};