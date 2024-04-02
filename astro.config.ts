import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // TODO: Change url to the website
  site: 'https://www.example.com',
  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
