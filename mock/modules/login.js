const { usersList } = require(`${process.cwd()}/mock/data`)
const serverKey = 'admin'

module.exports = [{
    url: '/login',
    type: 'post',
    response(req) {
        const { username, password } = req.body
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
    url: '/logout',
    type: 'post'
}, {
    url: '/getInfo',
    type: 'get',
    response(req) {
        return {
            code: 200,
            mag: "操作成功",
            roles: ["admin"],
            permissions: [],
            user: {
                avatar: '',
                username: 'admin',
                password: ''
            },
        }
    }
}, {
    url: '/captchaImage',
    type: 'get',
    response(req) {
        return {
            captcha: false,
            code: 200,
            msg: "操作成功",
            uuid: "NpcNH",
            img: ''
        }
    }
}]