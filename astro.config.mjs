// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// Demo găzduit pe GitHub Pages, într-un subdirector.
// TODO(real): pe domeniul clientului se pune domeniul în `site` și se șterge `base`.
// Linkurile interne trec prin helperul u() din src/data/site.ts, deci restul codului nu se schimbă.
export default defineConfig({
  site: 'https://rtr-tech-solutions.github.io',
  base: '/bijuterii-aur-demo',
  vite: {
    plugins: [tailwindcss()]
  }
});
