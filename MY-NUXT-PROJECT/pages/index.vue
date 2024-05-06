<script setup lang="ts">
const { $sayHello } =  useNuxtApp()
console.log(useNuxtApp())
$sayHello('Camron')



;
</script>

<template>
  <div class="container py-3 mx-auto">
    <h1 class="text-teal-500">
      <ContentDoc />
      Hello Nuxt 3
    </h1>
  </div>
</template>


function useUtils() {
  throw new Error("Function not implemented.");
}

function useNuxtApp(): any {
  throw new Error("Function not implemented.");
}
