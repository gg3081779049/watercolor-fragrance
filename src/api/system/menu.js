import request from '@/utils/request'

// 查询菜单列表
export function getList(params) {
    return request({
        url: '/system/menu/list',
        method: 'get',
        params
    })
}

// 查询菜单详情
export function getItem(id) {
    return request({
        url: `/system/menu/get/${id}`,
        method: 'get'
    })
}

// 新增菜单
export function addItem(form) {
    return request({
        url: '/system/menu/add',
        method: 'post',
        data: form
    })
}

// 删除菜单
export function deleteItem(ids) {
    return request({
        url: '/system/menu/delete',
        method: 'delete',
        data: ids
    })
}

// 修改菜单
export function updateItem(form) {
    return request({
        url: '/system/menu/update',
        method: 'put',
        data: form
    })
}