<template>

  <div class="login">

  <img class="logo" alt="logo VALE" src="../../public/LOGO_ASOC_VALE.svg">

    <form @submit.prevent="doLogin">
      <div class="container">
        <label><b>Correo</b></label>
        <input type="text" placeholder="Introduzca su correo" v-model="userData.email" required>

        <label><b>Contraseña</b></label>
        <input type="password" placeholder="Introduzca su contraseña" v-model="userData.password" required>

        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Login',

  data() {
    return {
      userData: {
        email: "",
        password: ""
      }
    };
  },

  methods:{
    goHome() {
      this.$router.push({ name: "Home" });
    },

    async doLogin() {
      try {
        await this.$store.dispatch("session/doLogin", {
          email: this.userData.email,
          password: this.userData.password
        });
        this.$toast.success("Sesion iniciada")

        this.$router.push({ name: "Home" });

      } catch (error) {
        this.$toast.error("No se ha podido iniciar sesión")
        console.log("No se ha podido iniciar sesión")
        console.error(error.message);
      }
    },
  }
}
</script>

<style scoped>
h3 {
  margin: 2.5rem 0 0;
}

.logo{
  width: 20%;
  height: 20%;
}

/* Bordered form */
form {
  border: 3px solid #f1f1f1;
}

/* Full-width inputs */
input[type=text], input[type=password] {
  width: 100%;
  padding: 1rem 1.3rem;
  margin: 0.5rem 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #619A8A;
  color: white;
  padding: 1rem 1.3rem;
  margin: 0.5rem 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}

.login{
  margin-right: 20%;
  margin-left: 20%;
}

/* Add padding to containers */
.container {
  padding: 1rem;  
}

/* The "Forgot password" text */
span.psw {
  float: right;
  padding-top: 1rem;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}
</style>