<template>
  <div class="page-401">
    <el-button class="back-btn" @click="back">返回</el-button>
    <el-row>
      <el-col :span="12">
        <h1 class="text-jumbo">
          401错误!
        </h1>
        <h2 style="margin: 20px 0">您没有访问权限！</h2>
        <h6 style="margin: 25px 0">对不起，您没有访问权限，请不要进行非法操作！您可以返回主页面</h6>
        <ul>
          <li class="link-type">
            <router-link to="/">
              回到首页
            </router-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="12">
        <img :src="errGif" width="313" height="428" alt="Girl has dropped her ice cream.">
      </el-col>
    </el-row>
  </div>
</template>

<script>
import errGif from '@/assets/images/401.gif'

export default {
  name: 'Page401',
  data() {
    return {
      errGif: errGif + '?' + +new Date()
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.page-401 {
  width: 800px;
  max-width: 100%;
  margin: 100px auto;
  .back-btn {
    border: none !important;
    background: #008489;
    color: #fff;
  }
  .text-jumbo {
    margin: 40px 0;
    font-size: 60px;
    font-weight: 700;
    color: #484848;
  }
  ul {
    font-size: 14px;
    li {
      padding-bottom: 5px;
    }
    a {
      color: #008489;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
