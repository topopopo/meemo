// index.js
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Signup from '@/components/signup'
// import Signin from '@/components/signin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '"HelloWorld"',
      component: HelloWorld
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})
