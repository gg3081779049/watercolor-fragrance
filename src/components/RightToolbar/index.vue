<template>
    <div class="right-toolbar">
        <el-tooltip :content="`${showSearch ? '隐藏' : '显示'}搜索栏`" placement="top" effect="light" :hide-after="0">
            <el-button @click="showSearchChange">
                <svg-icon :icon="`${showSearch ? 'zoom-out' : 'zoom-in'}`" />
            </el-button>
        </el-tooltip>
        <el-tooltip :content="tabFullscreen ? '还原' : '最大化'" placement="top" effect="light">
            <el-button @click="tabFullscreen = !tabFullscreen">
                <svg-icon :icon="tabFullscreen ? 'exit-fullscreen' : 'fullscreen'" />
            </el-button>
        </el-tooltip>
        <el-tooltip content="刷新" placement="top" effect="light">
            <el-button @click="refresh">
                <svg-icon ref="refresh" icon="refresh" />
            </el-button>
        </el-tooltip>
    </div>
</template>

<script>
import { useAppStore } from '@/store/modules/app'
import { mapWritableState } from 'pinia'

export default {
    name: 'RightToolbar',
    props: {
        showSearch: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        ...mapWritableState(useAppStore, ["tabFullscreen"])
    },
    methods: {
        showSearchChange() {
            this.$emit("update:showSearch", !this.showSearch)
        },
        refresh() {
            this.$emit("refresh")
            this.$refs.refresh.$el.animate(
                { transform: `rotate(-180deg)` },
                { duration: 500, easing: "ease-out" }
            )
        }
    }
}
</script>

<style lang="scss" scoped>
    .right-toolbar {
        margin-left: auto;
        border: 1px solid var(--el-border-color);
        border-radius: var(--el-border-radius-base);
        box-sizing: border-box;
        display: flex;
        overflow: hidden;

        .el-button {
            width: 36px;
            height: 24px;
            margin: 0;
            border-right-width: 0;
            border-top-width: 0;
            border-bottom-width: 0;
            border-radius: 0;

            &:active {
                border-color: var(--el-color-primary-light-7);
            }

            &:first-child {
                border-left-width: 0;
            }

            svg {
                margin: 0;
            }
        }
    }
</style>