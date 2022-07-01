<template>
  <div>
    <Table :data="dataList" :cols="cols">
      <template #avatar="{ row }">
        <el-avatar :src="row.avatar" :size="50"> </el-avatar>
      </template>
      <template #time="{ row: { openTime } }">
        {{ openTime  }}
      </template>
      <template #roles="{ row }">
        <el-tag> {{ row.role[0].title }} </el-tag>
      </template>
      <template v-slot:action="{ row }">
        <el-button @click="orow(row)" type="primary"> 查看</el-button>
        <el-button @click="orow(row)" type="info"> 角色</el-button>
        <el-button @click="orow(row)" type="danger"> 删除</el-button>
      </template>
    </Table>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'
import Table from '../../components/Table.vue'

const orow = (row) => {
  console.log(row, 1111)
}
const store = useStore()
const cols = reactive([
  { title: '#', type: 'index', width: '50', align: 'center' },
  { name: 'username', title: '姓名', align: 'center' },
  { name: 'mobile', title: '联系方式', align: 'center' },
  { title: '头像', slot: 'avatar', align: 'center' },
  { name: 'role.title', title: '角色', align: 'center', slot: 'roles' },
  { name: 'openTime', title: '开通时间', slot: 'time', align: 'center' },
  { title: '操作', slot: 'action', align: 'center', width: '300' }
])
const getUsers = () => {
  store.dispatch('user/getUserList')
}
getUsers()

const dataList = computed(() => {
  return store.getters.userList
})
</script>
<style scoped lang="scss"></style>
