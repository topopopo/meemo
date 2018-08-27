<template>
    <div>
        <div class="container" id="welcome">
            <div class="title">
                <div class="title_balloon">
                    <h2>meemo!!!</h2>
                </div>
            </div>
            <div class="row" v-bind:class="{ 'pc-noneF' : isNone }">
                <div class="col-sm-4 p-relative d-flex align-items-center justify-content-center">
                    <WelcomeBalloon Mode="signin"></WelcomeBalloon>
                </div>

                <div @click='AllMode()' class="col-4 col-sm-4 welcome_img">
                    <transition
                    leave-active-class="animated bounceOutRight">
                        <img src="../assets/images/logo.png">
                    </transition>
                </div>

                <div class="col-sm-4 p-relative d-flex align-items-center justify-content-center">

                    <WelcomeBalloon Mode="signup"></WelcomeBalloon>

                </div>
            </div>
            <div class="d-flex align-items-center justify-content-center">

                <WelcomeBalloon Mode="google"></WelcomeBalloon>

            </div>

            <transition name=form enter-active-class="animated bounceInLeft">
                    <welcome-form v-if="welcomeState === SHOW_SIGN_IN" FormName="signin"></welcome-form>
            </transition>
                <transition name=form enter-active-class="animated bounceInLeft">
                    <welcome-form v-if="welcomeState === SHOW_SIGN_UP" FormName="signup"></welcome-form>
            </transition>

            <WelcomeSideMenu v-if="welcomeState === SHOW_SIGN_UP" text='sign in'></WelcomeSideMenu>
            <WelcomeSideMenu v-if="welcomeState === SHOW_SIGN_IN" text='sign up'></WelcomeSideMenu>

        </div>
    </div>
</template>

<script>
import WelcomeBalloon from '../components/WelcomeBalloon'
import WelcomeForm from '../components/WelcomeForm'
import { mapGetters, mapActions } from 'vuex'
import * as types from '../store/mutation-types'
import * as consts from '../consts/const'
import WelcomeSideMenu from '../components/WelcomeSideMenu'
import firebase from 'firebase'

export default {
  layout: 'app',
  name: 'welcome',

  data: () => ({
    isNone: false, // 画像を消す
    SHOW_ALL: consts.SHOW_ALL_FORM, // 吹き出し表示
    SHOW_SIGN_IN: consts.SHOW_SIGNIN_FORM, // サインインフォーム
    SHOW_SIGN_UP: consts.SHOW_SIGNUP_FORM, // 登録フォーム
    userDate: null
  }),
  props: {
  },
  watch: {
    welcomeState: {
      handler (val) {
        this.isNone = this.welcomeState !== 0
      },
      deep: true
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
    AllMode () {
      this[types.UPDATE_WELCOME_ALL_STATE](true)
      // リセット
      this[types.UPDATE_WELCOME_MENU_STATE](0)
    }
  },
  created () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.userDate = user
      } else {
        this.userDate = user
      }
    })
  },
  components: {
    WelcomeBalloon,
    WelcomeForm,
    WelcomeSideMenu
  }
}
</script>

<style scoped lang="scss">
@import '../assets/css/common.scss';
#welcome {
    .title {
        font-family: 'Lobster', cursive;
        height: 215px;
        @include mq(sm){
            height: auto;
        }
        .bounce-enter-active {
            animation: bounce-in .5s;
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

        .title_balloon {
            font-family: 'Lobster', cursive;
            display: inline-block;
            position: relative;
            margin: 1.5em 0;
            padding: 15px 30px;
            min-width: 120px;
            max-width: 100%;
            color: #555;
            font-size: 16px;
            background: #fff;
            border-radius: 15px;

            :before {
                content: "";
                position: absolute;
                top: 100%;
                left: 50%;
                margin-left: -15px;
                border: 15px solid transparent;
                border-top: 15px solid #fff;
            }

            h2 {
                font-size: 100px;
                @include mq(sm) {
                    font-size: 48px;
                }
            }
        }
        .v-transition {
            transition: all 0.7s ease;
            transform: scale3d(1, 1, 1);
        }
        .v-enter, .v-leave {
            transform: scale3d(0, 0, 1);
            opacity: 0;
        }
    }

    .welcome_img {
        cursor: pointer;
        @include mq(sm) {
            -ms-flex-order: -1;
            -webkit-box-ordinal-group: 0;
            order: -1;
            margin: auto;
        }
    }
}
</style>
