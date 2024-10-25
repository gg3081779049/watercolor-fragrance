import hasPermi from './modules/hasPermi'
import preventReclick from './modules/preventReclick'
import rotateOnClick from './modules/rotateOnClick'

export default {
    install(app) {
        app.directive('hasPermi', hasPermi)
        app.directive('preventReclick', preventReclick)
        app.directive('rotateOnClick', rotateOnClick)
    }
}
