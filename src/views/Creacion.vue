<template>
    <div class="home">
        <Header />
        <div>
            <h1 v-if="this.$route.params.user == 'facilitador'"> Crear facilitador</h1>
            <h1 v-else>Crear persona</h1> 
            <input v-model="nombre" type="text" class="form" placeholder="Nombre"/>
            <input v-model="apellidos" type="text" class="form" placeholder="Apellidos"/>
            <input v-model="apodo" type="text" class="form" placeholder="Apodo"/>
            <br><label class="pss">Contraseña</label><br>
            <div class="grid">
                <img class="pic" alt="camaras" src="../assets/Password/camera.png">
                <img class="pic" alt="casete" src="../assets/Password/casette-4398267_1280.png">
                <img class="pic" alt="gato" src="../assets/Password/cat.png">

                <img class="pic" alt="telefono" src="../assets/Password/woman-5716875_1920.png">
                <img class="pic" alt="abuela" src="../assets/Password/phone-4986359_1920.jpg">
                <img class="pic" alt="calabaza" src="../assets/Password/pumpkin-5711688_1920.jpg">

                <img class="pic" alt="navidad" src="../assets/Password/santa-claus-5812443_1920.jpg">
                <img class="pic" alt="bruja" src="../assets/Password/witch-155291_1280.png">
                <img class="pic" alt="flores" src="../assets/Password/flor.png">
            </div>

            <button class="add">Crear</button>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'Listado',
  components: {
    Header
  },
  data: function(){
      return{
        number: 5,
        numeros: [1,2,3,4,5,6]
      }
  }
}
</script>

<style>
.add{
    width: 150px;
    height: 50px;
    font-size: large;
    background-color: #619A8A;
    color: white;
}

.form{
  width: 80%;
  font-size: 16px;
  padding: 12px 20px 12px 40px;
  border: 1px solid #ddd;
  margin-bottom: 12px;
}

.pss{
    float: left;
    margin-bottom: 12px;
    margin-left: 8%;
}

.pic {
	margin: auto; /*Necesario para que Flex funcione*/
	float: left;
	width: 100px;
    height: 100px;
}

.box {
	box-sizing: border-pic;
	margin: auto;
    padding: 10px 20px 20px 20px;
	float: left;
	width: 33.33%; /*Tres cajas por linea*/
}

.grid{
    display: grid;
    grid-template-columns: 120px 120px 120px;
    grid-template-rows: 120px 120px 120px;
}
</style>