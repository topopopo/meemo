<template>
    <div class="welcome_form">
        <div class="signin" v-if="FormName == 'signin'">
            <div>
                <h2>Sign in</h2>
                <div class="form_list">
                    <input  type="text" placeholder="Mail Adress" v-model="username">
                    <input  type="password" placeholder="Password" v-model="password">
                    <button @click="signIn">sign in</button>
                </div>
            </div>
        </div>

        <div class="signup" v-if="FormName == 'signup'">
            <div>
                <h2>Sign up</h2>
                <div class="form_list">
                    <input  type="text" placeholder="Mail Adress" v-model="username">
                    <input  type="password" placeholder="Password" v-model="password">
                    <button @click="signUp">sign up</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import { mapGetters, mapActions } from 'vuex'
import * as types from '../store/mutation-types'
import * as consts from '../consts/const'
import WelcomeSideMenu from '../components/WelcomeSideMenu'

export default {
  name: 'w-form',

  props: {
    FormName: {
      type: String
    }
  },
  data: () => ({
    SHOW_SIGN_IN: consts.SHOW_SIGNIN_FORM,
    SHOW_SIGN_UP: consts.SHOW_SIGNUP_FORM,
    username: '',
    password: ''
  }),
  computed: {
    ...mapGetters({
      welcomeState: types.WELCOME_MENU_STATE
    })
  },
  methods: {
    ...mapActions([
      types.UPDATE_WELCOME_MENU_STATE
    ]),
    signUp () {
      firebase.auth().createUserWithEmailAndPassword(this.username, this.password)
        .then(user => {
          this.$router.push('/editor')
        })
        .catch(error => {
          alert(error.message)
        })
    },
    signIn () {
      firebase.auth().signInWithEmailAndPassword(this.username, this.password).then(
        user => {
          alert('Success!')
          this.$router.push('/editor')
        },
        err => {
          alert(err.message)
        }
      )
    }
  },
  created () {
  },
  components: {
    WelcomeSideMenu
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/common.scss';

.welcome_form {
    position: relative;
    width: 400px;
    margin: auto;
    margin-top: 80px;
    @include mq(sm) {
        width: 250px;
        margin-top: 30px;
        position: unset;
    }
    .form-enter-active {
        transition: opacity 5s;
        position: absolute;
    }
    .form-leave-active {
        transition: opacity 0.5s;
        position: absolute;
    }
    .form-enter, .form-leave-to {
        position: absolute;
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
                color: #fff;
                font-size: 16px;
            @include mq(){
                margin:0 auto 15px auto;
                padding: 10px;
                max-width: 350px;
            }
        }

        button {
            border: 0;
            padding: 10px;
            border-radius: 25px;
            outline: 0;
            text-decoration: none;
            background-color: #2c3e50;
            color: #fff;
            margin-top: 35px;
            @include mq(sm){
                margin-top: 0;
            }

            &:active {
                text-shadow: -6px 0px 15px rgba(255, 255, 240, 0.83), 6px 0px 15px rgba(255, 255, 240, 0.83);
            }
        }
    }
}

</style>
