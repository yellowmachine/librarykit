import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: [vitePreprocess(), mdsvex()],
	kit: { 
		adapter: adapter(),
		alias: {
			"$generated":"generated",
			"$lib": "src/lib",
			"@src": "src"
		}
	},
	extensions: ['.svelte', '.svx']
};

export default config;
