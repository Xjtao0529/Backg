<template>
  <div class="app-wrapper">
    <sidebar
      id="guide-sidebar"
      class="sidebar-container"
      :style="{ backgroundColor: variables.menuBg }"
    ></sidebar>
    <div class="main-container">
      <div class="fixed-header">
        <navbar />
      </div>
      <app-main></app-main>
    </div>
  </div>
</template>

<script setup>
import variables from '@/styles/variables.module.scss'
import Sidebar from '../../components/Sidebar/index.vue'
import Navbar from '../../components/Navbar.vue'
import AppMain from '../../components/AppMain.vue'

</script>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.module.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
}
</style>
