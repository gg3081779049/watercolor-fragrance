import request from '@/utils/request'

/**
 * {
 *   path: 'xxx',           -> 路由地址，如/home。若该值设置为外链地址时， 则会打开一个新窗口
 *   query: 'xxx',          -> 访问路由的默认传递参数
 *   component: 'xxx',      -> 路由组件路径，对应路径src/xxx/index.vue。若该值设置为外链时，则会打开一个内嵌<iframe src="xxx" />
 *   meta: {
 *     icon: 'xxx',         -> 设置该路由的图标，对应路径src/icons/svg
 *     title: 'xxx',        -> 设置该路由在侧边栏和面包屑中展示的标题
 *     noCache: true,       -> 如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
 *     hidden: true,        -> 当设置true时，该路由不会在侧边栏出现，但仍然可访问。 如401，404等
 *     disabled: true,      -> 当设置true 时，该路由不会再出现，也不可访问。后台会自动过滤disabled为true的路由，所以该设置可忽略
 *     transition: 'xxx'    -> 动画名称，对应路径src/styles/transition
 *   }
 * }
 */

export function getRoutes() {
    return request({
        url: '/getRouters',
        method: 'get'
    })
    // return new Promise((res) => {
    //     res({
    //         code: 200,
    //         msg: '操作成功',
    //         data: [{
    //             path: 'home',
    //             query: null,
    //             component: 'views/home',
    //             meta: { icon: 'home', title: '首页', noCache: false, hidden: false, disabled: false }
    //         }, {
    //             path: 'room',
    //             query: null,
    //             component: 'views/room',
    //             meta: { icon: 'room', title: '房间管理', hidden: false, disabled: false },
    //             children: [{
    //                 path: 'state',
    //                 query: null,
    //                 component: 'views/room/state',
    //                 meta: { icon: 'state', title: '房态', noCache: false, hidden: false, disabled: false }
    //             }]
    //         }, {
    //             path: 'finance',
    //             query: null,
    //             component: 'views/finance',
    //             meta: { icon: 'finance', title: '财务管理', hidden: false, disabled: false },
    //             children: []
    //         }, {
    //             path: 'news',
    //             query: null,
    //             component: 'views/news',
    //             meta: { icon: 'news', title: '消息管理', hidden: false, disabled: false },
    //             children: [{
    //                 path: 'bulletin',
    //                 query: null,
    //                 component: 'views/news/bulletin',
    //                 meta: { icon: 'bulletin', title: '消息公告', noCache: false, hidden: false, disabled: false }
    //             }, {
    //                 path: 'complaints',
    //                 query: null,
    //                 component: 'views/news/complaints',
    //                 meta: { icon: 'complaints', title: '投诉', noCache: false, hidden: false, disabled: false }
    //             }]
    //         }, {
    //             path: 'document',
    //             query: null,
    //             component: 'views/document',
    //             meta: { icon: 'document', title: '项目文档', noCache: false, hidden: false, disabled: false },
    //             children: [{
    //                 path: 'element',
    //                 query: null,
    //                 component: 'https://element-plus.org/',
    //                 meta: { icon: 'element', title: 'Element Plus', noCache: false, hidden: false, disabled: false },
    //             }, {
    //                 path: 'vue',
    //                 query: null,
    //                 component: 'https://cn.vuejs.org/',
    //                 meta: { icon: 'vue', title: 'Vue.js', noCache: false, hidden: false, disabled: false },
    //             }, {
    //                 path: 'pinia',
    //                 query: null,
    //                 component: 'https://pinia.vuejs.org/',
    //                 meta: { icon: 'pinia', title: 'Pinia', noCache: false, hidden: false, disabled: false },
    //             }, {
    //                 path: 'soybean',
    //                 query: null,
    //                 component: 'https://soybeanjs.cn',
    //                 meta: { icon: 'soybean', title: 'Soybean', noCache: false, hidden: false, disabled: false }
    //             }]
    //         }, {
    //             path: 'system',
    //             query: null,
    //             component: 'views/system',
    //             meta: { icon: 'system', title: '系统管理', hidden: false, disabled: false },
    //             children: [{
    //                 path: 'emp',
    //                 query: null,
    //                 component: 'views/system/emp',
    //                 meta: { icon: 'emp', title: '员工管理', noCache: false, hidden: false, disabled: false }
    //             }, {
    //                 path: 'dept',
    //                 query: null,
    //                 component: 'views/system/dept',
    //                 meta: { icon: 'dept', title: '部门管理', noCache: false, hidden: false, disabled: false }
    //             }, {
    //                 path: 'role',
    //                 query: null,
    //                 component: 'views/system/role',
    //                 meta: { icon: 'role', title: '角色管理', noCache: false, hidden: false, disabled: false }
    //             }, {
    //                 path: 'project',
    //                 query: null,
    //                 component: 'views/system/project',
    //                 meta: { icon: 'project', title: '项目管理', noCache: false, hidden: false, disabled: false }
    //             }, {
    //                 path: 'menu',
    //                 query: null,
    //                 component: 'views/system/menu',
    //                 meta: { icon: 'menu', title: '菜单管理', noCache: false, hidden: false, disabled: false }
    //             }, {
    //                 path: 'branchStore',
    //                 query: null,
    //                 component: 'views/system/branchStore',
    //                 meta: { icon: 'branchStore', title: '分店管理', noCache: false, hidden: false, disabled: false }
    //             }, {
    //                 path: 'log',
    //                 query: null,
    //                 component: 'views/system/log',
    //                 meta: { icon: 'log', title: '日志管理', hidden: false, disabled: false },
    //                 children: [{
    //                     path: 'operate',
    //                     query: null,
    //                     component: 'views/system/log/operate',
    //                     meta: { icon: 'operate', title: '操作日志', noCache: false, hidden: false, disabled: false }
    //                 }, {
    //                     path: 'login',
    //                     query: null,
    //                     component: 'views/system/log/login',
    //                     meta: { icon: 'login', title: '登录日志', noCache: false, hidden: false, disabled: false }
    //                 }]
    //             }]
    //         }]
    //     })
    // })
}