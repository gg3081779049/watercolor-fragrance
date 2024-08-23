<template>
    <div class="layout-select">
        <el-tooltip :content="item.title" placement="bottom" v-for="item in layouts" :key="item.name">
            <div class="layout-select-item" @click="$emit('update:modelValue', item.name)">
                <svg-icon :icon="item.icon" />
            </div>
        </el-tooltip>
    </div>
</template>

<script>
export default {
    name: 'LayoutSelect',
    props: {
        modelValue: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            layouts: [
                { name: 'vertical', title: '左侧菜单模式', icon: 'global' },
                { name: 'vertical-mix', title: '左侧菜单混合模式', icon: 'global' },
                { name: 'horizontal', title: '顶部菜单模式', icon: 'global' },
                { name: 'horizontal-mix', title: '顶部菜单混合模式', icon: 'global' },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .layout-select {
        display: grid;
        justify-content: center;
        align-items: center;
        grid-template-columns: repeat(2, 1fr);
        row-gap: 16px;
        column-gap: 32px;

        .layout-select-item {
            width: 84px;
            height: 56px;
            padding: 6px;
            background: blueviolet;
        }
    }
</style>