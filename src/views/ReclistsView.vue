<script setup lang="ts">
import CenterContainer from '@/components/Container/CenterContainer.vue'
import PostCardComponent from '@/components/PostCardComponent.vue'
import TitleText from '@/components/Text/TitleText.vue'
import type { IPost } from '@/types/IPost.type'
import { getNotices } from '@/utils/axiosFetch'
import { onMounted, ref, type Ref } from 'vue'

const notices: Ref<IPost[] | undefined> = ref(undefined)
onMounted(async () => {
  notices.value = await getNotices()
})
</script>

<template>
  <CenterContainer>
    <TitleText>Notices</TitleText>
    <div v-if="notices">
      <PostCardComponent
        v-for="notice in notices"
        :key="notice.id"
        :post="notice"
        base-url="/notice"
      />
    </div>
  </CenterContainer>
</template>
