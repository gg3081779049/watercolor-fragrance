<template>
    <el-watermark :font="{ color: light ? '#00000026' : '#ffffff26' }" :content="show ? '水色天香' : null">
        <slot />
    </el-watermark>
</template>

<script>
import { useSettingsStore } from '@/store/settings'
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
        ...mapState(useSettingsStore, ["light"])
    },
}
</script>

<style scoped></style>   