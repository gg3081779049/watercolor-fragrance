<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="{ icon, title } in metaList" :key="title">
      <svg-icon :icon="icon" v-if="showBreadcrumbIcon && icon" />
      {{ title }}
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
    metaList() {
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
