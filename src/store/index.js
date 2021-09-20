import Vue from 'vue'
import Vuex from 'vuex'
import CartModule from './modules/cart'
import LocalModule from './modules/local'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart: CartModule,
    local: LocalModule
  }
})
