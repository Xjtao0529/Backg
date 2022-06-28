import { createRouter, createWebHashHistory } from 'vue-router'
const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/indexLogin.vue')
  },
  {
    path: '/',
    component: () => import('../views/Home/home.vue')
  }
]
const privateRoutes = [
  {
    path: '/user',
    redirect: '/user/manage',
    meta: {
      title: 'user',
      icon: 'personnel'
    },
    children: [
      {
        path: '/user/manage',
        component: () => import('@/views/user-manage'),
        meta: {
          title: 'userManage',
          icon: 'personnel-manage'
        }
      },
      {
        path: '/user/role',
        component: () => import('@/views/role-list'),
        meta: {
          title: 'roleList',
          icon: 'role'
        }
      },
      {
        path: '/user/permission',
        component: () => import('@/views/permission-list'),
        meta: {
          title: 'permissionList',
          icon: 'permission'
        }
      },
      {
        path: '/user/info/:id',
        name: 'userInfo',
        component: () => import('@/views/user-info'),
        meta: {
          title: 'userInfo'
        }
      },
      {
        path: '/user/import',
        name: 'import',
        component: () => import('@/views/import'),
        meta: {
          title: 'excelImport'
        }
      }
    ]
  },
  {
    path: '/article',
    redirect: '/article/ranking',
    meta: {
      title: 'article',
      icon: 'article'
    },
    children: [
      {
        path: '/article/ranking',
        component: () => import('@/views/article-ranking'),
        meta: {
          title: 'articleRanking',
          icon: 'article-ranking'
        }
      },
      // {
      //   path: '/article/:id',
      //   component: () => import('@/views/article-detail'),
      //   meta: {
      //     title: 'articleDetail'
      //   }
      // },
      {
        path: '/article/create',
        component: () => import('@/views/article-create'),
        meta: {
          title: 'articleCreate',
          icon: 'article-create'
        }
      },
      {
        path: '/article/editor/:id',
        component: () => import('@/views/article-create'),
        meta: {
          title: 'articleEditor'
        }
      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRoutes]
})

export default router
