import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://anarangel.github.io',
  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
