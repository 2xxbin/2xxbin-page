<script setup lang="ts">
import TitleText from '@/components/Text/TitleText.vue'
import type { IMarkdown } from '@/types/markdown.type'

const { markdownHtmlContent } = defineProps<{
  markdownHtmlContent: IMarkdown
}>()
</script>

<template>
  <div v-if="markdownHtmlContent">
    <TitleText :is-center-text="true">{{
      markdownHtmlContent.data.title
    }}</TitleText>
    <hr class="mb-12" />
    <div v-html="markdownHtmlContent.html" class="prose md:prose-lg"></div>
  </div>
</template>
