<template>
    <svg-icon icon="hamburger" className="hamburger" :style="{ transform: `rotate(${appStore.collapse ? 0 : 180}deg)` }"
        @click="appStore.collapse = !appStore.collapse" />
</template>

<script>
import { useAppStore } from '@/store/modules/app'
import { mapStores  } from 'pinia'

export default {
    name: 'Hamburger',
    computed: {
        ...mapStores(useAppStore),
    }
}
</script>

<style scoped>
.hamburger {
  width: 20px;
  height: 20px;
  fill: var(--navbar-icon-fill-color);
}
</style>
