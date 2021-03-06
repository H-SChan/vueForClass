import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Kakao from '../views/Kakao.vue'
import Example from '../views/Example.vue'
import Todos from '../views/Todos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path :'/kakao',
    name: 'Kakao',
    component: Kakao
  },
  {
    path : '/example',
    name : 'Example',
    component : Example
  },
  {
    path  :'/todos',
    name : 'Todos',
    component : Todos
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
