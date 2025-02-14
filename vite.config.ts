import * as path from 'path';
import prerender from '@prerenderer/rollup-plugin';
import viteImagemin from '@vheemstra/vite-plugin-imagemin';
import react from '@vitejs/plugin-react';
import imageminGifsicle from 'imagemin-gifsicle';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';
import imageminWebp from 'imagemin-webp';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const module = id.split('node_modules/').pop()?.split('/')[0];

            return module ? `vendor/${module}` : undefined;
          }
        },
      },
    },
  },
  plugins: [
    react(),
    prerender({
      routes: ['/', '/service', '/solution', '/recruit', '/contact'],
      renderer: '@prerenderer/renderer-puppeteer',
      rendererOptions: {
        maxConcurrentRoutes: 1,
        renderAfterTime: 500,
      },
    }),
    svgr(),
    viteCompression({
      algorithm: 'gzip',
      ext: 'gz',
    }),
    viteImagemin({
      cache: false,
      plugins: {
        png: imageminPngquant({ quality: [1, 1] }),
        svg: imageminSvgo({
          plugins: [{ removeViewBox: false }, { cleanupIDs: false }],
        }),
        gif: imageminGifsicle({ optimizationLevel: 3, interlaced: false }),
      },
      makeWebp: {
        plugins: {
          png: imageminWebp({ quality: 100 }),
        },
        skipIfLargerThan: 'original',
      },
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://192.168.0.5:29080',
  //     },
  //   },
  // },
  // server: {
  //   host: '0.0.0.0',
  // },
});
