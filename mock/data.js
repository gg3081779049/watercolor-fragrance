const Mock = require('mockjs')

// 用户列表
module.exports.usersList = [
    { id: 1, username: 'admin', password: 'admin1234' },
    { id: 2, username: 'user', password: 'user1234' },
    { id: 3, username: 'boss', password: 'boss1234' },
]

// 门店列表
module.exports.branchStoreList = Mock.mock({
    "array|100": [{
        'id|+1': 1,
        'storeName': '水色天香',
        'storeManager': '@cname',
        'contactNumber': /^1[34578]\d{9}$/,
        'region': () => Mock.mock('@county(true)').split(' '),
        'address': function () {
            return `${this.region.join('').replace('-', '')}`
        },
        'longitude': '@float(0,180)',
        'latitude': '@float(0,90)',
        'pictures': [],
        'facilities': [],
        'status': () => Mock.Random.pick(['正在营业', '已打烊', '暂停营业']),
        'createTime': 1695284050000
    }]
}).array

// 菜单列表
module.exports.menuList = [{
    id: 1, parentId: 0, order: 1, hasChild: false, path: 'home', query: null, component: 'views/home',
    icon: 'home', title: 'home', noCache: false, hidden: false, disabled: false,
    createTime: 1695284050000
}, {
    id: 2, parentId: 0, order: 2, hasChild: true, path: 'room', query: null, component: 'views/room',
    icon: 'room', title: 'room', noCache: false, hidden: false, disabled: false,
    createTime: 1695284050000
}, {
    id: 3, parentId: 2, order: 1, hasChild: false, path: 'state', query: null, component: 'views/room/state',
    icon: 'state', title: 'room/state', noCache: false, hidden: false, disabled: false,
    createTime: 1695284050000
}, {
    id: 4, parentId: 0, order: 3, hasChild: true, path: 'finance', query: null, component: 'views/finance',
    icon: 'finance', title: 'finance', noCache: false, hidden: false, disabled: false,
    createTime: 1695284050000
}, {
    id: 5, parentId: 0, order: 4, hasChild: true, path: 'news', query: null, component: 'views/news',
    icon: 'news', title: 'news', noCache: false, hidden: false, disabled: false,
    createTime: 1695284050000
}, {
    id: 6, parentId: 5, order: 1, hasChild: false, path: 'bulletin', query: null, component: 'views/news/bulletin',
    icon: 'bulletin', title: 'news/bulletin', noCache: false, hidden: false, disabled: false,
    createTime: 1695284050000
}, {
    id: 7, parentId: 5, order: 2, hasChild: false, path: 'complaints', query: null, component: 'views/news/complaints',
    icon: 'complaints', title: 'news/complaints', noCache: false, hidden: false, disabled: false,
    createTime: 1695284050000
}, {
    id: 8, parentId: 0, order: 5, hasChild: true, path: 'document', query: null, component: 'views/document',
    icon: 'document', title: 'document', noCache: false, hidden: false, disabled: false,
    createTime: 1695284050000
}, {
    id: 9, parentId: 8, order: 1, hasChild: false, path: 'element', query: null, component: 'https://element-plus.org',
    icon: 'element', title: 'document/element', noCache: false, hidden: false, disabled: false,
    createTime: 1695284050000
}, {
    id: 10, parentId: 8, order: 2, hasChild: false, path: 'vue', query: null, component: 'https://cn.vuejs.org',
    icon: 'vue', title: 'document/vue', noCache: false, hidden: false, disabled: false,
    createTime: 1695284050000
}, {
    id: 11, parentId: 8, order: 3, hasChild: false, path: 'pinia', query: null, component: 'https://pinia.vuejs.org',
    icon: 'pinia', title: 'document/pinia', noCache: false, hidden: false, disabled: false,
    createTime: 1695284050000
}, {
    id: 12, parentId: 8, order: 4, hasChild: false, path: 'soybean', query: null, component: 'https://soybeanjs.cn',
    icon: 'soybean', title: 'document/soybean', noCache: false, hidden: false, disabled: false,
    createTime: 1695284050000
}, {
    id: 13, parentId: 8, order: 5, hasChild: false, path: 'github', query: null, component: 'https://github.com/gg3081779049/watercolor-fragrance.git',
    icon: 'github', title: 'document/github', noCache: false, hidden: false, disabled: false,
    createTime: 1695284050000
}, {
    id: 14, parentId: 0, order: 6, hasChild: true, path: 'system', query: null, component: 'views/system',
    icon: 'system', title: 'system', noCache: false, hidden: false, disabled: false,
    createTime: 1695284050000
}, {
    id: 15, parentId: 14, order: 1, hasChild: false, path: 'emp', query: null, component: 'views/system/emp',
    icon: 'emp', title: 'system/emp', noCache: false, hidden: false, disabled: false,
    createTime: 1695284050000
}, {
    id: 16, parentId: 14, order: 2, hasChild: false, path: 'dept', query: null, component: 'views/system/dept',
    icon: 'dept', title: 'system/dept', noCache: false, hidden: false, disabled: false,
    createTime: 1695284050000
}, {
    id: 17, parentId: 14, order: 3, hasChild: false, path: 'role', query: null, component: 'views/system/role',
    icon: 'role', title: 'system/role', noCache: false, hidden: false, disabled: false,
    createTime: 1695284050000
}, {
    id: 18, parentId: 14, order: 4, hasChild: false, path: 'project', query: null, component: 'views/system/project',
    icon: 'project', title: 'system/project', noCache: false, hidden: false, disabled: false,
    createTime: 1695284050000
}, {
    id: 19, parentId: 14, order: 5, hasChild: false, path: 'menu', query: null, component: 'views/system/menu',
    icon: 'menu', title: 'system/menu', noCache: false, hidden: false, disabled: false,
    createTime: 1695284050000
}, {
    id: 20, parentId: 14, order: 6, hasChild: false, path: 'branchStore', query: null, component: 'views/system/branchStore',
    icon: 'branchStore', title: 'system/branchStore', noCache: false, hidden: false, disabled: false,
    createTime: 1695284050000
}, {
    id: 21, parentId: 14, order: 7, hasChild: true, path: 'log', query: null, component: 'views/system/log',
    icon: 'log', title: 'system/log', noCache: false, hidden: false, disabled: false,
    createTime: 1695284050000
}, {
    id: 22, parentId: 21, order: 1, hasChild: false, path: 'operate', query: null, component: 'views/system/log/operate',
    icon: 'operate', title: 'system/log/operate', noCache: false, hidden: false, disabled: false,
    createTime: 1695284050000
}, {
    id: 23, parentId: 21, order: 2, hasChild: false, path: 'login', query: null, component: 'views/system/log/login',
    icon: 'login', title: 'system/log/login', noCache: false, hidden: false, disabled: false,
    createTime: 1695284050000
}]