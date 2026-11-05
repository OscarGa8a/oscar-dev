// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import { routePairs } from './src/config/routes.ts';

const SITE = 'https://oscardev.co';
// hreflang alternates per URL pair (ES and EN slugs differ, so the built-in i18n option can't pair them).
/** @param {string} url */
const pairFor = (url) => {
  const path = new URL(url).pathname;
  return routePairs.find((r) => r.es === path || r.en === path);
};

if (!process.env.PUBLIC_CLOUDINARY_CLOUD_NAME) {
  process.env.PUBLIC_CLOUDINARY_CLOUD_NAME = 'dsd6blpz0';
}

export default defineConfig({
  site: 'https://oscardev.co',
  trailingSlash: 'always',
  compressHTML: true,
  integrations: [
    icon(),
    sitemap({
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        const pair = pairFor(item.url);
        if (pair) {
          item.links = [
            { lang: 'es', url: SITE + pair.es },
            { lang: 'en', url: SITE + pair.en },
            { lang: 'x-default', url: SITE + pair.es },
          ];
        }
        return item;
      },
    }),
  ],
  image: {
    remotePatterns: [{ protocol: 'https', hostname: 'res.cloudinary.com' }],
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
