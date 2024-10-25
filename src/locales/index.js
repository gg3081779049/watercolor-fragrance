import { createI18n } from 'vue-i18n'
import { local } from '@/plugins/modules/cache'
import defaultSettings from '@/settings'

const locales = require.context('./lang', true, /\index.js$/)
const localeSettings = local.getItem('system-settings')

const messages = {}

locales.keys().forEach(key => messages[key.replace(/\.\/|\/index.js/g, '')] = locales(key).default)

const i18n = createI18n({
    locale: localeSettings?.language ?? defaultSettings.language,
    silentTranslationWarn: true,
    messages
})

export const $t = i18n.global.t
export const $tc = i18n.global.tc
export const $te = i18n.global.te
export const $tm = i18n.global.tm

export default i18n
