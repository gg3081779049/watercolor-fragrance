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
            <Tabs v-if="showTabs" />
          </div>
          <AppMain :style="{ marginTop: `${fixedHeader * (headerHeight + showTabs * TabsHeight)}px` }" />
        </el-scrollbar>
      </el-main>
    </el-container>
  </WaterMark>
  <Settings v-model="showSettings" />
</template>

<script>
import { useAppStore } from '@/store/modules/app'
import { useSettingsStore } from '@/store/modules/settings'
import { mapState, mapWritableState } from 'pinia'

import WaterMark from "@/components/WaterMark"
import Sidebar from "@/layout/components/Sidebar"
import Navbar from "@/layout/components/Navbar"
import Tabs from "@/layout/components/Tabs"
import AppMain from "@/layout/components/AppMain"
import Settings from "@/layout/components/Settings"

export default {
  name: "Layout",
  components: { WaterMark, Sidebar, Navbar, Tabs, AppMain, Settings },
  computed: {
    ...mapState(useSettingsStore, ["theme", "mode", "language", "headerHeight", "fixedHeader", "TabsHeight", "showTabs", "watermark"]),
    ...mapWritableState(useAppStore, ["showSettings"]),
  },
  mounted() {
    document.documentElement.className = `${this.theme} ${this.mode}`
    this.$i18n.locale = this.language
  },
  unmounted() {
    document.documentElement.className = ``
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
