<template>
  <div class="header">
  <div class="botones">
    <button @click="goPersona(true)">
      Persona
    </button>
    <button @click="goPersona(false)">
      Facilitador
    </button>
  </div>

  <button @click="doLogout()" class="logout">
    Cerrar sesión
  </button>
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
  name: 'Header',

  props: {
  },

  methods: {
    goPersona(bool) {
      if (bool) this.$router.push("/listado/persona");
      else this.$router.push("/listado/facilitador");
    },

    async doLogout() {
      try {
        await this.$store.dispatch("session/doLogout");
        this.$router.push({ name: "Login" });
        this.$toast.success("Sesion cerrada")
      } catch (error) {
        this.$toast.error("No se ha podido cerrar sesión")
        console.error(error.message);
      }
    }
  },

  computed: {
    ...mapState("session", ["user"])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header{
  text-align: center;
  color: blanchedalmond;
  background-color: #619A8A;
}

button{
  background-color: white;
  color: teal;
  display: inline;
  height: 3rem;
  width: 9rem;
  font-size: medium;
  margin: 1rem;
}

.botones{
  display: inline-block;
}

.logout{
  float: right;

}
</style>