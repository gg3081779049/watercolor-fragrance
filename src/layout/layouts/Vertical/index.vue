<template>
    <el-container>
        <el-aside>
            <Sidebar />
        </el-aside>
        <el-main>
            <el-scrollbar class="main-scrollbar">
                <div :style="{ position: fixedHeader ? 'absolute' : '' }">
                    <Navbar />
                    <Tabs v-if="showTabs" />
                </div>
                <AppMain />
            </el-scrollbar>
        </el-main>
    </el-container>
</template>

<script>
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
        ...mapState(useSettingsStore, ["fixedHeader", "showTabs"])
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