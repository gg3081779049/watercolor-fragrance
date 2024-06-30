import request from '@/utils/request'

export function getRouters() {
    return new Promise((res) => {
        res({
            code: 200,
            msg: '操作成功',
            data: [{
                path: 'home',
                icon: 'home',
                name: '首页',
            }, {
                path: 'room',
                icon: 'room',
                name: '房间管理',
                children: [{
                    path: 'state',
                    icon: 'state',
                    name: '房态',
                }]
            }, {
                path: 'finance',
                icon: 'finance',
                name: '财务管理',
                children: []
            }, {
                path: 'system',
                icon: 'system',
                name: '系统管理',
                children: [{
                    path: 'dept',
                    icon: 'dept',
                    name: '部门管理',
                }, {
                    path: 'role',
                    icon: 'role',
                    name: '角色管理',
                }, {
                    path: 'project',
                    icon: 'project',
                    name: '项目管理',
                }, {
                    path: 'branchStore',
                    icon: 'branchStore',
                    name: '分店管理',
                }]
            }]
        })
    })
}