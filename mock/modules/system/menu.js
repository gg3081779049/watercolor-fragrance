const { menuList } = require(`${process.cwd()}/mock/data`)
const { getNextUniqueMin } = require(`${process.cwd()}/mock/utils`)

module.exports = [{
    url: '/system/menu/list',
    type: 'get',
    response(req) {
        let params = req.query
        let data = menuList.filter(item => {
            return Object.keys(params).every(key => {
                return item[key]?.includes(params[key])
            })
        })
        return {
            code: 200,
            msg: '操作成功',
            data
        }
    }
}, {
    url: '/system/menu/get/:id',
    type: 'get',
    response(req) {
        let n = parseInt(req.params.id)
        return {
            code: 200,
            msg: '操作成功',
            data: menuList.find(item => item.id === n)
        }
    }
}, {
    url: '/system/menu/add',
    type: 'post',
    response(req) {
        let minId = getNextUniqueMin(menuList.map(item => item.id))
        let form = { ...req.body, id: minId, createTime: new Date().getTime() }
        let keys = ['id', 'parentId', 'order', 'hasChild', 'path', 'query', 'component', 'icon', 'title', 'noCache', 'hidden', 'disabled', 'createTime']
        let item = keys.reduce((acc, key) => {
            acc[key] = form[key]
            return acc
        }, {})
        menuList.push(item)
        return {
            code: 200,
            msg: '操作成功'
        }
    }
}, {
    url: '/system/menu/delete',
    type: 'delete',
    response(req) {
        menuList.forEach((item, index) => req.body.includes(item.id) && menuList.splice(index, 1))
        return {
            code: 200,
            msg: '操作成功'
        }
    }
}, {
    url: '/system/menu/update',
    type: 'put',
    response(req) {
        menuList.forEach(item => item.id === req.body.id && (item = Object.assign({}, item, req.body)))
        return {
            code: 200,
            msg: '操作成功'
        }
    }
}]