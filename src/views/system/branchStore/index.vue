<template>
  <AppTable :loading="loading" :queryParams="queryParams" :data="list" :total="total" @select="handleSelect"
    @getList="getList" @reset="resetQuery">
    <template #buttonGroup>
      <el-button type="primary" size="small" plain @click="handleAdd">
        <SvgIcon icon="plus" />
        <span>新增</span>
      </el-button>
      <el-button type="danger" size="small" plain @click="handleDelete(selection)">
        <SvgIcon icon="delete" />
        <span>删除</span>
      </el-button>
    </template>
    <template #table>
      <el-table-column prop="id" label="编号" width="60" />
      <el-table-column prop="storeName" label="分店名称" width="200" align="center" />
      <el-table-column prop="storeManager" label="店长" />
      <el-table-column prop="contactNumber" label="联系电话" width="200" align="center" />
      <el-table-column prop="state" label="状态" width="100" align="center">
        <template #default="scope">

        </template>
      </el-table-column>
      <el-table-column label="操作" width="240" align="center">
        <template #default="scope">

        </template>
      </el-table-column>
    </template>
  </AppTable>
</template>

<script>
import { getList, getItem, deleteItem, addItem, updateItem } from '@/api/system/branchStore'

import AppTable from '@/components/AppTable'

export default {
  name: 'BranchStore',
  components: { AppTable },
  data() {
    return {
      loading: true,
      queryParams: {},
      list: [],
      total: 0
    }
  },
  methods: {
    getList() {
      this.loading = true
      getList(this.queryParams).then(res => {
        this.loading = false
        this.list = res.data.rows
        this.total = res.data.total
      })
    },
    resetQuery() {

    },
    handleSelect() {

    },
    handleAdd() {

    },
    handleDelete(row) {

    }
  }
}
</script>

<style lang="scss" scoped></style>