<template>
    <div class="welcome_form">
        <div class="signin" v-if="FormName == 'signin'">
            <div>
                <h2>Sign in</h2>
                <b-form class="form_list" @submit="signIn">
                    <b-form-group id="exampleInputGroup1"
                                    label-for="maillForm1">
                        <b-form-input id="maillForm1"
                                    type="email"
                                    v-model="form.email"
                                    required
                                    placeholder="Enter email">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group id="exampleInputGroup2"
                        label-for="passwordForm1">
                        <b-form-input id="passwordForm1"
                            type="password"
                            v-model="form.password"
                            required
                            placeholder="Enter Password">
                        </b-form-input>
                    </b-form-group>
                    <b-button type="submit">Submit</b-button>
                </b-form>
            </div>
        </div>

        <div class="signup" v-if="FormName == 'signup'">
            <div>
                <h2>Sign up</h2>
                <b-form class="form_list" @submit="signUp">
                    <b-form-group id="userName"
                                    label-for="userForm1">
                        <b-form-input id="userForm1"
                                    type="text"
                                    v-model="form.user"
                                    required
                                    placeholder="Enter User Name">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group id="exampleInputGroup1"
                                    label-for="maillForm1">
                        <b-form-input id="maillForm1"
                                    type="email"
                                    v-model="form.email"
                                    required
                                    placeholder="Enter email">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group id="exampleInputGroup2"
                        label-for="passwordForm1">
                        <b-form-input id="passwordForm1"
                            type="password"
                            v-model="form.password"
                            required
                            placeholder="Enter Password">
                        </b-form-input>
                    </b-form-group>
                    <b-button type="submit">Submit</b-button>
                </b-form>
            </div>
        </div>

        <b-modal id="modal1"
            ref="varidateModal"
            hide-footer
            hide-header
            centered>
            <b-alert variant="danger"
            show>
            {{err}}
            </b-alert>
        </b-modal>

        <b-modal id="modal2"
            ref="completeModal"
            hide-footer
            hide-header
            centered>
            <b-alert variant="success"
             show>
            登録完了しました！ログインしてください
            </b-alert>
        </b-modal>
    </div>
</template>

<script>
import firebase from 'firebase'
import { mapGetters, mapActions } from 'vuex'
import * as types from '../store/mutation-types'
import * as consts from '../consts/const'

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
    form: {
      user: '',
      email: '',
      password: ''
    },
    err: ''
  }),
  computed: {
    ...mapGetters({
      welcomeState: types.WELCOME_MENU_STATE
    })
  },
  methods: {
    ...mapActions([
      types.UPDATE_WELCOME_MENU_STATE,
      types.UPDATE_SUCCESS_MODAL_STATE
    ]),
    signUp () {
      firebase.auth().createUserWithEmailAndPassword(this.form.email, this.form.password).then(
        user => {
          firebase.auth().signOut()
          firebase.auth().currentUser.updateProfile({
            displayName: this.form.user
          })
          this[types.UPDATE_SUCCESS_MODAL_STATE](true)
        })
        .catch(err => {
          this.err = err.message
          this.$refs.varidateModal.show()
        })
    },
    signIn () {
      firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password).then(
        user => {
          this.$router.push('/editor')
        },
        err => {
          this.err = err.message
          this.$refs.varidateModal.show()
        }
      )
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

.welcome_form {
    position: relative;
    width: 400px;
    margin: auto;
    padding: 20px;
    @include mq(sm) {
        width: 100%;
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
                padding: 5px 0px;
                background: transparent;
                border: 0;
                border-bottom: 1px solid #435160;
                outline: none;
                color: #fff;
                font-size: 18px;
                margin-bottom: 10px;
                border-radius: 0;
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
