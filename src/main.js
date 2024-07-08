import { createApp } from 'vue'
import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
import i18n from '@/locales'

// UI组件库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import '@/styles/index.scss'
import '@/permission'
import '@/icons'

// 全局方法
import model from '@/plugins/model'
import { download } from '@/utils/request'

// 全局组件
import SvgIcon from '@/components/SvgIcon'

const app = createApp(App)

// 禁用生产提示信息
app.config.productionTip = false

app.config.globalProperties.$model = model
app.config.globalProperties.$download = download

app.component(SvgIcon.name || 'SvgIcon', SvgIcon)

app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(i18n)

app.mount('#app')
