<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <HeaderComponent />

    <main class="flex-1">
      <RouterView />
    </main>

    <FooterComponent />
  </div>
</template>
