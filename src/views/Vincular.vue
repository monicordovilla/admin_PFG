<template>
    <div class="home">
        <Header />
        <h1>Personas vinculadas a: Nombre persona</h1>
        <div id="contenedor" class="clearfix">

        <div class="lateral">
            <h2>Vincular personas</h2>
            <CajaVinculo v-for="(numero, index) in numeros" :key="index" />
        </div>

        <div class="principal">
            <CajaDesvincular v-for="(numero, index) in numeros" :key="index" />
        </div>

        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import CajaVinculo from '@/components/CajaVinculo.vue'
import CajaDesvincular from '@/components/CajaDesvincular.vue'

export default {
  name: 'Vincular',
  components: {
    Header,
    CajaVinculo,
    CajaDesvincular
  },
  data: function(){
      return{
        numeros: [1,2,3,4,5,6]
      }
  }
}
</script>

<style>
#contenedor {
 text-align: left;
 width: 100%;
 margin: auto;
}

.lateral {
 width: 45%;
 margin-right: 3%;
 float:right;
}

.principal {
 width: 45%;
 float: left;
 margin-left: 3%;
}
/* Para limpiar los floats */
.clearfix:after {
  content: "";
  display: table;
  clear: both;
}
</style>