<template>
    <div class="settings-item">
        <span v-if="label">{{ label }}</span>
        <slot />
    </div>
</template>

<script>
export default {
    name: 'SettingsItem',
    props: {
        label: {
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
    .settings-item {
        padding: 4px 8px;
        color: var(--el-text-color-regular);
        display: flex;
        justify-content: space-between;

        .el-segmented {
            padding: 4px;

            .is-selected svg {
                fill: var(--el-segmented-item-selected-color);
            }

            svg {
                width: 30px;
                fill: var(--el-segmented-color)
            }
        }

        .el-select,
        .el-input-number {
            width: 96px;
        }
    }
</style>