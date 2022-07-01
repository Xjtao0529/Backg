import request from './request'

/**
 * 登录接口
 * @param {*} data
 * @returns
 */
const login = (data) => {
  return request({ url: '/sys/login', method: 'POST', data })
}

const getUserInfo = () => {
  return request({
    url: '/sys/profile',
    method: 'get'
  })
}
const getUserManage = (data) => {
  return request({
    url: '/user-manage/list',
    method: 'get',
    data
  })
}

export default {
  login,
  getUserInfo,
  getUserManage
}
