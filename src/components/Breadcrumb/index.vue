<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item in meta" :key="item">
      <svg-icon :icon="item.icon" v-if="showBreadcrumbIcon && item.icon" />
      {{ item.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import { useSettingsStore } from '@/store/modules/settings'
import { mapState } from 'pinia'

export default {
  name: "Breadcrumb",
  computed: {
    ...mapState(useSettingsStore, ["showBreadcrumbIcon"]),
    meta() {
      return this.$route.meta.title.map((title, i) => ({ title, icon: this.$route.meta.icon[i] }))
    },
  }
}
</script>

<style scoped>
  .el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;

    svg {
      fill: var(--el-text-color-regular);
    }
  }
</style>
