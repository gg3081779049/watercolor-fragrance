<template>
    <div class="tabs-container" :style="{ height: `${TabsHeight}px` }">
        <ScrollPane ref="scrollPane" class="scroll-pane" @scroll="closeMenu">
            <TabLink v-for="tab in tabs" :key="tab" :route="tab" :show-icon="showTabsIcon" />
        </ScrollPane>
        <ul class="contextmenu" v-show="visible" :style="{ left: left + 'px', top: top + 'px' }">
            <li><svg-icon icon="close" />关闭当前</li>
            <li><svg-icon icon="close" />关闭其他</li>
            <li><svg-icon icon="left-arrow" />关闭左侧</li>
            <li><svg-icon icon="right-arrow" />关闭右侧</li>
            <li><svg-icon icon="circle-close" />全部关闭</li>
        </ul>
    </div>
</template>

<script>
import { useSettingsStore } from '@/store/modules/settings'
import { useTabsStore } from '@/store/modules/tabs'
import { mapState, mapActions } from 'pinia'

import ScrollPane from "./ScrollPane"
import TabLink from "./TabLink"

export default {
    name: 'Tabs',
    components: { ScrollPane, TabLink },
    data() {
        return {
            visible: false,
            left: 0,
            top: 0,
        }
    },
    computed: {
        ...mapState(useSettingsStore, ["TabsHeight", "showTabsIcon"]),
        ...mapState(useTabsStore, ["tabs"]),
        ...mapActions(useTabsStore, ["addTabs"])
    },
    mounted() {
        
    },
    methods: {
        closeMenu() {
            this.visible = false
        }
    },
    watch: {
        $route() {}
    }
}
</script>

<style lang="scss" scoped>
.tabs-container {
  width: 100%;
  height: 34px;
  border-bottom: 1px solid var(--el-border-color-light);
  box-sizing: border-box;
  background: var(--tabs-bg);
  position: relative;

  .contextmenu {
    padding: 5px 0;
    border-radius: 4px;
    background: var(--el-bg-color-overlay);
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
    font-size: 12px;
    font-weight: 400;
    position: absolute;
    list-style-type: none;
    z-index: 3000;
    cursor: pointer;
    li {
        margin: 0;
        padding: 7px 16px;
        color: var(--el-text-color-regular);
        svg {
            fill: var(--el-text-color-regular);
            margin-right: 5px;
        }
        &:hover {
            background: var(--el-color-primary-light-9);
            color: var(--el-color-primary);
            svg {
                fill: var(--el-color-primary);
            }
        }
    }
  }
}
</style>