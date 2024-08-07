<template>
  <div class="app-container">
    <el-table v-loading="loading" :data="list" row-key="path" :default-expand-all="isExpandAll"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
      <el-table-column type="selection" width="40" align="center" />
      <el-table-column prop="title" label="菜单名称" width="160" show-overflow-tooltip />
      <el-table-column prop="icon" label="图标" width="100" align="center">
        <template #default="scope">
          <svg-icon :icon="scope.row.icon" />
        </template>
      </el-table-column>
      <el-table-column prop="path" label="路由" />
      <el-table-column label="状态" width="100" align="center">
        <template #default="{ row: { disabled, hidden } }">
          <el-tag :type="disabled ? 'danger' : hidden ? 'info' : 'success'">
            {{ disabled ? '停用' : hidden ? '隐藏' : '正常' }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="240" align="center">
        <template #default="scope">
          <span>{{ scope.row.createTime }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="240" align="center">
        <template #default="scope">
          <el-button type="primary" link :disabled="!scope.row.hasOwnProperty('children')">
            <svg-icon icon="plus" />
            <span>新增</span>
          </el-button>
          <el-button type="primary" link>
            <svg-icon icon="edit" />
            <span>修改</span>
          </el-button>
          <el-button type="primary" link @click="handleDelete([scope.row])">
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
import { getList, deleteItem } from '@/api/system/menu'
import { arrayToTree } from '@/utils'

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
      // 表单参数
      form: {},
    }
  },
  created() {
    this.getList()
  },
  methods: {
    /** 查询菜单列表 */
    getList() {
      this.loading = true
      getList().then(res => {
        this.list = arrayToTree(res.data)
        this.loading = false
      })
    },
    // 多选框选中数据
    handleSelectionChange(selection) {

    },
    /** 删除按钮操作 */
    handleDelete(row) {
      this.$confirm(`是否确认删除名称为"${row.map(({ title }) => title)}"的菜单项?`, '系统提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        return deleteItem(row.map(({ id }) => id))
      }).then(() => {
        this.getList()
        this.$message.success('删除成功')
      }).catch(() => { })
    }
  }
}
</script>

<style lang="scss" scoped></style>