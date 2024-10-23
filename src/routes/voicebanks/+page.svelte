<script lang="ts">
	import { goto } from "$app/navigation";
	import axios from "axios";
	import { onMount } from "svelte";

	interface IVoiceBank {
		name: string;
		route: string;
		id: string;
	}

	let voiceBanks: Array<IVoiceBank>;
	let columnCSS: number = 3;

	function updateColumnCount() {
		const width = window.innerWidth;

		if (width < 640) {
			columnCSS = 1; // xs
		} else if (width < 768) {
			columnCSS = 2; // sm
		} else if (width < 1024) {
			columnCSS = 3; // md
		} else {
			columnCSS = 4; // lg
		}

		if (voiceBanks.length <= 3 && columnCSS != 1) {
			columnCSS = voiceBanks.length;
		}
	}

	onMount(() => {
		axios
			.get("/voicebank/voicebanks.json")
			.then((res) => {
				voiceBanks = res.data;
				updateColumnCount();
			})
			.catch((e) => console.error(e));

		window.addEventListener('resize', updateColumnCount);

		return () => {
			window.removeEventListener('resize', updateColumnCount);
		};
	});
</script>

<div class="w-full flex flex-col items-center">
	<h1 class="font-bold text-5xl">Voice Banks</h1>
	<div class="grid mt-12 gap-6" style="grid-template-columns: repeat({columnCSS}, minmax(0, 1fr));">
		{#each voiceBanks as { id, name }, index (index)}
			<div
				class="relative aspect-[4/5] min-h-[500px] min-w-[400px] flex justify-center items-center group"
				tabindex="0"
				role="button"
				on:keypress={() => goto(`/voicebanks/${id}`)}
				on:click={() => goto(`/voicebanks/${id}`)}
			>
				<img
					src="/images/character/bust/{id}.png"
					alt="{id}"
					class="absolute inset-0 w-full h-full object-cover z-1 filter grayscale contrast-60 brightness-0 transition-opacity ease-in-out duration-50 group-hover:opacity-0"
				/>
				<h3 class="transition-opacity ease-in duration-50 opacity-0 group-hover:opacity-100 font-bold text-3xl">{name}</h3>
			</div>
		{/each}
	</div>
</div>
