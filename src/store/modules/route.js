import { defineStore } from 'pinia'
import { getRoutes } from '@/api/route'

export const useRouteStore = defineStore('route', {
    state: () => ({
        sidebarRouteList: [],
        sidebarRouteTree: []
    }),
    actions: {
        // 生成路由
        GenerateRoutes() {
            return new Promise(resolve => {
                // 向后端请求路由数据
                getRoutes().then(res => {
                    this.sidebarRouteTree = getSidebarRouteTree(JSON.parse(JSON.stringify(res.data)))
                    this.sidebarRouteList = getSidebarRouteList(JSON.parse(JSON.stringify(this.sidebarRouteTree)))
                    resolve(this.sidebarRouteList)
                })
            })
        }
    }
})

function getSidebarRouteTree(routes, parentPath = '') {
    return routes.filter(route => !route.meta.disabled).map(route => {
        const currentPath = `${parentPath}${route.path}`.replace('//', '/')
        const newRoute = { ...route, path: currentPath }
        if (route.children) {
            newRoute.children = getSidebarRouteTree(route.children, currentPath + '/')
        }
        return newRoute
    })
}

function getSidebarRouteList(routes, parentList = []) {
    return routes.reduce((acc, route) => {
        if (route.children) {
            return acc.concat(getSidebarRouteList(route.children, [...parentList, route]))
        } else {
            const list = parentList.concat(route)
            const component = loadView(route.path)
            return acc.concat({
                path: route.path,
                name: component && component.default ? component.default.name || (component.default.name = route.path) : route.path,
                meta: { ...route.meta, title: list.map(r => r.meta.title), icon: list.map(r => r.meta.icon) },
                component: async () => component
            })
        }
    }, [])
}

function loadView(path) {
    try {
        if (process.env.NODE_ENV === 'development') {
            // 开发环境使用 require 立即加载
            return require(`@/views/${path}/index.vue`)
        } else {
            // 生产环境使用 import 路由懒加载, 优化应用性能
            return import(`@/views/${path}/index.vue`)
        }
    } catch (e) {
        // 加载失败
    }
}