<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="I hate white ppl"/> -->
  <MainPage msg="white ppl"/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MainPage from './components/main.vue'

export default {
  name: 'App',
  components: {
    MainPage
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
