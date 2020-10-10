<template>
  <p class="s">no</p>
  <p class="s_no">yes</p>
</template>

<script lang="ts" setup></script>

<style lang="postcss">
@tailwind base;
</style>

<style lang="postcss" scoped>
.s {
  color: red;
  &_no {
    color: green;
  }
}
</style>
