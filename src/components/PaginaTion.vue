<template>
  <div>
    <el-pagination
      :currentPage="props.value.page"
      :page-size="props.value.size"
      :page-sizes="[1, 2, 3, 4]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="props.total"
      @size-change="(size) => change('size', size)"
      @current-change="(num) => change('page', num)"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
  total: {
    type: Number
  },
  value: {
    type: Object,
    default: () => {}
  }
})
const emit = defineEmits(['change'])
const change = (type, value) => {
  const obj = {
    ...props.value,
    [type]: value
  }
  emit('change', obj)
}
</script>

<style lang="scss" scoped></style>
