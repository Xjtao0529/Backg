import UserApi from '../../api/user'
import { setItem, getItem } from '../../utils/storeage'
export default {
  namespaced: true,
  state: () => ({
    token: getItem('token') || '',
    userInfo: getItem('userInfo') || {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', token)
    },
    setUSerInfo(state, userInfo) {
      state.userInfo = userInfo
      setItem('userInfo', userInfo)
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
    }
  }
}
