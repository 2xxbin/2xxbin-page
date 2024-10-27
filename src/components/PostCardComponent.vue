<script setup lang="ts">
import type { IPost } from '@/types/IPost.type'

const { post } = defineProps<{ post: IPost; baseUrl: string }>()
</script>

<template>
  <hr class="h-1 my-10" />
  <div
    role="button"
    tabindex="0"
    @click="() => $router.push(`${baseUrl}/${post.id}`)"
  >
    <h2 class="font-bold text-2xl mb-6">{{ post.title }}</h2>
    <p
      class="leading-loose break-keep"
      v-html="post.description.join('<br />')"
    ></p>
  </div>
</template>
