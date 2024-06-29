import axios from 'axios'
import errorCode from '@/utils/errorCode'
import { tansParams, blobValidate } from '@/utils/index'
import { saveAs } from 'file-saver'
import { ElMessage, ElNotification, ElLoading, ElMessageBox } from 'element-plus'

export let isRelogin = { show: false }

// 创建axios实例
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: process.env.VUE_APP_BASE_API,
    // 超时
    timeout: 10000
})

// 响应拦截器
service.interceptors.response.use(res => {
    // 未设置状态码则默认成功状态
    let code = res.data.code || 200
    // 获取错误信息
    let msg = errorCode[code] || res.data.msg || errorCode['default']
    // 二进制数据则直接返回
    if (res.request.responseType === 'blob' || res.request.responseType === 'arraybuffer') {
        return res.data
    }

    // 处理状态码
    if (code === 401) {
        if (!isRelogin.show) {
            isRelogin.show = true
            ElMessageBox.confirm('登录状态已过期，您可以继续留在该页面，或者重新登录', '系统提示', {
                confirmButtonText: '重新登录',
                cancelButtonText: '取消',
                type: 'warning',
            }).then(() => {
                isRelogin.show = false
            }).catch(() => {
                isRelogin.show = false
            })
        }
        return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
    } else if (code === 500) {
        ElMessage({ message: msg, type: 'error' })
        return Promise.reject(new Error(msg))
    } else if (code === 601) {
        ElMessage({ message: msg, type: 'warning' })
        return Promise.reject('error')
    } else if (code !== 200) {
        ElNotification({ title: msg, type: 'error' })
        return Promise.reject('error')
    } else {
        return res.data
    }
})

let downloadLoadingInstance
export function download(url, params, filename, config) {
    downloadLoadingInstance = ElLoading.service({
        text: '正在下载数据，请稍候',
        background: 'rgba(0, 0, 0, 0.7)'
    })
    return service.post(url, params, {
        transformRequest: [(params) => tansParams(params)],
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        responseType: 'blob',
        ...config
    }).then(async (data) => {
        if (blobValidate(data)) {
            saveAs(new Blob([data]), filename)
        } else {
            let resText = await data.text()
            let rspObj = JSON.parse(resText)
            let errMsg = errorCode[rspObj.code] || rspObj.msg || errorCode['default']
            ElMessage({ message: errMsg, type: 'error' })
        }
        downloadLoadingInstance.close()
    }).catch((r) => {
        console.error(r)
        ElMessage({ message: '下载文件失败，请联系管理员！', type: 'error' })
        downloadLoadingInstance.close()
    })
}

export default service
