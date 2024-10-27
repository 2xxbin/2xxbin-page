<script setup lang="ts">
const { isCenterText } = defineProps<{
  isCenterText?: boolean
}>()
</script>

<template>
  <h1
    :class="[
      'font-bold',
      'text-5xl',
      'mb-12',
      'sm:text-4xl',
      'sm:mb-6',
      isCenterText ? 'text-center' : '',
    ]"
  >
    <slot />
  </h1>
</template>
