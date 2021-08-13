import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
  iconPack: 'fontawesome'
})

Vue.toasted.register(
  'defaultSuccess',
  payload => !payload ? 'Operação realizada com sucesso!' : payload,
  { type: 'success', icon: 'check', duration: 3000 }
)

Vue.toasted.register(
  'sucess',
  payload => !payload ? 'Operação realizada com sucesso!' : payload,
  { type: 'success', icon: 'check', duration: 3000 }
)

this.$toast.add({
  severity: "success",
  summary: "Success Message",
  detail: "Message Content",
  life: 3000,
});

Vue.toasted.register(
  'defaultError',
  payload => !payload.msg ? 'Erro inesperado.' : payload.msg,
  {
    type: 'error', icon: 'times', duration: null, action: {
      text: 'Fechar',
      onClick: (e, toastObject) => {
        toastObject.goAway(0);
      }
    },
  }
)
