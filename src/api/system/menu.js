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
            }]
        })
    })
}