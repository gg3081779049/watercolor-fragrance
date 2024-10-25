<template>
  <div class="page-401">
    <el-button class="back-btn" @click="back">{{ $t("common.back") }}</el-button>
    <el-row>
      <el-col :span="12">
        <h1 class="text-jumbo">{{ $t("page.page401.title") }}</h1>
        <h2 style="margin: 20px 0">{{ $t("page.page401.noaccess") }}</h2>
        <h6 style="margin: 25px 0">{{ $t("page.page401.noaccessDesc") }}</h6>
        <ul>
          <li class="link-type">
            <router-link to="/">{{ $t("common.backHome") }}</router-link>
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
import errGif from '@/assets/gif/401.gif'

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
