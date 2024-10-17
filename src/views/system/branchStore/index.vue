<template>
  <div class="app-container">

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
      // 表格数据
      list: [],
      // 总条数
      total: 0,
      // 是否显示弹出层
      open: false,
      // 弹出层标题
      title: "",
      // 查询参数
      queryParams: {
        pageIndex: 0,
        pageSize: 10,
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
  methods: {
    getList() {
      this.loading = true
      getList(this.queryParams).then(res => {
        this.loading = false
        this.list = res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>