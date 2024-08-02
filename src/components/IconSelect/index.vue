<template>
    <el-popover width="460" trigger="click" :hide-after="0">
        <template #reference>
            <el-input placeholder="点击选择图标" readonly :modelValue="modelValue">
                <template #prefix>
                    <svg-icon :icon="modelValue" fill="var(--el-text-color-regular)" />
                </template>
            </el-input>
        </template>
        <div class="icon-select">
            <el-input class="icon-search" v-model="name" clearable placeholder="请输入图标名称" @clear="filterIcons"
                @input="filterIcons">
                <template #suffix>
                    <svg-icon icon="search" />
                </template>
            </el-input>
            <div style="height: 200px">
                <el-scrollbar>
                    <div class="icon-container">
                        <div class="icon-item-wrapper" v-for="(icon, index) in icons" :key="index">
                            <div :class="['icon-item', { active: modelValue === icon }]" @click="selectedIcon(icon)">
                                <svg-icon :icon="icon" />
                                <span :title="icon">{{ icon }}</span>
                            </div>
                        </div>
                    </div>
                </el-scrollbar>
            </div>
        </div>
    </el-popover>
</template>

<script>

const icons = require.context('@/icons/svg/menu', false, /\.svg$/).keys().map(i => i.match(/\.\/(.*)\.svg/)[1])

export default {
    name: 'IconSelect',
    props: {
        modelValue: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            name: '',
            icons
        }
    },
    methods: {
        filterIcons() {
            this.icons = icons
            if (this.name) {
                this.icons = this.icons.filter(i => i.includes(this.name))
            }
        },
        selectedIcon(name) {
            this.$emit('update:modelValue', name)
            document.body.click()
        }
    }
}
</script>

<style lang="scss" scoped>
    .icon-select {
        width: 100%;
        padding: 10px;
        box-sizing: border-box;

        .icon-search {
            margin-bottom: 10px;
            position: relative;

            ::v-deep .el-input__wrapper {
                background-color: transparent;
            }

            svg {
                fill: var(--el-border-color-hover);
            }
        }

        ::v-deep .el-scrollbar {
            height: 100%;

            .el-scrollbar__wrap {
                overflow-x: hidden;

                .icon-container {
                    display: flex;
                    flex-wrap: wrap;

                    .icon-item-wrapper {
                        width: calc(100% / 3);
                        height: 30px;
                        line-height: 30px;
                        display: flex;
                        cursor: pointer;

                        .icon-item {
                            max-width: 100%;
                            height: 100%;
                            padding: 0 8px;
                            display: flex;

                            &:hover {
                                background: var(--el-color-info-light-8);
                                border-radius: 5px;
                            }

                            svg {
                                width: 16px;
                                height: 30px;
                                flex-shrink: 0;
                                fill: var(--el-text-color-regular);
                            }

                            span {
                                padding-left: 4px;
                                overflow: hidden;
                                display: inline-block;
                                vertical-align: -0.15em;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                color: var(--el-text-color-regular);
                            }

                            &.active {
                                background: var(--el-color-info-light-8);
                                border-radius: 5px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>