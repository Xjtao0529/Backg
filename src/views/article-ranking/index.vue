<template>
  <div>
    <el-card>
      <Table :data="dataList" :cols="cols">
        <template #active>
          <el-button type="primary" size='small' >查看</el-button>
          <el-button type="danger" size='small' >删除</el-button>
        </template>
      </Table>
      <pagina-tion :total="total" :value="model" @change="change"></pagina-tion>
    </el-card>
  </div>
</template>

<script setup>
import Table from '../../components/Table.vue'
import PaginaTion from '../../components/PaginaTion.vue'
import { reactive, ref } from 'vue'
import USerApi from '../../api/user'
const dataList = ref([])
const model = reactive({
  page: 1,
  size: 4
})
const total = ref('')
const cols = reactive([
  { title: '#', type: 'index', width: '80', align: 'center' },
  { name: 'title', title: '标题', align: 'center' },
  { name: 'author', title: '作者', align: 'center' },
  { name: 'publicDate', title: '发布时间', align: 'center' },
  { name: 'desc', title: '内容简介', align: 'center' },
  { slot: 'active', title: '操作', align: 'center' }
])
const getRanking = async () => {
  const res = await USerApi.getRankingList(model)
  console.log(res, 'Ranking')
  dataList.value = res.list
  total.value = res.total
}
getRanking()
const change = (obj) => {
  console.log(obj, 'null')
  model.page = obj.page
  model.size = obj.size
  getRanking()
}
</script>
<style scoped lang="scss"></style>
