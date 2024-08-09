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
        <el-form-item label="菜单名称" prop="title">
          <el-input v-model="form.title" placeholder="请输入菜单名称" />
        </el-form-item>
        <el-form-item label="菜单路由" prop="path">
          <el-input v-model="form.path" placeholder="请输入菜单路由" />
        </el-form-item>
        <el-form-item label="上级目录" prop="parentId">
          <el-tree-select v-model="form.parentId" :data="dirTree" placeholder="选择上级目录"
            :props="{ value: 'id', label: 'title', class: () => 'el-tree-select-node' }"
            :filter-node-method="(val, node) => node.hasChild && node.title.includes(val)" check-strictly filterable
            highlight-current>
            <template #default="{ data }">
              {{ data.title }}
              <span v-if="data.hasChild">({{ data.children.length }})</span>
            </template>
          </el-tree-select>
        </el-form-item>
        <el-form-item label="菜单图标" prop="icon">
          <IconSelect v-model="form.icon" />
        </el-form-item>
        <el-form-item label="显示排序" prop="order">
          <el-input-number v-model="form.order" controls-position="right" :min="0" />
        </el-form-item>
        <el-row>
          <el-col :span="12">
            <el-form-item label="菜单类型" prop="hasChild">
              <el-radio-group v-model="form.hasChild" style="margin-left: 12px">
                <el-radio :value="true">目录</el-radio>
                <el-radio :value="false">菜单</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="noCache">
              <template #label>
                <el-tooltip content="选择是则会被`keep-alive`缓存，需要匹配组件的`name`和地址保持一致" placement="top">
                  是否缓存
                </el-tooltip>
              </template>
              <el-radio-group v-model="form.noCache" style="margin-left: 12px">
                <el-radio :value="true">缓存</el-radio>
                <el-radio :value="false">不缓存</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item prop="hidden">
              <template #label>
                <el-tooltip content="选择隐藏则路由将不会出现在侧边栏，但仍然可以访问" placement="top">
                  是否隐藏
                </el-tooltip>
              </template>
              <el-radio-group v-model="form.hidden" style="margin-left: 12px">
                <el-radio :value="true">隐藏</el-radio>
                <el-radio :value="false">不隐藏</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="disabled">
              <template #label>
                <el-tooltip content="选择停用则路由将不会出现在侧边栏，也不能被访问" placement="top">
                  菜单状态
                </el-tooltip>
              </template>
              <el-radio-group v-model="form.disabled" style="margin-left: 12px">
                <el-radio :value="false">正常</el-radio>
                <el-radio :value="true">停用</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
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
import { arrayToTree } from '@/utils'

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
      rules: {
        title: [
          { required: true, message: "菜单名称不能为空", trigger: "blur" }
        ],
        path: [
          { required: true, message: "路由地址不能为空", trigger: "blur" }
        ]
      }
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
      this.dirTree = [{ id: 0, title: '根目录', hasChild: true, children: JSON.parse(JSON.stringify(this.tree)) }]
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

<style lang="scss" scoped>
  .el-tree-select-node {
    .el-select-dropdown__item {
      span {
        opacity: 0.6;
      }
    }
  }
</style>