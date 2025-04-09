import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Подключаем маршрутизатор

const app = createApp(App)
app.use(router) // Используем Vue Router
app.mount('#app')
