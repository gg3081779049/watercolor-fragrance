const Mock = require('mockjs')
const chalk = require('chalk')
const chokidar = require('chokidar')
const bodyParser = require('body-parser')
const path = require('path')
const fs = require('fs')

const mockDir = path.join(process.cwd(), 'mock')

module.exports = function (middlewares, devServer) {
    // 是否开启Mock
    if (process.env.VUE_APP_MOCK) {
        devServer.app.use(bodyParser.json())
        devServer.app.use(bodyParser.urlencoded({ extended: false }))
        // 注册 Mock
        const res = registerRoutes(devServer.app)
        if (res && process.env.VUE_APP_MOCK_HOT_RELOAD) {
            mockHotReload(devServer.app, res.mockStartIndex, res.mocksLength)
        }
    }
    console.log(chalk.magentaBright(`Mock Server started successfully!`))
    // 返回中间件 (必须)
    return middlewares
}

function getJsFiles(dir, result = []) {
    const files = fs.readdirSync(dir)
    files.forEach(file => {
        const filePath = path.join(dir, file)
        const stat = fs.statSync(filePath)
        if (stat.isDirectory()) {
            getJsFiles(filePath, result)
        } else if (stat.isFile() && path.extname(file) === '.js') {
            result.push(filePath)
        }
    })

    return result
}

function registerRoutes(app) {
    const modules = getJsFiles(mockDir + '/modules').map(require)
    if (modules instanceof Array) {
        let mocksLength = 0
        modules.forEach(module => {
            module.forEach(({ url, type, response }) => {
                const mock = responseFake(url, type, response)
                app[mock.type](mock.url, mock.response)
                mocksLength++
            })
        })
        return {
            mockStartIndex: app._router.stack.length - mocksLength,
            mocksLength
        }
    }
}

function unregisterRoutes() {
    Object.keys(require.cache).forEach(i => {
        if (i.includes(mockDir)) {
            delete require.cache[require.resolve(i)]
        }
    })
}

function responseFake(url, type, respond) {
    return {
        url,
        type: type || 'get',
        response(req, res) {
            // console.log(chalk.magentaBright(`request invoke: ${req.path}`))
            res.json(Mock.mock(respond instanceof Function ? respond(req, res) : respond))
        }
    }
}

function mockHotReload(app, mockStartIndex, mocksLength) {
    chokidar.watch(mockDir, { ignoreInitial: true }).on('all', (event, path) => {
        if (event === 'change' || event === 'add') {
            try {
                // 重新注册路由
                app._router.stack.splice(mockStartIndex, mocksLength)
                unregisterRoutes()
                const res = registerRoutes(app)
                mockStartIndex = res.mockStartIndex
                mocksLength = res.mocksLength
                console.log(chalk.magentaBright(`\n > Mock Server hot reload success! changed  ${path}`))
            } catch (error) {
                console.log(chalk.redBright(error))
            }
        }
    })
}