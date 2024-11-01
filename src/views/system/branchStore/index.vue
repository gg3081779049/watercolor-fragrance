<template>
  <div class="app-card m20">
    <!-- 查询条件 -->
    <el-collapse-transition>
      <el-form ref="queryForm" class="query-form" :model="queryParams" v-if="showSearch">
        <el-form-item label="分店名称" prop="storeName">
          <el-input v-model="queryParams.storeName" placeholder="请输入分店名称" clearable @keyup.enter="getList" />
        </el-form-item>
        <el-form-item label="店长" prop="storeManager">
          <el-input v-model="queryParams.storeManager" placeholder="请输入店长名称" clearable @keyup.enter="getList" />
        </el-form-item>
        <el-form-item label="详细地址" prop="address">
          <el-input v-model="queryParams.address" placeholder="请输入详细地址" clearable @keyup.enter="getList" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" plain @click="getList">
            <svg-icon icon="search" />
            <span>{{ $t('common.search') }}</span>
          </el-button>
          <el-button @click="resetQuery">
            <svg-icon icon="refresh" />
            <span>{{ $t('common.reset') }}</span>
          </el-button>
        </el-form-item>
      </el-form>
    </el-collapse-transition>

    <div class="flex-column g14 p14">
      <div class="flex">
        <el-button type="primary" size="small" plain @click="handleAdd">
          <svg-icon icon="plus" />
          <span>{{ $t('common.add') }}</span>
        </el-button>
        <el-button type="danger" size="small" plain @click="handleDelete(selection)">
          <svg-icon icon="delete" />
          <span>{{ $t('common.delete') }}</span>
        </el-button>
        <right-toolbar v-model:show-search="showSearch" v-model:column-keys="columnKeys" :columns="columns"
          @refresh="getList" />
      </div>

      <!-- 菜单表格 -->
      <app-table ref="app-table-ref" v-loading="loading" :data="list" :columnProps="columnKeys">
        <el-table-column type="selection" width="40" />
        <el-table-column prop="id" label="分店ID" width="80" />
        <el-table-column prop="storeName" label="分店名称" width="160" />
        <el-table-column prop="storeManager" label="店长" width="100" />
        <el-table-column prop="contactNumber" label="联系方式" width="160" />
        <el-table-column prop="address" label="详细地址" min-width="200" align="left" />
        <el-table-column prop="status" label="状态" width="100" />
        <el-table-column prop="createTime" label="创建时间" width="200">
          <template #default="{ row }">
            {{ $parseTime(new Date(row.createTime)) }}
          </template>
        </el-table-column>
        <el-table-column prop="operation" label="操作" width="160">
          <template #default="{ row }">
            <el-button type="info" link @click="handleUpdate">
              <svg-icon icon="edit" />
              <span>{{ $t('common.update') }}</span>
            </el-button>
            <el-button type="danger" link @click="handleDelete([row])">
              <svg-icon icon="delete" />
              <span>{{ $t('common.delete') }}</span>
            </el-button>
          </template>
        </el-table-column>
      </app-table>

      <!-- 页脚 -->
      <Pagination :total="total" v-model:current-page="queryParams.pageIndex" v-model:page-size="queryParams.pageSize"
        @change="getList" />
    </div>

    <!-- 添加或修改菜单对话框 -->
    <app-dialog v-model="open" :title="title" @closed="cancel" @confirm="submitForm">
      <el-form ref="form" :model="form" :rules="rules" label-width="100px">
        <el-form-item prop="storeName" label="分店名称">

        </el-form-item>
        <el-form-item prop="storeManager" label="店长">

        </el-form-item>
        <el-form-item prop="contactNumber" label="联系方式">

        </el-form-item>
        <el-form-item prop="address" label="详细地址">

        </el-form-item>
      </el-form>
    </app-dialog>
  </div>
</template>

<script>
import { getList, getItem, addItem, deleteItem, updateItem } from '@/api/system/branchStore'

export default {
  name: 'BranchStore',
  data() {
    return {
      // 遮罩层
      loading: true,
      // 对话框加载中
      dialogLoading: true,
      // 是否显示弹出层
      open: false,
      // 弹出层标题
      title: "",
      // 显示搜索栏
      showSearch: true,
      // 列设置
      columns: [],
      columnKeys: [
        'id',
        'storeName',
        'storeManager',
        'contactNumber',
        'address',
        'status',
        'createTime',
        'operation'
      ],
      // 菜单列表
      list: [],
      // 总条数
      total: 0,
      // 选中的数据
      selection: [],
      // 查询参数
      queryParams: {
        pageIndex: 1,
        pageSize: 10,
        storeName: '',
        storeManager: '',
        address: ''
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {}
    }
  },
  created() {
    this.getList()
  },
  mounted() {
    this.columns = this.$refs['app-table-ref']?.columns
      .filter(({ props }) => 'prop' in props)
      .map(({ props: { prop, label } }) => ({ value: prop, label }))
  },
  methods: {
    // 查询列表
    getList() {
      this.loading = true
      getList(this.queryParams).then(res => {
        this.loading = false
        this.list = res.data.rows
        this.total = res.data.total
      })
    },
    // 重置按钮操作
    resetQuery() {
      this.$refs['queryForm']?.resetFields()
      this.queryParams.storeName = ''
      this.queryParams.storeManager = ''
      this.queryParams.address = ''
      this.getList()
    },
    // 取消按钮
    cancel() {
      this.$refs['form']?.resetFields()
      this.form = {}
    },
    // 提交按钮
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id === undefined) {
            // 新增
          } else {
            // 修改
          }
        }
      })
    },
    // 多选框选中数据
    handleSelect(selection) {
      this.selection = selection
    },
    // 新增按钮操作
    handleAdd() {
      this.cancel()
      this.title = '新增分店'
      this.open = true
    },
    // 删除按钮操作
    handleDelete(rows) {
      if (rows.length === 0) return
      this.$modal.confirm.warning(`是否确认删除"${rows.map(({ storeName }) => storeName)}"?`).then(() => {
        return deleteItem(rows.map(({ id }) => id))
      }).then(() => {
        this.getList()
        this.$message.success('删除成功')
      })
    },
    // 导出按钮操作
    handleExport() { },
    // 修改按钮操作
    handleUpdate(row) { }
  }
}
</script>

<style lang="scss" scoped></style>