<template>
  <div class="home">
    <Header />
    <div>
      <h1>Listado</h1>
      <button class="crear">
        Crear persona
      </button>
      
    <input type="search" v-model="buscar" class="form-control" placeholder="Nombre, apellidos"/>
    </div>

    <CajaInfo />
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
  }
}
</script>

<style>
.crear{
    float: right;
    width: 150px;
    height: 50px;
}

.bloque{
    background-color: azure;
    margin: 5%;
    text-align: left;
}
</style>