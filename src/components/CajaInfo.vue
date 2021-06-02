<template>
  <div class="bloque">
    <div class="user-info">
      <p class="nombre">{{user.Nombre}}    {{user.Apellidos}}</p>
      <p class="apodo">Apodo: {{user.Apodo}}</p>
    </div>
    <div class="botones">
    <button class="boton borrar"></button>

    <button class="boton modificar"></button>

    <button v-if="this.$route.params.user == 'facilitador'" @click="goVincular()" class="boton vincular"></button>
    </div>
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

<style scoped>
.bloque{
  display: flex;  
  align-items: center;
  background-color: azure;
  margin: 3rem;
  padding: 1rem;
  text-align: left;
}

.option{
  height: 1.5rem;
  width: 1.5rem;
}

.user-info{
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  width: 100%;
}

.nombre{
  margin: 0 0 0.5rem;
}

.apodo{
  margin: 0;
}

.botones{
  display: flex;
  justify-content: flex-end;
  width: 10rem;
}

.boton{
  float: right;
  height: 2rem;
  width: 2rem;
  background-color: #619A8A;
  color: white;
}

.borrar{
  background-image: url(../assets/recycle-bin.png);
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 80%;
}

.modificar{
  background-image: url(../assets/pencil.png);
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 80%;
  
  margin-left: 0.5rem;
}

.vincular{
  background-image: url(../assets/vincular.png);
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 80%;

  margin-left: 0.5rem;
}
</style>