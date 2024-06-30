<template>
  <el-watermark :content="show ? '水色天香' : null">
    <slot />
  </el-watermark>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>