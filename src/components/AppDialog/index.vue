<template>
    <el-dialog class="app-dialog" :show-close="false" append-to-body>
        <template #header="{ close, titleClass }">
            <span :class="titleClass">{{ $attrs.title }}</span>
            <div class="flex g14">
                <svg-icon icon="close" @click="close" />
            </div>
        </template>
        <div v-loading="loading" element-loading-background="var(--el-dialog-bg-color)">
            <el-scrollbar :max-height="typeof maxHeight === 'string' ? maxHeight : `${maxHeight}px`">
                <slot />
            </el-scrollbar>
            <div class="dialog-footer">
                <el-button auto-insert-space @click="close">{{ $t('common.cancel') }}</el-button>
                <el-button type="primary" auto-insert-space @click="confirm">{{ $t('common.confirm') }}</el-button>
            </div>
        </div>
    </el-dialog>
</template>

<script>
export default {
    name: 'AppDialog',
    props: {
        loading: {
            type: Boolean,
            default: false
        },
        maxHeight: {
            type: [String, Number],
            default: '600px'
        }
    },
    methods: {
        close() {
            this.$emit('update:modelValue', false)
        },
        confirm() {
            this.$emit('confirm')
            this.close()
        }
    }
}
</script>

<style lang="scss">
    .app-dialog {
        padding: 0;

        .el-dialog__header {
            padding: 14px;
            display: flex;
            justify-content: space-between;

            .flex {
                align-items: center;

                svg {
                    fill: var(--el-text-color-primary);
                    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
                    cursor: pointer;

                    &:hover {
                        fill: var(--el-color-primary);
                    }
                }
            }
        }

        .el-scrollbar {
            .el-scrollbar__view {
                padding: 14px;
            }
        }

        .dialog-footer {
            display: flex;
            justify-content: end;
            padding: 14px;
        }
    }
</style>