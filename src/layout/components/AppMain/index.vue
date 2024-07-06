<template>
  <section>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <keep-alive :include="[]">
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>

<script>
export default {
    name: "AppMain",
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.app-container {
  box-sizing: border-box;
  padding: 20px;
}
</style>