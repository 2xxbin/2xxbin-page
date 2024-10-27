<script setup lang="ts">
import CenterContainer from '@/components/Container/CenterContainer.vue'
import TitleText from '@/components/Text/TitleText.vue'
import type { IMarkdown } from '@/types/markdown.type'
import { getMarkdown } from '@/utils/axiosFetch'
import { onMounted, ref, type Ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const markdownHTMLContent: Ref<IMarkdown | undefined> = ref()
onMounted(async () => {
  const path = `/md/notices/${route.params.id}.md`
  markdownHTMLContent.value = await getMarkdown(path)
  console.log(markdownHTMLContent)
})
</script>

<template>
  <CenterContainer>
    <div v-if="markdownHTMLContent">
      <TitleText :is-center-text="true">{{
        markdownHTMLContent.data.title
      }}</TitleText>
      <hr class="mb-12" />
      <div v-html="markdownHTMLContent.html" class="prose md:prose-lg"></div>
    </div>
  </CenterContainer>
</template>
