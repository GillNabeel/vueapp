import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

createApp(App).use(router).mount('#app')
