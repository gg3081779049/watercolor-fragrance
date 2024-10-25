<template>
  <div class="navbar-container" :style="{ height: `${headerHeight}px` }">
    <div class="left-side">
      <slot />
    </div>
    <div class="right-side">
      <NavToolbar />
      <el-divider direction="vertical" />
      <Avatar>
        <template #default="{ src, username }">
          <div class="avatar-wrapper">
            <img :src="src" alt="avatar">
            <span>{{ username }}</span>
            <svg-icon icon="arrow-right" />
          </div>
        </template>
      </Avatar>
    </div>
  </div>
</template>

<script>
import { useSettingsStore } from '@/store/modules/settings'
import { mapState } from 'pinia'

import NavToolbar from '@/layout/components/Navbar/NavToolbar'
import Avatar from "@/components/Avatar"

export default {
  name: "Navbar",
  components: { NavToolbar, Avatar },
  computed: {
    ...mapState(useSettingsStore, ["headerHeight"])
  }
}
</script>

<style lang="scss" scoped>
  .navbar-container {
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    background: var(--navbar-bg);
    box-shadow: var(--el-box-shadow-lighter);
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    position: relative;
    z-index: 1;

    .left-side {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
    }

    .right-side {
      height: 100%;
      margin-left: 12px;
      padding-right: 12px;
      line-height: 50px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      gap: 16px;

      .el-divider {
        height: 22px;
        margin: 0 -6px;
        opacity: 0.4;
        border-left-width: 1px;
        border-color: var(--navbar-icon-fill-color);
      }

      .avatar-wrapper {
        display: flex;
        align-items: center;
        color: var(--navbar-icon-fill-color);
        cursor: pointer;

        img {
          width: 28px;
          height: 28px;
          margin-right: 5px;
          border-radius: 50%;
          box-sizing: border-box;
        }

        span {
          max-width: 100px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        svg {
          fill: var(--navbar-icon-fill-color);
          transition: var(--el-transition-duration);
        }

        &:hover {
          img {
            box-shadow: 0 0 0 3px rgba(128, 128, 128, 0.122);
          }

          span {
            color: var(--el-color-primary);
          }

          svg {
            fill: var(--el-color-primary);
          }
        }

        &[aria-expanded="true"] {
          svg {
            transform: rotate(90deg);
          }
        }
      }
    }
  }
</style>
