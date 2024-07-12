import { defineStore } from 'pinia'

export const useTabsStore = defineStore('tabs', {
    state: () => ({
        tabs: []
    }),
    getters: {
        cachesTabs() {
            return this.tabs.map(tab => tab.name)
        }
    },
    actions: {
        addTabs(tab) {
            if (!this.tabs.some(t => t.path === tab.path)) {
                this.tabs.push(tab)
            }
        }
    }
})