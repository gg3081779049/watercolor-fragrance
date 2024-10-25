<template>
    <div class="sidebar-container">
        <slot name="header" />
        <el-scrollbar>
            <slot />
        </el-scrollbar>
        <slot name="footer" />
    </div>
</template>

<script>
export default {
    name: 'Sidebar'
}
</script>

<style lang="scss" scoped>
    .sidebar-container {
        height: 100%;
        background: var(--sidebar-menu-bg);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        position: relative;
        transition: width 0.28s;
        -webkit-transition: width 0.28s;

        ::v-deep .el-menu {
            --el-menu-bg-color: var(--sidebar-menu-bg);
            --el-menu-hover-bg-color: var(--sidebar-menu-bg-hover);
            --el-menu-text-color: var(--sidebar-text-color);
            --el-menu-active-color: var(--sidebar-text-color-active);
            --el-menu-border-color: var(--sidebar-menu-bg);

            .el-menu {
                --el-menu-bg-color: var(--sidebar-sub-menu-bg);
                --el-menu-hover-bg-color: var(--sidebar-sub-menu-bg-hover);
            }

            .is-active {
                &.el-sub-menu>.el-sub-menu__title {
                    color: var(--sidebar-text-color-active);

                    svg {
                        fill: var(--sidebar-text-color-active);
                    }
                }

                &.el-menu-item {
                    background: var(--sidebar-menu-bg-active);

                    svg {
                        fill: var(--sidebar-text-color-active);
                    }
                }
            }
        }
    }
</style>
