<template>
  <div class="bloque">
    Nombre    Teléfono
    <br>
    <button class="boton-mas"></button>
    <br>
    Apellidos
  </div>
</template>

<script>

export default {
  name: 'CajaVinculo',
 
  props: {
  },
  data: function(){
      return{
        facilitador: Boolean,
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

.boton-mas{
  float: right;
  height: 30px;
  width: 30px;
  background-color: #619A8A;
  color: white;
  
  background-image: url(../assets/mas.png);
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 80%;
}
</style>