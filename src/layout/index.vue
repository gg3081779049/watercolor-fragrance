<template>
  <WaterMark :show="watermark">
    <component :is="layouts[layout]" />
  </WaterMark>
  <Settings v-model="showSettings" />
</template>

<script>
import { useAppStore } from '@/store/modules/app'
import { useSettingsStore } from '@/store/modules/settings'
import { mapState, mapWritableState } from 'pinia'

import WaterMark from "@/components/WaterMark"
import Settings from "@/layout/components/Settings"

import Vertical from "@/layout/layouts/Vertical"
import Horizontal from "@/layout/layouts/Horizontal"
import HorizontalMix from "@/layout/layouts/HorizontalMix"

export default {
  name: "Layout",
  components: { WaterMark, Settings },
  setup() {
    return {
      layouts: {
        'vertical': Vertical,
        "horizontal": Horizontal,
        "horizontalMix": HorizontalMix
      }
    }
  },
  computed: {
    ...mapState(useSettingsStore, ["theme", "mode", "layout", "language", "watermark"]),
    ...mapWritableState(useAppStore, ["showSettings"]),
  },
  mounted() {
    document.documentElement.className = `${this.theme} ${this.mode}`
    this.$i18n.locale = this.language
  },
  unmounted() {
    document.documentElement.className = ``
  }
}
</script>
