import { defineStore } from 'pinia'
import defaultSettings from '@/settings'
import i18n from '@/locales'

export const useSettingsStore = defineStore('settings', {
    state: () => {
        const storageSettings = JSON.parse(localStorage.getItem('system-settings') ?? "{}")
        return {
            theme: storageSettings.theme ?? defaultSettings.theme,
            light: storageSettings.light ?? defaultSettings.light,
            language: storageSettings.language ?? defaultSettings.language,
            headerHeight: storageSettings.headerHeight ?? defaultSettings.headerHeight,
            fixedHeader: storageSettings.fixedHeader ?? defaultSettings.fixedHeader,
            showBreadcrumb: storageSettings.showBreadcrumb ?? defaultSettings.showBreadcrumb,
            showBreadcrumbIcon: storageSettings.showBreadcrumbIcon ?? defaultSettings.showBreadcrumbIcon,
            TabsHeight: storageSettings.TabsHeight ?? defaultSettings.TabsHeight,
            showTabs: storageSettings.showTabs ?? defaultSettings.showTabs,
            showTabsIcon: storageSettings.showTabsIcon ?? defaultSettings.showTabsIcon,
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
    created() {
        i18n.global.locale = this.language
        document.documentElement.className = `${this.theme} ${this.light ? 'light' : 'dark'}`
    },
    watch: {
        theme(val) {
            document.documentElement.className = `${val} ${this.light ? 'light' : 'dark'}`
        },
        light(val) {
            document.documentElement.className = `${this.theme} ${val ? 'light' : 'dark'}`
        }
    }
})
