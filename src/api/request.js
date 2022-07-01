/**
 * @file
 * @description 请求文件,是对axios的二次封装
 *  */
import axios from 'axios'
import md5 from 'md5'
import loading from './loading'
import { ElMessage } from 'element-plus'
import { isCheckTimeout } from '../utils/auth'
import store from '../store'
import router from '../router'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 3000
})
service.interceptors.request.use(
  (config) => {
    const { icode, time } = getTestICode()
    config.headers.icode = icode
    config.headers.codeType = time
    loading.open()
    const token = store.getters.token
    if (token) config.headers.Authorization = `Bearer ${token}`

    if (token) {
      if (isCheckTimeout()) {
        store.dispatch('user/logout')
        router.push('/login')
      }
    }
    return config
  },
  (error) => {
    loading.close()
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    loading.close()

    const { success, data, message } = response.data
    if (success) {
      return data
    } else {
      _showError(message)
      return Promise.reject(new Error(message))
    }
    // return response
  },
  (error) => {
    loading.close()
    // TODO token过期状态  401 描述信息  无感知登录 无感知刷新
    if (
      error.response &&
      error.response.data &&
      error.response.data.code === 401
    ) {
      store.dispatch('user/lgout')
      router.push('/login')
    }
    _showError(error.message)
    return Promise.reject(error)
  }
)

const _showError = (message) => {
  const info = message || '发生未知错误'
  ElMessage.error(info)
}

const request = (options) => {
  if (options.method.toUpperCase() === 'GET') {
    options.params = options.data || {}
  }
  return service(options)
}
function getTestICode() {
  const now = parseInt(Date.now() / 1000)
  const code = now + 'LGD_Sunday-1991'
  return {
    icode: md5(code),
    time: now
  }
}
export default request
