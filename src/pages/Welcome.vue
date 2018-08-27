<template>
    <div id="welcome">
        <div class="container">
            <div class="title">
                <div class="title_balloon">
                    <h2>meemo!!!</h2>
                </div>
            </div>
            <div class="row">
                <!-- <div class="col-sm-4 p-relative d-flex align-items-center justify-content-center">

                </div> -->

                <div @click='AllMode()' class="col-lg-6 welcome_img">
                    <transition
                    leave-active-class="animated bounceOutRight">
                        <img src="../assets/images/logo.png">
                    </transition>
                </div>

                <div class="col-lg-6 p-relative">
                    <transition name="fade" mode="out-in" enter-active-class="animated bounceInLeft">
                            <div v-if="show" key="ballon">
                                <WelcomeBalloon  Mode="signin"></WelcomeBalloon>
                                <WelcomeBalloon  Mode="signup"></WelcomeBalloon>
                                <WelcomeBalloon  Mode="google"></WelcomeBalloon>
                            </div>
                            <welcome-form v-if="welcomeState === SHOW_SIGN_IN" FormName="signin" key="signin"></welcome-form>
                            <welcome-form v-if="welcomeState === SHOW_SIGN_UP" FormName="signup" key="signup"></welcome-form>
                    </transition>
                </div>
            </div>

            <WelcomeFooterMenu v-if="welcomeState === SHOW_SIGN_UP" text='sign in'></WelcomeFooterMenu>
            <WelcomeFooterMenu v-if="welcomeState === SHOW_SIGN_IN" text='sign up'></WelcomeFooterMenu>

        </div>
    </div>
</template>

<script>
import WelcomeBalloon from '../components/WelcomeBalloon'
import WelcomeForm from '../components/WelcomeForm'
import { mapGetters, mapActions } from 'vuex'
import * as types from '../store/mutation-types'
import * as consts from '../consts/const'
import WelcomeFooterMenu from '../components/WelcomeFooterMenu'
import firebase from 'firebase'

export default {
  layout: 'app',
  name: 'welcome',

  data: () => ({
    // isNone: false, // 画像を消す
    SHOW_ALL: consts.SHOW_ALL_FORM, // 吹き出し表示
    SHOW_SIGN_IN: consts.SHOW_SIGNIN_FORM, // サインインフォーム
    SHOW_SIGN_UP: consts.SHOW_SIGNUP_FORM, // 登録フォーム
    userDate: null
  }),
  props: {
  },
  watch: {
    // welcomeState: {
    //   handler (val) {
    //     this.isNone = this.welcomeState !== 0
    //   },
    //   deep: true
    // }
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
    },
    // トランジション開始でインデックス*100ms分のディレイを付与
    beforeEnter (el) {
      el.style.transitionDelay = 0 + 'ms'
    },
    // トランジション完了またはキャンセルでディレイを削除
    afterEnter (el) {
      el.style.transitionDelay = ''
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
    WelcomeFooterMenu
  }
}
</script>

<style scoped lang="scss">
@import '../assets/css/common.scss';
#welcome {
    background: no-repeat url("../assets/images/umi.jpg");
    background-size: 100%;
    height: 100vh;
    .title {
        font-family: 'Lobster', cursive;
        height: 215px;
        margin-bottom: 40px;
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

    .fade-enter-active, .fade-leave-active {
    transition: all 0.5s ease;
    }
    .fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateX(30px);
    }
}
</style>
