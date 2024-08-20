<template>
    <div class="app-table">
        <el-collapse-transition>
            <el-form ref="queryForm" class="query-form" :model="queryParams" v-if="showSearch" inline>
                <slot name="queryForm" />
                <el-form-item v-if="$slots.queryForm">
                    <el-button type="primary" plain @click="$emit('getList')">
                        <svg-icon icon="search" />
                        <span>搜索</span>
                    </el-button>
                    <el-button @click="reset">
                        <svg-icon icon="refresh" />
                        <span>重置</span>
                    </el-button>
                </el-form-item>
            </el-form>
        </el-collapse-transition>

        <div class="button-group">
            <slot name="buttonGroup"></slot>
            <right-toolbar v-model:showSearch="showSearch" @refresh="$emit('getList')" />
        </div>

        <el-table v-bind="$attrs" v-if="showTable">
            <slot name="table" />
        </el-table>

        <div class="pagination" v-if="showPagination">
            <el-pagination background :total="total" v-show="total > 0" layout="->, prev, pager, next"
                @current-change="$emit('getList')">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppTable',
    inheritAttrs: false,
    props: {
        queryParams: {
            type: Object
        },
        total: {
            type: Number,
            default: 0
        },
        showTable: {
            type: Boolean,
            default: true
        },
        showPagination: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            showSearch: true
        }
    },
    created() {
        this.$emit('getList')
    },
    methods: {
        reset() {
            this.$refs['queryForm'] && this.$refs['queryForm'].resetFields()
            this.$emit('reset')
            this.$emit('getList')
        }
    }
}
</script>

<style lang="scss" scoped>
    .app-table {
        margin: 20px;
        background: var(--el-bg-color);
        box-shadow: var(--el-box-shadow-lighter);

        .query-form {
            padding: 14px 14px 0 14px;

            .el-form-item {
                min-width: 300px;
                margin-right: 0;
                margin-bottom: 14px;

                .el-input {
                    width: 200px;
                }
            }
        }

        .button-group {
            padding: 14px;
            border-top: 0.8px solid var(--el-border-color-lighter);
            border-bottom: 0.8px solid var(--el-border-color-lighter);
            display: flex;
        }

        .pagination {
            padding: 14px;
        }
    }
</style>