// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import node from '@astrojs/node';
import keystatic from '@keystatic/astro';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
    integrations: [react(), markdoc(), keystatic()],
    adapter: vercel(),
});