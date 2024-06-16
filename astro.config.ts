import i18n from '@astrolicious/i18n';
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
  integrations: [
    i18n({
      defaultLocale: 'es',
      locales: ['es', 'en'],
      pages: {
        '/sobre-mi': {
          en: '/about-me',
        },
        '/planograma': {
          en: '/planogramm',
        },
      },
    }),
  ],
});
