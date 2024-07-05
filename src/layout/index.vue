<template>
    <WaterMark :show="watermark">
        <el-container>
            
        </el-container>
    </WaterMark>
</template>

<script>
import { useSettingsStore } from '@/store/settings'
import { mapState } from 'pinia'

import WaterMark from "@/components/WaterMark"

export default {
    name: "Layout",
    components: { WaterMark },
    computed: {
        ...mapState(useSettingsStore, ["theme", "light", "fixedHeader", "showTagsView", "watermark"])
    },
    created() {
        document.documentElement.className = `${this.theme}-${this.light ? 'light' : 'dark'}`
    },
}
</script>

<style lang="scss" scoped>
.el-container {
  width: 100vw;
  height: 100vh;
  background: var(--base-bg);
}
</style>