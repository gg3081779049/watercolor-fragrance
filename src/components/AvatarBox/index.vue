<template>
  <el-dropdown trigger="click" teleported>
    <slot :src="avatar" :username="name">
      <img :src="avatar" class="user-avatar" alt="avatar">
    </slot>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="$router.push('user')">
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
      this.$confirm("确定要退出系统吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.Logout()
        this.$router.push("/login")
      }).catch(() => {})
    },
  },
};
</script>

<style scoped>
.user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  box-sizing: border-box;
}
</style>
