<script setup lang="ts">
import Weight85Container from '@/components/Container/Weight85Container.vue'
import TitleText from '@/components/Text/TitleText.vue'
import { getMarkdown } from '@/utils/axiosFetch'
import { onMounted, ref, type Ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const markdownHTMLContent: Ref<string> = ref('')
onMounted(async () => {
  const path = `/md/notices/${route.params.id}.md`
  markdownHTMLContent.value = await getMarkdown(path)
  console.log(markdownHTMLContent)
})
</script>

<template>
  <Weight85Container
    ><TitleText :is-center-text="true">a</TitleText>
    <div v-html="markdownHTMLContent" class="prose md:prose-lg"></div>
  </Weight85Container>
</template>
