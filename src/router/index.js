// index.js
import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/pages/Welcome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcmome',
      component: Welcome
    }
  ]
})
