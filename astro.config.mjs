// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://moalshafii.github.io/pyramidstires/',
	base: '/pyramidstires/',
	integrations: [mdx(), sitemap()],
	vite: {plugins: [tailwindcss()]},
});
