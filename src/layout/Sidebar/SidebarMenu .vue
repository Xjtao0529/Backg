<template>
  <div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#304156"
      class="el-menu-vertical-demo"
      :default-active="$route.path"
      text-color="#fff"
      router
    >
      <Item v-for="item in menulist" :menu="item" :key="item"> </Item>
    </el-menu>
  </div>
</template>
<script setup>
import Item from './Item'
import { computed } from 'vue'
import { filterMenu } from '../../utils/menu'
import { useRouter } from 'vue-router'
import { filterRouters, generateMenus } from '../../utils/router'
// const data = [
//   {
//     path: '/profile',
//     name: 'profile',
//     meta: {
//       title: '个人中心',
//       icon: 'personnel'
//     },
//     children: []
//   },
//   {
//     path: '/user',
//     redirect: '/user/manage',
//     meta: {
//       title: '用户',
//       icon: 'personnel'
//     },
//     children: [
//       {
//         path: '/user/manage',
//         name: 'userManage',
//         meta: {
//           title: '员工管理',
//           icon: 'personnel-manage'
//         },
//         children: []
//       },
//       {
//         path: '/user/role',
//         name: 'userRole',
//         meta: {
//           title: '角色列表',
//           icon: 'role'
//         }
//       },
//       {
//         path: '/user/permission',
//         name: 'userPermission',
//         meta: {
//           title: '权限列表',
//           icon: 'permission'
//         }
//       }
//     ]
//   },
//   {
//     path: '/article',
//     redirect: '/article/ranking',
//     meta: {
//       title: '文章',
//       icon: 'article'
//     },
//     props: {
//       default: false
//     },
//     children: [
//       {
//         path: '/article/ranking',
//         name: 'articleRanking',
//         meta: {
//           title: '文章排名',
//           icon: 'article-ranking'
//         }
//       },
//       {
//         path: '/article/create',
//         name: 'articleCreate',
//         meta: {
//           title: '文章创建',
//           icon: 'article-create'
//         }
//       }
//     ]
//   }
// ]
// const menuList = reactive(filterMenu(data))
const router = useRouter()
// const list = router.getRoutes()
const menulist = computed(() => {
  const routes = filterRouters(router.getRoutes())
  return filterMenu(generateMenus(routes))
})
console.log('router')
</script>

<style lang="scss" scoped></style>
