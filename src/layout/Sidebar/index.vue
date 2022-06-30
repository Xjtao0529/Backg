<template>
  <div>
    <h3 style="height: 60px; color: #fff">
      <el-avatar
      class="tx"
        shape="square"
        :size="30"
        :src="store.getters.userInfo.avatar"
      ></el-avatar
      >imooc-admin
    </h3>
    <el-scrollbar>
      <sidebar-menu></sidebar-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import SidebarMenu from './SidebarMenu .vue'
import { useStore } from 'vuex'
const store = useStore()
</script>

<style lang="scss" scoped>
h3 {
  text-align: center;
  line-height: 60px;
  position: relative;
}
.tx{
  position: absolute;
  top: 13px;
  left: 11px;
}
</style>
