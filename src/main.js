import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router.js'
import { lang, setLang } from './i18n.js'
import './styles.css'

setLang(lang.value)

createApp(App).use(router).mount('#app')
