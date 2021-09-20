const state = {
  user: {
    name: '',
    address: ''
  }
}

const mutations = {
  SET_USER (state, payload) {
    state.user = {...payload}
  },
  // CLEAR_CART (state) {
  //   state.cart = []
  // }
}

const actions = {
  setUser ({ commit }, payload) {
    commit('SET_USER', payload)
  },
}

const getters = {
  user: (state) => state.user
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}