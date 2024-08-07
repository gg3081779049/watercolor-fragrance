<template>
  <div class="register">
    <span class="copyright">Copyright © 2024 watercolor-fragrance All Rights Reserved.</span>
  </div>
</template>

<script>
export default {
  name: 'Register',
  mounted() {
    this.$alert("<font color='red'>当前系统没有开启注册功能！</font>", "系统提示", {
      confirmButtonText: '返回',
      dangerouslyUseHTMLString: true,
      showClose: false,
      type: 'error'
    }).then(() => {
      this.$router.push("/login")
    }).catch(() => { })
  }
}
</script>

<style lang="scss" scoped>
  .register {
    width: 100vw;
    height: 100vh;
    background-image: url("@/assets/images/login-background.jpg");
    background-size: cover;
    position: relative;

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