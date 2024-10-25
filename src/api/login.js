import request from '@/utils/request'

// 登录方法
export function login(username, password, code, uuid) {
    return request({
        url: '/login',
        method: 'post',
        headers: { isToken: false },
        data: { username, password, code, uuid }
    })
}

// 退出登录
export function logout() {
    return request({
        url: '/logout',
        method: 'post'
    })
}

// 获取用户信息
export function getInfo() {
    return request({
        url: '/getInfo',
        method: 'get'
    })
}

// 获取验证码
export function getCodeImg() {
    return request({
        url: '/captchaImage',
        method: 'get',
        headers: { isToken: false },
        timeout: 20000
    })
}