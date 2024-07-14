<template>
    <div class="sidebar-container" :style="{ width: `${collapse ? 54 : sidebarWidth}px` }">
        <div class="sidebar-logo-container" v-if="showLogo">
            <img draggable="false" src="@/assets/images/logo.png" alt="logo">
            <h1 :class="{ collapse }">{{ title }}</h1>
        </div>
        <el-scrollbar>
            <Menu />
        </el-scrollbar>
        <div class="sidebar-footer-container" v-if="showFooter">
            <Hamburger />
        </div>
    </div>
</template>

<script>
import { useAppStore } from '@/store/modules/app'
import { useSettingsStore } from '@/store/modules/settings'
import { mapState } from 'pinia'

import Menu from "./Menu"
import Hamburger from "@/components/Hamburger"

export default {
    name: 'Sidebar',
    components: { Menu, Hamburger },
    props: {
        showLogo: {
            type: Boolean,
            default: true,
        },
        showFooter: {
            type: Boolean,
            default: true,
        }
    },
    computed: {
        ...mapState(useAppStore, ["collapse", "title"]),
        ...mapState(useSettingsStore, ["sidebarWidth"])
    }
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

        .sidebar-logo-container {
            width: 100%;
            height: 50px;
            background: var(--logo-bg);
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 32px;
                height: 28px;
                cursor: pointer;
            }

            h1 {
                margin-left: 10px;
                text-align: center;
                color: var(--logo-title-color);
                font-weight: 600;
                font-size: 14px;
                font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
                white-space: nowrap;
                overflow: hidden;
                transition: 0.28s;
                cursor: pointer;

                &.collapse {
                    width: 0;
                    margin-left: 0;
                    transform: scaleX(0);
                }
            }
        }

        ::v-deep .el-menu {
            --el-menu-bg-color: var(--sidebar-menu-bg);
            --el-menu-hover-bg-color: var(--sidebar-menu-bg-hover);
            --el-menu-text-color: var(--sidebar-text-color);
            --el-menu-active-color: var(--sidebar-text-color-active);
            --el-menu-border-color: var(--sidebar-menu-bg);
            
            border-right: none;

            .el-menu {
                --el-menu-bg-color: var(--sidebar-sub-menu-bg);
                --el-menu-hover-bg-color: var(--sidebar-sub-menu-bg-hover);
            }

            li:not([aria-expanded]).is-active {
                background: var(--sidebar-menu-bg-active);

                svg {
                    fill: var(--sidebar-text-color-active);
                }
            }
        }

        .sidebar-footer-container {
            height: 50px;
            padding: 0 16px;
            border-top: 1px solid #333;
            display: flex;
            align-items: center;

            svg {
                fill: var(--sidebar-text-color);
                cursor: pointer;

                &:hover {
                    background: var(--navbar-icon-bg-hover);
                    box-shadow: 0 0 0 6px var(--navbar-icon-bg-hover);
                }
            }
        }
    }
</style>
