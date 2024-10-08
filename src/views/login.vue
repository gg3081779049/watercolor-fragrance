<template>
  <div class="login">
    <el-form class="login-form" ref="loginForm" :model="loginForm" :rules="loginRules">
      <h3 class="title">
        <img draggable="false" src="@/assets/images/logo.png" alt="logo">
        {{ $t('system.title') }}
      </h3>
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" type="text" auto-complete="off" :placeholder="$t('page.login.account')">
          <template #prefix>
            <svg-icon icon="user" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" type="password" auto-complete="off"
          :placeholder="$t('page.login.password')">
          <template #prefix>
            <svg-icon icon="lock" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="code" v-if="captcha">
        <el-input v-model="loginForm.code" auto-complete="off" :placeholder="$t('page.login.captcha')"
          style="width: 64%" @keyup.enter.native="handleLogin"><template #prefix>
            <svg-icon icon="validCode" />
          </template>
        </el-input>
        <div class="captcha-container">
          <img :src="codeUrl" @click="getCode" />
        </div>
      </el-form-item>
      <div class="box">
        <el-checkbox v-model="loginForm.rememberMe">
          {{ $t('page.login.remember') }}
        </el-checkbox>
        <router-link v-if="register" class="register-link" :to="'/register'">
          {{ $t('page.login.register') }}
        </router-link>
      </div>
      <el-button style="width:100%" type="primary" :loading="loading" auto-insert-space
        @click.native.prevent="handleLogin">
        {{ loading ? $t('page.login.logging') : $t('page.login.login') }}
      </el-button>
    </el-form>
    <span class="copyright">{{ $t('system.copyright') }}</span>
  </div>
</template>

<script>
import { getCodeImg } from "@/api/login"
import Cookies from "js-cookie"
import { encrypt, decrypt } from '@/utils/jsencrypt'
import { useAppStore } from '@/store/modules/app'
import { useUserStore } from '@/store/modules/user'

export default {
  name: 'Login',
  data() {
    return {
      title: useAppStore().title,
      codeUrl: "",
      loginForm: {
        username: "",
        password: "",
        rememberMe: false,
        code: "",
        uuid: ""
      },
      loginRules: {
        username: [{ required: true, trigger: "blur", message: this.$t('page.login.rules.account') }],
        password: [{ required: true, trigger: "blur", message: this.$t('page.login.rules.password') }],
        code: [{ required: true, trigger: "change", message: this.$t('page.login.rules.captcha') }],
      },
      loading: false,
      // 验证码开关
      captcha: false,
      // 注册开关
      register: true
    }
  },
  created() {
    this.getCode()
    this.getCookie()
  },
  methods: {
    getCode() {
      getCodeImg().then(res => {
        if (this.captcha) {
          this.codeUrl = res.img
          this.loginForm.uuid = res.uuid
        }
      })
    },
    getCookie() {
      let username = Cookies.get("username")
      let password = Cookies.get("password")
      let rememberMe = Cookies.get('rememberMe')
      this.loginForm = {
        username: username === undefined ? this.loginForm.username : username,
        password: password === undefined ? this.loginForm.password : decrypt(password),
        rememberMe: rememberMe === undefined ? false : Boolean(rememberMe)
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          if (this.loginForm.rememberMe) {
            Cookies.set("username", this.loginForm.username, { expires: 30 })
            Cookies.set("password", encrypt(this.loginForm.password), { expires: 30 })
            Cookies.set('rememberMe', this.loginForm.rememberMe, { expires: 30 })
          } else {
            Cookies.remove("username")
            Cookies.remove("password")
            Cookies.remove('rememberMe')
          }
          useUserStore().Login(this.loginForm).then(() => {
            this.$router.push({ path: this.$route.query && this.$route.query.redirect || "/" }).catch(() => { })
            // this.$notify.success({ title: '登录成功', message: `欢迎回来，${this.loginForm.username} !` })
          }).catch(() => {
            this.loading = false
            if (this.captcha) {
              this.getCode()
            }
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .login {
    width: 100vw;
    height: 100vh;
    background-image: url("@/assets/images/login-background.jpg");
    background-size: cover;
    position: relative;

    .login-form {
      width: 400px;
      height: auto;
      padding: 25px;
      border-radius: 6px;
      background: #fff;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      cursor: default;

      .title {
        margin-bottom: 25px;
        color: #707070;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6px;

        img {
          height: 24px;
          transform: translateY(1px);
        }
      }

      .el-input {
        height: 38px;

        svg {
          fill: #a8abb2;
        }
      }

      .captcha-container {
        width: 34%;
        height: 38px;
        background: rgba(0, 0, 0, 0.06);
        margin-left: 2%;
        border-radius: 4px;
        float: right;
        overflow: hidden;
        display: flex;
        align-items: center;

        img {
          width: 100%;
          cursor: pointer;
          vertical-align: middle;
        }
      }

      .box {
        margin-bottom: 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .register-link {
          margin-right: 8px;
          font-size: 14px;
          color: #337ab7;
          text-decoration: none;
          cursor: pointer;

          &:hover {
            color: rgb(32, 160, 255);
            text-decoration: underline;
          }
        }
      }
    }

    .copyright {
      color: #999;
      font-size: 12px;
      position: absolute;
      left: 50%;
      bottom: 18px;
      transform: translateX(-50%);
    }
  }
</style>
