import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/Index.vue'
import Login from './views/Login.vue'
import Details from "./views/Product_details.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path:"/login",
      name:"login",
      component: Login
    },
    {
      path:"/details/:lid",
      name:"details",
      component: Details,
      props:true
    }
  ]
})
