import { ElMessageBox, ElLoading } from 'element-plus'
import { $t } from '@/locales'

let loadingInstance

let createFunc = (func, props = ['success', 'warning', 'error', 'info']) => {
    return props.reduce((acc, prop) => {
        acc[prop] = func.bind(prop)
        return acc
    }, func)
}

export default {
    // 消息弹框
    alert: createFunc(function (content) {
        return ElMessageBox.alert(content, $t('common.systemTip'), {
            confirmButtonText: $t('common.confirm'),
            cancelButtonText: $t('common.cancel'),
            type: this
        })
    }),
    // 确认弹框
    confirm: createFunc(function (content) {
        return ElMessageBox.confirm(content, $t('common.systemTip'), {
            confirmButtonText: $t('common.confirm'),
            cancelButtonText: $t('common.cancel'),
            type: this
        })
    }),
    // 提交弹框
    prompt: createFunc(function (content) {
        return ElMessageBox.prompt(content, $t('common.systemTip'), {
            confirmButtonText: $t('common.confirm'),
            cancelButtonText: $t('common.cancel'),
            type: this
        })
    }),
    // 遮罩层
    loading: {
        // 打开
        open(content) {
            loadingInstance = ElLoading.service({
                lock: true,
                text: content,
                background: "rgba(0, 0, 0, 0.7)",
            })
        },
        // 关闭
        close() {
            loadingInstance.close()
        }
    }
}