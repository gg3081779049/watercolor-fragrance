<template>
    <el-dropdown class="lang-select" trigger="click">
        <span>
            <svg-icon className="lang-icon" icon="lang" />
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item v-for="val, key in $tm('settings.options.language')" :key="key"
                    :style="{ color: language === key ? 'var(--el-color-primary)' : '' }" @click="language = key">
                    {{ val }}
                </el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script>
import { useSettingsStore } from '@/store/modules/settings'
import { mapWritableState } from 'pinia'

export default {
    name: 'LangSwitch',
    computed: {
        ...mapWritableState(useSettingsStore, ['language'])
    }
}
</script>

<style lang="scss" scoped>
    .lang-select {
        svg {
            width: 18px;
            height: 18px;
            fill: var(--navbar-icon-fill-color);
            cursor: pointer;
        }
    }
</style>