import { defineConfig } from 'astro/config';
import { writeFile } from 'node:fs/promises';

const site = 'https://kogen.studio';
const indexableRoutes = ['/'];

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  build: { inlineStylesheets: 'never' },
  integrations: [{
    name: 'search-discovery',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const urls = indexableRoutes.map((route) => `<url><loc>${new URL(route, site).href}</loc></url>`).join('');
        await writeFile(new URL('sitemap.xml', dir), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>\n`);
        await writeFile(new URL('robots.txt', dir), `User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap.xml\n`);
      },
    },
  }],
});
