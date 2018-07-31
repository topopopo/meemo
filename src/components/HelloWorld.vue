<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
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
      msg: 'Welcome to meemo!!'
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

</style>
