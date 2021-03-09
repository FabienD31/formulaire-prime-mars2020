import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import Admin from "./components/Admin"
import Formulaire from "./components/Formulaire"



Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false


const router = new VueRouter({
  mode:'history',
  routes: [
    // dynamic segments start with a colon
    { path: '/', component: Formulaire },
    { path: '/admin', component: Admin },
  ]
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
