<template>
  <div id="app">
    <div id="nav">
      <svg-icon icon-name="spades" width="24" height="24" icon-color="red"></svg-icon>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import {login} from 'api/login'

export default {
  created() {
    let username = 'root'
    let password = '123456'
    login(username, password).then(() => {
      // console.log(res)
    })
    console.log('测试 ')
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
