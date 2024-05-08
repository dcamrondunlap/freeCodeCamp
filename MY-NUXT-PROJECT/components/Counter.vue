<script setup lang="ts">
const counter = useCounter();



;
</script>

<template>
  <div class="container py-3 mx-auto">
    Counter: {{counter}}
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
  </div>
</template>
