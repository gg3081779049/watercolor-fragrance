import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login'),
    }, {
        path: '/register',
        name: 'Register',
        component: () => import('@/views/register'),
    }, {
        path: '/applylicense',
        name: 'Applylicense',
        component: (resolve) => require(['@/views/applylicense'], resolve),
    }, {
        path: '/401',
        name: 'Page401',
        component: () => import('@/views/error/401.vue'),
    }, {
        path: '/404',
        name: 'Page404',
        component: () => import('@/views/error/404.vue'),
    }, {
        path: '',
        name: 'Layout',
        component: Layout,
        redirect: 'home',
        children: [{
            path: 'home',
            name: 'Home',
            component: () => import('@/views/home/index.vue'),
            meta: { title: 'home', icon: 'home', noCache: false, hidden: false },
        }, {
            path: 'user',
            name: 'User',
            component: () => import('@/views/user/index.vue'),
            meta: { title: 'user', icon: 'user', noCache: false, hidden: true },
        }]
    }]
})

// 捕捉连续点击多次路由报错
let push = router.push
router.push = function (to) {
    return push.call(this, to).catch(err => err)
}

export default router