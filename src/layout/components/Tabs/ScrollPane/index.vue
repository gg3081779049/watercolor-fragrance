<template>
  <el-scrollbar class="scroll-container" :vertical="false" @wheel.native.prevent="handleScroll">
    <slot />
  </el-scrollbar>
</template>

<script>

export default {
  name: 'ScrollPane',
  data() {
    return {
      left: 0
    }
  },
  methods: {
    handleScroll(e) {
      let eventDelta = e.wheelDelta || -e.deltaY * 40
      this.$emit('scroll')
      this.$el.querySelector('.el-scrollbar__wrap').scrollLeft += eventDelta / 4
    }
  }
}
</script>

<style lang="scss" scoped>
  .scroll-container {
    width: 100%;
    height: inherit;
    white-space: nowrap;
    position: relative;
    overflow: hidden;

    ::v-deep {
      .el-scrollbar__bar {
        bottom: 0;
      }

      .el-scrollbar__wrap {
        height: inherit;

        .el-scrollbar__view {
          height: inherit;
          display: flex;
        }
      }
    }
  }
</style>