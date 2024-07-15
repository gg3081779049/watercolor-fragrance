import { createPinia } from 'pinia'
import { stateWatcher } from '@/store/plugins'
import persistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()

pinia.use(stateWatcher)
pinia.use(persistedstate)

export default pinia