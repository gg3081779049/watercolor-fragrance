import request from '@/utils/request'

// 登录方法
export function login(username, password, code, uuid) {
    return new Promise((res, rej) => {
        res({
            code: 200,
            msg: "操作成功",
            token: "eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjdjYTE0YWY4LWU2NGItNGI0Mi1iMjM2LTg1N2Q1NDQ5ZjhiNSJ9.k3KMwcE2lQWnxaYE-hd6s7bYFwcz8uD6ZW3FsmO-qOupshQ7JCXfS0kaklQ8uwCuNNkB28qu4wm41K6L_XQ31w"
        })
    })
}

// 退出登录
export function logout(token) {
    return new Promise((res, rej) => {
        res()
    })
}

// 获取用户信息
export function getInfo() {
    return new Promise((res, rej) => {
        res({
            code: 200,
            mag: "操作成功",
            roles: ["admin"],
            user: {
                avatar: '',
                username: '',
                password: ''
            },
        })
    })
}

// 获取验证码
export function getCodeImg() {
    return new Promise((resolve, reject) => {
        resolve({
            captcha: false,
            code: 200,
            msg: "操作成功",
            uuid: "NpcNH",
            img: "data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAeCAIAAAAekf9JAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB4klEQVRYhe2YPUsDQRCGJ2J9hZ0\/QLHVQrG7RpAUShqtBEFEDVpfYWEMWFwKG8UPtDiw0kZMIUKa64LNHXaH9trnD8RiYbLu7e7dfpw5JW+V7OzXM+\/OEFLp9z\/hf2ls2BfQ1+3WO3e8MnLpD2iE9CsKoziMYgBI\/KDq1KpOjY6mRxiNF3s7gLZXx88r\/oV8MiFx52YTP0g6bzPeJpw8qZ5YOBKNQeMxUQ6MrmwiMe\/huffITEi71Pbqzvo2APTub6Yn5g1hiKw1ccKDGMxXrtAZAEj8gMAwTl5dfnHXSnYeIOElMNn0spxRBlJ0MAMDACJzyM67e5M4QiAVkHA2N+vyqNwTVZi1g+uHs530zmlI5j2ztYSLiSFMpuVRPRjRpeU7S5pn4R0P8jmjlB25ikWiYYDqAVwpUS29vnQWlrkhNSQ8NfNthFHccps4QV42EqWPyMRWQxJ1PLq0iDMtt0lCOWE0ilOkAVLOfIiOxDvhyOnhqvylFSRrtRRGMU2rAZNOip7yImW+B7oHgFbZwM+HradG99hmxzOBsaXG4pEdJIsw5kaZ\/mwtgzOMjFwaSkPLlCZSCc1BKSOVGYZIAan8MER5kcpZNlwJO97G\/ofJvnfnUybLTVTUH8iGGQGDpHwDf2k9Iu8s\/4QAAAAASUVORK5CYII="
        })
    })
}

export function register() {
    return new Promise((resolve, reject) => {
        resolve({

        })
    })
}