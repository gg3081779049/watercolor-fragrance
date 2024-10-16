import { createApp } from 'vue'
import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
import plugins from '@/plugins'
import i18n from '@/locales'

// UI组件库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import '@/styles/index.scss'
import '@/permission'
import '@/icons'
import '../mock'

// 全局方法
import { download } from '@/utils/request'

// 全局组件
import SvgIcon from '@/components/SvgIcon'
import RightToolbar from '@/components/RightToolbar'

const app = createApp(App)

// 禁用生产提示信息
app.config.productionTip = false

app.config.globalProperties.$download = download

app.component(SvgIcon.name || 'SvgIcon', SvgIcon)
app.component(RightToolbar.name || 'RightToolbar', RightToolbar)

app.use(store)
app.use(router)
app.use(plugins)
app.use(i18n)
app.use(ElementPlus)

app.mount('#app')
