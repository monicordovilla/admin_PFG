<template>
  <div class="bloque">
    Nombre    Teléfono
    <br><br>
    Apellidos

    <button>
        <img class="option" src="../assets/recycle-bin.png">
    </button>
  </div>
</template>

<script>
export default {
  name: 'CajaInfo',
  props: {
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

button{
    height: 30px;
    width: 30px;
}
</style>