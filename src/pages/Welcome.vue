<template>
    <div>
        <div class="container" id="welcome">
            <div class="title">
                <transition name="bounce">
                    <div v-if="show" class="title_balloon">
                        <h2>meemo!!!</h2>
                    </div>
                </transition>
            </div>
            <div class="row">
                <div class="col-sm-4 d-flex align-items-center justify-content-center">
                    <transition name="bounce">
                        <div v-if="show" class="signin_balloon">
                            <h2>Signin???</h2>
                        </div>
                    </transition>
                </div>
                <div @click="show = !show" class="col-sm-4" style="cursor: pointer;"><img src="../assets/images/kosuge.jpg"></div>
                <div class="col-sm-4 d-flex align-items-center justify-content-center">
                    <transition name="bounce">
                        <div v-if="show" class="signup_balloon">
                            <h2>Signup???</h2>
                        </div>
                    </transition>
                </div>
            </div>
            <div>↑</div>
            <div>CLICK HERE</div>
            <transition
                :duration="{ enter: 500, leave: 800 }"
                name="custom-classes-transition"
                enter-active-class="animated tada"
                leave-active-class="animated bounceOutRight"
            >
                <div v-if="show" class="google_baloon">
                    <h2>もしかして、、、google?</h2>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
  layout: 'app',
  name: 'welcome',

  data () {
    return {
      show: false
    }
  },
  methods: {
  },
  created () {
  },
  components: {
  }
}
</script>

<style scoped lang="scss">
#welcome {
    .title {
        font-family: 'Lobster', cursive;
        height: 215px;
        .bounce-enter-active {
            animation: bounce-in .5s;
        }
        .bounce-leave-active {
            animation: bounce-in .5s reverse;
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
            display: inline-block;
            position: relative;
            margin: 1.5em 0;
            padding: 15px 30px;
            min-width: 120px;
            max-width: 100%;
            color: #555;
            font-size: 16px;
            background: #e0edff;
            border-radius: 15px;

            :before {
                content: "";
                position: absolute;
                top: 100%;
                left: 50%;
                margin-left: -15px;
                border: 15px solid transparent;
                border-top: 15px solid #e0edff;
            }

            h2 {
                font-size: 100px;
                &:hover {
                    color: red;
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
    .bounce-leave-active {
        animation: bounce-in .5s reverse;
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
        background: #e0edff;
        border-radius: 15px;
        display: flex;
        justify-content: center;
    }
    .signin_balloon:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 100%;
        margin-top: -15px;
        border: 15px solid transparent;
        border-left: 15px solid #e0edff;
    }
    .signup_balloon:before {
        content: "";
        position: absolute;
        top: 50%;
        left: -30px;
        margin-top: -15px;
        border: 15px solid transparent;
        border-right: 15px solid #e0edff;
    }
    .google_baloon:before {
        content: "";
        position: absolute;
        top: -30px;
        left: 50%;
        margin-left: -15px;
        border: 15px solid transparent;
        border-bottom: 15px solid #e0edff;
    }
}
</style>
