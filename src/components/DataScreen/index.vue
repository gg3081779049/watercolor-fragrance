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
        font-size: 18px;
        fill: var(--navbar-icon-fill-color);
        cursor: pointer;
    }
</style>