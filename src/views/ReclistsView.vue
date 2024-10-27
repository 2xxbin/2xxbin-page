<script setup lang="ts">
import CenterContainer from '@/components/Container/CenterContainer.vue'
import PostCardComponent from '@/components/PostCardComponent.vue'
import TitleText from '@/components/Text/TitleText.vue'
import type { IPost } from '@/types/IPost.type'
import { getReclists } from '@/utils/axiosFetch'
import { onMounted, ref, type Ref } from 'vue'

const reclists: Ref<IPost[] | undefined> = ref(undefined)
onMounted(async () => {
  reclists.value = await getReclists()
})
</script>

<template>
  <CenterContainer>
    <TitleText>Reclists</TitleText>
    <div v-if="reclists">
      <PostCardComponent
        v-for="reclist in reclists"
        :key="reclist.id"
        :post="reclist"
        base-url="/reclist"
      />
    </div>
  </CenterContainer>
</template>
