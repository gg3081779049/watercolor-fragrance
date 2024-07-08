import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
    state: () => ({
        title: process.env.VUE_APP_TITLE.toUpperCase(),
        device: navigator.userAgent.toLowerCase(),
        collapse: false,
        showSettings: false,
    })
})