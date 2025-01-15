// vite.config.ts
import * as path from "path";
import viteImagemin from "file:///C:/Users/User/Desktop/sailingstone/node_modules/@vheemstra/vite-plugin-imagemin/dist/index.js";
import react from "file:///C:/Users/User/Desktop/sailingstone/node_modules/@vitejs/plugin-react/dist/index.mjs";
import imageminGifsicle from "file:///C:/Users/User/Desktop/sailingstone/node_modules/imagemin-gifsicle/index.js";
import imageminPngquant from "file:///C:/Users/User/Desktop/sailingstone/node_modules/imagemin-pngquant/index.js";
import imageminSvgo from "file:///C:/Users/User/Desktop/sailingstone/node_modules/imagemin-svgo/index.js";
import imageminWebp from "file:///C:/Users/User/Desktop/sailingstone/node_modules/imagemin-webp/index.js";
import { defineConfig } from "file:///C:/Users/User/Desktop/sailingstone/node_modules/vite/dist/node/index.js";
import viteCompression from "file:///C:/Users/User/Desktop/sailingstone/node_modules/vite-plugin-compression/dist/index.mjs";
import { viteStaticCopy } from "file:///C:/Users/User/Desktop/sailingstone/node_modules/vite-plugin-static-copy/dist/index.js";
var __vite_injected_original_dirname = "C:\\Users\\User\\Desktop\\sailingstone";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "src/asset/*",
          dest: "assets"
        }
      ]
    }),
    viteCompression({
      algorithm: "gzip",
      ext: "gz"
    }),
    viteImagemin({
      cache: false,
      plugins: {
        png: imageminPngquant({ quality: [1, 1] }),
        svg: imageminSvgo({
          plugins: [{ removeViewBox: false }, { cleanupIDs: false }]
        }),
        gif: imageminGifsicle({ optimizationLevel: 3, interlaced: false })
      },
      makeWebp: {
        plugins: {
          png: imageminWebp({ quality: 100 })
        }
      }
    })
  ],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__vite_injected_original_dirname, "src") }]
  },
  server: {
    host: "0.0.0.0"
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const ext = path.extname(assetInfo.name || "");
          if (ext === ".png" || ext === ".jpg" || ext === ".jpeg" || ext === ".png.webp") {
            return "assets/[name]-[hash].webp";
          }
          return "assets/[name]-[hash][extname]";
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVc2VyXFxcXERlc2t0b3BcXFxcc2FpbGluZ3N0b25lXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVc2VyXFxcXERlc2t0b3BcXFxcc2FpbGluZ3N0b25lXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9Vc2VyL0Rlc2t0b3Avc2FpbGluZ3N0b25lL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB2aXRlSW1hZ2VtaW4gZnJvbSAnQHZoZWVtc3RyYS92aXRlLXBsdWdpbi1pbWFnZW1pbic7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IGltYWdlbWluR2lmc2ljbGUgZnJvbSAnaW1hZ2VtaW4tZ2lmc2ljbGUnO1xuaW1wb3J0IGltYWdlbWluUG5ncXVhbnQgZnJvbSAnaW1hZ2VtaW4tcG5ncXVhbnQnO1xuaW1wb3J0IGltYWdlbWluU3ZnbyBmcm9tICdpbWFnZW1pbi1zdmdvJztcbmltcG9ydCBpbWFnZW1pbldlYnAgZnJvbSAnaW1hZ2VtaW4td2VicCc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB2aXRlQ29tcHJlc3Npb24gZnJvbSAndml0ZS1wbHVnaW4tY29tcHJlc3Npb24nO1xuaW1wb3J0IHsgdml0ZVN0YXRpY0NvcHkgfSBmcm9tICd2aXRlLXBsdWdpbi1zdGF0aWMtY29weSc7XG5cbi8vIGh0dHBzOi8vdml0ZS5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgdml0ZVN0YXRpY0NvcHkoe1xuICAgICAgdGFyZ2V0czogW1xuICAgICAgICB7XG4gICAgICAgICAgc3JjOiAnc3JjL2Fzc2V0LyonLFxuICAgICAgICAgIGRlc3Q6ICdhc3NldHMnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KSxcbiAgICB2aXRlQ29tcHJlc3Npb24oe1xuICAgICAgYWxnb3JpdGhtOiAnZ3ppcCcsXG4gICAgICBleHQ6ICdneicsXG4gICAgfSksXG4gICAgdml0ZUltYWdlbWluKHtcbiAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgcG5nOiBpbWFnZW1pblBuZ3F1YW50KHsgcXVhbGl0eTogWzEsIDFdIH0pLFxuICAgICAgICBzdmc6IGltYWdlbWluU3Znbyh7XG4gICAgICAgICAgcGx1Z2luczogW3sgcmVtb3ZlVmlld0JveDogZmFsc2UgfSwgeyBjbGVhbnVwSURzOiBmYWxzZSB9XSxcbiAgICAgICAgfSksXG4gICAgICAgIGdpZjogaW1hZ2VtaW5HaWZzaWNsZSh7IG9wdGltaXphdGlvbkxldmVsOiAzLCBpbnRlcmxhY2VkOiBmYWxzZSB9KSxcbiAgICAgIH0sXG4gICAgICBtYWtlV2VicDoge1xuICAgICAgICBwbHVnaW5zOiB7XG4gICAgICAgICAgcG5nOiBpbWFnZW1pbldlYnAoeyBxdWFsaXR5OiAxMDAgfSksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IFt7IGZpbmQ6ICdAJywgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKSB9XSxcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgaG9zdDogJzAuMC4wLjAnLFxuICB9LFxuICBidWlsZDoge1xuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBhc3NldEZpbGVOYW1lczogKGFzc2V0SW5mbykgPT4ge1xuICAgICAgICAgIGNvbnN0IGV4dCA9IHBhdGguZXh0bmFtZShhc3NldEluZm8ubmFtZSB8fCAnJyk7XG4gICAgICAgICAgLy8gXHVCQUE4XHVCNEUwIFx1Qzc3NFx1QkJGOFx1QzlDMCBcdUQzMENcdUM3N0NcdUM1RDAgXHVCMzAwXHVENTc0IC5wbmdcdUI5N0MgLndlYnBcdUI4NUMgXHVCQ0MwXHVBQ0JEXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgZXh0ID09PSAnLnBuZycgfHxcbiAgICAgICAgICAgIGV4dCA9PT0gJy5qcGcnIHx8XG4gICAgICAgICAgICBleHQgPT09ICcuanBlZycgfHxcbiAgICAgICAgICAgIGV4dCA9PT0gJy5wbmcud2VicCdcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiAnYXNzZXRzL1tuYW1lXS1baGFzaF0ud2VicCc7IC8vIFx1QkU0Q1x1QjREQyBcdUMyREMgLndlYnBcdUI4NUMgXHVCQ0MwXHVENjU4XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAnYXNzZXRzL1tuYW1lXS1baGFzaF1bZXh0bmFtZV0nO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtTLFlBQVksVUFBVTtBQUN4VCxPQUFPLGtCQUFrQjtBQUN6QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxzQkFBc0I7QUFDN0IsT0FBTyxzQkFBc0I7QUFDN0IsT0FBTyxrQkFBa0I7QUFDekIsT0FBTyxrQkFBa0I7QUFDekIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxxQkFBcUI7QUFDNUIsU0FBUyxzQkFBc0I7QUFUL0IsSUFBTSxtQ0FBbUM7QUFZekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sZUFBZTtBQUFBLE1BQ2IsU0FBUztBQUFBLFFBQ1A7QUFBQSxVQUNFLEtBQUs7QUFBQSxVQUNMLE1BQU07QUFBQSxRQUNSO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsZ0JBQWdCO0FBQUEsTUFDZCxXQUFXO0FBQUEsTUFDWCxLQUFLO0FBQUEsSUFDUCxDQUFDO0FBQUEsSUFDRCxhQUFhO0FBQUEsTUFDWCxPQUFPO0FBQUEsTUFDUCxTQUFTO0FBQUEsUUFDUCxLQUFLLGlCQUFpQixFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO0FBQUEsUUFDekMsS0FBSyxhQUFhO0FBQUEsVUFDaEIsU0FBUyxDQUFDLEVBQUUsZUFBZSxNQUFNLEdBQUcsRUFBRSxZQUFZLE1BQU0sQ0FBQztBQUFBLFFBQzNELENBQUM7QUFBQSxRQUNELEtBQUssaUJBQWlCLEVBQUUsbUJBQW1CLEdBQUcsWUFBWSxNQUFNLENBQUM7QUFBQSxNQUNuRTtBQUFBLE1BQ0EsVUFBVTtBQUFBLFFBQ1IsU0FBUztBQUFBLFVBQ1AsS0FBSyxhQUFhLEVBQUUsU0FBUyxJQUFJLENBQUM7QUFBQSxRQUNwQztBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPLENBQUMsRUFBRSxNQUFNLEtBQUssYUFBa0IsYUFBUSxrQ0FBVyxLQUFLLEVBQUUsQ0FBQztBQUFBLEVBQ3BFO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sZ0JBQWdCLENBQUMsY0FBYztBQUM3QixnQkFBTSxNQUFXLGFBQVEsVUFBVSxRQUFRLEVBQUU7QUFFN0MsY0FDRSxRQUFRLFVBQ1IsUUFBUSxVQUNSLFFBQVEsV0FDUixRQUFRLGFBQ1I7QUFDQSxtQkFBTztBQUFBLFVBQ1Q7QUFDQSxpQkFBTztBQUFBLFFBQ1Q7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
