<template>
  <div class="container-fluid" id="app">    
    <Questionary msg="Welcome to Your Vue.js App"/>    
  </div>
</template>

<script>

import Questionary from './components/Questionary'

export default {
  name: 'App',
  components: {
    Questionary
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
