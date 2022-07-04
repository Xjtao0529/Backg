<template>
  <el-breadcrumb separator="/">
    <template v-for="(item, index) in breadcrumbData" :key="index">
      <el-breadcrumb-item
        v-if="index !== breadcrumbData.length - 1"
        :to="{ path: item.path }"
      >
        {{ item.meta.title }}
      </el-breadcrumb-item>
      <el-breadcrumb-item v-else> {{ item.meta.title }} </el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>
<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
const route = useRoute()
const breadcrumbData = computed(() => {
  return route.matched.filter((item) => item.meta.title && item.meta.icon)
})
</script>
<style scoped lang="scss">
.breadcrumb {
  display: inline-block;
  font-size: 14px;
  // line-height: 50px;
  // margin-left: 8px;
  display: flex;
  align-items: center;
  .el-breadcrumb__separator {
    z-index: 1111;
  }
  ::v-deep .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
