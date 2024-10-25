<template>
    <el-button-group class="right-toolbar">
        <el-tooltip :content="$t(`toolTip.${showSearch ? 'showSearchBar' : 'hiddenSearchBar'}`)" placement="top"
            effect="light" :hide-after="0" v-if="showSearch !== undefined">
            <el-button @click="$emit('update:showSearch', !showSearch)">
                <svg-icon :icon="`zoom-${showSearch ? 'out' : 'in'}`" />
            </el-button>
        </el-tooltip>
        <el-tooltip :content="$t('toolTip.columnSetting')" placement="top" effect="light" v-if="columns !== undefined">
            <el-button v-popover="this.$refs['popoverRef']">
                <svg-icon icon="filter" />
                <el-popover ref="popoverRef" :popper-style="{ minWidth: '100px', width: '120px', padding: '8px' }"
                    :hide-after="0" trigger="click" virtual-triggering>
                    <el-scrollbar max-height="320px">
                        <el-checkbox v-for="(item, key) in columns" :key="key" v-model="item.value">
                            {{ item.label }}
                        </el-checkbox>
                    </el-scrollbar>
                </el-popover>
            </el-button>
        </el-tooltip>
        <slot />
        <el-tooltip :content="$t('toolTip.refresh')" placement="top" effect="light" v-if="$attrs.onRefresh">
            <el-button v-rotate-on-click v-prevent-reclick="500" @click="$emit('refresh')">
                <svg-icon ref="refresh" icon="refresh" />
            </el-button>
        </el-tooltip>
    </el-button-group>
</template>

<script>
export default {
    name: 'RightToolbar',
    props: {
        showSearch: {
            type: Boolean
        },
        columns: {
            type: Object
        }
    }
}
</script>

<style lang="scss" scoped>
    .right-toolbar {
        margin-left: auto;

        .el-button {
            width: 36px;
            height: 24px;

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