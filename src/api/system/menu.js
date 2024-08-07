let data = [
    { id: 1, parentId: null, path: 'home', icon: 'home', title: '首页', noCache: false, hidden: false, disabled: false, createTime: "2023-08-21 16:14:10" },
    { id: 2, parentId: null, path: 'room', icon: 'room', title: '房间管理', hidden: false, disabled: false, createTime: "2023-08-21 16:14:10" },
    { id: 3, parentId: 2, path: 'state', icon: 'state', title: '房态', noCache: false, hidden: false, disabled: false, createTime: "2023-08-21 16:14:10" },
    { id: 4, parentId: null, path: 'finance', icon: 'finance', title: '财务管理', hidden: true, disabled: false, createTime: "2023-08-21 16:14:10" },
    { id: 5, parentId: null, path: 'news', icon: 'news', title: '消息管理', hidden: false, disabled: false, createTime: "2023-08-21 16:14:10" },
    { id: 6, parentId: 5, path: 'bulletin', icon: 'bulletin', title: '消息公告', noCache: false, hidden: false, disabled: false, createTime: "2023-08-21 16:14:10" },
    { id: 7, parentId: 5, path: 'complaints', icon: 'complaints', title: '投诉', noCache: false, hidden: false, disabled: false, createTime: "2023-08-21 16:14:10" },
    { id: 8, parentId: null, path: 'system', icon: 'system', title: '系统管理', hidden: false, disabled: false, createTime: "2023-08-21 16:14:10" },
    { id: 9, parentId: 8, path: 'emp', icon: 'emp', title: '员工管理', noCache: false, hidden: false, disabled: false, createTime: "2023-08-21 16:14:10" },
    { id: 10, parentId: 8, path: 'dept', icon: 'dept', title: '部门管理', noCache: false, hidden: false, disabled: false, createTime: "2023-08-21 16:14:10" },
    { id: 11, parentId: 8, path: 'role', icon: 'role', title: '角色管理', noCache: false, hidden: false, disabled: false, createTime: "2023-08-21 16:14:10" },
    { id: 12, parentId: 8, path: 'project', icon: 'project', title: '项目管理', noCache: false, hidden: false, disabled: true, createTime: "2023-08-21 16:14:10" },
    { id: 13, parentId: 8, path: 'menu', icon: 'menu', title: '菜单管理', noCache: false, hidden: false, disabled: false, createTime: "2023-08-21 16:14:10" },
    { id: 14, parentId: 8, path: 'branchStore', icon: 'branchStore', title: '分店管理', noCache: false, hidden: false, disabled: false, createTime: "2023-08-21 16:14:10" },
    { id: 15, parentId: 8, path: 'log', icon: 'log', title: '日志管理', hidden: false, disabled: false, createTime: "2023-08-21 16:14:10" },
    { id: 16, parentId: 15, path: 'operate', icon: 'operate', title: '操作日志', noCache: false, hidden: false, disabled: false, createTime: "2023-08-21 16:14:10" },
    { id: 17, parentId: 15, path: 'login', icon: 'login', title: '登录日志', noCache: false, hidden: false, disabled: false, createTime: "2023-08-21 16:14:10" }
]

// 查询菜单列表
export function getList() {
    return new Promise((res, rej) => {
        res({ code: 200, msg: '操作成功', data })
    })
}