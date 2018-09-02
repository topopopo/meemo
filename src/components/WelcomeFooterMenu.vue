<template>
  <div class="welcome_footer">
    <button class="right_btn" @click="next(text)">{{text}}</button>

    <button @click="googleLogin()" class="right_btn right_btn--google">
    </button>

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

.welcome_footer {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .right_btn {
    height: 69px;
    width: 69px;
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
      height: 50px;
      border: 0;
      border-color: unset;
      background-color: unset;
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
  $button-height: 30px;
  $box-width: 300px;
  $box-height: 212px;

  .loginBtn {
    box-sizing: border-box;
    position: relative;
    margin: 0.2em;
    padding: 0 15px 0 46px;
    border: none;
    text-align: left;
    line-height: 34px;
    white-space: nowrap;
    border-radius: 0.2em;
    font-size: 16px;
    color: #FFF;
    cursor: pointer;
  }
  .loginBtn:before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 34px;
    height: 100%;
  }
  .loginBtn:focus {
    outline: none;
  }
  .loginBtn:active {
    box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);
  }

  /* Google */
  .right_btn--google {
    background: #DD4B39 url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 18px center no-repeat;
    border-color: #DD4B39;
    @include mq(sm){
      border-color: unset;
      background-color: unset;
    }

  }

}

</style>
