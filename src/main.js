// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/common.scss'
import firebase from 'firebase'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(BootstrapVue)
library.add(faCoffee)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyDZ2K6b-R_YvQ0iRi6oJd29dO0AjSy1DZU',
  authDomain: 'meemo-id.firebaseapp.com',
  databaseURL: 'https://meemo-id.firebaseio.com',
  projectId: 'meemo-id',
  storageBucket: 'meemo-id.appspot.com',
  messagingSenderId: '226952033353'
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
