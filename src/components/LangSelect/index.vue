<template>
    <el-dropdown trigger="click">
        <span>
            <svg-icon class="lang-icon" icon="lang" />
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click="language = 'zh'">简体中文</el-dropdown-item>
                <el-dropdown-item @click="language = 'en'">English</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script>
import { useSettingsStore } from '@/store/modules/settings'
import { mapWritableState } from 'pinia'

export default {
    name: 'LangSwitch',
    computed: { ...mapWritableState(useSettingsStore, ['language']) }
}
</script>

<style scoped>
    .lang-icon {
        font-size: 18px;
        fill: var(--navbar-icon-fill-color);
        cursor: pointer;
    }
</style>