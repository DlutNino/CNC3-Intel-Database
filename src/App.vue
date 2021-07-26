<template>
  <div id="app">
    <NavigationTop></NavigationTop>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import NavigationTop from "./components/NavigationTop";

export default {
  name: 'App',
  components: {
    // HelloWorld,
    NavigationTop
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #2c3e50;
  //margin-top: 60px;
}
</style>
