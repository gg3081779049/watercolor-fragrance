import { createI18n } from 'vue-i18n'
import defaultSettings from '@/settings'

const locales = require.context('./lang', false, /\.js$/)
const localeSettings = JSON.parse(localStorage.getItem('system-settings') ?? "{}")

const messages = {}

locales.keys().forEach(key => messages[key.replace(/\.\/|\.js/g, '')] = locales(key).default)

const i18n = createI18n({
    locale: localeSettings.language ?? defaultSettings.language,
    messages
})

export default i18n