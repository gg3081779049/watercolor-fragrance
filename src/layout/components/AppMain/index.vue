<template>
  <section>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <keep-alive :include="cachesTabs">
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>

<script>
import { useTabsStore } from '@/store/modules/tabs'
import { mapState } from 'pinia'

export default {
  name: "AppMain",
  computed: {
    ...mapState(useTabsStore, ["cachesTabs"])
  }
}
</script>

<style lang="scss" scoped>
  .app-container {
    box-sizing: border-box;
    padding: 20px;
  }
</style>