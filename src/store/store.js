import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dlgLoading: false,
  },
  getters: {
  },
  mutations: {
    setDlgLoading(state, payload) {
      state.dlgLoading = payload
    },
  },
})
