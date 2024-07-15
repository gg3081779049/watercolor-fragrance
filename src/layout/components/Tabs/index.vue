<template>
    <div class="tabs-container" :style="{ height: `${TabsHeight}px` }">
        <ScrollPane ref="scrollPane" class="scroll-pane" @scroll="closeMenu">
            <TabLink 
                ref="tab"
                v-for="tab in tabs"
                :key="tab"
                :route="tab"
                :draggable="draggable"
                :show-icon="showTabsIcon"
                :show-close="tab.name !== defaultTab"
                @contextmenu.prevent="openMenu($event, tab)"
                @close="closeTab(tab)" />
        </ScrollPane>
        <ul class="contextmenu" v-show="visible" :style="{ left: left + 'px', top: top + 'px' }">
            <li @click="closeTab(selectedTab)" v-if="showCloseTab"><svg-icon icon="close" />关闭当前</li>
            <li @click="closeOthersTabs" v-if="showCloseOthersTabs"><svg-icon icon="close" />关闭其他</li>
            <li @click="closeLeftTabs" v-if="showCloseLeftTabs"><svg-icon icon="left-arrow" />关闭左侧</li>
            <li @click="closeRightTabs" v-if="showCloseRightTabs"><svg-icon icon="right-arrow" />关闭右侧</li>
            <li @click="closeAllTabs" v-if="showCloseAllTabs"><svg-icon icon="circle-close" />全部关闭</li>
        </ul>
    </div>
</template>

<script>
import { useSettingsStore } from '@/store/modules/settings'
import { useTabsStore } from '@/store/modules/tabs'
import { mapState, mapActions } from 'pinia'
import { useDraggable } from "vue-draggable-plus"

import ScrollPane from "./ScrollPane"
import TabLink from "./TabLink"

export default {
    name: 'Tabs',
    components: { ScrollPane, TabLink },
    data() {
        return {
            left: 0,
            top: 0,
            visible: false,
            selectedTab: {},
            draggableInstance: {}
        }
    },
    computed: {
        ...mapState(useSettingsStore, ["TabsHeight", "showTabsIcon", "draggable"]),
        ...mapState(useTabsStore, ["tabs", "defaultTab"]),
        currentTabIndex() {
            return this.tabs.findIndex(t => t.path === this.$route.path)
        },
        selectedTabIndex() {
            return this.tabs.findIndex(t => t.path === this.selectedTab.path)
        },
        defaultTabIndex() {
            return this.tabs.findIndex(t => t.name === this.defaultTab)
        },
        showCloseTab() {
            return this.selectedTabIndex !== this.defaultTabIndex
        },
        showCloseOthersTabs() {
            return this.tabs.length - 1 - (this.selectedTabIndex !== this.defaultTabIndex)
        },
        showCloseLeftTabs() {
            return this.selectedTabIndex > (this.selectedTabIndex > this.defaultTabIndex)
        },
        showCloseRightTabs() {
            return this.tabs.length - this.selectedTabIndex > (this.selectedTabIndex < this.defaultTabIndex ? 2 : 1)
        },
        showCloseAllTabs() {
            return this.tabs.length > 1
        },
    },
    mounted() {
        this.init()
        this.addTab(this.$route)
        this.draggableInstance = useDraggable(this.$refs.scrollPane.$el.querySelector(".el-scrollbar__view"), this.tabs, {
            animation: 150,
            ghostClass: "ghost"
        })
        this.draggableInstance[this.draggable ? 'start' : 'pause']()
        document.body.addEventListener("click", this.closeMenu)
    },
    unmounted() {
        document.body.removeEventListener("click", this.closeMenu)
    },
    methods: {
        ...mapActions(useTabsStore, ["init", "addTab", "delTabs"]),
        openMenu(e, tab) {
            this.left = Math.min(e.clientX - this.$el.getBoundingClientRect().left + 15, this.$el.offsetWidth - 105)
            this.top = e.clientY - 50
            this.visible = true
            this.selectedTab = tab
        },
        closeMenu() {
            this.visible = false
        },
        moveToCurrentTab() {
            const tabs = this.$refs.tab
            this.$nextTick(() => {
                for (const [index, tab] of tabs.entries()) {
                    if (tab.route.path === this.$route.path) {
                        const scrollContainer = this.$el.querySelector(".scroll-container")
                        const scrollWrapper = scrollContainer.querySelector(".el-scrollbar__wrap")

                        let containerWidth = scrollContainer.offsetWidth
                        let tabAndTabSpacing = 4
                        let firstTab = null
                        let lastTab = null
                        let prevTab = tabs[index - 1]
                        let nextTab = tabs[index + 1]

                        if (tabs.length) {
                            firstTab = tabs[0]
                            lastTab = tabs.at(-1)
                        }

                        if (firstTab === tab) {
                            scrollWrapper.scrollLeft = 0
                        } else if (lastTab === tab) {
                            scrollWrapper.scrollLeft = scrollWrapper.scrollWidth - containerWidth
                        } else {
                            let afterNextTabOffsetLeft = nextTab.$el.offsetLeft + nextTab.$el.offsetWidth + tabAndTabSpacing
                            let beforePrevTabOffsetLeft = prevTab.$el.offsetLeft - tabAndTabSpacing

                            if (afterNextTabOffsetLeft > scrollWrapper.scrollLeft + containerWidth) {
                                scrollWrapper.scrollLeft = afterNextTabOffsetLeft - containerWidth
                            } else if (beforePrevTabOffsetLeft < scrollWrapper.scrollLeft) {
                                scrollWrapper.scrollLeft = beforePrevTabOffsetLeft
                            }
                        }

                        break
                    }
                }
            })
        },
        toLastTab() {
            let lastTab = this.tabs.at(-1)
            this.$router.push(lastTab.fullPath ?? lastTab.path)
        },
        closeTab(tab) {
            let currentTabIndex = this.currentTabIndex
            let tabIndex = this.tabs.findIndex(t => t.path === tab.path)
            this.delTabs((tab, i) => i === tabIndex)
            if (currentTabIndex === tabIndex) {
                this.toLastTab()
            }
        },
        closeOthersTabs() {
            let currentTabIndex = this.currentTabIndex
            let selectedTabIndex = this.selectedTabIndex
            this.delTabs((tab, i) => i !== tabIndex)
            if (currentTabIndex !== selectedTabIndex) {
                this.toLastTab()
            }
        },
        closeLeftTabs() {
            let currentTabIndex = this.currentTabIndex
            let selectedTabIndex = this.selectedTabIndex
            this.delTabs((tab, i) => i < selectedTabIndex)
            if (currentTabIndex < selectedTabIndex) {
                this.toLastTab()
            }
        },
        closeRightTabs() {
            let currentTabIndex = this.currentTabIndex
            let selectedTabIndex = this.selectedTabIndex
            this.delTabs((tab, i) => i > selectedTabIndex)
            if (currentTabIndex > selectedTabIndex) {
                this.toLastTab()
            }
        },
        closeAllTabs() {
            this.delTabs(() => true)
            this.toLastTab()
        }
    },
    watch: {
        $route() {
            this.addTab(this.$route)
            this.moveToCurrentTab()
        },
        draggable(val) {
            if (this.draggableInstance) {
                this.draggableInstance[val ? 'start' : 'pause']()
            }
        }
    }
}
</script>

<style lang="scss" scoped>

.tabs-container {
  width: 100%;
  height: 34px;
  position: relative;

  .scroll-pane {
    .ghost {
      opacity: 0.2;
    }
  }

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