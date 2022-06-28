import router from './router'
import store from './store'

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  // 获取token
  const token = store.getters.token
  if (token) {
    if (to.path === '/login') {
      next('/')
    } else {
      if (!store.getters.hasUserInfo) {
        store.dispatch('user/getUser')
      }
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
  if (to.path === '/login' && token) {
    next('/')
  }
  if (to.path === 'login' && !token) {
    next('login')
  }
})
