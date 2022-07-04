<template>
  <div>
    <el-card>
      <Table :data="dataList" :cols="cols" RowKey="id"></Table>
    </el-card>
  </div>
</template>

<script setup>
import Table from '../../components/Table.vue'
import { reactive, ref } from 'vue'
import UserApi from '../../api/user'
const cols = reactive([
  { name: 'permissionName', title: '权限名称', align: 'center' },
  { name: 'permissionMark', title: '权限标识', align: 'center' },
  { name: 'permissionDesc', title: '权限描述', align: 'center' }
])
const dataList = ref([])
const getPermissionList = async () => {
  const res = await UserApi.getPermission()
  console.log(res, 'getPermissionList')
  dataList.value = res
}
getPermissionList()
</script>
<style scoped lang="scss"></style>
