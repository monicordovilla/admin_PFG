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
  margin: 0;
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
  width: 9rem;
  height: 3rem;
  font-size: large;
  background-color: #619A8A;
  color: white;
}

.form-control{
  background-image: url('../assets/lupa.png');
  background-position: 0.5rem 0.5rem;
  background-size: 3%;
  background-repeat: no-repeat;
  width: 80%;
  font-size: 1rem;
  padding: 1rem 1.3rem 1rem 2.5rem;
  border: 1px solid #ddd;
  margin-bottom: 1rem;
}
</style>