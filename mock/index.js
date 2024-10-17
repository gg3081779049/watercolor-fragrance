import Mock from 'mockjs'

if (process.env.VUE_APP_MOCK) {
    // 加载 ./modules 目录下的所有js文件
    require.context('./modules', true, /\.js$/).keys().forEach(item => {
        const modules = require(`./modules${item.slice(1)}`).default
        if (modules instanceof Array) {
            modules.forEach(({ url, method, response }) => {
                Mock.mock(url, method, function (options) {
                    options.body = JSON.parse(options.body)
                    if (response instanceof Function) {
                        return response(options)
                    } else {
                        return response
                    }
                })
            })
        }
    })
}