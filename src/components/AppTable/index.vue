<template>
    <el-table>
        <template v-for="column in columns" :key="column">
            <el-table-column v-bind="column" v-if="!column.hidden">
                <template #default="scoped" v-if="column.render">
                    <component v-if="typeof column.render === 'function'" :is="column.render(scoped)" />
                    <component v-if="typeof column.render === 'string'" :is="column.render">
                        {{ scoped.row[column.prop] }}
                    </component>
                </template>
            </el-table-column>
        </template>
    </el-table>
</template>

<script>
export default {
    name: 'AppTable',
    props: {
        columns: {
            type: Array,
            default: []
        }
    }
}
</script>

<style lang="scss" scoped></style>