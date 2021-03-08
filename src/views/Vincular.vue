<template>
    <div class="home">
        <Header class="fijar-header" />
        <h1>Personas vinculadas a: {{user.Nombre}}</h1>
        <div id="contenedor" class="clearfix">

        <div class="lateral">
            <h2>Vincular personas</h2>
            <CajaVinculo v-for="(persona, index) in personas" :key="index" :user="persona" />
        </div>

        <div class="principal">
            <CajaDesvincular v-for="(persona, index) in personas" :key="index" :user="persona"/>
        </div>

        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import CajaVinculo from '@/components/CajaVinculo.vue'
import CajaDesvincular from '@/components/CajaDesvincular.vue'
import { mapState } from 'vuex'

export default {
  name: 'Vincular',
  components: {
    Header,
    CajaVinculo,
    CajaDesvincular
  },

  data: function(){
    return{
      numeros: [1,2,3,4,5,6],
      user:{
        type: Object,
        required: true
      }
    }
  },

  async created() {
    try {
      let id = this.$route.params.id;
      this.user = await this.$store.dispatch("users/getFacilitador", id);
    } catch (error) {
      console.error(error.message);
      this.$toast.error(error.message);
      this.$router.push("/listado/facilitador");
    }
  },

  computed:{
    ...mapState("users", ["personas"])
  }
}
</script>

<style>
.fijar-header{
  position: sticky;
  top: 0;
}

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