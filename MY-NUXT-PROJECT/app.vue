<script setup>
const {data} = await useAsyncData('count', () => $fetch('api/count'));
</script>

<template>
  <div class="">
      <NuxtPage />
      Page Visits: {{ data }}
  </div>
</template>
