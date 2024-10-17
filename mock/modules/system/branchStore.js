import { branchStoreList } from '@root/mock/data'

export default [{
    url: /.*?\/system\/branchStore\/list/,
    method: 'get',
    response(res) {
        let { pageIndex, pageSize, ...params } = Object.fromEntries(new URL(res.url).searchParams)
        let _data = branchStoreList.filter(item => {
            return Object.keys(params).every(key => {
                return item[key]?.includes(params[key])
            })
        }).slice(pageIndex * pageSize, (pageIndex + 1) * pageSize)
        return {
            code: 200,
            msg: '操作成功',
            data: {
                rows: _data,
                total: 0
            }
        }
    }
}, {
    url: /.*?\/system\/branchStore\/get\/(\d+)/,
    method: 'get',
    response(res) {
        let n = parseInt(res.url.split('/').at(-1))
        return {
            code: 200,
            msg: '操作成功',
            data: branchStoreList.find(item => item.id === n)
        }
    }
}, {
    url: /.*?\/system\/branchStore\/add/,
    method: 'post',
    response(res) {
        let minId = branchStoreList.map(item => item.id).sort((a, b) => a - b).findIndex((item, i) => item !== i + 1) + 1
        let keys = ['id', 'storeName', 'storeManager', 'contactNumber', 'region', 'address', 'longitude', 'latitude', 'pictures', 'facilities', 'status']
        let item = keys.reduce((acc, key) => {
            if (key in res.body) {
                acc[key] = res.body[key]
            }
            return acc
        }, { id: minId })
        branchStoreList.push(item)
        return {
            code: 200,
            msg: '操作成功'
        }
    }
}, {
    url: /.*?\/system\/branchStore\/delete/,
    method: 'delete',
    response(res) {
        branchStoreList.forEach((item, index) => res.body.includes(item.id) && branchStoreList.splice(index, 1))
        return {
            code: 200,
            msg: '操作成功'
        }
    }
}, {
    url: /.*?\/system\/branchStore\/update/,
    method: 'put',
    response(res) {
        branchStoreList.forEach(item => item.id === res.body.id && Object.assign({}, item, res.body))
        return {
            code: 200,
            msg: '操作成功'
        }
    }
}]