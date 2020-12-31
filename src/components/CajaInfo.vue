<template>
  <div class="bloque">
    Nombre    Teléfono
    <br>
    <button class="boton" id="borrar"></button>

    <button class="boton" id="modificar"></button>

    <button v-if="this.$route.params.user == 'facilitador'" @click="goVincular()" class="boton" id="vincular"></button>
    <br>
    Apellidos
  </div>
</template>

<script>

export default {
  name: 'CajaInfo',
 
  props: {
  },
  data: function(){
      return{
        facilitador: Boolean,
      }
  },
  methods:{
    goVincular() {
      this.$router.push("/vincular");
    }
  }
}
</script>

<style>
.bloque{
    background-color: azure;
    margin: 5%;
    text-align: left;
}

.option{
    height: 20px;
    width: 20px;
}

.boton{
  float: right;
  height: 30px;
  width: 30px;
  background-color: #619A8A;
  color: white;
}

#borrar{
  background-image: url(../assets/recycle-bin.png);
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 80%;
}

#modificar{
  background-image: url(../assets/pencil.png);
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 80%;
}

#vincular{
  background-image: url(../assets/vincular.png);
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 80%;
}
</style>