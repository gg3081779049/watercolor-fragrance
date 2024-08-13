import { arrayToTree, treeToArray, filterTree } from '@/utils'

let data = [
    { id: 1, parentId: 0, order: 1, hasChild: false, path: 'home', icon: 'home', title: '首页', noCache: false, hidden: false, disabled: false, createTime: "2023-08-21 16:14:10" },
    { id: 2, parentId: 0, order: 2, hasChild: true, path: 'room', icon: 'room', title: '房间管理', hidden: false, disabled: false, createTime: "2023-08-21 16:14:10" },
    { id: 3, parentId: 2, order: 1, hasChild: false, path: 'state', icon: 'state', title: '房态', noCache: false, hidden: false, disabled: false, createTime: "2023-08-21 16:14:10" },
    { id: 4, parentId: 0, order: 3, hasChild: true, path: 'finance', icon: 'finance', title: '财务管理', hidden: true, disabled: false, createTime: "2023-08-21 16:14:10" },
    { id: 5, parentId: 0, order: 4, hasChild: true, path: 'news', icon: 'news', title: '消息管理', hidden: false, disabled: false, createTime: "2023-08-21 16:14:10" },
    { id: 6, parentId: 5, order: 1, hasChild: false, path: 'bulletin', icon: 'bulletin', title: '消息公告', noCache: false, hidden: false, disabled: false, createTime: "2023-08-21 16:14:10" },
    { id: 7, parentId: 5, order: 2, hasChild: false, path: 'complaints', icon: 'complaints', title: '投诉', noCache: false, hidden: false, disabled: false, createTime: "2023-08-21 16:14:10" },
    { id: 8, parentId: 0, order: 5, hasChild: true, path: 'system', icon: 'system', title: '系统管理', hidden: false, disabled: false, createTime: "2023-08-21 16:14:10" },
    { id: 9, parentId: 8, order: 1, hasChild: false, path: 'emp', icon: 'emp', title: '员工管理', noCache: false, hidden: false, disabled: false, createTime: "2023-08-21 16:14:10" },
    { id: 10, parentId: 8, order: 2, hasChild: false, path: 'dept', icon: 'dept', title: '部门管理', noCache: false, hidden: false, disabled: false, createTime: "2023-08-21 16:14:10" },
    { id: 11, parentId: 8, order: 3, hasChild: false, path: 'role', icon: 'role', title: '角色管理', noCache: false, hidden: false, disabled: false, createTime: "2023-08-21 16:14:10" },
    { id: 12, parentId: 8, order: 4, hasChild: false, path: 'project', icon: 'project', title: '项目管理', noCache: false, hidden: false, disabled: true, createTime: "2023-08-21 16:14:10" },
    { id: 13, parentId: 8, order: 5, hasChild: false, path: 'menu', icon: 'menu', title: '菜单管理', noCache: false, hidden: false, disabled: false, createTime: "2023-08-21 16:14:10" },
    { id: 14, parentId: 8, order: 6, hasChild: false, path: 'branchStore', icon: 'branchStore', title: '分店管理', noCache: false, hidden: false, disabled: false, createTime: "2023-08-21 16:14:10" },
    { id: 15, parentId: 8, order: 7, hasChild: true, path: 'log', icon: 'log', title: '日志管理', hidden: false, disabled: false, createTime: "2023-08-21 16:14:10" },
    { id: 16, parentId: 15, order: 1, hasChild: false, path: 'operate', icon: 'operate', title: '操作日志', noCache: false, hidden: false, disabled: false, createTime: "2023-08-21 16:14:10" },
    { id: 17, parentId: 15, order: 2, hasChild: false, path: 'login', icon: 'login', title: '登录日志', noCache: false, hidden: false, disabled: false, createTime: "2023-08-21 16:14:10" }
]

// 查询菜单列表
export function getList(params) {
    let Data = params ? data.filter(item => !(params.title || params.path) || item.title.includes(params.title) || item.path.includes(params.path)) : data
    return new Promise((res, rej) => {
        res({ code: 200, msg: '操作成功', data: JSON.parse(JSON.stringify(Data)) })
    })
}

// 查询菜单详情
export function getItem(id) {
    return new Promise((res, rej) => {
        res({ code: 200, msg: '操作成功', data: JSON.parse(JSON.stringify(data.find(item => item.id === id))) })
    })
}

// 新增菜单
export function addItem(form) {
    let minId = data.map(item => item.id).sort((a, b) => a - b).findIndex((item, i) => item !== i + 1) + 1
    data.push({ ...form, id: minId, createTime: "2023-08-21 16:14:10" })
    return new Promise((res, rej) => {
        res({ code: 200, msg: '操作成功' })
    })
}

// 删除菜单
export function deleteItem(ids) {
    data = treeToArray(filterTree(arrayToTree(data), item => !ids.includes(item.id)))
    return new Promise((res, rej) => {
        res({ code: 200, msg: '操作成功' })
    })
}

// 修改菜单
export function updateItem(form) {
    data = data.map(item => item.id === form.id ? Object.assign({}, item, form) : item)
    return new Promise((res, rej) => {
        res({ code: 200, msg: '操作成功' })
    })
}