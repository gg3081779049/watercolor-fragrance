import cache from './cache'
import model from './model'

export default {
    install(app) {
        app.config.globalProperties.$cache = cache
        app.config.globalProperties.$model = model
    }
}