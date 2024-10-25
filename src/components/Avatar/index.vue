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
            {{ $t('operation.userCenter') }}
          </span>
        </el-dropdown-item>
        <el-dropdown-item @click="showSettings = true">
          <span>
            <svg-icon icon="setting" />
            {{ $t('operation.configuration') }}
          </span>
        </el-dropdown-item>
        <el-dropdown-item divided @click="logout">
          <span>
            <svg-icon icon="exit" />
            {{ $t('operation.logout') }}
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
  name: "Avatar",
  computed: {
    ...mapState(useUserStore, ["name", "avatar"]),
    ...mapWritableState(useAppStore, ["showSettings"]),
  },
  methods: {
    ...mapActions(useUserStore, ["Logout"]),
    async logout() {
      this.$confirm(this.$t('message.confirmLogout'), this.$t('common.systemTip'), {
        confirmButtonText: this.$t('common.confirm'),
        cancelButtonText: this.$t('common.cancel'),
        type: "warning",
      }).then(() => {
        return this.Logout()
      }).then(() => {
        return this.$router.push("/login")
      }).then(() => {
        useTabsStore().$reset()
      })
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
