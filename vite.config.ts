import * as path from 'path';
import viteImagemin from '@vheemstra/vite-plugin-imagemin';
import react from '@vitejs/plugin-react';
import imageminGifsicle from 'imagemin-gifsicle';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';
import imageminWebp from 'imagemin-webp';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
// import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // viteStaticCopy({
    //   targets: [
    //     {
    //       src: 'src/asset/*',
    //       dest: 'assets',
    //     },
    //   ],
    // }),
    viteCompression({
      algorithm: 'gzip',
      ext: 'gz',
    }),
    viteImagemin({
      plugins: {
        // PNG 무손실 압축
        png: imageminPngquant({ quality: [1, 1] }), // 무손실 압축 (최대 품질)
        // SVG 무손실 압축
        svg: imageminSvgo({
          plugins: [{ removeViewBox: false }, { cleanupIDs: false }], // 무손실 최적화
        }),
        // GIF 무손실 압축
        gif: imageminGifsicle({ optimizationLevel: 3, interlaced: false }), // 무손실 옵션
      },
      makeWebp: {
        plugins: {
          // WebP 무손실 압축
          png: imageminWebp({ quality: 100 }), // 최대 품질로 WebP 변환
        },
      },
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  server: {
    host: '0.0.0.0',
  },
});
