// index.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '@/pages/Welcome'
import Editor from '@/pages/Editor'

Vue.use(VueRouter)

const router = new VueRouter({
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
