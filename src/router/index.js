import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Login from '@/components/Login'
import Products from '@/components/products'
import Test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/products',
      name:'Products',
      component: Products
    },
    {
      path:'/test',
      name:'Test',
      component: Test
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
