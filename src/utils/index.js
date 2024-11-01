// 验证是否为blob格式
export function blobValidate(data) {
    return data.type !== 'application/json'
}

/**
* 参数处理
*/
export function tansParams(params) {
    let result = ''
    for (const [propName, value] of Object.entries(params)) {
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

// 日期格式化
export function parseTime(date, pattern = '{y}-{m}-{d} {h}:{i}:{s}') {
    if (date instanceof Date) {
        return pattern?.replace(/{(y|m|d|h|i|s|a)}/g, (_, key) => {
            return {
                y: date.getFullYear(),
                m: (date.getMonth() + 1).toString().padStart(2, '0'),
                d: (date.getDate()).toString().padStart(2, '0'),
                h: (date.getHours()).toString().padStart(2, '0'),
                i: (date.getMinutes()).toString().padStart(2, '0'),
                s: (date.getSeconds()).toString().padStart(2, '0'),
                a: (date.getDay())
            }[key]
        })
    }
}

// 数组转树
export function arrayToTree(array, func, config) {
    let tree = []
    let map = {}
    const {
        idKey = 'id',
        parentIdKey = 'parentId',
        childrenKey = 'children',
        orderKey = 'order',
        hasChildKey = 'hasChild'
    } = config ?? {}

    for (const item of array) {
        let newItem = { ...item }
        if (newItem[hasChildKey]) newItem[childrenKey] = map[newItem[idKey]]?.[childrenKey] || []
        map[newItem[idKey]] = newItem
        if (newItem[parentIdKey]) {
            let parentItem = map[newItem[parentIdKey]]
            if (parentItem) {
                parentItem[childrenKey] ||= []
                parentItem[childrenKey].push(newItem)
                parentItem[childrenKey].sort((a, b) => a[orderKey] - b[orderKey])
            } else {
                parentItem = { [childrenKey]: [newItem] }
            }
        } else {
            tree.push(newItem)
        }
    }

    tree = tree.sort((a, b) => a[orderKey] - b[orderKey])

    if (func instanceof Function) {
        function buildTree(node, parentNodes = []) {
            let _node = { ...node }
            let newNode = func(_node, [...parentNodes])
            if (node[childrenKey] instanceof Array) {
                newNode[childrenKey] = node[childrenKey].map(child => buildTree(child, [...parentNodes, node]))
            }
            return newNode
        }
        tree = tree.map(node => buildTree(node, []))
    }

    return tree
}

// 树转数组
export function treeToArray(tree, func) {
    let array = []
    let childrenKey = 'children'
    function traverse(node, parentNodes) {
        let newNode = { ...node }
        delete newNode[childrenKey]
        let newNodeMap = func ? func?.(newNode, [...parentNodes]) : newNode
        array.push(newNodeMap)
        node[childrenKey]?.forEach(child => traverse(child, [...parentNodes, node]))
    }
    tree.forEach(node => traverse(node, []))
    return array
}

// 遍历树
export function handleTree(tree, func) {
    tree.forEach(node => {
        func(node)
        if (node.children) {
            handleTree(node.children, func)
        }
    })
}

// 过滤树
export function filterTree(tree, func) {
    return tree.filter(item => func(item) && (item.children = filterTree(item.children, func)))
}

// 提取对象
export function pick(keys) {
    return function (obj) {
        keys.reduce((acc, key) => { acc[key] = obj[key]; return acc }, {})
    }
}

// 短横线转大驼峰
export function dashToCamel(str) {
    return `-${str}`.replace(/-[a-zA-Z]/g, s => s.at(-1).toUpperCase())
}

// 判断是否为外部链接
export function isExternal(url) {
    return /^(http|https):\/\/[^"']+$/.test(url)
}
