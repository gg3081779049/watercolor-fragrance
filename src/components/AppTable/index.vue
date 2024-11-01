<template>
    <el-table class="app-table" :tooltip-options="{ showAfter: 600 }" border>
        <component v-for="column in displayColumns" :is="column" />
    </el-table>
</template>

<script lang="jsx">
export default {
    name: 'AppTable',
    props: {
        columnProps: {
            type: Array,
        },
        addColumns: {
            type: Array,
            default: []
        },
        filterColumns: {
            type: Function,
            default(props) {
                return this.columnProps.includes(props.prop) || props.prop === undefined
            }
        }
    },
    data() {
        return {
            defaultTableColumn: {
                'align': 'center',
                'show-overflow-tooltip': ''
            }
        }
    },
    computed: {
        columns() {
            let slots = this.$slots.default?.() || []
            slots.push(...this.addColumns.map(column => {
                return (
                    <el-table-column {...column}>
                        {
                            ['default', 'header', 'filter-icon'].reduce((acc, slotName) => {
                                if (typeof column[slotName] === 'function') {
                                    acc[slotName] = slotProps => column[slotName](slotProps)
                                }
                                return acc
                            }, {})
                        }
                    </el-table-column>
                )
            }))
            // 设置默认值
            slots.forEach(slot => slot.props = { ...this.defaultTableColumn, ...slot.props })
            return slots
        },
        displayColumns() {
            if (this.columnProps === undefined) {
                return this.columns
            } else {
                return this.columns.filter(({ props }) => {
                    return this.filterColumns?.(props)
                })
            }
        }
    }
}
</script>