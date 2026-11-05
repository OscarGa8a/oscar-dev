// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

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
      i18n: { defaultLocale: 'es', locales: { es: 'es-CO', en: 'en' } },
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
