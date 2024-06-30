import request from '@/utils/request'

export function getRouters() {
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
                path: 'system',
                meta: { icon: 'system', title: '系统管理' },
                children: [{
                    path: 'dept',
                    meta: { icon: 'dept', title: '部门管理' }
                }, {
                    path: 'role',
                    meta: { icon: 'role', title: '角色管理' }
                }, {
                    path: 'project',
                    meta: { icon: 'project', title: '项目管理' }
                }, {
                    path: 'branchStore',
                    meta: { icon: 'branchStore', title: '分店管理' }
                }]
            }]
        })
    })
}