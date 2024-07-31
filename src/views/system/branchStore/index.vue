<template>
  <div class="app-container">

  </div>
</template>

<script>
import { getList, getItem, deleteItem, addItem, updateItem } from '@/api/system/branchStore'

export default {
  name: 'BranchStore',
  data() {
    return {
      // 遮罩层
      loading: false,
      // 总条数
      total: 0,
      // 表格数据
      list: []
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