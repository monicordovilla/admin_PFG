<template>
  <div class="bloque">
    <div class="user-info">
      <p class="nombre">{{user.Nombre}}    {{user.Apellidos}}</p>
      <p class="apodo">Apodo: {{user.Apodo}}</p>
    </div>
    <button @click="Desvincular" class="boton-menos"></button>
  </div>
</template>

<script>

export default {
  name: 'CajaDesvincular',
 
  props: {
    id:{
      type: String,
      required: true
    }
  },
  data: function(){
    return{
      user:{
        type: Object,
        required: true
      }
    }
  },

  async created() {
    try {
      this.user = await this.$store.dispatch("users/getPersona", this.id);
    } catch (error) {
      console.error(error.message);
      this.$toast.error(error.message);
      this.$router.push("/listado/facilitador");
    }
  },

  methods: {
    async Desvincular() {
      try {
        await this.$store.dispatch("users/Desvincular", {
          userID: this.$route.params.id,
          persona: this.id
        });
        this.$toast.success("Persona desvinculada");
      } catch (error) {
        console.error(error.message);
        this.$toast.error(error.message);
      }

      this.$router.go()
    }
  },
}
</script>

<style>
.bloque{
  display: flex;
  align-items: center;
  background-color: azure;
  margin-bottom: 2rem;
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

.boton-menos{
  float: right;
  height: 2rem;
  width: 2rem;
  background-color: #619A8A;
  color: white;

  background-image: url(../assets/menos.png);
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 80%;
}
</style>