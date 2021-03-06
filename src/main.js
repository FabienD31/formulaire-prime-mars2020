import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import firebase from "firebase";
import "firebase/auth";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import CreateUser from "./components/CreateUser"
import Formulaire from "./components/Formulaire"
import Connexion from "./components/Connexion"
import DataForm from "./components/DataForm"



Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false


var firebaseConfig = {
  apiKey: "AIzaSyCbU9zs0T09Teg3TtIKZIUY9j-jZ5ubdqU",
  authDomain: "formulaire-prime-48b56.firebaseapp.com",
  databaseURL: "https://formulaire-prime-48b56-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "formulaire-prime-48b56",
  storageBucket: "formulaire-prime-48b56.appspot.com",
  messagingSenderId: "533160399202",
  appId: "1:533160399202:web:9aa54e615b4d86d5461c3b",
  measurementId: "G-DTNBQ7X5MJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


const router = new VueRouter({
  mode:'history',
  routes: [
    { path: '/', component: Formulaire },
    { path: '/admin999',component: CreateUser },
    { path: '/Connexion', component: Connexion },
    { path: '/DataForm', component: DataForm, beforeEnter: (to, from, next) => {
      const isAuthenticated = firebase.auth().currentUser;
      if (isAuthenticated) {
        next()
      } else {
        next("/Connexion")
      }
    }},
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
  
