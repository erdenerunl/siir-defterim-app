import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// GLOBAL CSS Files
import "@/assets/styles.scss"

// GLOBAL COMPONENTS


createApp(App)
.use(store)
.use(router)
.mount('#app')
