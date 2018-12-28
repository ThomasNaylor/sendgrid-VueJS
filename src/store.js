import Vue from 'vue';
import Vuex from 'vuex';
import firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    msg: []
  },
  mutations: {
    mailState (state, payload) {
      state.msg = payload;
    }
  },
  actions: {
    // push new message to firbaseDB.
    sendMail ({commit}, payload) {
      firebase.database().ref('contactForm').push(payload)
      .then(() => {
        commit('mailState', true);
      })
      .catch((error) => {
        console.log(error);
      });
    }
  },
  getters: {
    mailState (state) {
      // * return true or false and display message to client
      return state.mailState;
    }
  }
});
