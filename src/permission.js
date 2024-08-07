import router from '@/router'
import { ElMessage } from 'element-plus'
import { getToken } from '@/utils/auth'
import { isRelogin } from '@/utils/request'
import { useUserStore } from '@/store/modules/user'
import { useRouteStore } from '@/store/modules/route'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 不显示旋转图标
NProgress.configure({ showSpinner: false })

// 白名单
const whiteList = ['/login', '/register', '/applylicense']

router.beforeEach((to, from, next) => {
    NProgress.done()
    if (getToken()) {
        if (to.path === '/login') {
            next({ path: '/' })
            NProgress.done()
        } else {
            const userStore = useUserStore()
            if (userStore.roles.length) {
                next()
            } else {
                isRelogin.show = true
                // 判断当前用户是否已拉取完user_info信息
                userStore.GetInfo().then(() => {
                    isRelogin.show = false
                    useRouteStore().GenerateRoutes().then((accessRoutes) => {
                        // 动态添加可访问路由表
                        accessRoutes.forEach(route => router.addRoute('Layout', route))
                        router.addRoute('Layout', { path: '/:pathMatch(.*)*', redirect: '404' })
                        next({ ...to, replace: true })
                    })
                }).catch(err => {
                    userStore.Logout().then(() => {
                        ElMessage.error(err)
                        next({ path: '/' })
                    })
                })
            }
        }
    } else {
        // 没有token
        if (whiteList.includes(to.path)) {
            // 在免登录白名单，直接进入
            next()
        } else {
            // 否则全部重定向到登录页
            next(`/login?redirect=${to.fullPath}`)
            NProgress.done()
        }
    }
})

router.afterEach(() => {
    NProgress.done()
})
