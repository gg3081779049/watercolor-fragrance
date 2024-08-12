<template>
  <div class="app-container">
    <el-table v-loading="loading">
      <el-table-column type="selection" width="40" align="center" />
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Role',
  data() {
    return {
      // 遮罩层
      loading: true,
    }
  },
  created() {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped></style>