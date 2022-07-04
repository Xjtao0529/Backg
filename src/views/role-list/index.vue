<template>
  <el-card>
    <Table :data="dataList" :cols="cols">
      <template #active="{ row }">
        <el-button @click="orow(row)" type="primary"> 查看</el-button>
      </template>
    </Table>
  </el-card>
</template>

<script setup>
import Table from '../../components/Table.vue'
import { reactive, ref } from 'vue'
import UserApi from '../../api/user'

const cols = reactive([
  { title: '序号', type: 'index', width: '80', align: 'center' },
  { name: 'title', title: '名称', align: 'center' },
  { name: 'title', title: '描述', align: 'center' },
  { slot: 'active', title: '操作', align: 'center' }
])
const dataList = ref([])
const orow = (row) => {
  console.log(row, '11')
}
const getRoleLists = async () => {
  const res = await UserApi.getRoleList()
  console.log(res, 'role')
  dataList.value = res
}
getRoleLists()
</script>
<style scoped lang="scss"></style>
