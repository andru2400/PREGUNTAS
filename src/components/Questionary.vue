<template>
  <div>
    <div class="bd-example bd-example-tabs">
      <div class="tab-content" id="pills-tabContent">
          <!-- 1 -->
          <div class="tab-pane fade  active show" id="pills-1" role="tabpanel" aria-labelledby="pills-1-tab">
            <div class="h-preguntas">
              <div class="row">
                <div class="col">
                    <img src="img_girl.jpg" alt="definir" width="500" height="600">
                    <h6 v-text="questions[0].description"></h6>                
                </div>
              </div>
              <div class="row">
                <div class="col-sm bg-primary h-step-one border" v-for="(answer,i) in questions[0].answers" v-bind:key="i+'A'">
                    <input type="radio" :value="answer.id" v-model="questions[0].result"> <span v-text="answer.name"></span>
                </div>                
              </div>                            
            </div>
            <div class="d-flex justify-content-around">              
              <button type="button" class="btn btn-success" v-if="questions[0].result" @click="stepTwo()">Siguiente</button>
              <button type="button" class="btn btn-danger" v-else >Siguiente</button>
            </div>            
          </div>
          <!-- 2 -->
          <div class="tab-pane fade" id="pills-2" role="tabpanel" aria-labelledby="pills-2-tab">
            <div class="h-preguntas">                            
                <div class="row">
                    <div class="col">
                        <img src="img_girl.jpg" alt="definir" width="500" height="600">
                        <h6 v-text="questions[1].description"></h6>                
                    </div>
                </div>
                <div class="row">
                  <div class="col-sm bg-primary h-step-two border" v-for="(answer,i) in questions[1].answers" v-bind:key="i+'_B'">
                    <input type="radio" :value="answer.id" v-model="questions[1].result">  <span v-text="answer.name"></span>
                  </div>                  
                </div>              
            </div>
            <div class="d-flex justify-content-around">
              <button type="button" class="btn btn-light" @click="stepOne()">Atras</button>
              <button type="button" class="btn btn-success" @click="stepThree()" v-if="questions[1].result">Siguiente</button>
              <button type="button" class="btn btn-danger" v-else >Siguiente</button>
            </div>
          </div>
          <!-- 3 -->
          <div class="tab-pane fade" id="pills-3" role="tabpanel" aria-labelledby="pills-3-tab">
            <div class="h-preguntas"> 
                <div class="row">
                    <div class="col">
                        <img src="img_girl.jpg" alt="definir" width="500" height="600">
                        <h6 v-text="questions[2].description"></h6>                
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm bg-primary h-step-two border" v-for="(answer,i) in questions[2].answers" v-bind:key="i+'C'">
                        <input type="radio" :value="answer.id" v-model="questions[2].result">  <span v-text="answer.name"></span>
                    </div>                    
                </div>                                         
            </div>
            <div class="d-flex justify-content-around">            
              <button type="button" class="btn btn-light" @click="stepTwo()">Atras</button>              
              <button type="button" class="btn btn-success" @click="stepFour()" v-if="questions[2].result">Siguiente</button>
              <button type="button" class="btn btn-danger" v-else >Siguiente</button>
            </div>
          </div>
          <!-- 4 -->
          <div class="tab-pane fade" id="pills-4" role="tabpanel" aria-labelledby="pills-4-tab">
            <div class="h-preguntas">
                <div class="row">
                    <div class="col">
                        <img src="img_girl.jpg" alt="definir" width="500" height="600">
                        <h6 v-text="questions[3].description"></h6>                
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm bg-primary h-step-two border" v-for="(answer,i) in questions[3].answers" v-bind:key="i+'D'">
                        <input type="radio" :value="answer.id" v-model="questions[3].result">  <span v-text="answer.name"></span>
                    </div>                    
                </div>                                                       
              <h1><span class="badge badge-dark rounded p-3"></span></h1>                                            
            </div>
            <div class="d-flex justify-content-around">            
              <button type="button" class="btn btn-light" @click="stepThree()">Atras</button>              
              <button type="button" class="btn btn-success" @click="stepFive()" v-if="questions[3].result">Siguiente</button>
              <button type="button" class="btn btn-danger" v-else >Siguiente</button>
            </div>
          </div>
          <!-- 5 -->
          <div class="tab-pane fade" id="pills-5" role="tabpanel" aria-labelledby="pills-5-tab">
            <div class="h-preguntas">
                <div class="row">
                    <div class="col">
                        <img src="img_girl.jpg" alt="definir" width="500" height="600">
                        <h6 v-text="questions[4].description"></h6>                       
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm bg-primary h-step-two border"  v-for="(answer,i) in questions[4].answers" v-bind:key="i+'E'">
                        <input type="radio" :value="answer.id" v-model="questions[4].result">  <span v-text="answer.name"></span>
                    </div>                    
                </div>
            </div>
            <div class="d-flex justify-content-around">            
              <button type="button" class="btn btn-light" @click="stepFour()">Atras</button>              
              <button type="button" class="btn btn-success" @click="stepSix()" v-if="questions[4].result">Siguiente</button>
              <button type="button" class="btn btn-danger" v-else >Siguiente</button>
            </div>
          </div>
          <!-- 6 -->
          <div class="tab-pane fade" id="pills-6" role="tabpanel" aria-labelledby="pills-6-tab">
            <div class="h-preguntas">
              <div class="row">
                    <div class="col">
                        <img src="img_girl.jpg" alt="definir" width="500" height="600">
                        <h6 v-text="questions[5].description"></h6>                
                    </div>
              </div>                                                    
              <div class="row">
                  <div class="col-sm bg-primary h-step-two border" v-for="(answer,i) in questions[5].answers" v-bind:key="i+'F'">
                    <input type="radio" :value="answer.id" v-model="questions[5].result"> <span v-text="answer.name"></span>
                  </div>                  
              </div>
            </div>
            <div class="d-flex justify-content-around">            
              <button type="button" class="btn btn-light" @click="stepFive()">Atras</button>              
              <button type="button" class="btn btn-success" @click="stepSeven()" v-if="questions[5].result">Siguiente</button>
              <button type="button" class="btn btn-danger" v-else >Siguiente</button>
            </div>
          </div>
          <!-- 7 -->
          <div class="tab-pane fade" id="pills-7" role="tabpanel" aria-labelledby="pills-7-tab">
            <div class="h-preguntas">
               <div class="row">
                    <div class="col">
                        <img src="img_girl.jpg" alt="definir" width="500" height="600">
                        <h6 v-text="questions[6].description"></h6>                
                    </div>
              </div>                                                                   
              <h1><span class="badge badge-dark rounded p-3"></span></h1>                              
              <div class="row">
                  <div class="col-sm bg-primary m-2 p-3" v-for="(answer,i) in questions[6].answers" v-bind:key="i+'G'">
                    <img src="img_girl.jpg" alt="definir" width="500" height="600">
                    <input type="radio" :value="answer.id" v-model="questions[6].result"> <span v-text="answer.name"></span>
                  </div>                  
              </div>
            </div>
            <div class="d-flex justify-content-around">            
              <button type="button" class="btn btn-light" @click="stepSix()">Atras</button>              
              <button type="button" class="btn btn-success" @click="stepEight()" v-if="questions[6].result">Siguiente</button>
              <button type="button" class="btn btn-danger" v-else >Siguiente</button>
            </div>
          </div>
          <!-- 8 -->
          <div class="tab-pane fade" id="pills-8" role="tabpanel" aria-labelledby="pills-8-tab">
            <div class="h-preguntas">              
              <div class="row">
                    <div class="col">
                        <img src="img_girl.jpg" alt="definir" width="500" height="600">
                        <h6 v-text="questions[7].description"></h6>                
                    </div>
              </div>                                                                                 
              <div class="row">
                 <div class="col-sm bg-primary h-step-two border"  v-for="(answer,i) in questions[7].answers" v-bind:key="i+'H'">
                        <input type="radio" :value="answer.id" v-model="questions[7].result">  <span v-text="answer.name"></span>
                    </div>
              </div>
            </div>
            <div class="d-flex justify-content-around">            
              <button type="button" class="btn btn-light" @click="stepSeven()">Atras</button>
              <button type="button" class="btn btn-success" @click="stepNine()" v-if="questions[7].result">Siguiente</button>
              <button type="button" class="btn btn-danger" v-else >Siguiente</button>
            </div>
          </div>
          <!-- 9 -->
          <div class="tab-pane fade" id="pills-9" role="tabpanel" aria-labelledby="pills-9-tab">
            <div class="h-preguntas">              
              <div class="row">
                    <div class="col">
                        <img src="img_girl.jpg" alt="definir" width="500" height="600">                        
                    </div>
              </div>                                                                                 
              <div class="row">
                <div class="col bg-info">
                    <h6>El carro recomendado para ti es ...</h6>                
                    <span v-text="element.vehiculoFinal.name"></span>
                    <img v-if="element.vehiculoFinal.imgVehicle" :src="require('../'+element.vehiculoFinal.imgVehicle)">                    
                </div>
                <div class="col bg-primary">
                    <form action="accion.php" method="post">
                        <h6>INGRESA TUS DATOS DE CONTACTO Y CONOCE LOS DIFERENTES PLANES PARA OBTENERLO</h6>                
                        <div class="form-group">                            
                            <input type="text" class="form-control" v-model="element.nombres" id="formGroupExampleInput" placeholder="Nombres*">
                            <span v-if="validarNombre" v-text="validarNombre"></span>
                        </div>                             
                        <div class="form-group">                            
                            <input type="text" class="form-control" v-model="element.apellidos" id="formGroupExampleInput" placeholder="Apellidos*">
                            <span v-if="validarApellido" v-text="validarApellido"></span>
                        </div>
                        <div class="form-group">                            
                            <input type="email" class="form-control" v-model="element.email" id="formGroupExampleInput2" placeholder="Email*">
                            <span v-if="validarEmail" v-text="validarEmail"></span>
                        </div>
                        <div class="form-group">                            
                            <input type="text" class="form-control"  v-model="element.celular" id="formGroupExampleInput2" placeholder="Celular*">
                            <span v-if="validarCelular" v-text="validarCelular"></span>
                        </div>
                        <input type="checkbox" class="" v-model="element.acepto"> Autorizo el uso de mis datos...
                        <input type="checkbox" class="" v-model="element.aceptoInformación"> Acepto recibir ...
                        <button type="button" class="btn btn-dark" v-on:click="SendInfo()">Enviar</button>
                        <!-- <input type="submit" class="btn btn-dark" value="enviar"> -->                        
                    </form>
                </div>                
              </div>                          
            </div>
            <div class="d-flex justify-content-around">            
              <button type="button" class="btn btn-light" @click="stepEight()">Atras</button>              
            </div>
          </div>
      </div>
      <ul class="nav nav-pills mb-3 d-flex justify-content-center align-items-center" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <a class="nav-link active rounded-circle" id="pills-1-tab" data-toggle="pill" href="#pills-1" role="tab" aria-controls="pills-1" aria-selected="true">1</a>
          </li>
            <!-- <div class="line-s-number"></div> -->
          <li class="nav-item" role="presentation" v-if="questions[0].result">
            <a class="nav-link rounded-circle" id="pills-2-tab" data-toggle="pill" href="#pills-2" role="tab" aria-controls="pills-2" aria-selected="false">2</a>
          </li>
          <li class="nav-item" role="presentation" v-else>
            <a class="nav-link rounded-circle">2</a>
          </li>
            <!-- <div class="line-s-number"></div> -->
          <li class="nav-item" role="presentation" v-if="questions[1].result">
            <a class="nav-link rounded-circle" id="pills-3-tab" data-toggle="pill" href="#pills-3" role="tab" aria-controls="pills-3" aria-selected="false">3</a>
          </li>
          <li class="nav-item" role="presentation" v-else>
            <a class="nav-link rounded-circle" >3</a>
          </li>
            <!-- <div class="line-s-number"></div> -->
          <li class="nav-item" role="presentation" v-if="questions[2].result">
            <a class="nav-link rounded-circle" id="pills-4-tab" data-toggle="pill" href="#pills-4" role="tab" aria-controls="pills-4" aria-selected="false">4</a>
          </li>
          <li class="nav-item" role="presentation" v-else>
            <a class="nav-link rounded-circle" >4</a>
          </li>
            <!-- <div class="line-s-number"></div> -->
          <li class="nav-item" role="presentation" v-if="questions[3].result">
            <a class="nav-link rounded-circle" id="pills-5-tab" data-toggle="pill" href="#pills-5" role="tab" aria-controls="pills-5" aria-selected="false">5</a>
          </li>
          <li class="nav-item" role="presentation" v-else>
            <a class="nav-link rounded-circle" >5</a>
          </li>
            <!-- <div class="line-s-number"></div> -->
          <li class="nav-item" role="presentation" v-if="questions[4].result">
            <a class="nav-link rounded-circle" id="pills-6-tab" data-toggle="pill" href="#pills-6" role="tab" aria-controls="pills-6" aria-selected="false">6</a>
          </li>
          <li class="nav-item" role="presentation" v-else>
            <a class="nav-link rounded-circle" >6</a>
          </li>
            <!-- <div class="line-s-number"></div> -->
          <li class="nav-item" role="presentation" v-if="questions[5].result">
            <a class="nav-link rounded-circle" id="pills-7-tab" data-toggle="pill" href="#pills-7" role="tab" aria-controls="pills-7" aria-selected="false">7</a>
          </li>
          <li class="nav-item" role="presentation" v-else>
            <a class="nav-link rounded-circle" >7</a>
          </li>
            <!-- <div class="line-s-number"></div> -->
          <li class="nav-item" role="presentation" v-if="questions[6].result">
            <a class="nav-link rounded-circle" id="pills-8-tab" data-toggle="pill" href="#pills-8" role="tab" aria-controls="pills-8" aria-selected="false">8</a>
          </li>
          <li class="nav-item" role="presentation" v-else>
            <a class="nav-link rounded-circle" >8</a>
          </li>
            <!-- <div class="line-s-number"></div> -->
          <li class="nav-item" role="presentation" v-if="questions[7].result">
            <a class="nav-link rounded-circle" id="pills-9-tab" data-toggle="pill" href="#pills-9" role="tab" aria-controls="pills-9" aria-selected="false" @click="qualification()">9</a>
          </li>
          <li class="nav-item" role="presentation" v-else>
            <a class="nav-link rounded-circle" >9</a>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Questionary',
  data () {
    return {      
      questions:[
        {
          'id':1 ,
          'description':'¿CÓMO CONSIDERAS QUE ES TU FORMA DE MANEJAR?',
          'result':'',
          'answers':[
            {
              'id':1,
              'name':'Serena y relajada',
              'idLines':[12,3,2]
            },
            {
              'id':2,
              'name':'Suave y elegante',
              'idLines':[6,8,11]
            },
            {
              'id':3,
              'name':'Ligera y veloz',
              'idLines':[5,9,4]
            },
            {
              'id':4,
              'name':'Versátil y poderosa',
              'idLines':[7,1,9,8,10]
            },
          ]          
        },
        {
          'id':2 ,
          'description':'¿CÓMO PREFIERES QUE SEA TU PAREJA IDEAL?',
          'result':'',
          'answers':[
            {
              'id':1,
              'name':'Práctica',
              'idLines':[3,12,6,7]
            },
            {
              'id':2,
              'name':'Confortable',
              'idLines':[9,10,8,4,5,11]
            },
            {
              'id':3,
              'name':'Elegante',
              'idLines':[5,10,8,11,9,4]
            },
            {
              'id':4,
              'name':'Aventurera',
              'idLines':[2,1,9]
            },
            {
              'id':5,
              'name':'Fuerte',
              'idLines':[9,10,8]
            },
          ]          
        },
        {
          'id':3 ,
          'description':'¿QUÉ EXPERIENCIA DISFRUTARÍAS MÁS CON TU PAREJA IDEAL?',
          'result':'',
          'answers':[
            {
              'id':1,
              'name':'Dar un paseo por la ciudad',
              'idLines':[3,6,11,8,12,2]
            },
            {
              'id':2,
              'name':'Salir a viajar por carretera',
              'idLines':[5,4,8,9,10]
            },
            {
              'id':3,
              'name':'Disfrutar momentos en familia',
              'idLines':[12,8,9,11,5]
            },
            {
              'id':4,
              'name':'Trabajar hombro a hombro',
              'idLines':[7,1]
            },
          ]          
        },
        {
          'id':4 ,
          'description':'TE ENCANTARÍA LLEVAR DE COPILOTO A ...',
          'result':'',
          'answers':[
            {
              'id':1,
              'name':'Tu pareja, con ella hasta el fin del mundo',
              'idLines':[3,6,4,2]
            },
            {
              'id':2,
              'name':'A quien quiera unirse a la aventura',
              'idLines':[7,9,10,8,1]
            },
            {
              'id':3,
              'name':'Cuanta más gente mejor para conocer la ciudad',
              'idLines':[12,5,6,11,9]
            },            
          ]          
        },
        {
          'id':5 ,
          'description':'VAS CONDUCIENDO Y TE ENCUENTRAS CON UNA BIFURACIÓN. UN CAMINO ES CLARO, DESPEJADO Y SEÑALIZADO; EL OTRO ES UN TERRENO AGRESTE CON DESNIVELES PRONUNCIADOS Y MUCHO BARRO. ',
          'result':'',
          'answers':[
            {
              'id':1,
              'name':'Escoges el camino despejado',
              'idLines':[3,4,6,11,5,12,7,2]
            },
            {
              'id':2,
              'name':'Te vas por el camino con desniveles y ¡que empiece la aventura!',
              'idLines':[9,10,8,1]
            },            
          ]          
          
        },
        {
          'id':6 ,
          'description':'¿QUÉ CUALIDADES VALORARÍAS MÁS EN TU PAREJA IDEAL?',
          'result':'',
          'answers':[
            {
              'id':1,
              'name':'Que sea deportiva',
              'idLines':[3,4]
            },
            {
              'id':2,
              'name':'Que cargue suficiente equipaje',
              'idLines':[12,11,7,9,10,8,1]
            },
            {
              'id':3,
              'name':'Que sea exclusiva',
              'idLines':[5,6,9,10,8]
            },
            {
              'id':4,
              'name':'Que su imagen exterior impacte',
              'idLines':[5,4,6,9,10]
            },
          ]          
        },
        {
          'id':7 ,
          'description':'ESCOGE LA FAMILIA QUE QUISIERAS CONFORMAR CON TU PAREJA IDEAL',
          'result':'',
          'answers':[
            {
              'id':1,
              'name':'Hatchback',
              'idLines':[3,2,6,4]
            },
            {
              'id':2,
              'name':'Sedán',
              'idLines':[12,11,5]
            },
            {
              'id':3,
              'name':'SUV',
              'idLines':[8,9,10]
            },
            {
              'id':4,
              'name':'Pick-Up',
              'idLines':[7,1]
            },
          ]          
        },
        {
          'id':8 ,
          'description':'¿QUÉ TIPO DE EXPERIENCIA DISFRUTARÍAS MÁS CON TU PAREJA?',
          'result':'',
          'answers':[
            {
              'id':1,
              'name':'Tener el poder y el control total que te brinda una caja mecánica, especialmente en carretera y terrenos montañosos',
              'idLines':[3,12,2,6,11,7,5,8,1]
            },
            {
              'id':2,
              'name':'Cómoda y confortable en ciudad y carretera, teniendo la caja automática como protagonista',
              'idLines':[3,12,6,11,5,8,10,1]
            },            
          ]          
        },
      ],        
      vehiclesLines:[
        {
          id:1 ,
          name:'AMAROK' ,
          imgVehicle:'assets/logo.png',
          points:0,
        },
        {
          id:2 ,
          name:'FOX XTREME' ,
          imgVehicle:'assets/logo.png',
          points:0,
        },
        {
          id:3 ,
          name:'GOL' ,
          imgVehicle:'assets/logo.png',
          points:0,
        },
        {
          id:4 ,
          name:'GOLF' ,
          imgVehicle:'assets/logo.png',
          points:0,
        },
        {
          id:5 ,
          name:'JETTA' ,
          imgVehicle:'assets/logo.png',
          points:0,
        },
        {
          id:6 ,
          name:'POLO' ,
          imgVehicle:'assets/logo.png',
          points:0,
        },              
        {
          id:7 ,
          name:'SAVEIRO' ,
          imgVehicle:'assets/logo.png',
          points:0,
        },
        {
          id:8 ,
          name:'T-CROSS' ,
          imgVehicle:'assets/logo.png',
          points:0,
        },
        {
          id:9 ,
          name:'TIGUAN' ,
          imgVehicle:'assets/logo.png',
          points:0,
        },
        {
          id:10 ,
          name:'TOUAREG' ,
          imgVehicle:'assets/logo.png',
          points:0,
        },
        {
          id:11,
          name:'VIRTUS' ,
          imgVehicle:'assets/logo.png',
          points:0,
        },
        {
          id:12 ,
          name:'VOYAGE' ,
          imgVehicle:'assets/logo.png',
          points:0,
        },        
      ],
      element:{
          nombres:'',
          apellidos:'',
          email:'',
          celular:'',
          vehiculoFinal:[],
          acepto:'',
          aceptoInformación:'',
      },
      validarNombre:'',
      validarApellido:'',
      validarEmail:'',
      validarCelular:'',

    
    }
  },
  methods: {      
    qualification(){             

      this.element.vehiculoFinal = [];
      for(let itemVehReset of this.vehiclesLines){
        itemVehReset.points = 0;
      }

       for(let itemQ of this.questions){
         for(let itemA of itemQ.answers){
           if(itemQ.result === itemA.id){
             for(let itemIds of itemA.idLines){
               for(let itemVeh of this.vehiclesLines){
                 if(itemVeh.id === itemIds){
                   itemVeh.points += 1;
                 }
               }
             }
           }
         }
       }
       var order = this.vehiclesLines.sort(function(a, b){         
          if (a.points > b.points) {
            return -1;
          }        
       });              
       console.log(order);
       this.element.vehiculoFinal = order[0];
    },
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
       this.qualification();
    },    
    SendInfo(){                
        var validateError = false;

        if(!this.element.nombres){
          this.validarNombre = "Obligatorio";
          validateError = true;
        }else{
          this.validarNombre = "";
        }
        
        if(!this.element.apellidos){
          this.validarApellido = "Obligatorio";
          validateError = true;
        }else{
          this.validarApellido = "";
        }

        if(!this.element.email){
          this.validarEmail = "Obligatorio";
          validateError = true;
        }else{
          this.validarEmail = "";
        }

        if(!this.element.celular){
          this.validarCelular = "Obligatorio";
          validateError = true;
        }else{
          this.validarCelular = "";
        }

        if(validateError){
          return;
        }

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