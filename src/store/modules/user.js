import UserApi from '../../api/user'
import { setItem, getItem, removeItem } from '../../utils/storeage'
export default {
  namespaced: true,
  state: () => ({
    token: getItem('token') || '',
    userInfo: getItem('userInfo') || {},
    userList: getItem('userList') || []
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', token)
    },
    setUSerInfo(state, userInfo) {
      state.userInfo = userInfo
      setItem('userInfo', userInfo)
    },
    setUSerList(state, userList) {
      state.userList = userList
      setItem('userList', userList)
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
      commit('setToken', '')
      commit('setUSerInfo', {})
      removeItem('token')
      removeItem('userInfo')
    },
    async getUserList({ commit }, payload) {
      try {
        const res = await UserApi.getUserManage(payload)
        console.log(1)
        commit('setUSerList', res.list)
        console.log(res)
      } catch (error) {}
    }
  }
}
