<template>
    <div class="signin">
        <h2 @click=showlogin>Sign in???</h2>
        <transition name="form"><input v-if="show" type="text" placeholder="Username" ></transition>
            <transition name="form"><input v-if="show" type="password" placeholder="Password"></transition>
    </div>
</template>

<script>
export default {
  name: 'signin',

  props: {},
  data () {
    return {
      show: false
    }
  },
  methods: {
    showlogin () {
      console.log('popopopo')
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
.signin {
    &*:hover {
        color: red;
        opacity: 0.5;
    }
    font-family: Arial, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", Osaka, メイリオ, Meiryo, "ＭＳＰゴシック", "MS PGothic", sans-serif;
    h2 {
        font-family: 'Lobster', cursive;
    }
    .form-enter-active, .form-leave-active {
        transition: opacity 1s;
    }
    .form-enter, .form-leave-to {
        opacity: 0;
    }
}
</style>
