<template>
    <component v-for="item in navToolbar" :key="item" :is="require(`@/components/${item.is}`).default"
        v-show="item.show" />
</template>

<script>
import { useSettingsStore } from '@/store/modules/settings'
import { mapState } from 'pinia'

export default {
    name: 'NavToolbar',
    computed: {
        ...mapState(useSettingsStore, ['navToolbar'])
    }
}
</script>