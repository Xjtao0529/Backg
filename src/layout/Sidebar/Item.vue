<template>
  <div>
    <template v-if="props.menu && !props.menu.children">
      <el-menu-item :index="props.menu.path">
          <svg-icon :icon="props.menu.meta.icon"> </svg-icon>
        {{ props.menu.meta.title }}
      </el-menu-item>
    </template>
    <template
      v-if="props.menu && props.menu.children && props.menu.children.length > 0"
    >
      <el-sub-menu :index="props.menu.path">
        <template #title>
          <svg-icon :icon="props.menu.meta.icon"> </svg-icon>
          <span> {{ props.menu.meta.title }}</span>
        </template>
        <Item v-for="it in props.menu.children" :key="it" :menu="it"> </Item>
      </el-sub-menu>
    </template>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  menu: {
    type: Object,
    default: () => {}
  }
})
</script>

<style lang="scss" scoped></style>
