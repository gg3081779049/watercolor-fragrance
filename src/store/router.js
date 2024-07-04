import { defineStore } from 'pinia'
import { getRouters } from '@/api/router'

export const useRouterStore = defineStore('router', {
    state: () => ({
        sidebarRouterList: [],
        sidebarRouterTree: []
    }),
    actions: {
        // 生成路由
        GenerateRoutes() {
            return new Promise(resolve => {
                // 向后端请求路由数据
                getRouters().then(res => {
                    resolve()
                })
            })
        }
    }
})