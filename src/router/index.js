import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mycar from '../views/Mycar.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path:'/mycar',
    name:'Mycar',
    component:Mycar
  }
]

const router = new VueRouter({
  routes
})

export default router
