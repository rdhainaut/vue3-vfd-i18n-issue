import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import en from './locales/en.json'
import fr from './locales/fr.json'

const i18n = createI18n({
    legacy: true,
    allowComposition: true,
    locale: 'en',
    messages: {
        en,
        fr
    },
});

const app = createApp(App)
app.use(i18n)
app.mount('#app')
