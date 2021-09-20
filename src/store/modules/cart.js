const state = {
  cart: []
}

const mutations = {
  ADD_CART (state, payload) {
    state.cart.push(payload)
  },
  CLEAR_CART (state) {
    state.cart = []
  }
}

const actions = {
  addCart ({ commit }, payload) {
    commit('ADD_CART', payload)
  },
  clearCart({ commit }) {
    commit('CLEAR_CART')
  }
}

const getters = {
  cart: (state) => state.cart
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}