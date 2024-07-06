<template>
  <div :class="`theme-switch theme-switch-${light ? 'light' : 'dark'}`" @click="light ^= true">
    <svg-icon icon="theme-switch-light" :style="{ transform: light ? 'scale(1) rotate(360deg)' : 'scale(0)' }" />
    <svg-icon icon="theme-switch-dark" :style="{ transform: light ? 'rotate(360deg) scale(0)' : '' }" />
  </div>
</template>

<script>
import { useSettingsStore } from '@/store/settings'
import { mapWritableState  } from 'pinia'

export default {
  name: "ThemeSwitch",
  computed: {
    ...mapWritableState (useSettingsStore, ["light"])
  }
};
</script>

<style lang="scss" scoped>
.theme-switch {
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

.theme-switch-light {
  background: #f0f0f0;
  border: 1px solid hsla(0, 0%, 33%, 0.651);
  &:hover {
    border: 1px solid hsl(0, 0%, 33%);
  }
}

.theme-switch-dark {
  background: #2f2f2f;
  border: 1px solid hsla(0, 0%, 66%, 0.651);
  &:hover {
    border: 1px solid hsl(0, 0%, 66%);
  }
}
</style>
