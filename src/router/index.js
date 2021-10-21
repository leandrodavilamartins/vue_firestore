import Vue from 'vue'
import VueRouter from 'vue-router'
import Estoque from '../views/Estoque.vue'
import addItem from '../views/addItem.vue'
import updateItem from '../views/updateItem.vue'
import Pagamentos from '../views/Pagamentos.vue'
import Recebimentos from '../views/Recebimentos.vue'
import Home from '../views/Home.vue'
import * as firebase from "firebase/compat/app"
import "firebase/compat/auth"

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Home',
    component: Home
  },
  {
    path: '/estoque',
    name: 'Estoque',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   component: Estoque,
   meta : {requiresAuth: true}
  },
  {
    path: '/addItem',
    name: 'addItem',
    component: addItem,
    meta : {requiresAuth: true}
  },
  {
    path: '/updateItem',
    name: 'updateItem',
    component: updateItem,
    meta: {requiresAuth: true}
  },
  {
    path:'/pagamentos',
    name: 'pagamentos',
    component: Pagamentos,
    meta : {requiresAuth: true}
  },
  {
    path:'/recebimentos',
    name: 'recebimentos',
    component: Recebimentos,
    meta: {requiresAuth: true}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next) => {
      const requiresAuth = to.matched.some(record => {
        return record.meta.requiresAuth;
      })
      const isAuthenticated = firebase.default.auth().currentUser // returns a user

      if(requiresAuth && !isAuthenticated){
        next('/')
      }
      else{
        next();
      }
})


export default router
