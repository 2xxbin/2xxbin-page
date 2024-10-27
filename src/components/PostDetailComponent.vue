<script setup lang="ts">
import TitleText from '@/components/Text/TitleText.vue'
import type { IMarkdown } from '@/types/markdown.type'

const { markdownHtmlContent } = defineProps<{
  markdownHtmlContent: IMarkdown
}>()
</script>

<template>
  <div class="flex flex-col items-center">
    <TitleText :is-center-text="true">{{
      markdownHtmlContent.data.title
    }}</TitleText>
    <div
      v-html="markdownHtmlContent.html"
      class="prose md:prose-lg max-w-[80%] sm:max-w-[95%] mt-12 break-keep text-base sm:leading-loose"
    ></div>
  </div>
</template>
