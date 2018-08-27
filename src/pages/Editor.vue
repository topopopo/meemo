<template>
    <div id="editor">
      <div class="container">
        <h2>{{user.displayName}}</h2>
        <br>
        <button @click="signOut">log out</button>

        <editor-text></editor-text>
      </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import EditorText from '../components/EditorText'

export default {
  name: 'editor',

  data: () => ({
  }),
  props: {
    user: {
      type: Object
    }
  },
  methods: {
    signOut () {
      firebase.auth().signOut().then(() => {
        this.$router.push('/')
      })
    }
  },
  components: {
    EditorText
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
