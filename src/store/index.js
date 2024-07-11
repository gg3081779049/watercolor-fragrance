import { createPinia } from 'pinia'
import { stateWatcher } from '@/store/plugins'

const pinia = createPinia()

pinia.use(stateWatcher)

export default pinia