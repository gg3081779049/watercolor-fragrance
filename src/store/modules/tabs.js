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
            this.addTabs(router.getRoutes().find(route => route.name === this.defaultTab))
        },
        addTabs(tab) {
            if (!this.tabs.some(t => t.path === tab.path)) {
                this.tabs.push(tab)
            }
        },
        delTab(index) {
            this.tabs = this.tabs.filter((tab, i) => i !== index || tab.name === this.defaultTab)
        },
        delLeftTabs(index) {
            this.tabs = this.tabs.filter((tab, i) => i >= index || tab.name === this.defaultTab)
        },
        delRightTabs(index) {
            this.tabs = this.tabs.filter((tab, i) => i <= index || tab.name === this.defaultTab)
        },
        delOtherTabs(index) {
            this.tabs = this.tabs.filter((tab, i) => i === index || tab.name === this.defaultTab)
        },
        delAllTabs() {
            this.tabs = this.tabs.filter((tab, i) => tab.name === this.defaultTab)
        },
    }
})