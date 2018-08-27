<template>
  <div class="welcome_side">
    <button class="right_btn" @click="next(text)">{{text}}</button>
    <button class="left_btn" @click="googleLogin">google</button>
    <div class="bottom_arrow" @click="Back"></div>
  </div>
</template>

<script>
import firebase from 'firebase'
import { mapGetters, mapActions } from 'vuex'
import * as types from '../store/mutation-types'
import * as consts from '../consts/const'

export default {
  name: 'welcome-side',

  data: () => ({
    SHOW_ALL: consts.SHOW_ALL_FORM,
    SHOW_SIGN_IN: consts.SHOW_SIGNIN_FORM,
    SHOW_SIGN_UP: consts.SHOW_SIGNUP_FORM
  }),
  props: {
    text: {
      types: String
    }
  },
  watch: {
  },
  computed: {
    ...mapGetters({
      welcomeState: types.WELCOME_MENU_STATE,
      show: types.WELCOME_ALL_STATE
    })
  },
  methods: {
    ...mapActions([
      types.UPDATE_WELCOME_MENU_STATE,
      types.UPDATE_WELCOME_ALL_STATE
    ]),
    next (text) {
      if (text === 'sign up') {
        this[types.UPDATE_WELCOME_MENU_STATE](consts.SHOW_SIGNUP_FORM)
        this[types.UPDATE_WELCOME_ALL_STATE](false)
      } else {
        this[types.UPDATE_WELCOME_MENU_STATE](consts.SHOW_SIGNIN_FORM)
        this[types.UPDATE_WELCOME_ALL_STATE](false)
      }
    },
    Back () {
      this[types.UPDATE_WELCOME_ALL_STATE](true)
      // リセット
      this[types.UPDATE_WELCOME_MENU_STATE](0)
    },
    googleLogin () {
      firebase
        .auth()
        .signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    }
  },
  created () {
  },
  components: {
  }
}
</script>

<style lang="scss">
@import '../assets/css/common.scss';

.welcome_side {
  .right_btn {
    position: absolute;
    height: 300px;
    right: 60px;
    bottom: 155px;
    border: 2px solid #2c3e50;
    background-color: #141417;
    color: #fff;
    border-radius: 35px;
    outline: 0;
    cursor: pointer;
    &:active {
      text-shadow: 0;
    }
    &:hover {
      text-shadow: -6px 0px 15px rgba(255, 255, 240, 0.83), 6px 0px 15px rgba(255, 255, 240, 0.83);
    }
    @include mq(sm) {
      width: 85px;
      height: 50px;
      border: 0;
      top: 0;
      left: 0;
    }
  }
  .left_btn {
    position: absolute;
    height: 300px;
    left: 60px;
    bottom: 155px;
    border: 2px solid #2c3e50;
    background-color: #141417;
    color: #fff;
    border-radius: 35px;
    outline: 0;
    cursor: pointer;
    &:hover {
      text-shadow: -6px 0px 15px rgba(255, 255, 240, 0.83), 6px 0px 15px rgba(255, 255, 240, 0.83);
    }
    @include mq(sm) {
      display: none;
    }
  }
  .bottom_arrow {
    position: relative;
    display: inline-block;
    padding-left: 20px;
    cursor: pointer;
    &::before {
      content: '';
      width: 20px;
      height: 20px;
      border: 0px;
      border-top: solid 2px #2c3e50;
      border-right: solid 2px #2c3e50;
      -ms-transform: rotate(135deg);
      -webkit-transform: rotate(135deg);
      transform: rotate(135deg);
      position: absolute;
      top: 50%;
      left: 0;
      margin-top: 50px;
      @include mq(sm) {
        display: none;
      }
    }
  }
}

</style>
