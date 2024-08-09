<template>
  <div class="app-container">
    <el-table v-loading="loading" :data="tree" row-key="id" :default-expand-all="isExpandAll">
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
          <el-button type="primary" link>
            <svg-icon icon="plus" />
            <span>新增</span>
          </el-button>
          <el-button type="primary" link @click="handleUpdate(scope.row)">
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
      <el-form ref="form" :model="form" :rules="rules" label-width="100px">
        <el-form-item label="上级菜单" prop="parentId">
          <el-tree-select v-model="form.parentId" :data="dirTree" value-key="id" placeholder="选择上级菜单">
            <template #default="{ data }">
              <span>{{ data.title }}</span>
            </template>
          </el-tree-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button>取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { getList, getItem, deleteItem } from '@/api/system/menu'
import { arrayToTree, filterTree } from '@/utils'

import IconSelect from '@/components/IconSelect'

export default {
  name: 'Menu',
  components: { IconSelect },
  data() {
    return {
      // 遮罩层
      loading: true,
      // 是否展开，默认全部折叠
      isExpandAll: false,
      // 是否显示弹出层
      open: false,
      // 弹出层标题
      title: "",
      // 菜单树
      tree: [],
      // 选中的数据
      selection: [],
      // 目录树
      dirTree: [],
      // 表单参数
      form: {},
      // 表单校验
      rules: {}
    }
  },
  created() {
    this.getTree()
  },
  methods: {
    /** 查询菜单树 */
    getTree() {
      this.loading = true
      getList().then(res => {
        this.loading = false
        this.tree = arrayToTree(res.data)
      })
    },
    getDirTree() {
      this.dirTree = [{
        id: 0,
        title: '根目录',
        hasChild: true,
        children: filterTree(JSON.parse(JSON.stringify(this.tree)), item => {
          return item.hasChild
        })
      }]
    },
    // 表单重置
    reset() {

    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.selection = selection
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset()
      this.getDirTree()
      getItem(row.id).then(res => {
        this.form = res.data
        this.open = true
        this.title = "修改菜单"
      })
    },
    /** 删除按钮操作 */
    handleDelete(rows) {
      this.$confirm(`是否确认删除"${rows.map(({ title }) => title)}"?`, '系统提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        return deleteItem(rows.map(({ id }) => id))
      }).then(() => {
        this.getTree()
        this.$message.success('删除成功')
      }).catch(() => { })
    }
  }
}
</script>

<style lang="scss" scoped></style>