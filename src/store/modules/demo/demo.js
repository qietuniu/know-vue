const demo = {
  state: {
    apple: 0
  },
  mutations: {
    CHANGE_APPLE: (state, type) => {
      if (type) {
        state.apple++
      } else {
        state.apple--
      }
    }
  },
  actions: {
    CHANGE_APPLE({ commit }, type) {
      commit('CHANGE_APPLE', type)
    }
  }

}
export default demo
