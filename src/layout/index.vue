<template>
    <WaterMark :show="watermark">
        <el-container>
            <el-aside>
                <Sidebar />
            </el-aside>
            <el-main>
                <el-scrollbar class="main-scrollbar">
                    <div :style="{ position: fixedHeader ? 'absolute' : '' }">
                        <Navbar />
                        <TagsView v-if="showTagsView" />
                    </div>
                </el-scrollbar>
            </el-main>
        </el-container>
    </WaterMark>
</template>

<script>
import { useSettingsStore } from '@/store/settings'
import { mapState } from 'pinia'

import WaterMark from "@/components/WaterMark"
import Sidebar from "@/layout/components/Sidebar"
import Navbar from "@/layout/components/Navbar"
import TagsView from "@/layout/components/TagsView"

export default {
    name: "Layout",
    components: { WaterMark, Sidebar, Navbar, TagsView },
    computed: {
        ...mapState(useSettingsStore, ["fixedHeader", "showTagsView", "watermark"])
    },
}
</script>

<style lang="scss" scoped>
    .el-container {
        width: 100vw;
        height: 100vh;

        .el-aside {
            width: auto;
            box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
            -webkit-box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
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