import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import VueComponent from '../components/VueComponent.vue'
import Game from '../components/Game.vue'
import Test from '../components/Test.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/vue', component: VueComponent },
  { path: '/game', component: Game },
  { path: '/test', component: Test }
]

const router = new VueRouter({
  routes
})

export default router
