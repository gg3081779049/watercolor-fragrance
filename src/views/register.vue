<template>
  <div class="register">
    <span class="copyright">{{ $t('system.copyright') }}</span>
  </div>
</template>

<script>
export default {
  name: 'Register',
  mounted() {
    this.$alert(`<font color='red'>${this.$t('page.register.systemTipDesc')}</font>`, this.$t('common.systemTip'), {
      confirmButtonText: this.$t('common.back'),
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