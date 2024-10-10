<template>
    <el-dropdown class="lang-select" trigger="click">
        <span>
            <svg-icon className="lang-icon" icon="lang" />
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item v-for="lang in settingsOptions.language" :key="lang" @click="language = lang"
                    :style="{ color: language === lang ? 'var(--el-color-primary)' : '' }">
                    {{ $t(`settings.options.language.${lang}`) }}
                </el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script>
import { useSettingsStore, settingsOptions } from '@/store/modules/settings'
import { mapWritableState } from 'pinia'

export default {
    name: 'LangSwitch',
    data: () => ({ settingsOptions }),
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