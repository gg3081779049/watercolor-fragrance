<template>
  <div class="page-404">
    <div class="page-404-container">
      <div class="pic-404">
        <img class="pic-404__parent" src="@/assets/images/404.png" alt="404">
        <img class="pic-404__child left" src="@/assets/images/404_cloud.png" alt="404">
        <img class="pic-404__child mid" src="@/assets/images/404_cloud.png" alt="404">
        <img class="pic-404__child right" src="@/assets/images/404_cloud.png" alt="404">
      </div>
      <div class="bullshit">
        <div class="bullshit__oops">404错误!</div>
        <div class="bullshit__headline">找不到页面！</div>
        <div class="bullshit__info">
          对不起，您正在寻找的页面不存在。尝试检查URL的错误，然后按浏览器上的刷新按钮或尝试在我们的应用程序中找到其他内容。
        </div>
        <router-link to="/" class="bullshit__return-home">返回首页</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Page404'
}
</script>

<style lang="scss" scoped>
.page-404 {
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%,-50%);
  .page-404-container {
    width: 1200px;
    padding: 0 50px;
    overflow: hidden;
    position: relative;
    .pic-404 {
      width: 600px;
      float: left;
      overflow: hidden;
      position: relative;
      &__parent {
        width: 100%;
      }
      &__child {
        position: absolute;
        &.left {
          width: 80px;
          left: 220px;
          top: 17px;
          opacity: 0;
          animation: cloudLeft 2s linear 1s forwards;
        }
        &.mid {
          width: 46px;
          left: 420px;
          top: 10px;
          opacity: 0;
          animation: cloudMid 2s linear 1.2s forwards;
        }
        &.right {
          width: 62px;
          left: 500px;
          top: 100px;
          opacity: 0;
          animation: cloudRight 2s linear 1s forwards;
        }
          @keyframes cloudLeft {
          0% {
            top: 17px;
            left: 220px;
            opacity: 0;
          }
          20% {
            top: 33px;
            left: 188px;
            opacity: 1;
          }
          80% {
            top: 81px;
            left: 92px;
            opacity: 1;
          }
          100% {
            top: 97px;
            left: 60px;
            opacity: 0;
          }
        }
        @keyframes cloudMid {
          0% {
            top: 10px;
            left: 420px;
            opacity: 0;
          }
          20% {
            top: 40px;
            left: 360px;
            opacity: 1;
          }
          70% {
            top: 130px;
            left: 180px;
            opacity: 1;
          }
          100% {
            top: 160px;
            left: 120px;
            opacity: 0;
          }
        }
        @keyframes cloudRight {
          0% {
            top: 100px;
            left: 500px;
            opacity: 0;
          }
          20% {
            top: 120px;
            left: 460px;
            opacity: 1;
          }
          80% {
            top: 180px;
            left: 340px;
            opacity: 1;
          }
          100% {
            top: 200px;
            left: 300px;
            opacity: 0;
          }
        }
      }
    }
    .bullshit {
      position: relative;
      float: left;
      width: 300px;
      padding: 30px 0;
      overflow: hidden;
      &__oops {
        font-size: 32px;
        font-weight: bold;
        line-height: 40px;
        color: #1482f0;
        opacity: 0;
        margin-bottom: 20px;
        animation: slideUp 0.5s forwards;
      }
      &__headline {
        font-size: 20px;
        line-height: 24px;
        color: #222;
        font-weight: bold;
        opacity: 0;
        margin-bottom: 10px;
        animation: slideUp 0.5s forwards;
        animation-delay: 0.1s;
      }
      &__info {
        text-indent: 2em;
        font-size: 13px;
        line-height: 21px;
        color: grey;
        opacity: 0;
        margin-bottom: 30px;
        animation: slideUp 0.5s forwards;
        animation-delay: 0.2s;
      }
      &__return-home {
        display: block;
        float: left;
        width: 110px;
        height: 36px;
        background: #1482f0;
        border-radius: 100px;
        text-align: center;
        color: #ffffff;
        opacity: 0;
        font-size: 14px;
        line-height: 36px;
        cursor: pointer;
        animation: slideUp 0.5s forwards;
        animation-delay: 0.3s;
      }
      @keyframes slideUp {
        0% {
          transform: translateY(60px);
          opacity: 0;
        }
        100% {
          transform: translateY(0);
          opacity: 1;
        }
      }
    }
  }
}
</style>
