<template>
    <div class="home">
        <Header class="fijar-header"/>

        <div class="listado">
          <h1 v-if="this.$route.params.user == 'facilitador'">Facilitador</h1>
          <h1 v-else>Persona</h1>
          <button @click="goCreacion(false)" v-if="this.$route.params.user == 'facilitador'" class="crear" >
              Crear facilitador
          </button>
          <button @click="goCreacion(true)" v-else class="crear" >
              Crear persona
          </button>
          
          <!--v-model="buscar"-->
          <input type="search" class="form-control" placeholder="Nombre, apellidos"/>
        </div>
        <CajaInfo v-for="(numero, index) in numeros" :key="index" /> 
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import CajaInfo from '@/components/CajaInfo.vue'
import { db } from '../firebase'

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

  async created(){
    const query = await db.collection("users").get();
    
    console.log('db');
    console.log(db);
    console.log('query');
    console.log(query);
  },

  methods:{
    goCreacion(bool) {
      if (bool) this.$router.push("/crear/persona");
      else this.$router.push("/crear/facilitador");
    },

    async getUsuarios(bool){
      const collectionRef = db.collection("users");
      let query;
      if (bool){ query = await collectionRef
      .where("Rol" == "Persona")
      .orderBy("Nombre", "asc")
      .get();
      }
      else query = await collectionRef.where("Rol" == "Facilitador").get();
      query.forEach(querySnapchot => {
        console.log(querySnapchot.data.id());
      });
    }
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

.crear{
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