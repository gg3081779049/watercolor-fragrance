<template>
    <el-container>
        <el-header v-show="!tabFullscreen">
            <Navbar>
                <div class="nav-logo-container">
                    <img draggable="false" src="@/assets/images/logo.png" alt="logo">
                    <h1>{{ $t('system.title') }}</h1>
                </div>
                <Menu :data="treeRoutes.find(item => item.path === $route.path.split('/')[1]).children"
                    :collapse="false" mode="horizontal">
                    <template #default="{ meta }">
                        <svg-icon class="menu-icon" :icon="meta.icon" />
                        <span>{{ $t(`route.${meta.title}`) }}</span>
                    </template>
                </Menu>
            </Navbar>
        </el-header>
        <el-container>
            <el-aside v-show="!tabFullscreen">
                <Sidebar :style="{ width: `${collapse ? 54 : 90}px` }">
                    <el-menu class="sidebar-menu" :default-active="$route.path.split('/')[1]">
                        <el-menu-item v-for="item in treeRoutes" :key="item.path" :index="item.path"
                            @click="handleClick(item)">
                            <svg-icon :icon="item.meta.icon" />
                            <span v-if="!collapse">{{ $t(`route.${item.meta.title}`) }}</span>
                        </el-menu-item>
                    </el-menu>
                    <template #footer>
                        <div class="sidebar-footer-container">
                            <Hamburger />
                        </div>
                    </template>
                </Sidebar>
            </el-aside>
            <el-main>
                <Tabs v-if="showTabs && fixedHeader" />
                <el-scrollbar :style="{ height: `calc(100vh - ${headerHeight + !tabFullscreen * tabsHeight}px)` }">
                    <Tabs v-if="showTabs && !fixedHeader" />
                    <AppMain />
                </el-scrollbar>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import { useAppStore } from '@/store/modules/app'
import { useRouteStore } from '@/store/modules/route'
import { useSettingsStore } from '@/store/modules/settings'
import { mapState } from 'pinia'
import { isExternal } from '@/utils'

import Sidebar from "@/layout/components/Sidebar"
import Menu from "@/layout/components/Menu"
import Navbar from '@/layout/components/Navbar'
import Tabs from "@/layout/components/Tabs"
import AppMain from "@/layout/components/AppMain"
import Hamburger from "@/components/Hamburger"

export default {
    name: 'HorizontalMix',
    components: { Sidebar, Menu, Navbar, Tabs, AppMain, Hamburger },
    computed: {
        ...mapState(useAppStore, ["collapse", "tabFullscreen"]),
        ...mapState(useRouteStore, ["treeRoutes"]),
        ...mapState(useSettingsStore, ["headerHeight", "fixedHeader", "showTabs", "tabsHeight"])
    },
    methods: {
        handleClick(route) {
            route = route.hasOwnProperty('children') ? this.findFirstRoute(this.treeRoutes.find(item => item.path === route.path).children) : route
            if (isExternal(route.path)) {
                window.open(route.path)
            } else {
                this.$router.push({
                    path: `/${route.path}`,
                    query: route.query
                })
            }
        },
        // 递归查找第一个根节点
        findFirstRoute(nodes) {
            for (const node of nodes) {
                if (node.children && node.children.length > 0) {
                    const childRoot = findFirstRoute(node.children)
                    if (childRoot) {
                        return childRoot
                    }
                } else {
                    return node
                }
            }
        }
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
            box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
            -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
            z-index: 9;

            .nav-logo-container {
                height: 100%;
                margin-left: 30px;
                margin-right: 30px;
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

        .el-container {
            .el-aside {
                width: auto;
                box-shadow: 1px 0 6px rgba(0, 0, 0, 0.1);
                -webkit-box-shadow: 1px 0 6px rgba(0, 0, 0, 0.1);
                z-index: 8;

                .sidebar-menu {
                    .el-menu-item {
                        margin-bottom: 6px;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        gap: 4px;

                        span {
                            line-height: normal;
                        }
                    }
                }

                .sidebar-footer-container {
                    width: 100%;
                    height: 50px;
                    border-top: 1px solid #333;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    svg {
                        fill: var(--sidebar-text-color);
                    }
                }
            }
        }
    }
</style>