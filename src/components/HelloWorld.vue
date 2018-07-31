<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h2>Ecosystem</h2>
    <div class="test">
      popopo
      <div class="title">popopo2</div>
          <div></div>
    </div>
    <Signup></Signup>
  </div>
</template>

<script>
import Signup from './signup'

export default {
  name: 'HelloWorld',
  components: {
    Signup
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: red;
  display: none;
}
.test {
  font-size: 25px;
  color: #eee;
  .title {
  color: deepskyblue;
  }
}

</style>
