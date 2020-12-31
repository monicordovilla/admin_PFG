<template>
  <div class="home">
    <Header />
    <div>
      <h1>Administración</h1>

      <button @click="goPersona(true)" class="boton-ini">
        Persona
      </button>

      <button @click="goPersona(false)" class="boton-ini">
        Facilitador
      </button>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  },
  data: function(){
      return{
        facilitador: Boolean
      }
  },
  methods: {
    goPersona(bool) {
      if (bool) this.$router.push("/listado/persona");
      else this.$router.push("/listado/facilitador");
    }
  }
}
</script>

<style>
.home{
  display: block;
}

h1{
  display: block;
  font-size: 50px;
}

.boton-ini{
  display: block;
  margin-top: 25px;
  margin-left: 100px;
  height: 70px;
  width: 200px;
  font-size: large;
  background-color: #619A8A;
  color: white;
}
</style>