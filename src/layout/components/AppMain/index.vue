<template>
  <section class="app-main">
    <router-view v-slot="{ Component, route }">
      <Transition mode="out-in" :name="route.meta?.transition || pageAnimateType || ''">
        <keep-alive :include="cachesTabs">
          <component :is="Component" :key="route.path" />
        </keep-alive>
      </Transition>
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
    ...mapState(useSettingsStore, ["pageAnimateType"]),
    ...mapState(useTabsStore, ["cachesTabs"])
  }
}
</script>

<style lang="scss" scoped>
  .app-main {
    width: 100%;
    height: 100%;
    background: var(--base-bg);
  }
</style>