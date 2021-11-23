import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from "vite-plugin-style-import";
const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') //设置别名src为@
    }
  },
  server:{
    proxy:{
      '/baseUrl':'https://www.baidu.com/'
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
        libraryName: "vant",
        esModule: true,
        resolveStyle: (name) => `vant/es/${name}/style`,
      }, ],
    }),
  ],

})