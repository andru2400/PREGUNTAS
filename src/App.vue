<template>
  <div class="container-fluid p-0">    
    <Header></Header>
    <div v-show="!show" class="row">
      <div class="col-4 bg-secondary h-1-pag"><img src="./assets/logo.png" alt="definir" width="500" height="600"></div>
      <div class="col-1 bg-warning h-1-pag"></div>
      <div class="col-7 bg-success h-1-pag"></div>
      <div class="col-12 bg-info h-2-pag">
        <p class="p-1 justify-content-center align-items-center d-flex">Hacer clic especial no es tarea sencilla. Nosotros te ayudamos.</p>
        <p class="justify-content-center align-items-center d-flex">>></p>
        <div class="justify-content-center align-items-center d-flex">
          <button type="button" class="btn btn-outline-light" @click="show = !show">EMPEZAR</button>
        </div>
      </div>
    </div>    
    <transition v-show="show" name="slide-fade">
      <Questionary v-if="show" msg="Welcome to Your Vue.js App"/>          
    </transition>
  </div>
</template>

<script>

import Questionary from './components/Questionary';
import Header from './components/Header';

export default {
  name: 'App',  
   data () {
    return {
      show:false,
    }
  },
  methods:{
    // changeSecondView(){
    //   this.firstStep = false;
    // }
  },
  components: {
    Questionary,
    Header,
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; 
}

.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(1000px);
  opacity: 0;
}

</style>
