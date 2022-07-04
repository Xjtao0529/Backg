<template>
  <div>
    <el-card> </el-card>
    <el-card style="margin-top: 20px">
      <h1>员工信息</h1>
    </el-card>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import Manage from '../../api/manage'
const route = useRoute()
const id = route.params.id
const getDetailLists = async () => {
  console.log(id, '2')
  const res = await Manage.getDetailList(id)
  console.log(res, 'res')
}
getDetailLists()
</script>
<style scoped lang="scss">
table{
  border: 1px solid rgb(192, 189, 189);
  border-collapse: collapse;
}
</style>
