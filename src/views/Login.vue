<template>
    <div class="w-[95vw] flex justify-center">
        <div class="p-4 flex flex-col  w-1/2">
            <div class="text-center">
                <h1>Bienvenida! Lee las Cartas Testimoniales!</h1>
            </div>
            <div  :class="{'popup': true , 'open-popup': togglePopup}">
                <h2>Usuario o contraseña incorrectos!</h2>
                <br>
                <button @click="closePopup" class="bg-pink-300 p-2 rounded-lg hover:bg-pink-400">OK</button>
            </div>
            <div class="p-4 flex flex-col ingreso border-2 border-pink-300 p-4 rounded-lg m-2">
                <label for="">Usuario</label>
                <input type="text" placeholder="Username" v-model="usernameInput">
                <label for="">Contraseña</label>
                <input type="password" placeholder="Contraseña" v-model="passwordInput">
                <button @click="login" class="bg-pink-300 p-2 rounded-lg hover:bg-pink-400">Ingresar</button>
            </div>
            <div class="text-center">
              <button @click="$router.push('/')" class="bg-pink-300 p-2 rounded-lg hover:bg-pink-400 my-3 w-1/2">Regresar a Inicio</button>
            </div>
            
        </div>  
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router';

export default {
  name: 'LoginView',
  setup() {
    const username = ref('valeria');
    const password = ref('#elpepe123');
    const router = useRouter();

    const usernameInput = ref('');
    const passwordInput = ref('');

    const togglePopup = ref(false);

    function login() {
      if (usernameInput.value === 'valeria' && passwordInput.value === '#elpepe123') {
        console.log("ola");
        localStorage.setItem('token', 'true');
        togglePopup.value = false;
        router.push('/cartas');
      } else {
        localStorage.setItem('token', 'false');
        togglePopup.value = true;
      }
    }
    function closePopup() {
      togglePopup.value = false;
    }

    return {
      username,
      password,
      login,
      usernameInput,
      passwordInput,
      togglePopup,
      closePopup
    };
  }
};
</script>

<style scoped>
    textarea,input{
    border: 1px, solid, lightgrey;
    border-radius: 5px;
    outline: none;
    padding: 5px;
    caret-color: lightpink;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .popup{
    width: 300px;
    height: 200px;
    background-color: white;
    border-radius: 30px;
    border: 2px,solid, #FF5E5E;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%,-50%) scale(0.1);
    text-align: center;
    padding: 30px;
    box-shadow: 2px 5px 10px #f9a8d4;
    visibility: hidden;
    transition: transform 0.4s, top 0.4s;
  }
  .popup button{
    width: 100px;
    box-shadow: 2px 5px 10px #f472b6;
  }
  .open-popup{
    visibility: visible;
    top: 50%;
    transform: translate(-50%,-50%) scale(1);
  }
  .ingreso{
    box-shadow: 2px 5px 10px #f9a8d4;
  }
</style>
