import { defineStore } from 'pinia'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { login, logout, getInfo } from '@/api/login'

export const useUserStore = defineStore('user', {
    state: () => ({
        token: getToken(),
        name: '',
        avatar: '',
        roles: [],
    }),
    actions: {
        // 登录
        Login(userInfo) {
            const username = userInfo.username.trim()
            const password = userInfo.password
            const code = userInfo.code
            const uuid = userInfo.uuid
            return new Promise((resolve, reject) => {
                login(username, password, code, uuid).then(res => {
                    setToken(this.token = res.token)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        // 退出系统
        Logout() {
            return new Promise((resolve, reject) => {
                logout(this.token).then(() => {
                    this.$patch(state => {
                        state.token = ''
                        state.name = ''
                        state.avatar = ''
                        removeToken()
                        resolve()
                    })
                })
            })
        },
        // 获取用户信息
        GetInfo() {
            return new Promise((resolve, reject) => {
                getInfo().then(res => {
                    const user = res.user
                    this.$patch(state => {
                        state.name = user.username
                        state.avatar = user.avatar
                        if (res.roles && res.roles.length) {
                            state.roles = res.roles
                        }
                        resolve(res)
                    })
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
})