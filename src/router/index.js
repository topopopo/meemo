// index.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '@/pages/Welcome'
import Editor from '@/pages/Editor'
import firebase from 'firebase'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'welcmome',
      component: Welcome
    },
    {
      path: '/editor',
      name: 'Editor',
      component: Editor,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  let currentUser = firebase.auth().currentUser
  if (requiresAuth) {
    // このルートはログインされているかどうか
    if (!currentUser) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // next() を常に呼び出すようにしてください!
  }
})

export default router
