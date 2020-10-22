<template>
  <div>
    <div class="bd-example bd-example-tabs">
      <ul class="nav nav-pills mb-3 d-flex justify-content-center align-items-center" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <a class="nav-link active rounded-circle" id="pills-1-tab" data-toggle="pill" href="#pills-1" role="tab" aria-controls="pills-1" aria-selected="true">1</a>
          </li>
            <div class="line-s-number"></div>
          <li class="nav-item" role="presentation" v-if="answerOne">
            <a class="nav-link rounded-circle" id="pills-2-tab" data-toggle="pill" href="#pills-2" role="tab" aria-controls="pills-2" aria-selected="false">2</a>
          </li>
          <li class="nav-item" role="presentation" v-else>
            <a class="nav-link rounded-circle">2</a>
          </li>
            <div class="line-s-number"></div>
          <li class="nav-item" role="presentation" v-if="answerTwo">
            <a class="nav-link rounded-circle" id="pills-3-tab" data-toggle="pill" href="#pills-3" role="tab" aria-controls="pills-3" aria-selected="false">3</a>
          </li>
          <li class="nav-item" role="presentation" v-else>
            <a class="nav-link rounded-circle" >3</a>
          </li>
            <div class="line-s-number"></div>
          <li class="nav-item" role="presentation" v-if="answerThree">
            <a class="nav-link rounded-circle" id="pills-4-tab" data-toggle="pill" href="#pills-4" role="tab" aria-controls="pills-4" aria-selected="false">4</a>
          </li>
          <li class="nav-item" role="presentation" v-else>
            <a class="nav-link rounded-circle" >4</a>
          </li>
            <div class="line-s-number"></div>
          <li class="nav-item" role="presentation" v-if="answerFour">
            <a class="nav-link rounded-circle" id="pills-5-tab" data-toggle="pill" href="#pills-5" role="tab" aria-controls="pills-5" aria-selected="false">5</a>
          </li>
          <li class="nav-item" role="presentation" v-else>
            <a class="nav-link rounded-circle" >5</a>
          </li>
            <div class="line-s-number"></div>
          <li class="nav-item" role="presentation" v-if="answerFive">
            <a class="nav-link rounded-circle" id="pills-6-tab" data-toggle="pill" href="#pills-6" role="tab" aria-controls="pills-6" aria-selected="false">6</a>
          </li>
          <li class="nav-item" role="presentation" v-else>
            <a class="nav-link rounded-circle" >6</a>
          </li>
            <div class="line-s-number"></div>
          <li class="nav-item" role="presentation" v-if="answerSix">
            <a class="nav-link rounded-circle" id="pills-7-tab" data-toggle="pill" href="#pills-7" role="tab" aria-controls="pills-7" aria-selected="false">7</a>
          </li>
          <li class="nav-item" role="presentation" v-else>
            <a class="nav-link rounded-circle" >7</a>
          </li>
            <div class="line-s-number"></div>
          <li class="nav-item" role="presentation" v-if="answerSeven">
            <a class="nav-link rounded-circle" id="pills-8-tab" data-toggle="pill" href="#pills-8" role="tab" aria-controls="pills-8" aria-selected="false">8</a>
          </li>
          <li class="nav-item" role="presentation" v-else>
            <a class="nav-link rounded-circle" >8</a>
          </li>
            <div class="line-s-number"></div>
          <li class="nav-item" role="presentation" v-if="answerEight">
            <a class="nav-link rounded-circle" id="pills-9-tab" data-toggle="pill" href="#pills-9" role="tab" aria-controls="pills-9" aria-selected="false">9</a>
          </li>
          <li class="nav-item" role="presentation" v-else>
            <a class="nav-link rounded-circle" >9</a>
          </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade  active show" id="pills-1" role="tabpanel" aria-labelledby="pills-1-tab">
            <div class="h-preguntas">
              <h1><span class="badge badge-dark rounded p-3">¿Cómo consideras que es tu forma de manejar?</span></h1>                
              <ul class="list-group m-3">                
                <li class="list-group-item"><input type="radio" value="1" v-model="answerOne"> Serena y Relajada</li>
              </ul>                          
              <ul class="list-group m-3">                
                <li class="list-group-item"><input type="radio" value="2" v-model="answerOne"> Suave y elegante</li>
              </ul>                          
              <ul class="list-group m-3">                                
                <li class="list-group-item"><input type="radio" value="3" v-model="answerOne"> Ligera y veloz</li>              
              </ul>                          
              <ul class="list-group m-3">                                
                <li class="list-group-item"><input type="radio" value="4" v-model="answerOne"> Versátil y poderosa</li>
              </ul>                          
            </div>
            <div>              
              <button type="button" class="btn btn-success" v-if="answerOne" @click="stepTwo()">Siguiente</button>
              <button type="button" class="btn btn-danger" v-else >Siguiente</button>
            </div>            
          </div>
          <div class="tab-pane fade" id="pills-2" role="tabpanel" aria-labelledby="pills-2-tab">
            <div class="h-preguntas">              
              <h1><span class="badge badge-dark rounded p-3">¿Cómo prefieres que sea tu pareja ideal?</span></h1>                
                <div class="row">
                  <div class="col-sm bg-primary h-step-two">
                    <input type="radio" value="1" v-model="answerTwo"> Practica
                  </div>
                  <div class="col-sm bg-secondary h-step-two">
                    <input type="radio" value="2" v-model="answerTwo"> Confortable
                  </div>
                  <div class="col-sm bg-success h-step-two">
                    <input type="radio" value="3" v-model="answerTwo"> Elegante
                  </div>
                  <div class="col-sm bg-info h-step-two">
                    <input type="radio" value="4" v-model="answerTwo"> Aventurera
                  </div>
                    <div class="col-sm bg-dark h-step-two">
                    <input type="radio" value="5" v-model="answerTwo"> Fuerte
                  </div>
                </div>              
            </div>
            <div class="d-flex justify-content-around">
              <button type="button" class="btn btn-light" @click="stepOne()">Atras</button>
              <button type="button" class="btn btn-success" @click="stepThree()" v-if="answerTwo">Siguiente</button>
              <button type="button" class="btn btn-danger" v-else >Siguiente</button>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-3" role="tabpanel" aria-labelledby="pills-3-tab">
            <div class="h-preguntas">              
              <div class="bg-info d-flex justify-content-around">
                <input type="radio" value="1" v-model="answerThree"> Salir a viajar por carretera
                <input type="radio" value="2" v-model="answerThree"> Dar un paseo por la ciudad
                <div class="circle-step-three">
                  ¿Qué experiencia disfrutarías más con tu pareja ideal?
                </div>
                <input type="radio" value="3" v-model="answerThree"> Disfrutar momentos en familia
                <input type="radio" value="4" v-model="answerThree"> Trabajar hombro a hombro
              </div>
            </div>
            <div class="d-flex justify-content-around">            
              <button type="button" class="btn btn-light" @click="stepTwo()">Atras</button>              
              <button type="button" class="btn btn-success" @click="stepFour()" v-if="answerThree">Siguiente</button>
              <button type="button" class="btn btn-danger" v-else >Siguiente</button>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-4" role="tabpanel" aria-labelledby="pills-4-tab">
            <div class="h-preguntas">              
              <h1><span class="badge badge-dark rounded p-3">¿Te encantaría llevar de copiloto a...?</span></h1>                              
              <div class="row">
                  <div class="col-sm bg-primary h-step-two">
                    <div class="bg-info p-4 m-3">
                      <input type="radio" value="1" v-model="answerFour"> Tu pareja con ella hasta el fin del mundo
                    </div>
                    <div class="bg-info p-4 m-3">
                      <input type="radio" value="2" v-model="answerFour"> A quien quiera unirse la aventura
                    </div>                    
                    <div class="bg-info p-4 m-3">
                      <input type="radio" value="3" v-model="answerFour"> Cuanto mas gente mejor para conocer la ciudad
                    </div>                                        
                  </div>
                  <div class="col-sm bg-secondary h-step-two">
                    <div class="p-5" v-if="answerFour === '1'">
                      Imagen de carro 1
                    </div>
                    <div class="p-5" v-else-if="answerFour === '2'">
                      Imagen de carro 2
                    </div>
                    <div  class="p-5" v-else-if="answerFour === '3'">
                      Imagen de carro 3
                    </div>
                    <div class="p-5" v-else>
                      Escoge ...
                    </div>
                  </div>
              </div>
            </div>
            <div class="d-flex justify-content-around">            
              <button type="button" class="btn btn-light" @click="stepThree()">Atras</button>              
              <button type="button" class="btn btn-success" @click="stepFive()" v-if="answerFour">Siguiente</button>
              <button type="button" class="btn btn-danger" v-else >Siguiente</button>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-5" role="tabpanel" aria-labelledby="pills-5-tab">
            <div class="h-preguntas">
              <div class="row">
                  <div class="col-sm bg-primary h-step-two">
                    <input type="radio" value="1" v-model="answerFive">Vas conduciendo y te encuentras una bifurcación IMG
                  </div>
                  <div class="col-sm bg-secondary h-step-two">
                    <input type="radio" value="2" v-model="answerFive">Terreno agreste con desniveles IMG
                  </div>
              </div>
            </div>
            <div class="d-flex justify-content-around">            
              <button type="button" class="btn btn-light" @click="stepFour()">Atras</button>              
              <button type="button" class="btn btn-success" @click="stepSix()" v-if="answerFive">Siguiente</button>
              <button type="button" class="btn btn-danger" v-else >Siguiente</button>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-6" role="tabpanel" aria-labelledby="pills-6-tab">
            <div class="h-preguntas">              
              <h1><span class="badge badge-dark rounded p-3">¿Qué cualidades valorarías más en tu pareja ideal?.</span></h1>                              
              <div class="row">
                  <div class="col-sm bg-primary h-step-two">
                    <input type="radio" value="1" v-model="answerSix"> Que sea deportiva
                  </div>
                  <div class="col-sm bg-secondary h-step-two">
                    <input type="radio" value="2" v-model="answerSix"> Que cargue suficiente equipaje
                  </div>
                  <div class="col-sm bg-success h-step-two">
                    <input type="radio" value="3" v-model="answerSix"> Que sea deportiva 2
                  </div>
                  <div class="col-sm bg-info h-step-two">
                    <input type="radio" value="4" v-model="answerSix"> Qu su imagen exterior impacte
                  </div>
              </div>
            </div>
            <div class="d-flex justify-content-around">            
              <button type="button" class="btn btn-light" @click="stepFive()">Atras</button>              
              <button type="button" class="btn btn-success" @click="stepSeven()" v-if="answerSix">Siguiente</button>
              <button type="button" class="btn btn-danger" v-else >Siguiente</button>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-7" role="tabpanel" aria-labelledby="pills-7-tab">
            <div class="h-preguntas">              
              <h1><span class="badge badge-dark rounded p-3">Escoge la familia que quisieras conformar con tu pareja ideal.</span></h1>                              
              <div class="row">
                  <div class="col-sm bg-primary m-2 p-3">
                    img
                    <input type="radio" value="1" v-model="answerSeven"> Hatchback
                  </div>
                  <div class="col-sm bg-secondary m-2 p-3">
                    img
                    <input type="radio" value="2" v-model="answerSeven"> Sedan
                  </div>
                  <div class="col-sm bg-success m-2 p-3">
                    img
                    <input type="radio" value="3" v-model="answerSeven"> SUV
                  </div>
                  <div class="col-sm bg-info m-2 p-3">
                    img
                    <input type="radio" value="4" v-model="answerSeven"> Pick-Up
                  </div>
              </div>
            </div>
            <div class="d-flex justify-content-around">            
              <button type="button" class="btn btn-light" @click="stepSix()">Atras</button>              
              <button type="button" class="btn btn-success" @click="stepEight()" v-if="answerSeven">Siguiente</button>
              <button type="button" class="btn btn-danger" v-else >Siguiente</button>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-8" role="tabpanel" aria-labelledby="pills-8-tab">
            <div class="h-preguntas">              
              <h1><span class="badge badge-dark rounded p-3">¿Qué tipo de experiencia disfrutarías más con tu pareja?</span></h1>                              
              <div class="row">
                <div class="col bg-info step-8"><input type="radio" value="1" v-model="answerEight"> Start</div>
                <div class="col bg-primary step-8"><input type="radio" value="2" v-model="answerEight"> Confortable</div>
                <div class="w-100"></div>
                <div class="col bg-primary step-8"><input type="radio" value="3" v-model="answerEight"> Pick-Up</div>
                <div class="col bg-info step-8"><input type="radio" value="4" v-model="answerEight"> Pick-Up</div>
              </div>
            </div>
            <div class="d-flex justify-content-around">            
              <button type="button" class="btn btn-light" @click="stepSeven()">Atras</button>
              <button type="button" class="btn btn-success" @click="stepNine()" v-if="answerEight">Siguiente</button>
              <button type="button" class="btn btn-danger" v-else >Siguiente</button>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-9" role="tabpanel" aria-labelledby="pills-9-tab">
            <div class="h-preguntas">              
              <h1><span class="badge badge-dark rounded p-3">El carro recomendado para ti es ...</span></h1>                              
              Llena tu información para poder contactarte ...
              <form>
                <div class="form-group">
                  <label for="formGroupExampleInput">Nombre</label>
                  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Nombre">
                </div>
                <div class="form-group">
                  <label for="formGroupExampleInput2">Celular</label>
                  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Celular">
                </div>
              </form>
            </div>
            <div class="d-flex justify-content-around">            
              <button type="button" class="btn btn-light" @click="stepEight()">Atras</button>
              <button type="button" class="btn btn-primary" v-on:click="SendInfo()">Enviar</button>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Questionary',
  data () {
    return {
      answerOne:'',
      answerTwo:'',
      answerThree:'',
      answerFour:'',
      answerFive:'',
      answerSix:'',
      answerSeven:'',
      answerEight:'',
      answerNine:'',      
    }
  },
  methods: {  
    stepOne(){
       window.$('#pills-1-tab').click();       
    },    
    stepTwo(){
       window.$('#pills-2-tab').click();       
    },
    stepThree(){
       window.$('#pills-3-tab').click();       
    },
    stepFour(){
       window.$('#pills-4-tab').click();              
    },
    stepFive(){
       window.$('#pills-5-tab').click();       
    },
    stepSix(){
       window.$('#pills-6-tab').click();       
    },
    stepSeven(){
       window.$('#pills-7-tab').click();       
    },
    stepEight(){
       window.$('#pills-8-tab').click();       
    },
    stepNine(){
       window.$('#pills-9-tab').click();       
    },
    SendInfo(){
        var url = 'http://ad.test.bellpi.co/api/v1/external/lead/landings/add';
        // var url = 'https://pokeapi.co/api/v2/pokemon/ditto';
        window.axios.post(url)
          .then(function (response) {
            alert (response.data);
          })
          .catch(function (error) {
            alert(error);
          });
    }
  }
}
</script>
