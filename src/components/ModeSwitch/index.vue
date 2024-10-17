<template>
  <div :class="`mode-switch mode-switch-${mode}`" @click="toggleMode">
    <svg-icon icon="mode-switch-light"
      :style="{ transform: mode === 'light' ? 'scale(1) rotate(360deg)' : 'scale(0)' }" />
    <svg-icon icon="mode-switch-dark" :style="{ transform: mode === 'light' ? 'rotate(360deg) scale(0)' : '' }" />
  </div>
</template>

<script>
import { useSettingsStore } from '@/store/modules/settings'
import { mapWritableState } from 'pinia'

export default {
  name: "ModeSwitch",
  computed: {
    ...mapWritableState(useSettingsStore, ["mode"])
  },
  methods: {
    toggleMode() {
      this.mode = this.mode === "light" ? "dark" : "light"
    }
  }
}
</script>

<style lang="scss" scoped>
  .mode-switch {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    user-select: none;
    cursor: pointer;

    svg {
      width: 14px;
      height: 14px;
      grid-column: 1 / 1;
      grid-row: 1 / 1;
      fill: var(--navbar-icon-fill-color);
      transition: transform 500ms;
    }
  }

  .mode-switch-light {
    background: #f0f0f0;
    border: 1px solid var(--navbar-icon-fill-color);
  }

  .mode-switch-dark {
    background: #2f2f2f;
    border: 1px solid hsla(0, 0%, 66%, 0.651);

    &:hover {
      border: 1px solid hsl(0, 0%, 66%);
    }
  }
</style>
