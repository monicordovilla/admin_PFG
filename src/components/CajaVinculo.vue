<template>
  <div class="bloque">
    {{user.Nombre}}    {{user.Apellidos}}
    <br>
    <button @click="Vincular" class="boton-mas"></button>
    <br>
    Apodo: {{user.Apodo}}
  </div>
</template>

<script>

export default {
  name: 'CajaVinculo',
 
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
    async Vincular() {
      try {
        await this.$store.dispatch("users/Vincular", {
          userID: this.$route.params.id,
          persona: this.id
        });
        this.$toast.success("Persona vinculada");
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