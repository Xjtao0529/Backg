<template>
  <div>
    <el-card>
      <Table :data="dataList" :cols="cols">
        <template #avatar="{ row }">
          <el-avatar :src="row.avatar" :size="50"> </el-avatar>
        </template>
        <template #time="{ row: { openTime } }">
          {{ openTime }}
        </template>
        <template #roles="{ row }">
          <el-tag> {{ row.role[0].title }} </el-tag>
        </template>
        <template v-slot:action="{ row }">
          <el-button @click="detail(row._id)" type="primary"> 查看</el-button>
          <el-button @click="orow(row)" type="info"> 角色</el-button>
          <el-button @click="orow(row)" type="danger"> 删除</el-button>
        </template>
      </Table>
      <br />
      <pagina-tion @change="change" :total="total" :value="query"></pagina-tion>
    </el-card>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import PaginaTion from '../../components/PaginaTion.vue'
import Table from '../../components/Table.vue'
import UserApi from '../../api/user'
import dayjs from 'dayjs'
import router from '../../router'
// import { useRouter } from 'vue-router'
// const routers = useRouter()
const query = reactive({
  page: 1,
  size: 3
})

const orow = (row) => {
  console.log(row)
}
const dataList = ref([])
const total = ref('')
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
const getUsers = async () => {
  try {
    const res = await UserApi.getUserManage(query)
    res.list.forEach((item) => {
      item.openTime = dayjs((item.openTime / 100) * 100).format('YYYY-MM-DD')
    })
    total.value = res.total
    dataList.value = res.list
    store.commit('user/setUSerList', res.list)
  } catch (error) {}
}
getUsers()
const change = (obj) => {
  console.log(obj, 'obj')
  query.page = obj.page
  query.size = obj.size
  console.log(query, 'query')
  getUsers()
}
const detail = (id) => {
  console.log(id, 'detail')
  router.push('/user/info/' + id)
}
</script>
<style scoped lang="scss"></style>
