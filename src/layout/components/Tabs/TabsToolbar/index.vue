<template>
    <div class="tabs-toolbar">
        <el-tooltip :content="$t(`toolTip.${tabFullscreen ? 'exitFullscreen' : 'fullscreen'}`)" effect="light"
            :show-after="600">
            <svg-icon class="fullscreen" :icon="tabFullscreen ? 'exit-fullscreen' : 'fullscreen'"
                @click="tabFullscreen = !tabFullscreen" />
        </el-tooltip>
    </div>
</template>

<script>
import { useAppStore } from '@/store/modules/app'
import { mapWritableState } from 'pinia'

export default {
    name: 'TabsToolbar',
    computed: {
        ...mapWritableState(useAppStore, ['tabFullscreen'])
    }
}
</script>

<style lang="scss" scoped>
    .tabs-toolbar {
        padding: 0 8px;
        display: flex;
        align-items: center;

        svg {
            width: 16px;
            height: 16px;
            padding: 5px;
            fill: var(--navbar-icon-fill-color);
            outline: none;
            cursor: pointer;

            &:hover {
                background: rgba(128, 128, 128, 0.122);
            }
        }
    }
</style>