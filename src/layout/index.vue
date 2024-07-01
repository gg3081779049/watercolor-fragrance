<template>

</template>

<script>
import { useSettingsStore } from '@/store/settings'
import { mapState } from 'pinia'

export default {
    name: "Layout",
    computed: {
        ...mapState(useSettingsStore, ["fixedHeader", "showTagsView", "watermark"])
    },
}
</script>

<style lang="scss" scoped></style>