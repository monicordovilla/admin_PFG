<template>
    <div class="home">
        <Header class="fijar-header"/>
        <div>
            <h1 v-if="this.$route.params.user == 'facilitador'"> Crear facilitador</h1>
            <h1 v-else>Crear persona</h1>
            <div class="form-crear">
                <form>
                <h5 class="text">Nombre</h5>
                <input v-model="userData.nombre" type="text" class="form" placeholder="Nombre"/>
                <h5 class="text">Apellidos</h5>
                <input v-model="userData.apellidos" type="text" class="form" placeholder="Apellidos"/>
                <h5 class="text">Apodo</h5>
                <input v-model="userData.apodo" type="text" class="form" placeholder="Apodo"/>
                <h5 class="text">Email</h5>
                <input v-model="userData.email" type="text" class="form" placeholder="Email"/>
                </form>

                <h5 class="text as-center">Contraseña</h5>
                <div class="grid jc-center">
                    <button @click="setCamara">
                        <img class="pic" alt="camara" src="../assets/Password/camera.png">
                    </button>
                    <button @click="setCassete">
                        <img class="pic" alt="casete" src="../assets/Password/casette-4398267_1280.png">
                    </button>
                    <button @click="setCat">
                        <img class="pic" alt="gato" src="../assets/Password/cat.png">
                    </button>

                    <button @click="setWoman">
                        <img class="pic" alt="telefono" src="../assets/Password/woman-5716875_1920.png">
                    </button>
                    <button @click="setPhone">
                        <img class="pic" alt="abuela" src="../assets/Password/phone-4986359_1920.jpg">
                    </button>
                    <button @click="setPumpkin">
                        <img class="pic" alt="calabaza" src="../assets/Password/pumpkin-5711688_1920.jpg">
                     </button>

                    <button @click="setSanta">
                        <img class="pic" alt="navidad" src="../assets/Password/santa-claus-5812443_1920.jpg">
                    </button>
                    <button @click="setWitch">
                        <img class="pic" alt="bruja" src="../assets/Password/witch-155291_1280.png">
                    </button>
                    <button @click="setFlower">
                        <img class="pic" alt="flores" src="../assets/Password/flor.png">
                    </button>
                </div>
                <button class="add as-center" @click="doRegister">Crear</button>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import { db, auth } from '../firebase.js'

export default {
    name: 'Listado',
    components: {
        Header
    },
    data() {
        return{
            userData: {
                nombre: "",
                apellidos: "",
                apodo: "",
                email: "",
                password: ""
            },

            /*const set = new Set();
            
            camaraSelected: Boolean,
            casetteSelected: Boolean,
            catSelected: Boolean,
            womanSelected: Boolean,
            phoneSelected: Boolean,
            pumpkinSelected: Boolean,
            santaSelected: Boolean,
            witchSelected: Boolean,
            flowerSelected: Boolean,*/
        }
    },
  
    methods:{
        async doRegister() {
        try {
            var roll;
            if(this.$route.params.user == 'facilitador'){
                roll= "Facilitador"
            }else{
                roll="Persona"
            }

            await auth.createUserWithEmailAndPassword(this.userData.email, this.userData.password);
            const user = {
                Nombre: this.userData.nombre,
                Apellidos: this.userData.apellidos,
                Apodo: this.userData.apodo,
                Rol: roll
            };
            await db.collection("users").doc(auth.getCurrentUser).set(user);
            this.$toast.success("Usuario registrado");
            this.userData.nombre="";
            this.userData.apellidos="";
            this.userData.apodo="";
            this.userData.email="";
            this.userData.password="";

        } catch (error) {
            this.$toast.error("No se ha podido registrar este usuario")
            console.log("No se ha podido realizar el registro")
            console.error(error.message);
        }
        },//Fin doRegister

        setCamara(){
            this.userData.password += 'c4M';
            this.camaraSelected = true;
            console.log(this.userData.password);
        },
        setCassete(){
            this.userData.password += 'c3s';
            this.casetteSelected = true;
            console.log(this.userData.password);
        },
        setCat(){
            this.userData.password += 'Ca7';
            this.catSelected = true;
            console.log(this.userData.password);
        },
        setWoman(){
            this.userData.password += 'wMn';
            this.womanSelected = true;
            console.log(this.userData.password);
        },
        setPhone(){
            this.userData.password += '7fn';
            this.phoneSelected = true;
            console.log(this.userData.password);
        },
        setPumpkin(){
            this.userData.password += '9kN';
            this.pumpkinSelected = true;
            console.log(this.userData.password);
        },
        setSanta(){
            this.userData.password += '5at';
            this.santaSelected = true;
            console.log(this.userData.password);
        },
        setWitch(){
            this.userData.password += 'w2H';
            this.witchSelected = true;
            console.log(this.userData.password);
        },
        setFlower(){
            this.userData.password += '8Er';
            this.flowerSelected = true;
            console.log(this.userData.password);
        }
    },
}
</script>

<style scoped>
.fijar-header{
  position: sticky;
  top: 0;
}

.box-shadow{
    border-width: 0.3rem;
}

.form-crear{
    display: flex;
    flex-direction: column;
    margin: 2rem 4rem 4rem;
    text-align: start;
}

.text{ margin: 0.5rem 0; }
.as-center{ align-self: center; }
.jc-center{ justify-content: center; }

.add{
    width: 7rem;
    height: 4rem;
    font-size: large;
    background-color: #619A8A;
    color: white;
    margin: 2rem;
}

.form{
  width: 100%;
  font-size: 16px;
  padding: 1rem .5rem;
  border: 1px solid #ddd;
  margin-bottom: 1rem;
}

.pic {
	margin: auto; /*Necesario para que Flex funcione*/
	width: 6rem;
    height: 6rem;
}

.grid{
    display: grid;
    gap: .5rem;
    grid-template-columns: 7rem 7rem 7rem;
    grid-template-rows:  7rem 7rem 7rem;
}
</style>