<template>
    <div class="sidebar-container" :style="{ width: `${collapse ? 54 : sidebarWidth}px` }">
        <div class="sidebar-logo-container" v-if="showLogo">

        </div>
        <el-scrollbar></el-scrollbar>
        <div class="sidebar-footer-container" v-if="showFooter">

        </div>
    </div>
</template>

<script>
import { useAppStore } from '@/store/app'
import { useSettingsStore } from '@/store/settings'
import { mapState } from 'pinia'

export default {
    name: "Sidebar",
    props: {
        showLogo: {
            type: Boolean,
            default: true,
        },
        showFooter: {
            type: Boolean,
            default: true,
        }
    },
    computed: {
        ...mapState(useAppStore, ["collapse"]),
        ...mapState(useSettingsStore, ["sidebarWidth"])
    },
}
</script>

<style lang="scss" scoped>
    .sidebar-container {
        height: 100%;
        // background: var(--sidebar-background);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        position: relative;
        transition: width 0.28s;
        -webkit-transition: width 0.28s;

        .sidebar-logo-container {
            width: 100%;
            height: 50px;
            // background: var(--logo-background);
            line-height: 50px;
            text-align: center;
            overflow: hidden;

            img {
                width: 32px;
                height: 24px;
                vertical-align: middle;
                cursor: pointer;
            }

            h1 {
                margin-left: 12px;
                display: inline-block;
                // color: var(--logo-title-color);
                font-weight: 600;
                line-height: 50px;
                font-size: 14px;
                font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
                vertical-align: middle;
                transition: 0.5s;
                cursor: pointer;
            }
        }

        .sidebar-footer-container {
            height: 50px;
            padding: 0 16px;
            // border-top: 1px solid var(--logo-background);
            display: flex;
            align-items: center;
        }
    }
</style>