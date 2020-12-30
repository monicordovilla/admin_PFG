<template>
  <div class="bloque">
    Nombre    Teléfono
    <br>
    <button class="boton">
        <img class="option" src="../assets/recycle-bin.png">
    </button>
    <button class="boton">
        <img class="option" src="../assets/pencil.png">
    </button>
    <button class="boton">
        <img class="option" src="../assets/vincular.png">
    </button>
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
</style>