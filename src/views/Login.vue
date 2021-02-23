<template>

  <div class="login">

  <img class="logo" alt="logo VALE" src="../../public/LOGO_ASOC_VALE.svg">

    <form action="action_page.php" method="post">
      <div class="container">
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" v-model="uname" required>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" v-model="psw" required>

        <button @click="goHome()">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods:{
    goHome() {
      this.$router.push("/");
    }

  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
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
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #619A8A;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
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
  padding: 16px;  
}

/* The "Forgot password" text */
span.psw {
  float: right;
  padding-top: 16px;
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