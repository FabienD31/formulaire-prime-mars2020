import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import firebase from "firebase/app";
import "firebase/auth";


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import Admin from "./components/Admin"
import Formulaire from "./components/Formulaire"
import AdminForm from "./components/AdminForm"
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
    { path: '/admin', component: Admin },
    { path: '/adminForm', component: AdminForm },
    { path: '/DataForm', component: DataForm, meta: { requiresAuth: true }},
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);//??
  const isAuthenticated = firebase.auth().currentUser;
  console.log("isauthenticated", isAuthenticated);
  if (requiresAuth && !isAuthenticated) {
    next("/AdminForm");
  } else {
    next();
  }
});


let app;

firebase.auth().onAuthStateChanged(user => {
  console.log("user", user);
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});



// new Vue({
//   render: h => h(App),
//   router
// }).$mount('#app')
