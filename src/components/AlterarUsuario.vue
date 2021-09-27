<template>
  <Dialog
    :visible.sync="dlgAlterarUsuario"
    :closable="false"
    :maximizable="true"
  >
    <Card class="p-card card">
      <template #header>
        <h1>Alterar Usuário</h1>
        <small>Alterar a senha do usuário</small>
      </template>

      <template #content>
        <div class="p-grid">
          <div class="p-col-6">
            <div class="p-inputgroup">
              <span class="p-input-icon-right p-float-label">
                <InputText
                  id="inputtext"
                  type="text"
                  v-model="usuario.cpf"
                  class="p-inputtext-lg"
                />
                <label for="inputtext">CPF:</label>
              </span>
            </div>
          </div>

          <div class="p-col-6">
            <div class="p-inputgroup">
              <span class="p-input-icon-right p-float-label">
                <Password
                  id="inputtext2"
                  v-model="usuario.senha"
                  class="p-inputtext-lg"
                />
                <label for="inputtext2">Senha:</label>
              </span>
            </div>
          </div>
        </div>
      </template>
    </Card>
    <template #footer>
      <Button label="Salvar" icon="pi pi-save" @click="alterarUsuario" />
      <Button label="Cancelar" icon="pi pi-times" @click="fecharDialog" />
    </template>
  </Dialog>
</template>

<script>
import { api } from "../services";

export default {
  data() {
    return {
      usuario: {
        cpf: "",
        senha: "",
      },
    };
  },

  computed: {
    dlgAlterarUsuario() {
      return this.$store.state.dlgAlterarUsuario;
    },
  },

  methods: {
    fecharDialog() {
      this.$store.state.dlgAlterarUsuario = false;
    },

    alterarUsuario() {
      api
        .put("/usuario", this.usuario)
        .then((data) => {
          console.log(`Usuario ${data} alterado com sucesso !`);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
</style>