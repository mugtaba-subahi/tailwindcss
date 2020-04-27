<template>
  <div id="app">
    <div class="tags">
      <p>this should be orange</p>
      <p class="tags__p">this should be gray</p>
      <p class="tags__p tags__p--blue">this should be blue</p>
      <p class="tags__p tags__p--red">this should be red</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss">
@tailwind base
@tailwind components
@tailwind utilities

.tags {
  @apply text-blue-600 bg-blue-600

  &__p {
    @apply text-red-600;

    &--blue {
      @apply text-green-600;
    }

    &--red {
      @apply text-sm;
    }
  }
}
</style>
