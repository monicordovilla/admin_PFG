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

                <div class="pass-img">
                    <div>
                        <h5 class="text as-center">Contraseña</h5>
                        <div class="grid jc-center">
                            <button id="btn-camara" @click="setCamara" class="btn-pic botonCamara" 
                            :class="{ 'box-shadow' : camaraSelected }"/>
                            <button id="btn-cassete" @click="setCassete" class="btn-pic botonCassete" 
                            :class="{ 'box-shadow' : casetteSelected }" />
                            <button id="btn-cat" @click="setCat" class="btn-pic botonCat" 
                            :class="{ 'box-shadow' : catSelected }" />

                            <button id="btn-woman" @click="setWoman" class="btn-pic botonWoman" 
                            :class="{ 'box-shadow' : womanSelected }" />
                            <button id="btn-phone" @click="setPhone" class="btn-pic botonPhone" 
                            :class="{ 'box-shadow' : phoneSelected }" />
                            <button id="btn-pumpkin" @click="setPumpkin" class="btn-pic botonPumpkin" 
                            :class="{ 'box-shadow' : pumpkinSelected }" />

                            <button id="btn-santa" @click="setSanta" class="btn-pic botonSanta" 
                            :class="{ 'box-shadow' : santaSelected }" />
                            <button  id="btn-witch" @click="setWitch" class="btn-pic botonWitch" 
                            :class="{ 'box-shadow' : witchSelected }" />
                            <button  id="btn-flower" @click="setFlower" class="btn-pic botonFlower" 
                            :class="{ 'box-shadow' : flowerSelected }" />
                        </div>
                    </div>
                    <div>
                        <div class="select-image">
                            <h5 class="text as-center mr-rm__1">Imagen</h5>
                            <input
                                type="file"
                                @change="onFileChange"
                                ref="file"
                                class="transparent"
                            >
                        </div>
                        <div
                            class="user-img"
                            :style="{
                                'background-image': `url(${userImage})`
                            }"
                        > </div>
                    </div>
                </div>
                <button v-if="this.$route.name == 'Creacion'" class="add as-center" @click="doRegister">Crear</button>
                <button v-else class="add as-center" @click="doModify">Crear</button>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import { db, auth } from '../firebase.js'

export default {
    name: 'Creacion',
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
                password: "",
                imageURL: "",
            },

            image: null,
            camaraSelected: false,
            casetteSelected: false,
            catSelected: false,
            womanSelected: false,
            phoneSelected: false,
            pumpkinSelected: false,
            santaSelected: false,
            witchSelected: false,
            flowerSelected: false,
        }
    },

    async mounted(){
        let user = await this.$store.dispatch("users/getFacilitador", this.$route.params.user);

        this.userData.nombre = user.Nombre
        this.userData.apellidos = user.Apellidos
        this.userData.apodo = user.Apodo
        this.userData.imageURL = user.Imagen
        this.userData.image = user.Imagen
    },
  
    methods:{
        async doRegister() {
            //Comprobar campos llenos
            if (this.userData.email == ""){
                this.$toast.error("Email vacío")
                return
            } else if(this.userData.password == ""){
                this.$toast.error("Introduzca contraseña")
                return
            } else if(this.userData.nombre == ""){
                this.$toast.error("Introduzca nombre")
                return
            } else if(this.userData.apellidos == ""){
                this.$toast.error("Introduzca un apellido")
                return
            } else if(!this.image){
                this.$toast.error("Introduzca una imagen identificativa")
                return
            }

            //Registrar
            try {
                let roll;
                if(this.$route.params.user == 'facilitador'){
                    roll= "Facilitador"
                }else{
                    roll="Persona"
                }

                //Si no tiene apodo, el apodo será el nombre
                if(this.userData.apodo == ""){this.userData.apodo = this.userData.nombre;}

                //Crear usuario
                await auth.createUserWithEmailAndPassword(this.userData.email, this.userData.password);

                //Subir imagen
                this.imageURL = await this.$store.dispatch("users/uploadUserImage", {
                    file: this.image,
                    userID: auth.getCurrentUser,
                });

                //Crear documento con la información del usuario
                const user = {
                    Nombre: this.userData.nombre,
                    Apellidos: this.userData.apellidos,
                    Apodo: this.userData.apodo,
                    Rol: roll,
                    Imagen: this.imageURL,
                };
                await db.collection("users").doc(auth.getCurrentUser).set(user)
                this.$toast.success("Usuario registrado")

                //Limpiar campos
                this.userData.nombre=""
                this.userData.apellidos=""
                this.userData.apodo=""
                this.userData.email=""
                this.userData.password=""
                this.camaraSelected = false
                this.casetteSelected = false
                this.catSelected = false
                this.womanSelected = false
                this.phoneSelected = false
                this.pumpkinSelected = false
                this.santaSelected = false
                this.witchSelected = false
                this.flowerSelected = false

            } catch (error) {
                this.$toast.error("No se ha podido registrar este usuario")
                console.log("No se ha podido realizar el registro")
                console.error(error.message);
            }
        },//Fin doRegister

        async doModify() {
            //Comprobar campos llenos
            if (this.userData.email == ""){
                this.$toast.error("Email vacío")
                return
            } else if(this.userData.password == ""){
                this.$toast.error("Introduzca contraseña")
                return
            } else if(this.userData.nombre == ""){
                this.$toast.error("Introduzca nombre")
                return
            } else if(this.userData.apellidos == ""){
                this.$toast.error("Introduzca un apellido")
                return
            } else if(!this.image){
                this.$toast.error("Introduzca una imagen identificativa")
                return
            }

            //Registrar
            try {
                //Si no tiene apodo, el apodo será el nombre
                if(this.userData.apodo == ""){this.userData.apodo = this.userData.nombre;}

                //Actualizar email

                //Subir imagen
                this.imageURL = await this.$store.dispatch("users/uploadUserImage", {
                    file: this.image,
                    userID: this.$route.params.user,
                });

                //Crear documento con la información del usuario
                const user = {
                    Nombre: this.userData.nombre,
                    Apellidos: this.userData.apellidos,
                    Apodo: this.userData.apodo,
                    Imagen: this.imageURL,
                };
                await db.collection("users").doc(this.$route.params.user).update(user)
                this.$toast.success("Usuario modificado")
            } catch (error) {
                this.$toast.error("No se ha podido modificar este usuario")
                console.log("No se ha podido modificar a este usuario")
                console.error(error.message);
            }
        },//Fin doModify

        onFileChange(event) {
            this.image = event.target.files[0];
            this.$refs.file.value = null;
        },

        setCamara(){
            if(!this.camaraSelected){
                this.userData.password += 'c4M';
                this.camaraSelected = true;
            }
        },
        setCassete(){
            if(!this.casetteSelected){
                this.userData.password += 'c3s';
                this.casetteSelected = true;
            }
        },
        setCat(){
            if(!this.catSelected){
                this.userData.password += 'Ca7';
                this.catSelected = true;
            }
        },
        setWoman(){
            if(!this.womanSelected){
                this.userData.password += 'wMn';
                this.womanSelected = true;
            }
        },
        setPhone(){
            if(!this.phoneSelected){
                this.userData.password += '7fn';
                this.phoneSelected = true;
            }
        },
        setPumpkin(){
            if(!this.pumpkinSelected){
                this.userData.password += '9kN';
                this.pumpkinSelected = true;
            }
        },
        setSanta(){
            if(!this.santaSelected){
                this.userData.password += '5at';
                this.santaSelected = true;
            }
        },
        setWitch(){
            if(!this.witchSelected){
                this.userData.password += 'w2H';
                this.witchSelected = true;
            }
        },
        setFlower(){
            if(!this.flowerSelected){
                this.userData.password += '8Er';
                this.flowerSelected = true;
            }
        }
    },

    computed: {
        userImage() {
        return this.image
            ? URL.createObjectURL(this.image)
            : require("@/assets/user-image.png");
        },
    },
}
</script>

