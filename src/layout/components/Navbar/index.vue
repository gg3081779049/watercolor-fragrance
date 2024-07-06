<template>
  <div class="navbar-container">
    <div class="left-side">
      <Hamburger class="hamburger" />
      <Breadcrumb v-if="showBreadcrumb" />
    </div>
    <div class="right-side">
      <NavbarSearch />
      <Screenfull />
      <ThemeSwitch />
      <el-divider direction="vertical" />
      <AvatarBox>
        <template #default="obj">
          <div class="avatar-wrapper">
            <img :src="obj.src" alt="avatar">
            <span>管理员</span>
            <svg-icon icon="arrow-right" />
          </div>
        </template>
      </AvatarBox>
    </div>
  </div>
</template>

<script>
import { useSettingsStore } from '@/store/settings'
import { mapState } from 'pinia'

import Hamburger from "@/components/Hamburger"
import Breadcrumb from "@/components/Breadcrumb"
import NavbarSearch from "@/components/NavbarSearch"
import Screenfull from "@/components/Screenfull"
import ThemeSwitch from "@/components/ThemeSwitch"
import AvatarBox from "@/components/AvatarBox"

export default {
    name: "Navbar",
    components: { Hamburger, Breadcrumb, NavbarSearch, Screenfull, ThemeSwitch, AvatarBox },
    computed: {
      ...mapState(useSettingsStore, ["showBreadcrumb"])
    }
}
</script>

<style lang="scss" scoped>
.navbar-container {
  width: 100%;
  height: 50px;
  background: var(--navbar-bg);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  position: relative;
  z-index: 1;
  .left-side {
    display: flex;
    align-items: center;
    .hamburger {
      margin: 0 15px;
      cursor: pointer;
      &:hover {
        background: var(--navbar-icon-bg-hover);
        box-shadow: 0 0 0 6px var(--navbar-icon-bg-hover);
      }
    }
  }
  .right-side {
    padding-right: 12px;
    height: 100%;
    line-height: 50px;
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
        width: 30px;
        height: 30px;
        margin-right: 5px;
        border-radius: 50%;
        box-sizing: border-box;
      }
      svg {
        fill: var(--navbar-icon-fill-color);
        transition: var(--el-transition-duration);
      }
      &:hover {
        img {
          box-shadow: 0 0 0 3px var(--navbar-icon-bg-hover);
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