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
                    </div>
                    <AppMain :style="{ marginTop: `${fixedHeader * (50 + showTagsView * 34)}px` }" />
                </el-scrollbar>
            </el-main>
        </el-container>
    </WaterMark>
    <Settings v-model="showSettings" />
</template>

<script>
import { useAppStore } from '@/store/app'
import { useSettingsStore } from '@/store/settings'
import { mapState, mapWritableState } from 'pinia'

import WaterMark from "@/components/WaterMark"
import Sidebar from "@/layout/components/Sidebar"
import Navbar from "@/layout/components/Navbar"
import AppMain from "@/layout/components/AppMain"
import Settings from "@/layout/components/Settings"

export default {
    name: "Layout",
    components: { WaterMark, Sidebar, Navbar, AppMain, Settings },
    computed: {
        ...mapState(useSettingsStore, ["fixedHeader", "showTagsView", "watermark"]),
        ...mapWritableState(useAppStore, ["showSettings"]),
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
    box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
    -webkit-box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
    z-index: 9;
  }
  .el-main {
    padding: 0;
    .main-scrollbar {
      .el-scrollbar__view > div {
        width: 100%;
        right: 0;
        top: 0;
        z-index: 8;
      }
    }
  }
}
</style>