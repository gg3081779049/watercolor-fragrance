import request from '@/utils/request'

export function getList(params) {
    return request({
        url: '/system/branchStore/list',
        method: 'get',
        params
    })
}

export function getItem(id) {
    return request({
        url: `/system/branchStore/get/${id}`,
        method: 'get'
    })
}

export function addItem(form) {
    return request({
        url: '/system/branchStore/add',
        method: 'post',
        data: form
    })
}

export function deleteItem(ids) {
    return request({
        url: '/system/branchStore/delete',
        method: 'delete',
        data: ids
    })
}

export function updateItem(form) {
    return request({
        url: '/system/branchStore/update',
        method: 'put',
        data: form
    })
}