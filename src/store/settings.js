import { defineStore } from 'pinia'
import defaultSettings from '@/settings.js'

export const useSettingsStore = defineStore('settings', {
    state: () => {
        const storageSettings = JSON.parse(localStorage.getItem('system-settings')) || ''
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
        setTheme(theme) {
            document.documentElement.className = `${this.theme = theme ?? 'default'} ${this.light ? 'light' : 'dark'}`
        },
        setLight(light) {
            document.documentElement.className = `${this.theme} ${(this.light = light ?? true) ? 'light' : 'dark'}`
        }
    }
})