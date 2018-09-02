<template>
    <div id="editor">
      <!-- <div class="container">
        <h2>{{user.displayName}}</h2>
        <br>
        <button @click="signOut">log out</button>

        <editor-text></editor-text>
      </div> -->
      <editor-list></editor-list>
      <button @click="signOut">log out</button>
    </div>
</template>

<script>
import firebase from 'firebase'
import EditorText from '../components/EditorText'
import EditorList from '../components/EditorList'
import { mapActions } from 'vuex'
import * as types from '../store/mutation-types'

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
    ...mapActions([
      types.UPDATE_SUCCESS_MODAL_STATE
    ]),
    signOut () {
      firebase.auth().signOut().then(() => {
        this[types.UPDATE_SUCCESS_MODAL_STATE](false)
      })
    }
  },
  components: {
    EditorText,
    EditorList
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
