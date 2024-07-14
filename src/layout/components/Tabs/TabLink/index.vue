<template>
    <router-link :class="['tab', { 'is-active': route.path === $route.path }]"
        :to="{ path: route.path, query: route.query, fullPath: route.fullPath }"
        @click.middle="close">
        <svg-icon :icon="route.meta.icon.at(-1)" v-if="showIcon && route.meta.icon" />
        <span>{{ route.meta.title.at(-1) }}</span>
        <svg-icon class="close-icon" icon="close" v-if="showClose" @click.prevent.stop="close" />
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
        },
        showClose: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        close() {
            if (this.showClose) {
                this.$emit('close')
            }
        }
    }
}
</script>

<style lang="css" scoped>
.tab {
    text-decoration: none;
    cursor: pointer;
}
</style>