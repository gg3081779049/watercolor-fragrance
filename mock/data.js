import Mock from 'mockjs'

// 用户列表
export const usersList = [
    { id: 1, username: 'admin', password: 'admin1234' },
    { id: 2, username: 'user', password: 'user1234' },
    { id: 3, username: 'boss', password: 'boss1234' },
]

// 门店列表
export const branchStoreList = Mock.mock({
    "array|30": [{
        'id|+1': 1,
        'storeName': '水色天香',
        'storeManager': '@cname',
        'contactNumber': /^1[34578]\d{9}$/,
        'region': {
            'province': '@province',
            'city': '@city',
            'area': '@county'
        },
        'address': function () {
            return `${this.region.province}${this.region.city}市${this.region.area}`
        },
        'longitude': '@float(0,180)',
        'latitude': '@float(0,90)',
        'pictures': [],
        'facilities': [],
        'status': Mock.Random.pick(['正在营业', '已打烊', '暂停营业'])
    }]
}).array

// 菜单列表
export const menuList = [{
    path: 'home',
    query: null,
    component: 'views/home',
    meta: { icon: 'home', title: '首页', noCache: false, hidden: false, disabled: false }
}, {
    path: 'room',
    query: null,
    component: 'views/room',
    meta: { icon: 'room', title: '房间管理', hidden: false, disabled: false },
    children: [{
        path: 'state',
        query: null,
        component: 'views/room/state',
        meta: { icon: 'state', title: '房态', noCache: false, hidden: false, disabled: false }
    }]
}, {
    path: 'finance',
    query: null,
    component: 'views/finance',
    meta: { icon: 'finance', title: '财务管理', hidden: false, disabled: false },
    children: []
}, {
    path: 'news',
    query: null,
    component: 'views/news',
    meta: { icon: 'news', title: '消息管理', hidden: false, disabled: false },
    children: [{
        path: 'bulletin',
        query: null,
        component: 'views/news/bulletin',
        meta: { icon: 'bulletin', title: '消息公告', noCache: false, hidden: false, disabled: false }
    }, {
        path: 'complaints',
        query: null,
        component: 'views/news/complaints',
        meta: { icon: 'complaints', title: '投诉', noCache: false, hidden: false, disabled: false }
    }]
}, {
    path: 'document',
    query: null,
    component: 'views/document',
    meta: { icon: 'document', title: '项目文档', noCache: false, hidden: false, disabled: false },
    children: [{
        path: 'element',
        query: null,
        component: 'https://element-plus.org/',
        meta: { icon: 'element', title: 'Element Plus', noCache: false, hidden: false, disabled: false },
    }, {
        path: 'vue',
        query: null,
        component: 'https://cn.vuejs.org/',
        meta: { icon: 'vue', title: 'Vue.js', noCache: false, hidden: false, disabled: false },
    }, {
        path: 'pinia',
        query: null,
        component: 'https://pinia.vuejs.org/',
        meta: { icon: 'pinia', title: 'Pinia', noCache: false, hidden: false, disabled: false },
    }, {
        path: 'soybean',
        query: null,
        component: 'https://soybeanjs.cn',
        meta: { icon: 'soybean', title: 'Soybean', noCache: false, hidden: false, disabled: false }
    }]
}, {
    path: 'system',
    query: null,
    component: 'views/system',
    meta: { icon: 'system', title: '系统管理', hidden: false, disabled: false },
    children: [{
        path: 'emp',
        query: null,
        component: 'views/system/emp',
        meta: { icon: 'emp', title: '员工管理', noCache: false, hidden: false, disabled: false }
    }, {
        path: 'dept',
        query: null,
        component: 'views/system/dept',
        meta: { icon: 'dept', title: '部门管理', noCache: false, hidden: false, disabled: false }
    }, {
        path: 'role',
        query: null,
        component: 'views/system/role',
        meta: { icon: 'role', title: '角色管理', noCache: false, hidden: false, disabled: false }
    }, {
        path: 'project',
        query: null,
        component: 'views/system/project',
        meta: { icon: 'project', title: '项目管理', noCache: false, hidden: false, disabled: false }
    }, {
        path: 'menu',
        query: null,
        component: 'views/system/menu',
        meta: { icon: 'menu', title: '菜单管理', noCache: false, hidden: false, disabled: false }
    }, {
        path: 'branchStore',
        query: null,
        component: 'views/system/branchStore',
        meta: { icon: 'branchStore', title: '分店管理', noCache: false, hidden: false, disabled: false }
    }, {
        path: 'log',
        query: null,
        component: 'views/system/log',
        meta: { icon: 'log', title: '日志管理', hidden: false, disabled: false },
        children: [{
            path: 'operate',
            query: null,
            component: 'views/system/log/operate',
            meta: { icon: 'operate', title: '操作日志', noCache: false, hidden: false, disabled: false }
        }, {
            path: 'login',
            query: null,
            component: 'views/system/log/login',
            meta: { icon: 'login', title: '登录日志', noCache: false, hidden: false, disabled: false }
        }]
    }]
}]