<template>
  <div>
    <el-table
      :data="props.data"
      border
      default-expand-all
      :row-key="RowKey"
      style="width: 100%"
    >
      <el-table-column
        v-for="item in props.cols"
        :key="item"
        :type="item.type"
        :prop="item.name"
        :label="item.title"
        :width="item.width + 'px'"
        :align="item.align"
      >
        <template v-if="item.slot" v-slot="{ row, $index, column }">
          <slot :name="item.slot" :row="row" :index="$index" :colum="column">
          </slot>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  RowKey: {
    type: String,
    default: 'id'
  },
  data: {
    type: Array,
    required: true,
    default: () => []
  },
  cols: {
    type: Array,
    required: true,
    default: () => []
  },
  total: {
    type: Number
  }
})
</script>

<style lang="scss" scoped></style>
