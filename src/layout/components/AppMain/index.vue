<template>
  <section :style="{ marginTop }">
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
    ...mapState(useSettingsStore, ["headerHeight", "fixedHeader", "TabsHeight", "showTabs"]),
    marginTop() {
      return `${this.fixedHeader * (this.headerHeight + this.showTabs * this.TabsHeight)}px`
    }
  }
}
</script>

<style lang="scss" scoped>
  .app-container {
    padding: 20px;
    box-sizing: border-box;
  }
</style>