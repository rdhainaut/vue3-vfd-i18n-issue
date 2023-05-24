import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      compositionOnly: false,
      useClassComponent: true
    })
  ],
  resolve: {
    alias: {
      'vue-facing-decorator': 'vue-facing-decorator/dist/index-return-cons',
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
