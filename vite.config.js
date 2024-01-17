import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Pages({
      dirs: 'src/views',
      exclude: ['**/components/*.vue'],
      importMode: 'async',
    }),
    Layouts({
      layoutsDirs: 'src/layout', // 布局文件存放目录
      defaultLayout: 'default', // 默认布局，对应 src/layout/default.vue
    }),
    AutoImport({
      dts: true,
      dirs: ['./src/utils'],
      imports: [
        'vue',
        'vue-router',
        {
          pinia: ['storeToRefs'],
        },
      ],
    }),
    Components({
      resolvers: [],
      directoryAsNamespace: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
