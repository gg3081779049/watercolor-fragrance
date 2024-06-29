import { defineStore } from 'pinia'
import { getRouters } from '@/api/system/menu'

export const usePermissionStore = defineStore('permission', {
    state: () => ({

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