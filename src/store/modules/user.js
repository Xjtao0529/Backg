import UserApi from '../../api/user'
import {
  setItem,
  getItem,
  // removeItem,
  removeAllItem
} from '../../utils/storeage'
import { resetRouter } from '../../utils/removeRouter'
export default {
  namespaced: true,
  state: () => ({
    token: getItem('token') || '',
    userInfo: {},
    userList: []
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', token)
    },
    setUSerInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    setUSerList(state, userList) {
      state.userList = userList
      console.log(userList, 'user')
    }
  },

  actions: {
    async login({ commit }, payload) {
      try {
        const res = await UserApi.login(payload)
        commit('setToken', res.token)
        return res
      } catch (error) {
        console.log(error)
      }
    },
    async getUser({ commit }) {
      const res = await UserApi.getUserInfo()
      commit('setUSerInfo', res)
      return res
    },
    logout({ commit }) {
      resetRouter()
      commit('setToken', '')
      commit('setUSerInfo', {})
      // removeItem('token')
      // removeItem('userInfo')
      removeAllItem()
    }
    // async getUserList({ commit }, query) {
    //   console.log(query)
    //   try {
    //     const res = await UserApi.getUserManage(query)
    //     console.log(res)
    //     res.list.forEach((item) => {
    //       item.openTime = dayjs((item.openTime / 100) * 100).format(
    //         'YYYY-MM-DD'
    //       )
    //     })
    //     commit('setUSerList', res.list)
    //     console.log(res, 'res')
    //   } catch (error) {}
    // }
  }
}
