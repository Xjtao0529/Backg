import request from './request'

const getDetailList = (id) => {
  return request({ url: `/user-manage/detail/${id}`, method: 'get' })
}

export default {
  getDetailList
}
