<template>
    <div>
        <div v-if="Mode == 'signin'">
            <div class="signin">
                <transition name="bounce"
                    >
                    <div v-if="show" class="signin_balloon" key="0">
                        <h2 @click=showlogin>Sign in???</h2>
                    </div>
                </transition>
            </div>
        </div>

        <div v-if="Mode == 'signup'">
            <div class="signup">
                <transition name="bounce"
                    >
                    <div v-if="show" class="signup_balloon">
                        <h2 @click=showform>Sign up???</h2>
                    </div>
                </transition>
            </div>
        </div>

        <div v-if="Mode == 'google'">
            <transition
                name="bounce"
                >
                <div v-if="show" class="google_baloon">
                    <h2>google?</h2>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import * as types from '../store/mutation-types'
import * as consts from '../consts/const'

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
    }
  },
  created () {
    console.log(this.Mode)
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
    @include mq(sm) {
        width: 100%;
    }
    &*:hover {
        color: red;
        opacity: 0.5;
    }
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
    margin: 1.5em 0;
    padding: 15px 30px;
    min-width: 120px;
    max-width: 100%;
    color: #555;
    font-size: 16px;
    background: #fff;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    @include mq(){
        padding: 15px 10px;
    }
    @include mq(sm) {
        color: #fff;
        background-color: unset;
        margin: 0;
        width: 100%;
        cursor: unset;
    }
}
.signin_balloon:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 100%;
    margin-top: -15px;
    border: 15px solid transparent;
    border-left: 15px solid #fff;
    @include mq(sm) {
        display: none;
    }
}
.signup_balloon:before {
    content: "";
    position: absolute;
    top: 50%;
    left: -30px;
    margin-top: -15px;
    border: 15px solid transparent;
    border-right: 15px solid #fff;
    @include mq(sm) {
        display: none;
    }
}
.google_baloon:before {
    content: "";
    position: absolute;
    top: -30px;
    left: 50%;
    margin-left: -15px;
    border: 15px solid transparent;
    border-bottom: 15px solid #fff;
    @include mq(sm) {
        display: none;
    }
}
.signin_balloon:hover,
.signup_balloon:hover,
.google_baloon:hover {
    color: #000;
    padding: 20px 35px;
    transition: 0.5s ;
    @include mq(sm) {
        color: #fff;
        padding: 15px 10px;
    }
}
</style>
