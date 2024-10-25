<template>
    <el-container>
        <el-header v-if="fixedHeader">
            <Navbar v-show="!tabFullscreen">
                <div class="nav-logo-container">
                    <img draggable="false" src="@/assets/images/logo.png" alt="logo">
                    <h1>{{ $t('system.title') }}</h1>
                </div>
                <Menu :data="treeRoutes" mode="horizontal">
                    <template #default="{ meta }">
                        <svg-icon class="menu-icon" :icon="meta.icon" />
                        <span>{{ $t(`route.${meta.title}`) }}</span>
                    </template>
                </Menu>
            </Navbar>
            <Tabs v-if="showTabs" />
        </el-header>
        <el-main>
            <el-scrollbar class="main-scrollbar">
                <el-header v-if="!fixedHeader">
                    <Navbar v-show="!tabFullscreen">
                        <div class="nav-logo-container">
                            <img draggable="false" src="@/assets/images/logo.png" alt="logo">
                            <h1>{{ $t('system.title') }}</h1>
                        </div>
                        <Menu :data="treeRoutes" mode="horizontal">
                            <template #default="{ meta }">
                                <svg-icon class="menu-icon" :icon="meta.icon" />
                                <span>{{ $t(`route.${meta.title}`) }}</span>
                            </template>
                        </Menu>
                    </Navbar>
                    <Tabs v-if="showTabs" />
                </el-header>
                <AppMain />
            </el-scrollbar>
        </el-main>
    </el-container>
</template>

<script>
import { useAppStore } from '@/store/modules/app'
import { useRouteStore } from '@/store/modules/route'
import { useSettingsStore } from '@/store/modules/settings'
import { mapState } from 'pinia'

import Menu from "@/layout/components/Menu"
import Navbar from "@/layout/components/Navbar"
import Tabs from "@/layout/components/Tabs"
import AppMain from "@/layout/components/AppMain"

export default {
    name: 'Horizontal',
    components: { Menu, Navbar, Tabs, AppMain },
    computed: {
        ...mapState(useAppStore, ["title", "tabFullscreen"]),
        ...mapState(useRouteStore, ["treeRoutes"]),
        ...mapState(useSettingsStore, ["fixedHeader", "showTabs"]),
    }
}
</script>

<style lang="scss" scoped>
    .el-container {
        width: 100vw;
        height: 100vh;
        background: var(--base-bg);

        .el-header {
            height: auto;

            .nav-logo-container {
                height: 100%;
                margin-left: 30px;
                margin-right: 60px;
                overflow: hidden;
                flex-shrink: 0;
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
                    color: var(--logo-title-color);
                    font-weight: 600;
                    font-size: 14px;
                    font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
                    cursor: pointer;
                }
            }

            .el-menu {
                width: 100%;
                height: 100%;
                border-bottom: none;

                .is-active {
                    &.el-sub-menu>.el-sub-menu__title {
                        color: var(--sidebar-text-color-active);

                        svg {
                            fill: var(--sidebar-text-color-active);
                        }
                    }

                    &.el-menu-item {
                        svg {
                            fill: var(--sidebar-text-color-active);
                        }
                    }
                }

                .el-menu-item,
                .el-sub-menu {
                    &:hover svg {
                        fill: var(--sidebar-text-color-active);
                    }
                }
            }

            .menu-icon {
                fill: var(--sidebar-text-color);
            }
        }
    }
</style>