import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // 打包路径
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 设置别名src为@
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://rap2api.taobao.org/app/mock/294528',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  plugins: [
    vue(),
    styleImport({
      libs: [{
        libraryName: 'vant',
        esModule: true,
        resolveStyle: (name) => `vant/es/${name}/style`
      }]
    })
  ]

})
