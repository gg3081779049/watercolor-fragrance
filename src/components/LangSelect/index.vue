<template>
    <el-dropdown trigger="click">
        <span>
            <svg-icon className="lang-icon" icon="lang" />
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item v-for="lang in langArray" :key="lang" @click="language = lang.key">
                    {{ lang.val }}
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
    data() {
        const context = require.context('@/locales/lang', false, /\.js$/)
        return {
            langArray: context.keys().map(key => {
                let k = key.replace(/^\.\/(.*)\.\w+$/, '$1')
                return {
                    key: k,
                    val: context(key).default.lang ?? k
                }
            })
        }
    },
    computed: { ...mapWritableState(useSettingsStore, ['language']) }
}
</script>

<style scoped>
    .lang-icon {
        width: 18px;
        height: 18px;
        fill: var(--navbar-icon-fill-color);
        cursor: pointer;
    }
</style>