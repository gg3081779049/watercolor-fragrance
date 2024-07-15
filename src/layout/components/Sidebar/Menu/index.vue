<template>
    <el-menu :default-active="$route.path" :collapse="collapse" :unique-opened="uniqueOpened" router>
        <MenuItem v-for="route in sidebarRouteTree" :key="route" :item="route" />
    </el-menu>
</template>

<script>
import { useAppStore } from '@/store/modules/app'
import { useRouteStore } from '@/store/modules/route'
import { useSettingsStore } from '@/store/modules/settings'
import { mapState } from 'pinia'

import MenuItem from "./MenuItem"

export default {
    name: 'Menu',
    components: { MenuItem },
    computed: {
        ...mapState(useAppStore, ["collapse"]),
        ...mapState(useRouteStore, ["sidebarRouteTree"]),
        ...mapState(useSettingsStore, ["uniqueOpened"])
    }
}
</script>

<style lang="scss" scoped></style>
