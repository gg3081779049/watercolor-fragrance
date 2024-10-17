import { defineStore } from 'pinia'
import { getRoutes } from '@/api/route'
import { isExternal } from '@/utils'

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
                    // 筛选出可用路由
                    let accessRoutes = res.data.filter(route => !route.meta.disabled)
                    this.sidebarRouteTree = normalize(JSON.parse(JSON.stringify(accessRoutes)))
                    this.sidebarRouteList = flatten(JSON.parse(JSON.stringify(this.sidebarRouteTree)))
                    resolve(this.sidebarRouteList.filter(route => !isExternal(route.path)).map(rewriteRoute))
                })
            })
        }
    }
})

function normalize(routes, parentPath = '') {
    return routes.map(route => {
        const currentPath = `${parentPath}${route.path}`.replace('//', '/')
        const newRoute = { ...route, path: isExternal(route.path) ? route.path : currentPath }
        if (route.children) {
            newRoute.children = normalize(route.children, currentPath + '/')
        }
        return newRoute
    })
}

function flatten(routes, parentList = []) {
    return routes.reduce((acc, route) => {
        if (route.children) {
            return acc.concat(flatten(route.children, [...parentList, route]))
        } else {
            const list = parentList.concat(route)
            const title = list.map(r => r.meta.title)
            const icon = list.map(r => r.meta.icon)
            return acc.concat({ ...route, meta: { ...route.meta, title, icon } })
        }
    }, [])
}

function rewriteRoute(route) {
    return {
        path: route.path,
        meta: route.meta,
        name: route.path,
        component: async () => {
            if (isExternal(route.component)) {
                let AppIframe = require('@/layout/components/AppIframe/index.vue').default
                AppIframe.name = route.path
                return <AppIframe src={route.component} />
            } else {
                try {
                    let view = process.env.NODE_ENV === 'development'
                        ? require(`@/${route.component}/index.vue`)
                        : await import(`@/${route.component}/index.vue`)
                    view.default.name = route.path
                    return view
                } catch {
                    return require(`@/views/error/404.vue`)
                }
            }
        }
    }
}
