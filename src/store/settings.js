import { defineStore } from 'pinia'
import defaultSettings from '@/settings.js'

export const useSettingsStore = defineStore('settings', {
    state: () => {
        const storageSettings = JSON.parse(localStorage.getItem('system-settings')) || ''
        return {
            theme: storageSettings.theme ?? defaultSettings.theme,
            layout: storageSettings.layout ?? defaultSettings.layout,
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
    }
})