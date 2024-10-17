<template>
    <div class="right-toolbar" ref="right-toolbar">
        <el-tooltip :content="$t(`toolTip.${show.search ? 'showSearchBar' : 'hiddenSearchBar'}`)" placement="top"
            effect="light" :hide-after="0" v-if="show.search">
            <el-button @click="show.search = !show.search">
                <svg-icon :icon="`zoom-${show.search ? 'out' : 'in'}`" />
            </el-button>
        </el-tooltip>
        <el-tooltip :content="$t('toolTip.columnSetting')" placement="top" effect="light" v-if="show.columns">
            <el-button v-popover="this.$refs['popoverRef']">
                <svg-icon icon="filter" />
                <el-popover ref="popoverRef" :popper-style="{ minWidth: '100px', width: '120px', padding: '8px' }"
                    :hide-after="0" trigger="click" virtual-triggering>
                    <el-scrollbar max-height="320px">
                        <el-checkbox v-for="(item, key) in show.columns" :key="key" v-model="item.value">
                            {{ item.label }}
                        </el-checkbox>
                    </el-scrollbar>
                </el-popover>
            </el-button>
        </el-tooltip>
        <slot />
        <el-tooltip :content="$t('toolTip.refresh')" placement="top" effect="light" v-if="$attrs.onRefresh">
            <el-button @click="refresh">
                <svg-icon ref="refresh" icon="refresh" />
            </el-button>
        </el-tooltip>
    </div>
</template>

<script>
export default {
    name: 'RightToolbar',
    props: {
        show: {
            type: Object,
            default: {}
        }
    },
    methods: {
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

    .el-checkbox {
        width: 100%;
        padding-left: 10px;
        margin-right: 0;
        border-radius: 2px;
        box-sizing: border-box;
        overflow: hidden;

        &:hover {
            background: var(--el-color-info-light-9);
        }

        &.is-checked:hover {
            background: var(--el-color-primary-light-9);
        }
    }
</style>