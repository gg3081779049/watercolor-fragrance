import { useUserStore } from '@/store/modules/user'

export default {
    mounted(el, binding) {
        const { value } = binding
        const all_permission = "*:*:*"
        const permissions = useUserStore().permissions
        if (value instanceof Array && value.length) {
            if (!permissions.some(permi => all_permission === permi || value.includes(permi))) {
                el.parentNode?.removeChild(el)
            }
        } else {
            throw new Error('v-hasPermi value must be Array, and not empty!')
        }
    }
}