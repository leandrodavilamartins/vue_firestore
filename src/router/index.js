import Vue from 'vue'
import VueRouter from 'vue-router'
import Estoque from '../views/Estoque.vue'
import addItem from '../views/addItem.vue'
import updateItem from '../views/updateItem.vue'
import Pagamentos from '../views/Pagamentos.vue'
import Recebimentos from '../views/Recebimentos.vue'
import Home from '../views/Home.vue'

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
   component: Estoque
  },
  {
    path: '/addItem',
    name: 'addItem',
    component: addItem
  },
  {
    path: '/updateItem',
    name: 'updateItem',
    component: updateItem
  },
  {
    path:'/pagamentos',
    name: 'pagamentos',
    component: Pagamentos
  },
  {
    path:'/recebimentos',
    name: 'recebimentos',
    component: Recebimentos
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

export default router
