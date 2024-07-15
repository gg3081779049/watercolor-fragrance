import { defineStore } from 'pinia'
import router from '@/router'

export const useTabsStore = defineStore('tabs', {
    state: () => ({
        tabs: [],
        defaultTab: "Home"
    }),
    getters: {
        cachesTabs() {
            return this.tabs.map(tab => tab.name)
        }
    },
    actions: {
        init() {
            this.addTab(router.getRoutes().find(route => route.name === this.defaultTab))
        },
        addTab({ path, fullPath, name, meta }) {
            if (!this.tabs.some(t => t.path === path)) {
                this.tabs.push({ path, fullPath, name, meta })
            }
        },
        delTabs(condition) {
            for (let i = this.tabs.length - 1; i >= 0; i--) {
                if (condition(this.tabs[i], i) && this.tabs[i].name !== this.defaultTab) {
                    this.tabs.splice(i, 1)
                }
            }
        }
    }
})