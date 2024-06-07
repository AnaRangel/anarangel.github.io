import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://anarangel.github.io',
  image: {
    domains: ['media.licdn.com'],
  },
  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
