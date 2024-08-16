import './assets/styles.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'nprogress/nprogress.css'
import { inject } from '@vercel/analytics'

const app = createApp(App)

app.use(createPinia())
app.use(router)
inject()
app.mount('#app')
