import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
    state: () => ({
        title: process.env.VUE_APP_TITLE.toUpperCase(),
        collapse: false,
        showSettings: false,
    })
})