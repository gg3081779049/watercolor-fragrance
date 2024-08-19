<template>
  <section class="app-main">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <keep-alive :include="showTabs ? cachesTabs : []">
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>

<script>
import { useSettingsStore } from '@/store/modules/settings'
import { useTabsStore } from '@/store/modules/tabs'
import { mapState } from 'pinia'

export default {
  name: "AppMain",
  computed: {
    ...mapState(useTabsStore, ["cachesTabs"]),
    ...mapState(useSettingsStore, ["showTabs"])
  }
}
</script>

<style lang="scss" scoped>
  .app-main {
    background: var(--base-bg);

    .app-container {
      padding: 20px;
      background: var(--base-bg);
      box-sizing: border-box;
    }
  }

  .fullscreen {
    overflow-y: scroll;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 9999;

    &::-webkit-scrollbar {
      width: 6px;

      &-thumb {
        border-radius: 3px;
        background: var(--el-color-info-light-7);
        cursor: pointer;

        &:hover {
          background: var(--el-color-info-light-5);
        }
      }
    }
  }
</style>