<style scoped>
.fijar-header{
  position: sticky;
  top: 0;
}

.box-shadow{ box-shadow: 0 0 0.5rem 0.5rem rgba(0,0,0,0.81); }
.box-no-border{ border: none }

.form-crear{
    display: flex;
    flex-direction: column;
    margin: 2rem 4rem 4rem;
    text-align: start;
}

.text{ margin: 0.5rem 0; }
.as-center{ align-self: center; }
.jc-center{ justify-content: center; }
.transparent {color: transparent}
.mr-rm__1{ margin-right: 1rem;}

.select-image{
    display: flex;
    align-items: center;
}

.pass-img {
    display: flex;
    justify-content: space-around;
}

.user-img{
  height: 18rem;
  padding: 1rem;
  margin: 1rem 0;
  border: 1px solid;
  background-size: cover;
  background-position: center;
}

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
  font-size: 1rem;
  padding: 1rem .5rem;
  border: 1px solid #ddd;
  margin-bottom: 1rem;
}

.grid{
    display: grid;
    gap: .5rem;
    grid-template-columns: 7rem 7rem 7rem;
    grid-template-rows:  7rem 7rem 7rem;
}

/*Botones*/
.btn-pic {
	width: 6rem;
    height: 6rem;
    border: none;
}

.botonCamara, .botonCassete, .botonCat,
.botonWoman, .botonPhone, .botonPumpkin,
.botonSanta, .botonWitch, .botonFlower{
    background-repeat:no-repeat;
    background-position:center;
    background-size: 6rem;
}

.botonCamara{ background-image: url(../assets/Password/camera.png);}
.botonCassete{ background-image: url(../assets/Password/casette-4398267_1280.png); }
.botonCat{ background-image: url(../assets/Password/cat.png); }
.botonWoman{ background-image: url(../assets/Password/woman-5716875_1920.png); }
.botonPhone{ background-image: url(../assets/Password/phone-4986359_1920.jpg); }
.botonPumpkin{ background-image: url(../assets/Password/pumpkin-5711688_1920.jpg); }
.botonSanta{ background-image: url(../assets/Password/santa-claus-5812443_1920.jpg); }
.botonWitch{ background-image: url(../assets/Password/witch-155291_1280.png); }
.botonFlower{ background-image: url(../assets/Password/flor.png); }
</style>