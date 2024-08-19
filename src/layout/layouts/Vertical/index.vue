<template>
    <el-container>
        <el-aside v-show="!tabFullscreen">
            <Sidebar />
        </el-aside>
        <el-main>
            <div v-if="fixedHeader" v-show="!tabFullscreen">
                <Navbar />
                <Tabs v-if="showTabs" />
            </div>
            <el-scrollbar class="main-scrollbar">
                <div v-if="!fixedHeader" v-show="!tabFullscreen">
                    <Navbar />
                    <Tabs v-if="showTabs" />
                </div>
                <AppMain />
            </el-scrollbar>
        </el-main>
    </el-container>
</template>

<script>
import { useAppStore } from '@/store/modules/app'
import { useSettingsStore } from '@/store/modules/settings'
import { mapState } from 'pinia'

import Sidebar from "@/layout/components/Sidebar"
import Navbar from "@/layout/components/Navbar"
import Tabs from "@/layout/components/Tabs"
import AppMain from "@/layout/components/AppMain"

export default {
    name: 'Vertical',
    components: { Sidebar, Navbar, Tabs, AppMain },
    computed: {
        ...mapState(useAppStore, ["tabFullscreen"]),
        ...mapState(useSettingsStore, ["fixedHeader", "showTabs"]),
    }
}
</script>

<style lang="scss" scoped>
    .el-container {
        width: 100vw;
        height: 100vh;
        background: var(--base-bg);

        .el-aside {
            width: auto;
            box-shadow: 2px 0 6px rgba(0, 0, 0, 0.2);
            -webkit-box-shadow: 2px 0 6px rgba(0, 0, 0, 0.2);
            z-index: 9;
        }

        .el-main {
            padding: 0;
            display: flex;
            flex-direction: column;

            .main-scrollbar {

                .el-scrollbar__view>div {
                    width: 100%;
                    right: 0;
                    top: 0;
                    z-index: 8;
                }
            }
        }
    }
</style>