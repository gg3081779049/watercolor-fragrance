<template>
    <el-table class="app-table" :tooltip-options="{ showAfter: 600 }" border>
        <template v-for="column in columns" :key="column">
            <el-table-column v-if="!columnSettings[column.prop] || columnSettings[column.prop]?.value" align="center"
                show-overflow-tooltip v-bind="column">
                <template #default="scoped" v-if="column.render">
                    <component :is="column.render(scoped)" v-if="typeof column.render === 'function'" />
                    <component :is="column.render" v-if="typeof column.render === 'string'">
                        {{ scoped.row[column.prop] }}
                    </component>
                </template>
            </el-table-column>
        </template>
        <slot />
    </el-table>
</template>

<script>
export default {
    name: 'AppTable',
    props: {
        columns: {
            type: Array,
            default: []
        },
        columnSettings: {
            type: Object
        }
    }
}
</script>

<style lang="scss" scoped></style>