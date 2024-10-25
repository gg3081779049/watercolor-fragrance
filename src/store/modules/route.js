import { defineStore } from 'pinia'
import { getRoutes } from '@/api/route'
import { isExternal, arrayToTree, treeToArray } from '@/utils'

export const useRouteStore = defineStore('route', {
    state: () => ({
        treeRoutes: [],
        listRoutes: [],
    }),
    actions: {
        // 生成路由
        GenerateRoutes() {
            return new Promise(resolve => {
                // 向后端请求路由数据
                getRoutes().then(res => {
                    this.treeRoutes = convertArrayToTree(res.data)
                    this.listRoutes = convertTreeToArray(this.treeRoutes)
                    resolve(createRoutes(this.listRoutes))
                })
            })
        }
    }
})

function convertArrayToTree(list) {
    return arrayToTree(list, ({ icon, title, noCache, hidden, disabled, ...node }, parentNodes) => {
        let nodes = parentNodes.concat(node)
        let path = isExternal(node.path) ? node.path : nodes.map(node => node.path).join('/')
        return {
            ...node,
            path,
            meta: { icon, title, noCache, hidden, disabled }
        }
    })
}

function convertTreeToArray(tree) {
    return treeToArray(tree, (node, parentNodes) => {
        let nodes = parentNodes.concat(node)
        return {
            ...node,
            meta: {
                ...node.meta,
                title: nodes.map(({ meta }) => meta.title),
                icon: nodes.map(({ meta }) => meta.icon),
            },
        }
    }).filter(route => !route.hasChild)
}

function createRoutes(list) {
    return list.filter(route => !isExternal(route.path)).map(route => {
        let { path, meta, component } = route
        return {
            path,
            name: path,
            meta: {
                ...meta,
                title: meta.title.at(-1),
                icon: meta.icon.at(-1)
            },
            component: async () => {
                if (isExternal(component)) {
                    let AppIframe = require('@/layout/components/AppIframe/index.vue').default
                    AppIframe.name = path
                    return <AppIframe src={component} />
                } else {
                    try {
                        let view = process.env.NODE_ENV === 'development'
                            ? require(`@/${component}/index.vue`)
                            : await import(`@/${component}/index.vue`)
                        view.default.name = path
                        return view
                    } catch {
                        return require(`@/views/error/404.vue`)
                    }
                }
            }
        }
    })
}
