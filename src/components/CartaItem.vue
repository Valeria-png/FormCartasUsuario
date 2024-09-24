<template>
  <div class="w-52 h-80 rounded-lg border-2 border-pink-300 p-4 card">
    <div>
      <h3 class="text-center">De {{ props.Nombre }}</h3>
      <div class="scroll-smooth">
        <p>{{ props.Mensaje }}</p>
      </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
  name: 'CartaItem'
  const props = defineProps({
    Nombre: String,
    Mensaje: String
  })
</script>

<style scoped>
  h3{
    font-size: 1.5rem;
    font-weight: 700;
  }
  .card{
    box-shadow: 2px 5px 10px #f9a8d4;
  }

</style>
