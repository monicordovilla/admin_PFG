<template>
    <div class="home">
        <Header />
        <div>
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

        <div>Icons made by <a href="https://www.flaticon.con.com/authors/prosymbols" title="Prosymbols">Prosymbols</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import CajaInfo from '@/components/CajaInfo.vue'

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
  }
}
</script>

<style>
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