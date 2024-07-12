<template>
    <router-link :class="['tab', { 'is-active': route.path === $route.path }]">
        <svg-icon :icon="route.meta.icon.at(-1)" v-if="showIcon && route.meta.icon" />
        {{ route.meta.title }}
        <svg-icon class="close-icon" icon="close" />
    </router-link>
</template>

<script>
export default {
    name: 'TabLink',
    props: {
        route: {
            type: Object,
            required: true
        },
        showIcon: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="css" scoped></style>