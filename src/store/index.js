import { createPinia } from 'pinia'
import { stateWatcher, createdHook } from '@/store/plugins'

const pinia = createPinia()

pinia.use(stateWatcher)
pinia.use(createdHook)

export default pinia