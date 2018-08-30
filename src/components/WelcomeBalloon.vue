<template>
    <div>
        <div v-if="Mode == 'signin'">
            <div class="signin">

                    <div @click=showlogin class="signin_balloon ripple">
                        <h2>Sign in?</h2>
                    </div>
            </div>
        </div>

        <div v-if="Mode == 'signup'">
            <div class="signup">

                    <div @click=showform class="signup_balloon ripple">
                        <h2>Sign up?</h2>
                    </div>
            </div>
        </div>

        <div v-if="Mode == 'google'">
            <div class="google">
                <div @click="googleLogin" class="google_baloon ripple">
                    <h2>google?</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import * as types from '../store/mutation-types'
import * as consts from '../consts/const'
import firebase from 'firebase'

export default {
  name: 'w-balloon',

  props: {
    Mode: {
      type: String
    }
  },
  data () {
    return {
      SHOW_ALL: consts.SHOW_ALL_FORM
    }
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
    showlogin () {
      this[types.UPDATE_WELCOME_MENU_STATE](consts.SHOW_SIGNIN_FORM)
      this[types.UPDATE_WELCOME_ALL_STATE](false)
    },
    showform () {
      console.log('popopo')
      this[types.UPDATE_WELCOME_MENU_STATE](consts.SHOW_SIGNUP_FORM)
      this[types.UPDATE_WELCOME_ALL_STATE](false)
    },
    googleLogin () {
      firebase
        .auth()
        .signInWithRedirect(new firebase.auth.GoogleAuthProvider())

      console.log('google')
    }
  },
  created () {
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/common.scss';

.signin,
.signup,
.google {
    margin-bottom: 25px;
    width: 100%;
    font-family: Arial, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", Osaka, メイリオ, Meiryo, "ＭＳＰゴシック", "MS PGothic", sans-serif;
    h2 {
        font-family: 'Lobster', cursive;
        cursor: pointer;
        display: inline-block;
    }
    .p-absolute {
        position: absolute;
        left: 0;
        top: 0;
    }
}

.signup {
    .p-absolute {
        position: absolute;
        left: 0;
    }
}

.bounce-enter-active {
    animation: bounce-in .5s;
}
.bounce-leave {
  opacity: 1;
  position: absolute;
}
.bounce-leave-to {
  opacity: 0;
}
@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(12);
    }
    100% {
        transform: scale(1);
    }
}

.signin_balloon,
.signup_balloon,
.google_baloon {
    font-family: 'Lobster', cursive;
    position: relative;
    background-color: #fefefe;/*背景色*/
    color: #000;
    font-size: 1em;/*文字サイズ*/
    line-height: 1;
    text-decoration: none;
    letter-spacing: 0.05em;/*字間*/
    padding: 0.2em 1em;/*ボタン内の余白*/
    border-radius: 3px;/*角の丸み*/
    cursor: pointer;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);/*影*/
    -webkit-tap-highlight-color: transparent;
    transition: .3s ease-out;
    cursor: pointer;
    @include mq(){
        padding: 10px 10px;
    }
    @include mq(sm) {
        margin: 0;
        width: 100%;
        cursor: unset;
    }
}

.signin_balloon:hover,
.signup_balloon:hover,
.google_baloon:hover {
    color: #000;
    box-shadow: 0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2);
    @include mq(sm) {
        padding: 15px 10px;
    }
}
</style>
