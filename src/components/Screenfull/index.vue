<template>
  <svg-icon :icon="isFullscreen ? 'nav-exit-fullscreen' : 'nav-fullscreen'" @click="toggle" />
</template>

<script>
import screenfull from "screenfull"

export default {
  name: "Screenfull",
  data() {
    return {
      isFullscreen: false,
    }
  },
  methods: {
    toggle() {
      if (screenfull.isEnabled) {
        screenfull.toggle()
        this.isFullscreen ^= true
      } else {
        this.$message({ message: "你的浏览器不支持全屏", type: "warning" })
      }
    },
  },
};
</script>

<style scoped>
  svg {
    width: 1em;
    height: 1em;
    fill: var(--navbar-icon-fill-color);
    cursor: pointer;
  }
</style>
