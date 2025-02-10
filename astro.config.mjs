// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: `
            @use "src/styles/mixins/_breakpoints.scss" as *;
            @use "src/styles/settings/_variables.scss" as *;
          `
        }
      }
    },
    build: {
      cssMinify: false,
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          assetFileNames: assetInfo => {
            const fileName = assetInfo?.names;
            if (fileName && Array.isArray(fileName)) {
              const extType = fileName[0].split('.').at(-1);
              if (extType === 'css') {
                return 'css/style.css';
              }
            }
            return `assets/[name][extname]`;
          },
        },
      }
    }
  }
});
