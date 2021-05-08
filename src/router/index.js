import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/panel',
    name: 'Panel',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "panel" */ '../views/Panel.vue')
  },
  {
    path: '/add-poem',
    name: 'AddPoemView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "AddPoemView" */ '../views/AddPoem.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
