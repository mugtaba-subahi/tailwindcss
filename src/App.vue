<template>
  <div id="app">
    <Card v-for="card in 6" :key="card" />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  components: { Card }
};
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
