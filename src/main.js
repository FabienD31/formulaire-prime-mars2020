import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import Admin from "./components/Admin"
import Formulaire from "./components/Formulaire"

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false


const router = new VueRouter({
  mode:'history',
  routes: [
    // dynamic segments start with a colon
    { path: '/admin', component: Admin },
    { path: '/formulaire', component: Formulaire }
  ]
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
