<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router';
  interface Carta {
    Nombre: string;
    Mensaje: string;
  }
  const router = useRouter();
  const celNumber = ref('');
  const email = ref('');
  const Mensaje = ref('');
  const Nombre = ref('');
  const cartas = ref<Carta[]>([]);

  function addCarta() {
    cartas.value.push({Nombre: Nombre.value, Mensaje: Mensaje.value});
    localStorage.setItem('cartas', JSON.stringify(cartas.value));
    Nombre.value = '';
    Mensaje.value = '';
    celNumber.value = '';
    email.value = '';
  }

</script>

<template >
  <div class="w-[95vw] flex justify-center">
    <div class="p-4 flex flex-col  w-1/2">
      <div class=" text-center">
        <h1>Bienvenido! <hr> Deja una Carta Testimonial para Valeria!</h1>
      </div>
      <form action="" class="flex flex-col border-2 border-pink-300 p-4 rounded-lg">
        <label for="">Nombre</label>
        <input type="text" placeholder="Nombre" v-model="Nombre">
        <label for="">Número de Teléfono</label>
        <input type="text" placeholder="Número de Teléfono" v-model="celNumber">
        <label for="">Correo Electrónico</label>
        <input type="email" placeholder="Correo Electrónico" v-model="email">
        <hr>
        <h2>Deja tu Carta Testimonial aqui:</h2>
        <textarea name="" id="" v-model="Mensaje"></textarea>
        <button @click.prevent="addCarta" class="bg-pink-300 p-2 rounded-lg hover:bg-pink-400">Enviar</button>
      </form>
      <div class="my-3 text-center">
        <button @click="router.push('/login')" class="bg-pink-300 p-2 rounded-lg hover:bg-pink-400 w-1/2">Iniciar Sesión</button>
      </div>
      </div> 
  </div>

</template>

<style scoped>
  /* button{
    @apply bg-pink-300
    @apply p-2
    @apply rounded-lg
  } */
  textarea,input{
    border: 1px, solid, lightgrey;
    border-radius: 5px;
    outline: none;
    padding: 5px;
    caret-color: lightpink;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  button:hover{
    box-shadow: inset 0 0 10px #f9a8d4;
  }
  form{
    box-shadow: 2px 5px 10px #f9a8d4;
  }
</style>
