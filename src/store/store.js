import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dlgLoading: false,
    dlgCadastrarUsuario: false,
    dlgAlterarUsuario: false,
    dlgDeletarUsuario: false,
    dlgCadastrarProcesso: false,

  },
  getters: {
  },
  mutations: {
    setDlgLoading(state, payload) {
      state.dlgLoading = payload
    },

    setDlgCadastrarUsuario(state, payload) {
      state.dlgCadastrarUsuario = payload
    },

    setDlgAlterarUsuario(state, payload) {
      state.dlgAlterarUsuario = payload
    },

    setDlgDeletarUsuario(state, payload) {
      state.dlgDeletarUsuario = payload
    },

    setDlgCadastrarProcesso(state, payload) {
      state.dlgCadastrarProcesso = payload
    },
  },
})
