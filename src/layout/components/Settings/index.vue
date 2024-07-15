<template>
  <el-drawer class="drawer-container" size="360" title="系统设置" append-to-body>
    <hr>
    <el-scrollbar style="height:calc(100% - 52.8px)">
    </el-scrollbar>
    <div class="footer">
      <el-button plain type="primary" @click="save">
        <svg-icon icon="save" />
        保存配置
      </el-button>
      <el-button plain @click="reset">
        <svg-icon icon="refresh" />
        重置配置
      </el-button>
    </div>
  </el-drawer>
</template>

<script>
import settings from "@/settings.js"
import { useSettingsStore } from '@/store/modules/settings'
import { mapWritableState, mapActions } from 'pinia'

export default {
  name: "Settings",
  computed: { ...mapWritableState(useSettingsStore, Object.keys(settings)) },
  methods: {
    ...mapActions(useSettingsStore, ["saveSettings", "resetSettings"]),
    save() {
      this.$model.openLoading("正在保存到本地，请稍候...")
      this.saveSettings()
      setTimeout(() => this.$model.closeLoading(), 800)
    },
    reset() {
      this.$model.openLoading("正在清除设置，请稍候...")
      this.resetSettings()
      setTimeout(() => this.$model.closeLoading(), 800)
    }
  }
}
</script>

<style lang="scss" scoped>
  .drawer-container {
    hr {
      width: 100%;
      border-top: 0.8px solid var(--el-border-color);
      border-bottom: none;
      overflow: visible;
      position: absolute;
      left: 50%;
      top: 60px;
      transform: translateX(-50%);
      opacity: 0.6;
    }

    .el-scrollbar {
      .el-divider--horizontal {
        margin: 16px 0;
      }
    }

    .footer {
      width: 100%;
      padding-top: 20px;
      border-top: 1px solid var(--el-border-color);
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
  }
</style>
