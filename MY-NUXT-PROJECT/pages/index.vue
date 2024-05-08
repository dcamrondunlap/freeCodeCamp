<script setup>
const response = await $fetch('/api/hello')
console.log(response)

//once again this the useFetch example since I can't get the json file

//const {data:products} = await useFetch('api/products') remember that when using useFetch ssr can be true or false

//can useLazyFetch which will wait until the data is loaded



//console.log(data.value) can't forget the value since this is a vue file still

// use the toRaw(products.value) to change into proper json


;
</script>

<template>
  <div class=" bg-blue-900 h-screen text-white">
    <!-- <p>{{ products }}</p> or {{ pending ? 'Loading' :products }} -->
    hello
  </div>
</template>
