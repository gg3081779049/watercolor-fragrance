export function getRoutes() {
    return new Promise((res) => {
        res({
            code: 200,
            msg: '操作成功',
            data: [{
                path: 'home',
                meta: { icon: 'home', title: '首页', noCache: false, hidden: false, disabled: false }
            }, {
                path: 'room',
                meta: { icon: 'room', title: '房间管理' },
                children: [{
                    path: 'state',
                    meta: { icon: 'state', title: '房态', noCache: false, hidden: false, disabled: false }
                }]
            }, {
                path: 'finance',
                meta: { icon: 'finance', title: '财务管理', disabled: true }
            }, {
                path: 'news',
                meta: { icon: 'news', title: '消息管理' },
                children: [{
                    path: 'bulletin',
                    meta: { icon: 'bulletin', title: '消息公告', noCache: false, hidden: false, disabled: false }
                }, {
                    path: 'complaints',
                    meta: { icon: 'complaints', title: '投诉', noCache: false, hidden: false, disabled: false }
                }]
            }, {
                path: 'system',
                meta: { icon: 'system', title: '系统管理' },
                children: [{
                    path: 'emp',
                    meta: { icon: 'emp', title: '员工管理', noCache: false, hidden: false, disabled: false }
                }, {
                    path: 'dept',
                    meta: { icon: 'dept', title: '部门管理', noCache: false, hidden: false, disabled: false }
                }, {
                    path: 'role',
                    meta: { icon: 'role', title: '角色管理', noCache: false, hidden: false, disabled: false }
                }, {
                    path: 'project',
                    meta: { icon: 'project', title: '项目管理', noCache: false, hidden: false, disabled: false }
                }, {
                    path: 'menu',
                    meta: { icon: 'menu', title: '菜单管理', noCache: false, hidden: false, disabled: false }
                }, {
                    path: 'branchStore',
                    meta: { icon: 'branchStore', title: '分店管理', noCache: false, hidden: false, disabled: false }
                }, {
                    path: 'log',
                    meta: { icon: 'log', title: '日志管理' },
                    children: [{
                        path: 'operate',
                        meta: { icon: 'operate', title: '操作日志', noCache: false, hidden: false, disabled: false }
                    }, {
                        path: 'login',
                        meta: { icon: 'login', title: '登录日志', noCache: false, hidden: false, disabled: false }
                    }]
                }]
            }]
        })
    })
}