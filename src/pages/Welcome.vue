<template>
    <div>
        <div class="container" id="welcome">
            <div class="title">
                <div class="title_balloon">
                    <h2>meemo!!!</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4 d-flex align-items-center justify-content-center">
                    <transition name="bounce"
                    leave-active-class="animated bounceOutRight">
                        <div v-if="show" class="signin_balloon">
                            <signin></signin>
                        </div>
                    </transition>
                </div>
                <div @click="show = !show" class="col-4 col-sm-4 welcome_img"><img src="../assets/images/logo.png"></div>
                <div class="col-sm-4 d-flex align-items-center justify-content-center">
                    <transition name="bounce"
                    leave-active-class="animated bounceOutRight">
                        <div v-if="show" class="signup_balloon">
                            <signup></signup>
                        </div>
                    </transition>
                </div>
            </div>
            <div class="d-flex align-items-center justify-content-center">
                <transition
                    :duration="{ enter: 500, leave: 800 }"
                    name="bounce"
                    leave-active-class="animated bounceOutRight"
                >
                    <div v-if="show" class="google_baloon">
                        <h2>google?</h2>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import Signin from '../components/SignIn'
import Signup from '../components/Signup'
// import { mapGetters } from 'vuex'
// import * as types from '../store/mutation-types'

export default {
  layout: 'app',
  name: 'welcome',

  data () {
    return {
      show: false
    }
  },
  props: {
  },
  computed: {
  },
  methods: {
  },
  created () {
  },
  components: {
    Signin,
    Signup
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
            background-color: #000;
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
        @include mq(sm) {
            color: #fff;
            padding: 15px 10px;
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
