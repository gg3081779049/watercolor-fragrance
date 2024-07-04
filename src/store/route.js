import { defineStore } from 'pinia'
import { getRoutes } from '@/api/route'

export const useRouteStore = defineStore('route', {
    state: () => ({
        routeList: [],
        routeTree: []
    }),
    actions: {
        // 生成路由
        GenerateRoutes() {
            return new Promise(resolve => {
                // 向后端请求路由数据
                getRoutes().then(res => {
                    resolve()
                })
            })
        }
    }
})