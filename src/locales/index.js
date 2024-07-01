import { createI18n } from 'vue-i18n'

const locales = require.context('./lang', false, /\.js$/)

const messages = {}

locales.keys().forEach(key => messages[key.replace(/\.\/|\.js/g, '')] = locales(key))

const i18n = createI18n({
    locale: 'zh',
    messages
})

export default i18n