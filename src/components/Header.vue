<template>
  <div class="header">
  <div class="botones">
    <button>
      Persona
    </button>
    <button>
      Facilitador
    </button>
  </div>

  <button class="logout">
    Cerrar sesión
  </button>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header{
  margin: 0;
  text-align: center;
  color: blanchedalmond;
  background-color: #619A8A;
}

button{
  background-color: white;
  color: teal;
  display: inline;
  height: 50px;
  width: 150px;
  font-size: medium;
  margin: 10px;
}

.botones{
  display: inline-block;
}

.logout{
  float: right;

}
</style>
