<template>
    <el-watermark :font="{ color: mode === 'light' ? '#00000026' : '#ffffff26' }" :content="show ? '水色天香' : null">
        <slot />
    </el-watermark>
</template>

<script>
import { useSettingsStore } from '@/store/modules/settings'
import { mapState } from 'pinia'

export default {
    name: 'WaterMark',
    props: {
        show: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        ...mapState(useSettingsStore, ["mode"])
    },
}
</script>

<style scoped></style>
