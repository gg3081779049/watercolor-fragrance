import { defineStore } from 'pinia'
import router from '@/router'

export const useTabsStore = defineStore('tabs', {
    state: () => ({
        tabs: [],
        defaultTab: "Home"
    }),
    getters: {
        cachesTabs() {
            return this.tabs.filter(tab => !tab.meta.noCache).map(tab => tab.name)
        }
    },
    actions: {
        init() {
            this.addTab(router.getRoutes().find(route => route.name === this.defaultTab))
        },
        addTab({ path, fullPath, name, meta, query }) {
            // 判断是否已存在，若存在不添加
            if (!this.tabs.some(t => t.path === path)) {
                this.tabs.push({ path, fullPath, name, meta, query })
            }
        },
        delTabs(condition) {
            // 从标签页数组的末尾开始遍历，以便在删除元素时避免索引错乱
            for (let i = this.tabs.length - 1; i >= 0; i--) {
                // 判断是否符合删除条件，同时当前标签页不是默认标签页
                if (condition(this.tabs[i], i) && this.tabs[i].name !== this.defaultTab) {
                    this.tabs.splice(i, 1)
                }
            }
        }
    },
    persist: {
        storage: sessionStorage,
        paths: ["tabs"]
    }
})