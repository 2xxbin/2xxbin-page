<script setup lang="ts">
import CenterContainer from '@/components/Container/CenterContainer.vue'
import DownloadVoiceBank from '@/components/DownloadVoiceBank.vue'
import IntroduceVoiceBank from '@/components/IntroduceVoiceBank.vue'
import type { IVoiceBankData } from '@/types/IVoiceBankData.type'
import { getVoiceBankData } from '@/utils/axiosFetch'
import { onMounted, ref, type Ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const voiceBank: Ref<IVoiceBankData | undefined> = ref(undefined)

onMounted(async () => {
  voiceBank.value = await getVoiceBankData(route.params.vbname as string)
})
</script>

<template>
  <CenterContainer>
    <div v-if="voiceBank" class="w-[90%] sm:w-full">
      <IntroduceVoiceBank :voice-bank="voiceBank" />
      <DownloadVoiceBank :voice-bank="voiceBank" />
    </div>
  </CenterContainer>
</template>
