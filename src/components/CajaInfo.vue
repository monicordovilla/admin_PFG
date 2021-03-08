<template>
  <div class="bloque">
    {{user.Nombre}}    {{user.Apellidos}}
    <br>
    <button class="boton" id="borrar"></button>

    <button class="boton" id="modificar"></button>

    <button v-if="this.$route.params.user == 'facilitador'" @click="goVincular()" class="boton" id="vincular"></button>
    <br>
    Apodo: {{user.Apodo}}
  </div>
</template>

<script>

export default {
  name: 'CajaInfo',
 
  props: {
    user:{
      type: Object,
      required: true
    }
  },
  data: function(){
      return{
        facilitador: Boolean,
      }
  },

  methods:{
    goVincular() {
      this.$router.push({name: 'Vincular', params:{id: this.user.id}});
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