import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		host: true,
	},
	resolve: {
		alias: [
			{find: "@", replacement: "/src"},
			{find: "@lib", replacement: "/src/lib"},
			{find: "@routes", replacement: "/src/routes"},
			{find: "@components", replacement: "/src/components"},
		]
	}
});
