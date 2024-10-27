<script setup lang="ts">
import TitleText from '@/components/Text/TitleText.vue'
import { localAxios } from '@/utils/axiosFetch'
import { onMounted, onBeforeUnmount, ref } from 'vue'

interface IVoiceBank {
  korName: string
  engName: string
  route: string
  id: string
}

const voiceBanks = ref<Array<IVoiceBank>>([]) // ref로 반응형으로 설정
const columnCSS = ref<number>(3) // ref로 반응형으로 설정

const updateColumnCount = () => {
  const width = window.innerWidth

  if (width < 640) {
    columnCSS.value = 1 // xs
  } else if (width < 768) {
    columnCSS.value = 2 // sm
  } else if (width < 1024) {
    columnCSS.value = 3 // md
  } else {
    columnCSS.value = 4 // lg
  }

  if (voiceBanks.value.length <= 3 && columnCSS.value !== 1) {
    columnCSS.value = voiceBanks.value.length
  }
}

onMounted(() => {
  localAxios
    .get('/voicebank/voicebanks.json')
    .then(res => {
      voiceBanks.value = res.data // ref의 value 속성에 데이터 할당
      updateColumnCount()
    })
    .catch(e => console.error(e))

  window.addEventListener('resize', updateColumnCount)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateColumnCount)
})
</script>

<template>
  <div class="w-full flex flex-col items-center">
    <TitleText :is-center-text="true">VoiceBanks</TitleText>

    <div
      v-if="voiceBanks.length > 0"
      class="grid gap-6"
      :style="{
        'grid-template-columns': `repeat(${columnCSS}, minmax(0, 1fr))`,
      }"
    >
      <div
        v-for="voiceBank in voiceBanks"
        :key="voiceBank.id"
        class="relative aspect-[4/5] h-[500px] w-[400px] flex justify-center items-center group"
        tabindex="0"
        role="button"
        @click="() => $router.push(`/voicebank/${voiceBank.id}`)"
      >
        <img
          :src="`/images/character/bust/${voiceBank.id}.png`"
          :alt="`${voiceBank.korName} (${voiceBank.engName})`"
          class="absolute inset-0 w-full h-full object-cover z-1 filter grayscale contrast-60 brightness-0 transition-opacity ease-in-out duration-50 group-hover:opacity-0"
        />
        <h3
          class="transition-opacity ease-in duration-50 opacity-0 group-hover:opacity-100 font-bold text-3xl text-center"
        >
          {{ voiceBank.korName }}<br />{{ voiceBank.engName }}
        </h3>
      </div>
    </div>

    <div v-else>Loading...</div>
  </div>
</template>
