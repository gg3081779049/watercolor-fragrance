/**
 * 添加一个新的选项watch，用于监控store中数据的变化，并根据变化执行相应的处理函数
 */
export function stateWatcher({ options: { watch }, store }) {
    if (watch && Object.keys(watch).length) {
        // 如果设置immediate为true, 则立即执行
        Object.entries(watch).forEach(([key, { immediate, handler }]) => {
            if (immediate) handler.bind(store)(store[key], undefined)
        })
        store.$subscribe(({ events }) => {
            events = events.key ? [events] : events
            events.forEach(({ key, newValue, oldValue }) => {
                let watchItem = watch[key]
                if (watchItem) {
                    if (typeof watchItem === 'function') {
                        watchItem.bind(store)(newValue, oldValue)
                    } else {
                        watchItem.handler.bind(store)(newValue, oldValue)
                    }
                }
            })
        })
    }
}