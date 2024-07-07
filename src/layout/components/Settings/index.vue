<template>
  <el-drawer class="drawer-container" size="360" title="系统设置" append-to-body>
    <hr>
    <el-scrollbar style="height:calc(100% - 52.8px)">
      <el-divider>主题设置</el-divider>
    </el-scrollbar>
    <div class="footer">
      <el-button plain type="primary" @click="saveSettings">
        <SvgIcon icon-class="save" />
        保存配置
      </el-button>
      <el-button plain @click="resetSettings">
        <SvgIcon icon-class="refresh" />
        重置配置
      </el-button>
    </div>
  </el-drawer>
</template>

<script>
import settings from "@/settings.js"

export default {
  name: "Settings",
  methods: {
    saveSettings() {},
    resetSettings() {}
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
  