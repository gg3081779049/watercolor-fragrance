<template>
  <div class="app-container">
    <el-table v-loading="loading" :data="list" row-key="path" :default-expand-all="isExpandAll">
      <el-table-column prop="title" label="菜单名称" width="160" show-overflow-tooltip></el-table-column>
      <el-table-column prop="icon" label="图标" width="100">
        <template #default="scope">
          <svg-icon :icon="scope.row.icon" fill="var(--el-text-color-regular)" />
        </template>
      </el-table-column>
      <el-table-column prop="path" label="路径"></el-table-column>
      <el-table-column label="状态">
        <template #default="scope">
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" align="center">
        <template #default="scope">
          <span>{{ scope.row.createTime }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="240" align="center">
        <template #default="scope">
          <el-button link>
            <svg-icon icon="plus" />
            <span>新增</span>
          </el-button>
          <el-button link>
            <svg-icon icon="edit" />
            <span>修改</span>
          </el-button>
          <el-button link>
            <svg-icon icon="delete" />
            <span>删除</span>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 添加或修改菜单对话框 -->
    <el-dialog v-model="open" :title="title" width="680px" append-to-body>

    </el-dialog>
  </div>
</template>

<script>
import { getList } from '@/api/system/menu'

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
      getList().then(res => {
        this.list = res.data
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>