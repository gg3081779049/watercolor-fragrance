<template>
  <div class="app-container">
    <el-table :data="list" :default-expand-all="isExpandAll" v-loading="loading">

    </el-table>
    <!-- 添加或修改菜单对话框 -->
    <el-dialog v-model="open" :title="title" width="680px" append-to-body>

    </el-dialog>
  </div>
</template>

<script>

export default {
  name: 'Menu',
  data() {
    return {
      // 遮罩层
      loading: true,
      // 菜单树表格数据
      list: [],
      // 是否展开，默认全部折叠
      isExpandAll: false,
      // 是否显示弹出层
      open: false,
      // 弹出层标题
      title: "",
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.loading = true
    }
  }
}
</script>

<style lang="scss" scoped></style>