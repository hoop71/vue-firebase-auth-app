// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false



let app;
let config = {
  apiKey: "AIzaSyD_hfZivgCN6r7RfOMWaoaH4e4JDkP4jBM",
  authDomain: "vuetest888.firebaseapp.com",
  databaseURL: "https://vuetest888.firebaseio.com",
  projectId: "vuetest888",
  storageBucket: "vuetest888.appspot.com",
  messagingSenderId: "563349349789"
};

firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      router,
      template: '<App/>',
      components: { App }
    });
  }
});



