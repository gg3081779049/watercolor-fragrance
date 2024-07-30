import request from '@/utils/request'

export function getRoutes() {
    return new Promise((res) => {
        res({
            code: 200,
            msg: '操作成功',
            data: [{
                path: 'home',
                meta: { icon: 'home', title: '首页' }
            }, {
                path: 'room',
                meta: { icon: 'room', title: '房间管理' },
                children: [{
                    path: 'state',
                    meta: { icon: 'state', title: '房态' }
                }]
            }, {
                path: 'finance',
                meta: { icon: 'finance', title: '财务管理' }
            }, {
                path: 'news',
                meta: { icon: 'news', title: '消息管理' },
                children: [{
                    path: 'bulletin',
                    meta: { icon: 'bulletin', title: '消息公告' },
                }, {
                    path: 'complaints',
                    meta: { icon: 'complaints', title: '投诉' },
                }]
            }, {
                path: 'system',
                meta: { icon: 'system', title: '系统管理' },
                children: [{
                    path: 'emp',
                    meta: { icon: 'emp', title: '员工管理' }
                }, {
                    path: 'dept',
                    meta: { icon: 'dept', title: '部门管理' }
                }, {
                    path: 'role',
                    meta: { icon: 'role', title: '角色管理' }
                }, {
                    path: 'project',
                    meta: { icon: 'project', title: '项目管理' }
                }, {
                    path: 'menu',
                    meta: { icon: 'menu', title: '菜单管理' },
                }, {
                    path: 'branchStore',
                    meta: { icon: 'branchStore', title: '分店管理' }
                }, {
                    path: 'log',
                    meta: { icon: 'log', title: '日志管理' },
                    children: [{
                        path: 'operate',
                        meta: { icon: 'operate', title: '操作日志' },
                    }, {
                        path: 'login',
                        meta: { icon: 'login', title: '登录日志' },
                    }]
                }]
            }]
        })
    })
}