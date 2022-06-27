/**
 * @file
 * @description 请求文件,是对axios的二次封装
 *  */
import axios from 'axios'
import md5 from 'md5'
import loading from './loading'
const service = axios.create({
  basURL: '',
  timeout: 3000
})
service.interceptors.request.use(
  (config) => {
    const { icode, time } = getTestICode()
    config.headers.icode = icode
    config.headers.codeType = time
    loading.open()
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
    return response
  },
  (error) => {
    loading.close()
    return Promise.reject(error)
  }
)

const request = (options) => {
  if (options.method.toUpperCase() === 'GET') {
    options.params = options.data || {}
  }
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
