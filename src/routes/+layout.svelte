<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex flex-col min-h-screen">
	<header class="w-screen h-20 flex sm:flex-col justify-between sm:justify-center items-center px-8 sm:pt-8 sm:mb-12">
		<a href="/" class="text-xl sm:text-2xl text-center font-bold sm:mb-2">
			<span>2xxbin</span>
		</a>
		<nav class="w-2/5 sm:w-full flex items-center justify-end sm:justify-center [&_a]:mx-4 [&_a]:text-center">
			<a href="/">Home</a> |
			<a href="/notices">Notices</a> |
			<a href="/voicebanks">Voice Banks</a> |
			<a href="/reclists">Record Lists</a>
		</nav>
	</header>

	<main class="flex-1">
		{@render children()}
	</main>

	<footer class="w-screen flex flex-col items-center my-12">
		<hr class="h-1 w-3/4 border-gray-300 mb-8">
		<nav class="font-medium [&_a]:mx-2">
			<a href="https://x.com/2xxbin" target="_blank" rel="noopener noreferrer">X</a> |
			<a href="https://www.youtube.com/@2xxbin" target="_blank" rel="noopener noreferrer">Youtube</a> |
			<a href="mailto:2xxbin1208@gmail.com" target="_blank" rel="noopener noreferrer">E-Mail</a> |
			<a href="https://github.com/2xxbin" target="_blank" rel="noopener noreferrer">Github</a>
		</nav>
		<p class="break-keep text-center mt-6 text-sm">
			© 2024 2xxbin. All content, images, and designs are the property of 2xxbin. Unauthorized use is prohibited.
		</p>
	</footer>
</div>
