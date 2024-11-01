const { branchStoreList } = require(`${process.cwd()}/mock/data`)
const { getNextUniqueMin, pickKeys } = require(`${process.cwd()}/mock/utils`)

module.exports = [{
    url: '/system/branchStore/list',
    type: 'get',
    response(req) {
        let { pageIndex, pageSize, ...params } = req.query
        let data = branchStoreList.filter(item => {
            return Object.keys(params).every(key => {
                return item[key]?.includes(params[key])
            })
        }).slice((pageIndex - 1) * pageSize, pageIndex * pageSize)
        return {
            code: 200,
            msg: '操作成功',
            data: {
                rows: data,
                total: branchStoreList.length
            }
        }
    }
}, {
    url: '/system/branchStore/get/:id',
    type: 'get',
    response(req) {
        let n = parseInt(req.params.id)
        return {
            code: 200,
            msg: '操作成功',
            data: branchStoreList.find(item => item.id === n)
        }
    }
}, {
    url: '/system/branchStore/add',
    type: 'post',
    response(req) {
        let minId = getNextUniqueMin(branchStoreList.map(item => item.id))
        let form = { ...req.body, id: minId }
        let keys = ['id', 'storeName', 'storeManager', 'contactNumber', 'region', 'address', 'longitude', 'latitude', 'pictures', 'facilities', 'status', 'createTime']
        let item = pickKeys(form, keys)
        branchStoreList.push(item)
        return {
            code: 200,
            msg: '操作成功'
        }
    }
}, {
    url: '/system/branchStore/delete',
    type: 'delete',
    response(req) {
        branchStoreList.forEach((item, index) => req.body.includes(item.id) && branchStoreList.splice(index, 1))
        return {
            code: 200,
            msg: '操作成功'
        }
    }
}, {
    url: '/system/branchStore/update',
    type: 'put',
    response(req) {
        branchStoreList.forEach(item => item.id === req.body.id && (item = Object.assign({}, item, req.body)))
        return {
            code: 200,
            msg: '操作成功'
        }
    }
}]