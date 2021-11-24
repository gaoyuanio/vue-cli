import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import store from './store'
import './util/rem'

const app = createApp(App)
app.use(router)
app.use(store)

// 设置全局变量
// app.config.globalProperties.$http=http

app.mount('#app')
