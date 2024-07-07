import { ElLoading } from 'element-plus'

let loadingInstance;

export default {
    openLoading(content) {
        loadingInstance = ElLoading.service({
            lock: true,
            text: content,
            background: "rgba(0, 0, 0, 0.7)",
        })
    },
    closeLoading() {
        loadingInstance.close();
    },
}