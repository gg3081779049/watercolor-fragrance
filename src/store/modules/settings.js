import { defineStore } from 'pinia'
import { local } from '@/plugins/cache'
import i18n from '@/locales'
import defaultSettings from '@/settings'

export const useSettingsStore = defineStore('settings', {
    state: () => {
        const storageSettings = local.getItem('system-settings')
        return {
            theme: storageSettings?.theme ?? defaultSettings.theme,
            mode: storageSettings?.mode ?? defaultSettings.mode,
            layout: storageSettings?.layout ?? defaultSettings.layout,
            language: storageSettings?.language ?? defaultSettings.language,
            pageAnimateType: storageSettings?.pageAnimateType ?? defaultSettings.pageAnimateType,
            headerHeight: storageSettings?.headerHeight ?? defaultSettings.headerHeight,
            fixedHeader: storageSettings?.fixedHeader ?? defaultSettings.fixedHeader,
            showBreadcrumb: storageSettings?.showBreadcrumb ?? defaultSettings.showBreadcrumb,
            showBreadcrumbIcon: storageSettings?.showBreadcrumbIcon ?? defaultSettings.showBreadcrumbIcon,
            tabsHeight: storageSettings?.tabsHeight ?? defaultSettings.tabsHeight,
            tabsStyle: storageSettings?.tabsStyle ?? defaultSettings.tabsStyle,
            showTabs: storageSettings?.showTabs ?? defaultSettings.showTabs,
            showTabsIcon: storageSettings?.showTabsIcon ?? defaultSettings.showTabsIcon,
            draggable: storageSettings?.draggable ?? defaultSettings.draggable,
            sidebarWidth: storageSettings?.sidebarWidth ?? defaultSettings.sidebarWidth,
            uniqueOpened: storageSettings?.uniqueOpened ?? defaultSettings.uniqueOpened,
            watermark: storageSettings?.watermark ?? defaultSettings.watermark,
            navToolbar: storageSettings?.navToolbar ?? defaultSettings.navToolbar,
        }
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
