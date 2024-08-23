<template>
    <component v-for="item in navToolbar" :key="item" :is="$.components[item]" />
</template>

<script>
import NavbarSearch from "@/components/NavbarSearch"
import Screenfull from "@/components/Screenfull"
import DataScreen from "@/components/DataScreen"
import LangSelect from "@/components/LangSelect"
import ThemeSwitch from "@/components/ThemeSwitch"

export default {
    name: 'NavToolbar',
    components: { NavbarSearch, Screenfull, DataScreen, LangSelect, ThemeSwitch },
    data() {
        return {
            navToolbar: ['NavbarSearch', 'Screenfull', 'DataScreen', 'LangSelect', 'ThemeSwitch']
        }
    },
}
</script>

<style lang="scss" scoped></style>