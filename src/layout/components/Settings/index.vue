<template>
  <el-drawer class="drawer-container" size="320" title="系统设置" append-to-body>
    <el-scrollbar style="height:calc(100% - 52.8px)">
      <el-collapse>
        <el-collapse-item title="布局">
        </el-collapse-item>
        <el-collapse-item title="系统">
          <div class="settings-item">
            <span>模式</span>
            <el-segmented v-model="mode" :options="['light', 'dark']" size="small">
              <template #default="{ item }">
                <svg-icon :icon="`theme-switch-${item}`" />
              </template>
            </el-segmented>
          </div>
          <div class="settings-item">
            <span>语言</span>
            <el-select placeholder="语言" size="small">
              <template #prefix>
                <svg-icon icon="global" />
              </template>
            </el-select>
          </div>
          <div class="settings-item">
            <span>开启水印</span>
            <el-switch v-model="watermark" size="small" />
          </div>
        </el-collapse-item>
        <el-collapse-item title="顶栏">
          <div class="settings-item">
            <span>头部高度</span>
            <el-input-number v-model="headerHeight" :min="40" :max="80" size="small" />
          </div>
          <div class="settings-item">
            <span>固定头部</span>
            <el-switch v-model="fixedHeader" size="small" />
          </div>
          <div class="settings-item">
            <span>显示面包屑</span>
            <el-switch v-model="showBreadcrumb" size="small" />
          </div>
          <div class="settings-item">
            <span>显示面包屑图标</span>
            <el-switch v-model="showBreadcrumbIcon" size="small" />
          </div>
        </el-collapse-item>
        <el-collapse-item title="标签栏">
          <div class="settings-item">
            <span>标签页高度</span>
            <el-input-number v-model="TabsHeight" :min="30" :max="60" size="small" />
          </div>
          <div class="settings-item">
            <span>显示标签栏</span>
            <el-switch v-model="showTabs" size="small" />
          </div>
          <div class="settings-item">
            <span>显示标签栏图标</span>
            <el-switch v-model="showTabsIcon" size="small" />
          </div>
          <div class="settings-item">
            <span>开启标签拖拽</span>
            <el-switch v-model="draggable" size="small" />
          </div>
        </el-collapse-item>
        <el-collapse-item title="侧边栏">
          <div class="settings-item">
            <span>侧边栏宽度</span>
            <el-input-number v-model="sidebarWidth" :min="180" :max="360" size="small" />
          </div>
          <div class="settings-item">
            <span>只保持一个子菜单展开</span>
            <el-switch v-model="uniqueOpened" size="small" />
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-scrollbar>
    <div class="footer">
      <el-button plain type="primary" @click="save">
        <svg-icon icon="save" />
        保存配置
      </el-button>
      <el-button plain @click="reset">
        <svg-icon icon="refresh" />
        恢复默认
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
    .el-scrollbar {
      overflow: visible;

      .el-collapse {
        ::v-deep {
          .el-collapse-item__header {
            font-size: 14px;
            letter-spacing: 1px;
          }

          .el-collapse-item__wrap {
            .el-collapse-item__content {
              padding-bottom: 16px;

              .settings-item {
                padding: 4px 8px;
                color: var(--el-text-color-regular);
                display: flex;
                justify-content: space-between;

                .el-segmented {
                  padding: 4px;

                  .is-selected svg {
                    fill: var(--el-segmented-item-selected-color);
                  }

                  svg {
                    width: 30px;
                    fill: var(--el-segmented-color)
                  }
                }

                .el-select,
                .el-input-number {
                  width: 96px;
                }
              }
            }
          }
        }
      }

      ::v-deep .el-scrollbar__bar {
        width: 4px;
        right: -20px;
        opacity: 0.6;
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
