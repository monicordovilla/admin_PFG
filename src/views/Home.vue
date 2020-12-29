<template>
  <div class="home">
    <Header />
    <div>
      <h1>Administración</h1>
      <button>
        Persona
      </button>
      <button>
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

button{
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