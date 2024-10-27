<script setup lang="ts">
import CenterContainer from '@/components/Container/CenterContainer.vue'
import TitleText from '@/components/Text/TitleText.vue'
import type { IMarkdown } from '@/types/markdown.type'
import { getMarkdown } from '@/utils/axiosFetch'
import { onMounted, ref, type Ref } from 'vue'

const markdownHTMLContent: Ref<IMarkdown | undefined> = ref()
onMounted(async () => {
  const path = '/md/home.md'
  markdownHTMLContent.value = await getMarkdown(path)
  console.log(markdownHTMLContent.value)
})
</script>

<template>
  <CenterContainer>
    <div>
      <TitleText :is-center-text="true">Home</TitleText>
      <div
        v-if="markdownHTMLContent"
        v-html="markdownHTMLContent.html"
        class="prose md:prose-lg max-w-[80%] sm:max-w-[95%] mt-12 break-keep text-base sm:leading-loose"
      ></div>
    </div>
  </CenterContainer>
</template>
