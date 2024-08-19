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
  }
</style>