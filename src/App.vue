<template>
  <div id="app">
    <!-- <router-view/> -->
    <welcome v-if="!isLogin"></welcome>
    <editor v-if="isLogin" :user="userData"></editor>
  </div>
</template>

<script>
import Welcome from './pages/Welcome'
import Editor from './pages/Editor'
import firebase from 'firebase'

export default {
  name: 'App',

  data: () => ({
    isLogin: false,
    userData: null
  }),

  created () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user)
        this.isLogin = true
        this.userData = user
      } else {
        this.isLogin = false
        this.userData = null
      }
    })
  },
  components: {
    Welcome,
    Editor
  }
}
</script>

<style>
body {
  background-image: url(./assets/images/umi.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #464646;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
