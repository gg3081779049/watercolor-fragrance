import { createApp } from 'vue'
import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
import plugins from '@/plugins'
import directive from '@/directive'
import { createMetaManager } from 'vue-meta'
import i18n from '@/locales'

// UI组件库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import '@/styles/index.scss'
import '@/permission'
import '@/icons'

// 全局方法
import { parseTime } from '@/utils'
import { download } from '@/utils/request'

// 全局组件
import SvgIcon from '@/components/SvgIcon'
import ButtonGroup from '@/components/ButtonGroup'
import RightToolbar from '@/components/RightToolbar'
import Pagination from '@/components/Pagination'
import AppDialog from '@/components/AppDialog'

const app = createApp(App)

// 禁用生产提示信息
app.config.productionTip = false

app.config.globalProperties.$parseTime = parseTime
app.config.globalProperties.$download = download

app.component(SvgIcon.name || 'SvgIcon', SvgIcon)
app.component(ButtonGroup.name || 'ButtonGroup', ButtonGroup)
app.component(RightToolbar.name || 'RightToolbar', RightToolbar)
app.component(Pagination.name || 'Pagination', Pagination)
app.component(AppDialog.name || 'AppDialog', AppDialog)

app.use(store)
app.use(router)
app.use(plugins)
app.use(directive)
app.use(createMetaManager(false, { meta: { tag: 'meta', nameless: true } }))
app.use(i18n)
app.use(ElementPlus)

app.mount('#app')
