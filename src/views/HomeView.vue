<script setup lang="ts">
import Weight85Container from '@/components/Container/Weight85Container.vue'
import TitleText from '@/components/Text/TitleText.vue'
import { getMarkdown } from '@/utils/axiosFetch'
import { onMounted, ref } from 'vue'

const markdownHTMLContent = ref('')
onMounted(async () => {
  const path = '/md/home.md'
  markdownHTMLContent.value = await getMarkdown(path)
  console.log(markdownHTMLContent.value)
})
</script>

<template>
  <Weight85Container>
    <div>
      <TitleText :is-center-text="true">Home</TitleText>
      <div v-html="markdownHTMLContent" class="prose md:prose-lg"></div>
    </div>
  </Weight85Container>
</template>
