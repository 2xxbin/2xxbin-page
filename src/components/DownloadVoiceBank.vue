<script setup lang="ts">
import type { IVoiceBankData } from '@/types/IVoiceBankData.type'

const { voiceBank } = defineProps<{ voiceBank: IVoiceBankData }>()
</script>

<template>
  <div
    class="sm:mt-20"
    v-for="(voiceBanks, voiceBanksIndex) in voiceBank.voiceBanks"
    :key="voiceBanks.category"
  >
    <div class="flex w-full" :class="{ 'justify-end': voiceBanksIndex % 2 }">
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
          <li class="mt-2" v-for="staff in content.staff" :key="staff.position">
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
</template>
