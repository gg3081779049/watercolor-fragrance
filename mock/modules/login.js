import { usersList } from '@root/mock/data'

const serverKey = 'admin'

export default [{
    url: /.*?\/login/,
    method: 'post',
    response(res) {
        const { username, password } = res.body
        const user = usersList.find(item => item.username === username && item.password === password)
        if (user) {
            return {
                code: 200,
                msg: '操作成功',
                token: btoa(`${serverKey}:${password}`)
            }
        } else {
            return {
                code: 500,
                msg: '用户名或密码错误'
            }
        }
    }
}, {
    url: /.*?\/logout/,
    method: 'post'
}, {
    url: /.*?\/getInfo/,
    method: 'get',
    response() {
        return {
            code: 200,
            mag: "操作成功",
            roles: ["admin"],
            user: {
                avatar: '',
                username: 'admin',
                password: ''
            },
        }
    }
}, {
    url: /.*?\/captchaImage/,
    method: 'get',
    response() {
        return {
            captcha: false,
            code: 200,
            msg: "操作成功",
            uuid: "NpcNH",
            img: ''
        }
    }
}]