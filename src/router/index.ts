import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import IndexView from '../views/index/index.vue'
import AccessView from '../views/access/access.vue'
import CheckView from '../views/check/check.vue'
import AdminView from '../views/admin/admin.vue'
import SignInView from '../views/signin/signin.vue'
import SignUpView from '../views/signup/signup.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [

  // Root Paths
  {
    path: '/',
    name: 'Index',
    component: IndexView
  },
  {
    path: '/access',
    name: 'Access',
    component: AccessView
  },{
    path: '/access/check',
    name: 'Check',
    component: CheckView
  },{
    path: '/admin',
    name: 'Admin',
    component: AdminView
  },

  // Clients or Parks Paths
  {
    path: '/signin/park/:park/category/:category',
    name: 'SignIn',
    component: SignInView
  },
  {
    path: '/signup/park/:park/category/:category',
    name: 'SignUp',
    component: SignUpView
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
