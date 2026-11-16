// @ts-check
import { defineConfig } from 'astro/config';

// When deploying to GitHub Pages under a sub-path, set:
//   SITE=https://<user>.github.io  BASE=/<repo>
export default defineConfig({
  site: process.env.SITE ?? 'http://localhost:4321',
  base: process.env.BASE ?? '/',
  trailingSlash: 'always',
});
