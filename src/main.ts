import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap'; // Bootstrap JS
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS

const app = createApp(App)
app.use(router)
app.mount('#app')
