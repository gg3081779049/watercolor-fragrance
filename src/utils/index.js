// 验证是否为blob格式
export function blobValidate(data) {
    return data.type !== 'application/json'
}

/**
* 参数处理
*/
export function tansParams(params) {
    let result = ''
    for (const propName of Object.keys(params)) {
        const value = params[propName]
        let part = encodeURIComponent(propName) + "="
        if (value !== null && value !== "" && typeof (value) !== "undefined") {
            if (typeof value === 'object') {
                for (const key of Object.keys(value)) {
                    if (value[key] !== null && value[key] !== "" && typeof (value[key]) !== 'undefined') {
                        result += encodeURIComponent(propName + '[' + key + ']') + "=" + encodeURIComponent(value[key]) + "&"
                    }
                }
            } else {
                result += part + encodeURIComponent(value) + "&"
            }
        }
    }
    return result
}

// 表单重置
export function resetForm(refName) {
    if (this.$refs[refName]) {
        this.$refs[refName].resetFields()
    }
}

// 函数防抖
export function debounce(func, duration = 300) {
    let timer
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, duration)
    }
}

// 扁平化数组转树形结构数组
export function arrayToTree(items, idKey = 'id', parentIdKey = 'parentId', childrenKey = 'children') {
    let tree = []
    let map = {}
    let hasOwnProperty = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)

    for (const item of items) {
        map[item[idKey]] = { ...item, [childrenKey]: hasOwnProperty(map, item[idKey]) ? map[item[idKey]][childrenKey] : [] }
        const newItem = map[item[idKey]]
        if (item[parentIdKey]) {
            if (hasOwnProperty(map, item[parentIdKey])) {
                map[item[parentIdKey]][childrenKey].push(newItem)
            } else {
                map[item[parentIdKey]] = { [childrenKey]: [newItem] }
            }
        } else {
            tree.push(newItem)
        }
    }
    return tree
}