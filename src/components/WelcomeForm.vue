<template>
    <div class="welcome_form">
        <transition name=form>
            <div v-if="welcomeState === SHOW_SIGN_IN">
                <h2>Sign in</h2>
                <div class="form_list">
                    <input  type="text" placeholder="Username" >
                    <input  type="password" placeholder="Password">
                    <button >sign in</button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import * as types from '../store/mutation-types'
import * as consts from '../consts/const'

export default {
  name: 'w-form',

  props: {
  },
  data: () => ({
    SHOW_SIGN_IN: consts.SHOW_SIGNIN_FORM
    // SHOW_SIGN_UP: consts.SHOW_SIGNUP_FORM
  }),
  computed: {
    ...mapGetters({
      welcomeState: types.WELCOME_MENU_STATE
    })
  },
  methods: {
    ...mapActions([
      types.UPDATE_WELCOME_MENU_STATE
    ])
  },
  created () {
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/common.scss';

.welcome_form {
    .form-enter-active {
        transition: opacity 5s;
    }
    .form-leave-active {
        transition: opacity 0.5s;
        position: absolute;
    }
    .form-enter, .form-leave-to {
        opacity: 0;
    }
    .form_list {
        width: 100%;
        display: flex;
        flex-direction: column;
        input {
                width: 100%;
                padding: 20px 0px;
                background: transparent;
                border: 0;
                border-bottom: 1px solid #435160;
                outline: none;
                color: #6D7781;
                font-size: 16px;
            @include mq(){
                margin:0 auto 15px auto;
                padding: 10px;
                border: 0;
                border-radius: 25px;
                max-width: 350px;
            }
        }
    }
}

</style>
