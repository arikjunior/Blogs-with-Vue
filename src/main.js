import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Blogs from './Blogs'
import Home from '@/components/Home'
import User from '@/components/User'

Vue.use(VueRouter)

const routes = [
  {
    path: '/blogs', component: Blogs
  },
  {
    path: '/', component: Home
  },
  {
    path: '/users/:teamId', component: User
  }
];
const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.filter('datatampil', val => {
  if (!val || typeof (val) != 'string') return ''
  val = val.slice(0, 100)
  return val
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
