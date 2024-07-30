<template>
    <el-dropdown trigger="click">
        <svg-icon class="lang-icon" icon="lang" />
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item></el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script>
export default {
    name: 'LangSwitch'
}
</script>

<style scoped>
.lang-icon {
    font-size: 18px;
    fill: var(--navbar-icon-fill-color);
}
</style>