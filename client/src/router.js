import Vue from 'vue'
import Router from 'vue-router'
import index from "./views/index.vue"
import allProd from "./views/allProd.vue"
import prodInfo from "./views/prodInfo.vue"
import system from "./views/System.vue"
import SystemUser from "./views/SystemUser.vue"
import about from "./views/about.vue"







Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/allProd',
      component: allProd
    },
   
    {
      path: '/prodInfo',
      component: prodInfo
    },
    {
      path: '/system',
      component: system
    },
    {
      path: '/SystemUser',
      component: SystemUser
    },
    {
      path: '/about',
      component: about
    },
  ]
})
