// index.js
import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/pages/Welcome'
import Editor from '@/pages/Editor'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'welcmome',
      component: Welcome,
      meta: { requiresAuth: true }
    },
    {
      path: '/editor',
      name: 'Editor',
      component: Editor
    }
  ]
})

export default router
