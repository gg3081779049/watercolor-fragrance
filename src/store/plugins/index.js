export function watcher({ options: { watch }, store }) {
    if (watch && Object.keys(watch).length) {
        Object.entries(watch).forEach(([key, { immediate, handler }]) => {
            if (immediate) handler.bind(store)(store[key], undefined)
        })
        store.$subscribe(({ events }) => {
            events = events.key ? [events] : events
            events.forEach(({ key, newValue, oldValue }) => {
                let watchItem = watch[key]
                if (watchItem) {
                    if (Object.prototype.toString.call(watchItem) === '[object Function]') {
                        watchItem.bind(store)(newValue, oldValue)
                    } else {
                        watchItem.handler.bind(store)(newValue, oldValue)
                    }
                }
            })
        })
    }
}