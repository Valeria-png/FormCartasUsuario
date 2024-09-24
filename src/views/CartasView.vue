<template>
  <div class=" w-[95vw] p-4">
    <div class="text-center">
      <h1>Todas las Cartas</h1>
    </div>
    <div class="flex flex-wrap justify-center my-2">
      <div v-for="(carta, index) in cartas " :key="index" class="m-3">
        <CartaItem :Nombre="carta.Nombre" :Mensaje="carta.Mensaje" />
      </div>
    </div>
    <div class="text-center">
      <button @click="$router.push('/')" class="bg-pink-300 p-2 rounded-lg hover:bg-pink-400">Regresar al inicio</button>
    </div>
  </div>
</template>

<script setup lang="ts">
    import { computed, ref } from 'vue';
    import CartaItem from '../components/CartaItem.vue'
    name: 'CartasView'
    const cartas = computed(() => {
      const storedCartas = localStorage.getItem('cartas');
      return storedCartas ? JSON.parse(storedCartas) : [];
  });
    

</script>
<style scoped>
    
</style>
