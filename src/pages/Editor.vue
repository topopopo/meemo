<template>
    <div>
        <h2>welcome!!!!</h2>
        <br>
        <div>{{name}}</div>
        <br>
        <button @click="signOut">log out</button>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'editor',

  data: () => ({
    name: firebase.auth().currentUser.email
  }),
  props: {
  },
  methods: {
    signOut: function () {
      firebase.auth().signOut().then(() => {
        this.$router.push('/')
      })
    }
  },
  computed: {
  },
  async mounted () {
    // this.name = firebase.auth().currentUser.email
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>

</style>
