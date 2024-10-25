import { defineStore } from 'pinia'
import { local } from '@/plugins/modules/cache'
import i18n from '@/locales'
import defaultSettings from '@/settings'

export const useSettingsStore = defineStore('settings', {
    state: () => {
        const storageSettings = local.getItem('system-settings')
        return Object.keys(defaultSettings).reduce((acc, key) => {
            acc[key] = storageSettings?.[key] ?? defaultSettings[key]
            return acc
        }, {})
    },
    actions: {
        saveSettings() {
            local.setItem("system-settings", this.$state)
        },
        resetSettings() {
            local.remove("system-settings")
            this.$patch(state => {
                for (const key in defaultSettings) {
                    state[key] = defaultSettings[key]
                }
            })
        }
    },
    watch: {
        theme(val) {
            document.documentElement.className = `${val} ${this.mode}`
        },
        mode(val) {
            document.documentElement.className = `${this.theme} ${val}`
        },
        language(val) {
            i18n.global.locale = val
        }
    },
    persist: {
        storage: sessionStorage,
    }
})
