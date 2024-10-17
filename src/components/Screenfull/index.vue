<template>
  <svg-icon className="fullscreen" :icon="isFullscreen ? 'nav-exit-fullscreen' : 'nav-fullscreen'"
    @click="fullscreen" />
</template>

<script>
import screenfull from "screenfull"

export default {
  name: "Screenfull",
  data() {
    return {
      isFullscreen: screenfull.isFullscreen,
    }
  },
  mounted() {
    screenfull.on('change', this.changeIcon)
  },
  unmounted() {
    screenfull.off('change', this.changeIcon)
  },
  methods: {
    fullscreen() {
      if (screenfull.isEnabled) {
        screenfull.toggle()
      } else {
        this.$message({ message: this.$t('message.unsupportFullscreen'), type: "warning" })
      }
    },
    changeIcon() {
      this.isFullscreen = screenfull.isFullscreen
    }
  },
}
</script>

<style scoped>
  .fullscreen {
    width: 1em;
    height: 1em;
    fill: var(--navbar-icon-fill-color);
    cursor: pointer;
  }
</style>
