<template>
    <svg-icon icon="screen" @click="handleClick" />
</template>

<script>
export default {
    name: 'DataScreen',
    methods: {
        handleClick() {
            window.open('localhost:8088')
        }
    }
}
</script>

<style scoped>
    svg {
        width: 1em;
        height: 1em;
        fill: var(--navbar-icon-fill-color);
        cursor: pointer;
    }
</style>