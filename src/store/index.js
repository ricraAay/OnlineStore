import Vue from 'vue'
import Vuex from 'vuex'

import registration from './modules/registration'
import authorization from './modules/authorization'
import payment from './modules/payment'
import passwordRecovery from './modules/passwordRecovery'
import products from './modules/products'
import ordering from './modules/ordering'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    registration,
    authorization,
    payment,
    passwordRecovery,
    products,
    ordering
  }
})
