<template>
    <div class="signup">
        <h2 @click=showform>Sign up???</h2>
        <transition name="form">
            <div v-if="show" class="form_list">
                <input  type="text" placeholder="Username" >
                <input  type="password" placeholder="Password">
                <button >sign up</button>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
  name: 'signup',

  props: {},
  data () {
    return {
      show: false
    }
  },
  methods: {
    showform () {
      this.show = !this.show
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

.signup {
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
    .form-enter-active {
        transition: opacity 2s;
    }
    .form-leave-active {
        transition: opacity 0.5s;
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
            margin:0 auto 15px auto;
            padding: 10px;
            border: 0;
            border-radius: 25px;
            max-width: 350px;
        }
    }
}
</style>
