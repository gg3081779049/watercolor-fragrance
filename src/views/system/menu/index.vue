<template>
  <div class="app-container">
    <el-table :data="list" :default-expand-all="isExpandAll" v-loading="loading">

    </el-table>
    <br>
    <IconSelect v-model="icon" />
  </div>
</template>

<script>
import IconSelect from '@/components/IconSelect'

export default {
  name: 'Menu',
  components: { IconSelect },
  data() {
    return {
      // 遮罩层
      loading: true,
      // 菜单树表格数据
      list: [],
      // 是否展开，默认全部折叠
      isExpandAll: false,
      icon: 'dept'
    }
  },
}
</script>

<style lang="scss" scoped></style>