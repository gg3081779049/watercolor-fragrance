<template>
  <el-dropdown trigger="click" teleported>
    <slot :src="avatar" :username="name">
      <img :src="avatar" class="user-avatar" alt="avatar">
    </slot>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="$router.push('User')">
          <span>
            <svg-icon icon="user" />
            个人中心
          </span>
        </el-dropdown-item>
        <el-dropdown-item @click="showSettings = true">
          <span>
            <svg-icon icon="setting" />
            系统设置
          </span>
        </el-dropdown-item>
        <el-dropdown-item divided @click="logout">
          <span>
            <svg-icon icon="exit" />
            退出登录
          </span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script>
import { useAppStore } from '@/store/modules/app'
import { useTabsStore } from '@/store/modules/tabs'
import { useUserStore } from '@/store/modules/user'
import { mapState, mapWritableState, mapActions } from 'pinia'

export default {
  name: "AvatarBox",
  computed: {
    ...mapState(useUserStore, ["name", "avatar"]),
    ...mapWritableState(useAppStore, ["showSettings"]),
  },
  methods: {
    ...mapActions(useUserStore, ["Logout"]),
    async logout() {
      this.$confirm("确定要退出系统吗？", this.$t('common.tip'), {
        confirmButtonText: this.$t('common.confirm'),
        cancelButtonText: this.$t('common.cancel'),
        type: "warning",
      }).then(() => {
        this.$router.push("/login")
        this.Logout()
        useTabsStore().$reset()
      }).catch(() => { })
    },
  },
}
</script>

<style scoped>
  .user-avatar {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    box-sizing: border-box;
  }
</style>
