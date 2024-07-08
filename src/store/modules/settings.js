import { defineStore } from 'pinia'
import defaultSettings from '@/settings'

export const useSettingsStore = defineStore('settings', {
    state: () => {
        const storageSettings = JSON.parse(localStorage.getItem('system-settings') ?? "{}")
        return {
            theme: storageSettings.theme ?? defaultSettings.theme,
            light: storageSettings.light ?? defaultSettings.light,
            language: storageSettings.language ?? defaultSettings.language,
            fixedHeader: storageSettings.fixedHeader ?? defaultSettings.fixedHeader,
            showBreadcrumb: storageSettings.showBreadcrumb ?? defaultSettings.showBreadcrumb,
            showBreadcrumbIcon: storageSettings.showBreadcrumbIcon ?? defaultSettings.showBreadcrumbIcon,
            showTagsView: storageSettings.showTagsView ?? defaultSettings.showTagsView,
            showTagsViewIcon: storageSettings.showTagsViewIcon ?? defaultSettings.showTagsViewIcon,
            draggable: storageSettings.draggable ?? defaultSettings.draggable,
            sidebarWidth: storageSettings.sidebarWidth ?? defaultSettings.sidebarWidth,
            uniqueOpened: storageSettings.uniqueOpened ?? defaultSettings.uniqueOpened,
            watermark: storageSettings.watermark ?? defaultSettings.watermark,
        }
    },
    actions: {
        saveSettings() {
            localStorage.setItem("system-settings", JSON.stringify(this.$state))
        },
        resetSettings() {
            localStorage.removeItem("system-settings")
            this.$patch(state => {
                for (const key in defaultSettings) {
                    state[key] = defaultSettings[key]
                }
            })
        }
    },
    watch: {
        theme: {
            immediate: true,
            handler(newVal) {
                document.documentElement.className = `${newVal} ${this.light ? 'light' : 'dark'}`
            },
        },
        light: {
            immediate: true,
            handler(newVal) {
                document.documentElement.className = `${this.theme} ${newVal ? 'light' : 'dark'}`
            },
        }
    }
})
