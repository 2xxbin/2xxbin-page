<script setup lang="ts">
import TitleText from '@/components/Text/TitleText.vue'
import type { IVoiceBankData } from '@/types/IVoiceBankData.type'

const { voiceBank } = defineProps<{ voiceBank: IVoiceBankData }>()
</script>

<template>
  <div class="flex sm:flex-col">
    <img
      :src="voiceBank.portrait"
      :alt="voiceBank.engName"
      class="h-[70vh] object-contain"
    />
    <div class="flex flex-col sm:items-center md:ml-4 mt-10 sm:text-center">
      <TitleText>{{ voiceBank.korName }} | {{ voiceBank.engName }}</TitleText>
      <ul class="flex mt-4 [&_li]:mr-1">
        <li v-for="tag in voiceBank.hashTag" :key="tag">#{{ tag }}</li>
      </ul>
      <ul class="mt-8 [&_li]:my-2">
        <li>성별: {{ voiceBank.gender }}</li>
        <li>나이: {{ voiceBank.age }}</li>
        <li>키: {{ voiceBank.weight }}</li>
        <li>몸무게: {{ voiceBank.height }}</li>
        <li>키: {{ voiceBank.weight }}</li>
        <li>
          좋아하는 것:
          <span v-for="(like, index) in voiceBank.like" :key="like"
            >{{ like
            }}{{ index < voiceBank.like.length - 1 ? `,&nbsp;` : `` }}</span
          >
        </li>
        <li>
          싫어하는 것:
          <span v-for="(unLike, index) in voiceBank.unLike" :key="unLike"
            >{{ unLike
            }}{{ index < voiceBank.unLike.length - 1 ? `,&nbsp;` : `` }}</span
          >
        </li>
      </ul>
      <p
        class="mt-12 leading-loose"
        v-html="voiceBank.description.join('<br/>')"
      ></p>
    </div>
  </div>
</template>
