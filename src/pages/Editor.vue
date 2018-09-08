<template>
    <div id="editor">
      <Header></Header>

      <transition>
        <editor-list :user="user" v-if="EDITOR_LIST_MODE === editorMode"></editor-list>
        <editor-text v-if="EDITOR_EDIT_MODE === editorMode"></editor-text>
      </transition>
      <button @click="signOut">log out</button>
    </div>
</template>

<script>
import firebase from 'firebase'
import EditorText from '../components/EditorText'
import EditorList from '../components/EditorList'
import Header from '../components/Header.vue'
import { mapGetters, mapActions } from 'vuex'
import * as types from '../store/mutation-types'
import * as consts from '../consts/const'

export default {
  name: 'editor',

  data: () => ({
    EDITOR_LIST_MODE: consts.EDITOR_LIST_MODE,
    EDITOR_EDIT_MODE: consts.EDITOR_EDIT_MODE
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
    EditorList,
    Header
  },
  computed: {
    ...mapGetters({
      editorMode: types.EDITOR_MODE_STATE
    })
  },
  async mounted () {
    // this.name = firebase.auth().currentUser.email
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
body {
  background: unset;
}

</style>
