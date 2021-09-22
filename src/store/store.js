import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dlgLoading: false,
    dlgCadastrarUsuario: false,
    dlgConsultarUsuario: false,
    
  },
  getters: {
  },
  mutations: {
    setDlgLoading(state, payload) {
      state.dlgLoading = payload
    },
    
    setDlgLoading(state, payload) {
      state.dlgCadastrarUsuario = payload
    },

    setDlgLoading(state, payload) {
      state.dlgConsultarUsuario = payload
    },
  },
})
