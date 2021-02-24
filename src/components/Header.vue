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
        await this.$store.dispatch("user/doLogout");
        this.$router.push({ name: "Login" });
        console.log("Logged out");
      } catch (error) {
        console.error(error.message);
      }
    }
  },

  computed: {
    ...mapState("user", ["user"])
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