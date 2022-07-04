<template>
  <div class="navbar">
    <div class="navbar-left">
      <Hamburger></Hamburger>
      <Breadcrumb></Breadcrumb>
    </div>
    <div class="right-menu">
      <!-- 头像 -->
      <el-dropdown
        class="avatar-container"
        @command="handleCommand"
        trigger="click"
      >
        <div class="avatar-wrapper">
          <el-avatar shape="square" :size="40" :src="avatarUrl"></el-avatar>
          <i class="el-icon-s-tools"></i>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item command="home"> 首页 </el-dropdown-item>
            </router-link>
            <a target="_blank" href="">
              <el-dropdown-item command="profile">课程主页</el-dropdown-item>
            </a>
            <el-dropdown-item divided command="logout">
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import Hamburger from '../components/Hamburger.vue'
import Breadcrumb from '../components/Breadcrumb.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()
const avatarUrl = computed(() => {
  return store.getters.userInfo.avatar
})
const handleToHome = () => {
  router.push('/')
}
const handleLogout = async () => {
  try {
    await store.dispatch('user/logout')
    router.push('/login')
  } catch (error) {}
}

const handleCommand = (commad) => {
  switch (commad) {
    case 'home':
      handleToHome()
      break
    case 'logout':
      handleLogout()
      break
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .navbar-left {
    display: flex;
    align-items: center;
  }
  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    padding-right: 16px;

    ::v-deep .avatar-container {
      cursor: pointer;
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        .el-avatar {
          background: none !important;
          margin-right: 12px;
        }
      }
    }
  }
}
</style>
