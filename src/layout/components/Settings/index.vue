<template>
  <el-drawer class="drawer-container" size="320" :title="$t('settings.title')" append-to-body>
    <el-scrollbar style="height:calc(100% - 52.8px)">
      <el-collapse>
        <el-collapse-item :title="$t('settings.subTitles.system')">
          <LayoutSelect v-model="layout" :options="settingsOptions.layout" />
          <br>
          <div class="settings-item">
            <span>{{ $t('settings.subTitles.mode') }}</span>
            <el-segmented v-model="mode" :options="settingsOptions.mode" size="small">
              <template #default="{ item }">
                <svg-icon :icon="`theme-switch-${item}`" />
              </template>
            </el-segmented>
          </div>
          <div class="settings-item">
            <span>{{ $t('settings.subTitles.language') }}</span>
            <el-select v-model="language" placeholder="语言" size="small">
              <template #prefix>
                <svg-icon icon="global" />
              </template>
              <el-option v-for="lang in settingsOptions.language" :key="lang"
                :label="$t(`settings.options.language.${lang}`)" :value="lang" />
            </el-select>
          </div>
          <div class="settings-item">
            <span>{{ $t('settings.subTitles.watermark') }}</span>
            <el-switch v-model="watermark" size="small" />
          </div>
        </el-collapse-item>
        <el-collapse-item :title="$t('settings.subTitles.navbar')">
          <div class="settings-item">
            <span>{{ $t('settings.subTitles.headerHeight') }}</span>
            <el-input-number v-model="headerHeight" :min="40" :max="80" :step="5" size="small" />
          </div>
          <div class="settings-item">
            <span>{{ $t('settings.subTitles.fixedHeader') }}</span>
            <el-switch v-model="fixedHeader" size="small" />
          </div>
          <div class="settings-item">
            <span>{{ $t('settings.subTitles.showBreadcrumb') }}</span>
            <el-switch v-model="showBreadcrumb" size="small" />
          </div>
          <div class="settings-item">
            <span>{{ $t('settings.subTitles.showBreadcrumbIcon') }}</span>
            <el-switch v-model="showBreadcrumbIcon" size="small" />
          </div>
        </el-collapse-item>
        <el-collapse-item :title="$t('settings.subTitles.navToolbar')">
          <VueDraggable v-model="navToolbar" :animation="150" handle=".handle" ghostClass="ghost">
            <div :class="['settings-item', 'nav-toolbar-item', { 'disabled': !item.show }]" v-for="item in navToolbar"
              :key="item.is">
              <div>
                <svg-icon class="handle" :icon="item.icon" />
                <span>{{ $t(`settings.options.navToolbar.${item.is}`) }}</span>
              </div>
              <el-switch v-model="item.show" size="small" />
            </div>
          </VueDraggable>
        </el-collapse-item>
        <el-collapse-item :title="$t('settings.subTitles.tabs')">
          <div class="settings-item">
            <span>{{ $t('settings.subTitles.tabsHeight') }}</span>
            <el-input-number v-model="tabsHeight" :min="30" :max="60" :step="2" size="small" />
          </div>
          <div class="settings-item">
            <span>{{ $t('settings.subTitles.tabsStyle') }}</span>
            <el-select v-model="tabsStyle" :placeholder="$t('settings.subTitles.tabsStyle')" size="small">
              <template #prefix>
                <svg-icon icon="tag" />
              </template>
              <el-option v-for="style in settingsOptions.tabsStyle" :key="style"
                :label="$t(`settings.options.tabsStyle.${style}`)" :value="style" />
            </el-select>
          </div>
          <div class="settings-item">
            <span>{{ $t('settings.subTitles.showTabs') }}</span>
            <el-switch v-model="showTabs" size="small" />
          </div>
          <div class="settings-item">
            <span>{{ $t('settings.subTitles.showTabsIcon') }}</span>
            <el-switch v-model="showTabsIcon" size="small" />
          </div>
          <div class="settings-item">
            <span>{{ $t('settings.subTitles.draggable') }}</span>
            <el-switch v-model="draggable" size="small" />
          </div>
        </el-collapse-item>
        <el-collapse-item :title="$t('settings.subTitles.sidebar')">
          <div class="settings-item">
            <span>{{ $t('settings.subTitles.sidebarWidth') }}</span>
            <el-input-number v-model="sidebarWidth" :min="180" :max="360" :step="5" size="small" />
          </div>
          <div class="settings-item">
            <span>{{ $t('settings.subTitles.uniqueOpened') }}</span>
            <el-switch v-model="uniqueOpened" size="small" />
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-scrollbar>
    <div class="footer">
      <el-button plain type="primary" @click="save">
        <svg-icon icon="save" />
        {{ $t('settings.configOperation.save') }}
      </el-button>
      <el-button plain @click="reset">
        <svg-icon icon="refresh" />
        {{ $t('settings.configOperation.reset') }}
      </el-button>
    </div>
  </el-drawer>
</template>

<script>
import settings from "@/settings.js"
import { useSettingsStore, settingsOptions } from '@/store/modules/settings'
import { mapWritableState } from 'pinia'

import LayoutSelect from '@/components/LayoutSelect'
import { VueDraggable } from 'vue-draggable-plus'

export default {
  name: "Settings",
  components: { LayoutSelect, VueDraggable },
  data: () => ({ settingsOptions }),
  computed: {
    ...mapWritableState(useSettingsStore, Object.keys(settings))
  },
  methods: {
    save() {
      this.$model.openLoading("正在保存到本地，请稍候...")
      useSettingsStore().saveSettings()
      setTimeout(() => this.$model.closeLoading(), 800)
    },
    reset() {
      this.$model.openLoading("正在清除设置，请稍候...")
      useSettingsStore().resetSettings()
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
                    width: 32px;
                    fill: var(--el-segmented-color)
                  }
                }

                .el-select,
                .el-input-number {
                  width: 100px;
                }
              }

              .nav-toolbar-item {
                margin-bottom: 5px;
                border-radius: 4px;
                background: var(--el-color-info-light-9);

                &:last-child {
                  margin-bottom: 0;
                }

                div {
                  display: flex;
                  align-items: center;
                  gap: 8px;

                  svg {
                    cursor: move;
                  }

                  span {
                    cursor: pointer;
                  }
                }
              }

              .disabled {
                color: var(--el-text-color-placeholder);
              }

              .ghost {
                opacity: 0;
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
