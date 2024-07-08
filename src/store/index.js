import { createPinia } from 'pinia'
import { watcher } from '@/store/plugins'

const pinia = createPinia()

pinia.use(watcher)

export default pinia