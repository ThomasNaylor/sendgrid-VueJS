import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import store from './store';
import * as firebase from 'firebase';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

var config = {
  apiKey: "YOURCONFIGHERE",
  authDomain: "YOURCONFIGHERE",
  databaseURL: "YOURCONFIGHERE",
  projectId: "YOURCONFIGHERE",
};

firebase.initializeApp(config);

Vue.config.productionTip = false;

new Vue({
  store,
  render: function (h) { return h(App) }
}).$mount('#app');
