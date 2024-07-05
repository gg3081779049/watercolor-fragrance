<template>
  <el-menu-item v-if="!item.children || item.children.length === 0" :index="'/' + item.path">
    <div class="menu-item">
      <SvgIcon :icon="item.meta.icon" />
    </div>
    <span>{{ item.meta.title }}</span>
  </el-menu-item>
  <el-sub-menu v-else :index="item.path">
    <template #title>
      <div class="menu-item">
        <SvgIcon :icon="item.meta.icon" />
      </div>
      <span>{{ item.meta.title }}</span>
    </template>
    <MenuItem v-for="item in item.children" :key="item.path" :item="item" />
  </el-sub-menu>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.menu-item {
    display: flex;
    align-items: center;
    svg {
        width: 1em;
        height: 1em;
        margin-right: 15px;
        fill: var(--sidebar-text-color);
    }
}
</style>