const getters = {
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  userList: (state) => state.user.userList,
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  tagsview: (state) => state.tagsview.tagsView
}
export default getters
