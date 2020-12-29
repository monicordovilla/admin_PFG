<template>
    <div class="home">
        <Header />
        <div>
        <h1>Listado</h1>
        <button class="crear">
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
  }
}
</script>

<style>
.crear{
    float: right;
    width: 150px;
    height: 50px;
}
</style>