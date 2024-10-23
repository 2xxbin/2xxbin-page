<script lang="ts">
	import axios from "axios";
  import yaml from "js-yaml";
	import { onMount } from "svelte";

  interface IVoiceBanksContentStaffData {
    name: string;
    position: string;
    contact: {text: string, link: string};
  }

  interface IVoiceBanksContentData {
    name: string;
    illust: string;
    demoYoutubeID: string;
    downloadLink: string;
    explaination: string[];
    staff: IVoiceBanksContentStaffData[];
  }

  interface IVoiceBanksData {
    category: string;
    content: IVoiceBanksContentData[];
  }

  interface IVoiceBankData {
    korName: string;
    engName: string;
    hashTag: string[];
    gender: string;
    age: number;
    height: number;
    weight: number;
    like: string[];
    unLike: string[];
    portrait: string;
    description: string[];
    voiceBanks: IVoiceBanksData[];
  }

  export let data;
  let voiceBank: IVoiceBankData;
  let isLoading = true;

  onMount(async () => {
    voiceBank = await axios.get(`/voicebank/${data.voiceBankName}.yaml`)
            .then((res) => yaml.load(res.data))
            .catch((e) => console.error(e));
    
    isLoading = false;
  })

</script>

<div class="w-screen flex flex-col items-center">
  <div class="w-[90%]">
    {#if !isLoading}
      <div class="flex">
        <img src="{voiceBank.portrait}" alt="{voiceBank.engName}" class="h-[70vh]" />
        <div class="ml-4 mt-10">
          <h1 class="font-bold text-4xl">{voiceBank.korName} | {voiceBank.engName}</h1>
          <ul class="flex mt-4 [&_li]:mr-1">
            {#each voiceBank.hashTag as tag, index (`tag-${index}`) }
              <li>#{tag}</li>
            {/each}
          </ul>
          <ul class="mt-8 [&_li]:my-2">
            <li>성별: {voiceBank.gender}</li>
            <li>나이: {voiceBank.age}</li>
            <li>키: {voiceBank.height}cm</li>
            <li>몸무게: {voiceBank.weight}kg</li>
            <li>
              좋아하는 것: 
              {#each voiceBank.like as like, index (`like-${index}`)}
                <span>
                  {like}{#if index < voiceBank.like.length - 1},&nbsp;{/if}
                </span>
              {/each}
            </li>
            <li>
              싫어하는 것: 
              {#each voiceBank.unLike as unLike, index (`unLike-${index}`)}
                <span>
                  {unLike}{#if index < voiceBank.unLike.length - 1},&nbsp;{/if}
                </span>
              {/each}
            </li>
          </ul>
          <p class="mt-12 leading-loose">
            {#each voiceBank.description as description, index (`description-${index}`)}
              {description}
              {#if index < voiceBank.description.length - 1}<br/>{/if}
            {/each}
          </p>
        </div>
      </div>

      
      {#each voiceBank.voiceBanks as voiceBanks, vbsIndex (`vbs-${vbsIndex}`)}
        <div class="">
          <div class="flex w-full {vbsIndex % 2 ? ` justify-end` : ``}">
            <h2 class="text-4xl font-bold">배포 - {voiceBanks.category}</h2>
          </div>
          {#each voiceBanks.content as content, contentIndex (`vbs-${voiceBanks.category}-content-${contentIndex}`)}
            <div class="grid grid-cols-2 w-full mt-8">
              <div class="flex flex-col {contentIndex % 2 ? `order-2 ml-6` : `mr-6`}">
                <h3 class="font-bold text-2xl">
                  {content.name} | 
                  <a href="{content.downloadLink}" target="_blank" rel="noopener noreferrer" class="underline">Download Link</a>
                </h3>
                <p class="leading-[2.5] mt-8 break-keep">
                  {#each content.explaination as explaination, index (`${content.name}-explaination-${index}`)}
                    {explaination}
                    {#if index < content.explaination.length - 1}<br/>{/if}
                  {/each}
                </p>
                <ul class="mt-4 mb-8">
                  {#each content.staff as staff, index (`staff-${index}`)}
                    <li class="tracking-wide my-2">
                      {staff.position} : {staff.name}
                      <span class="mx-1">|</span>  
                      <a href="{staff.contact.link}" target="_blank" rel="noopener noreferrer" class="">{staff.contact.text}</a>
                    </li>
                  {/each}
                </ul>
                <iframe title="demo" class="w-full aspect-video" src="https://www.youtube.com/embed/{content.demoYoutubeID}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div class="flex items-center justify-center">
                <img src="{content.illust}" alt="{voiceBank.engName}" class="h-full w-auto object-cover" />
              </div>
            </div>
          {/each}
        </div>
      {/each}
    {/if}
  </div>
</div>



