import { fileURLToPath, URL } from 'url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
//eslint-disable-next-line
export default (data: any) => {
  //eslint-disable-next-line
  const { mode }: { mode: any } = { ...data }
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return defineConfig({
    plugins: [
      vue({
        template: { transformAssetUrls }
      }),
      vueJsx(),
      
    ],
    build: {
      assetsDir: 'static',
      outDir: process.env.VITE_OUTPUT_DIR ? process.env.VITE_OUTPUT_DIR : 'dist'
    },
    server: {
      port: (process.env.VITE_SERVER_PORT || 3000) as number,
      proxy: {
        '/api': process.env.VITE_DEV_API || 'http://127.0.0.1:8000',
        '/media': process.env.VITE_DEV_API || 'http://127.0.0.1:8000'
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  })
}
