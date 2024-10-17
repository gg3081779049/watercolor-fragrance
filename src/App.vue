<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { useSettingsStore } from '@/store/modules/settings'

export default {
  name: 'App',
  mounted() {
    this.$i18n.locale = useSettingsStore().language
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
</style>
