<script setup lang="ts">
import CenterContainer from '@/components/Container/CenterContainer.vue'
import PostDetailComponent from '@/components/PostDetailComponent.vue'
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
    <PostDetailComponent
      v-if="markdownHTMLContent"
      :markdown-html-content="markdownHTMLContent"
    />
  </CenterContainer>
</template>
