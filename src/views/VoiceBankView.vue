<script setup lang="ts">
import CenterContainer from '@/components/Container/CenterContainer.vue'
import TitleText from '@/components/Text/TitleText.vue'
import { getVoiceBankData } from '@/utils/axiosFetch'
import { onMounted, ref, type Ref } from 'vue'
import { useRoute } from 'vue-router'

interface IVoiceBanksContentStaffData {
  name: string
  position: string
  contact: { text: string; link: string }
}

interface IVoiceBanksContentData {
  name: string
  illust: string
  demoYoutubeID: string
  downloadLink: string
  explaination: string[]
  staff: IVoiceBanksContentStaffData[]
}

interface IVoiceBanksData {
  category: string
  content: IVoiceBanksContentData[]
}

interface IVoiceBankData {
  korName: string
  engName: string
  hashTag: string[]
  gender: string
  age: number
  height: number
  weight: number
  like: string[]
  unLike: string[]
  portrait: string
  description: string[]
  voiceBanks: IVoiceBanksData[]
}

const route = useRoute()
const voiceBank: Ref<IVoiceBankData | undefined> = ref(undefined)

onMounted(async () => {
  voiceBank.value = await getVoiceBankData(route.params.vbname as string)
})
</script>

<template>
  <CenterContainer>
    <div v-if="voiceBank" class="w-[90%]">
      <div class="flex sm:flex-col">
        <img
          :src="voiceBank.portrait"
          :alt="voiceBank.engName"
          class="h-[70vh] object-contain"
        />
        <div class="flex flex-col sm:items-center md:ml-4 mt-10 sm:text-center">
          <TitleText
            >{{ voiceBank.korName }} | {{ voiceBank.engName }}</TitleText
          >
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
                }}{{
                  index < voiceBank.unLike.length - 1 ? `,&nbsp;` : ``
                }}</span
              >
            </li>
          </ul>
          <p
            class="mt-12 leading-loose"
            v-html="voiceBank.description.join('<br/>')"
          ></p>
        </div>
      </div>

      <div
        class="sm:mt-20"
        v-for="(voiceBanks, voiceBanksIndex) in voiceBank.voiceBanks"
        :key="voiceBanks.category"
      >
        <div
          class="flex w-full"
          :class="{ 'justify-end': voiceBanksIndex % 2 }"
        >
          <h2 class="text-4xl font-bold">배포 - {{ voiceBanks.category }}</h2>
        </div>
        <div
          class="grid grid-cols-2 sm:grid-cols-1 w-full mt-8"
          v-for="(content, contentIndex) in voiceBanks.content"
          :key="content.name"
        >
          <div
            class="flex flex-col sm:order-2 sm:text-center"
            :class="{
              'order-2 md:ml-6': contentIndex % 2,
              'md:mr-6': !(contentIndex % 2),
            }"
          >
            <h3 class="font-bold text-2xl">
              {{ content.name }}
              <span class="mx-2">|</span>
              <a
                :href="content.downloadLink"
                target="_blank"
                rel="noopener noreferrer"
                class="underline"
              >
                Download Link
              </a>
            </h3>
            <p
              class="leading-[2.5] mt-8 break-keep"
              v-html="content.explaination.join('<br />')"
            ></p>
            <ul class="mt-4 mb-8">
              <li v-for="staff in content.staff" :key="staff.position">
                {{ staff.position }} : {{ staff.name }}
                <span class="mx-2">|</span>
                <a
                  :href="staff.contact.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="border-spacing-4 border-black border-b-2"
                  >{{ staff.contact.text }}</a
                >
              </li>
            </ul>
            <iframe
              title="demo"
              class="w-full aspect-video"
              :src="`https://www.youtube.com/embed/${content.demoYoutubeID}`"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="flex items-center justify-center">
            <img
              :src="content.illust"
              :alt="voiceBank.engName"
              class="h-full w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </CenterContainer>
</template>
