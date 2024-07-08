export function watcher({ options, store }) {
    if (options.watch) {
        Object.keys(options.watch).forEach(key => {
            const { immediate, handler } = options.watch[key]
            if (immediate) handler.bind(store)(store[key], undefined)
            store.$subscribe(({ events }) => {
                if (events.key === key) {
                    handler.bind(store)(events.newValue, events.oldValue)
                }
            })
        })
    }
}