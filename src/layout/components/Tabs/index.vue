<template>
    <div class="tabs-container" :style="{ height: `${TabsHeight}px` }">
    </div>
</template>

<script>
import { useSettingsStore } from '@/store/modules/settings'
import { mapState } from 'pinia'

export default {
    name: 'Tabs',
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState(useSettingsStore, ["TabsHeight"])
    }
}
</script>

<style lang="scss" scoped>
.tabs-container {
  width: 100%;
  height: 34px;
  background: var(--tabs-bg);
  border-bottom: 1px solid var(--el-border-color-light);
}
</style>