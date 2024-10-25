<template>
  <div class="app-card m20">
    <!-- 查询条件 -->
    <el-collapse-transition>
      <el-form ref="queryForm" class="query-form" :model="queryParams" v-if="showSearch">
        <el-form-item label="分店名称" prop="storeName">
          <el-input v-model="queryParams.storeName" placeholder="请输入分店名称" clearable @keyup.enter="getList" />
        </el-form-item>
        <el-form-item label="店长" prop="storeManager">
          <el-input v-model="queryParams.storeName" placeholder="请输入店长名称" clearable @keyup.enter="getList" />
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
      <button-group @add="handleAdd" @delete="handleDelete">
        <right-toolbar v-model:showSearch="showSearch" :columns="columnSettings" @refresh="getList" />
      </button-group>

      <!-- 菜单表格 -->
      <el-table class="app-table" v-loading="loading" :data="list" :tooltip-options="{ showAfter: 600 }" border>
        <el-table-column type="selection" width="40" align="center" />
        <el-table-column show-overflow-tooltip align="center" width="80" prop="id" label="分店ID" />
        <el-table-column show-overflow-tooltip align="center" width="160" prop="storeName" label="分店名称" />
        <el-table-column show-overflow-tooltip align="center" width="100" prop="storeManager" label="店长" />
        <el-table-column show-overflow-tooltip align="center" width="160" prop="contactNumber" label="联系方式" />
        <el-table-column show-overflow-tooltip align="left" min-width="200" prop="address" label="详细地址" />
        <el-table-column show-overflow-tooltip align="center" width="100" prop="status" label="状态" />
        <el-table-column show-overflow-tooltip align="center" width="200" prop="createTime" label="创建时间">
          <template #default="{ row }">
            {{ $parseTime(new Date(row.createTime)) }}
          </template>
        </el-table-column>
        <el-table-column show-overflow-tooltip align="center" width="200" prop="operation" label="操作">
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
      </el-table>

      <!-- 页脚 -->
      <Pagination :total="total" v-model:current-page="queryParams.pageIndex" v-model:page-size="queryParams.pageSize"
        @change="getList" />
    </div>

    <!-- 添加或修改菜单对话框 -->
    <app-dialog v-model="open" :title="title" @closed="cancel" @confirm="submitForm">
      <el-form ref="form" :model="form" :rules="rules" label-width="100px">

      </el-form>
    </app-dialog>
  </div>
</template>

<script lang="jsx">
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
        storeName: '',
        address: ''
      },
      // 表单参数
      form: {},
      // 列设置
      columnSettings: {
        id: { label: '分店ID', value: true },
        storeName: { label: '分店名称', value: true },
      },
      // 表单校验
      rules: {}
    }
  },
  created() {
    this.getList()
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
    },
    // 取消按钮
    cancel() {
      this.$refs['form']?.resetFields()
      this.form = {

      }
    },
    // 提交按钮
    submitForm() { },
    // 多选框选中数据
    handleSelect(selection) {
      this.selection = selection
    },
    // 新增按钮操作
    handleAdd() { },
    // 删除按钮操作
    handleDelete(rows) { },
    // 导出按钮操作
    handleExport() { },
    // 修改按钮操作
    handleUpdate(row) { }
  }
}
</script>

<style lang="scss" scoped></style>