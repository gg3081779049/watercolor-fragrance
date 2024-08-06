let data = [{
    path: 'home',
    icon: 'home',
    title: '首页',
    noCache: false,
    hidden: false,
    disabled: false,
    createTime: "2023-08-21 16:14:10"
}, {
    path: 'room',
    icon: 'room',
    title: '房间管理',
    createTime: "2023-08-21 16:14:10",
    children: [{
        path: 'state',
        icon: 'state',
        title: '房态',
        noCache: false,
        hidden: false,
        disabled: false,
        createTime: "2023-08-21 16:14:10"
    }]
}, {
    path: 'finance',
    icon: 'finance',
    title: '财务管理',
    disabled: false,
    createTime: "2023-08-21 16:14:10"
}, {
    path: 'news',
    icon: 'news',
    title: '消息管理',
    createTime: "2023-08-21 16:14:10",
    children: [{
        path: 'bulletin',
        icon: 'bulletin',
        title: '消息公告',
        noCache: false,
        hidden: false,
        disabled: false,
        createTime: "2023-08-21 16:14:10"
    }, {
        path: 'complaints',
        icon: 'complaints',
        title: '投诉',
        noCache: false,
        hidden: false,
        disabled: false,
        createTime: "2023-08-21 16:14:10"
    }]
}, {
    path: 'system',
    icon: 'system',
    title: '系统管理',
    createTime: "2023-08-21 16:14:10",
    children: [{
        path: 'emp',
        icon: 'emp',
        title: '员工管理',
        noCache: false,
        hidden: false,
        disabled: false,
        createTime: "2023-08-21 16:14:10"
    }, {
        path: 'dept',
        icon: 'dept',
        title: '部门管理',
        noCache: false,
        hidden: false,
        disabled: false,
        createTime: "2023-08-21 16:14:10"
    }, {
        path: 'role',
        icon: 'role',
        title: '角色管理',
        noCache: false,
        hidden: false,
        disabled: false,
        createTime: "2023-08-21 16:14:10"
    }, {
        path: 'project',
        icon: 'project',
        title: '项目管理',
        noCache: false,
        hidden: false,
        disabled: false,
        createTime: "2023-08-21 16:14:10"
    }, {
        path: 'menu',
        icon: 'menu',
        title: '菜单管理',
        noCache: false,
        hidden: false,
        disabled: false,
        createTime: "2023-08-21 16:14:10"
    }, {
        path: 'branchStore',
        icon: 'branchStore',
        title: '分店管理',
        noCache: false,
        hidden: false,
        disabled: false,
        createTime: "2023-08-21 16:14:10"
    }, {
        path: 'log',
        icon: 'log',
        title: '日志管理',
        createTime: "2023-08-21 16:14:10",
        children: [{
            path: 'operate',
            icon: 'operate',
            title: '操作日志',
            noCache: false,
            hidden: false,
            disabled: false,
            createTime: "2023-08-21 16:14:10"
        }, {
            path: 'login',
            icon: 'login',
            title: '登录日志',
            noCache: false,
            hidden: false,
            disabled: false,
            createTime: "2023-08-21 16:14:10"
        }]
    }]
}]

// 查询菜单列表
export function getList() {
    return new Promise((res, rej) => {
        res({ code: 200, msg: '操作成功', data })
    })
}