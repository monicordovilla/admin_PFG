<template>
    <div class="home">
        <Header class="fijar-header"/>

        <div class="listado">
          <!-- Titulo -->
          <h1 v-if="this.$route.params.user == 'facilitador'">Facilitador</h1>
          <h1 v-else>Persona</h1>

          <!-- Boton para crear -->
          <button @click="goCreacion(false)" v-if="this.$route.params.user == 'facilitador'" class="btn-crear" >
              Crear facilitador
          </button>
          <button @click="goCreacion(true)" v-else class="btn-crear" >
              Crear persona
          </button>
          
          <!--v-model="buscar"-->
          <input type="search" class="form-control" placeholder="Nombre, apellidos"/>
        </div>

        <!-- Caja de información -->
        <template v-if="this.$route.params.user == 'facilitador'">
          <CajaInfo v-for="(facilitador, index) in facilitadores" :key="index" :user="facilitador"/>
        </template>
        <template v-else>
          <CajaInfo v-for="(persona, index) in personas" :key="index" :user="persona"/>
        </template>
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import CajaInfo from '@/components/CajaInfo.vue'
import { mapState } from 'vuex'

export default {
  name: 'Listado',
  components: {
    Header,
    CajaInfo
  },

  data: function(){
      return{
        number: 5,
        numeros: [1,2,3,4,5,6]
      }
  },
  
  methods:{
    goCreacion(bool) {
      if (bool) this.$router.push("/crear/persona");
      else this.$router.push("/crear/facilitador");
    }
  },

  computed:{
    ...mapState("users", ["facilitadores"]),
    ...mapState("users", ["personas"])
  }
}
</script>

<style>
body{
  margin: 0%;
}

.fijar-header{
  position: sticky;
  top: 0;
}

.listado{
  margin: 0 5%;
}

.btn-crear{
  float: right;
  width: 150px;
  height: 50px;
  font-size: large;
  background-color: #619A8A;
  color: white;
}

.form-control{
  background-image: url('../assets/lupa.png');
  background-position: 6px 6px;
  background-size: 3%;
  background-repeat: no-repeat;
  width: 80%;
  font-size: 16px;
  padding: 12px 20px 12px 40px;
  border: 1px solid #ddd;
  margin-bottom: 12px;
}
</style>