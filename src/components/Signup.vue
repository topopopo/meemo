<template>
  <singup>
    <h2>Sign up</h2>
    <input type="text" placeholder="Username" v-model="username">
    <input type="password" placeholder="Password" v-model="password">
    <button>Register</button>
  </singup>
</template>
<script>
export default {
  name: 'Signup',
  props: {
    singup: {}
  }
}
</script>
<style scoped>
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
