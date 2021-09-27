<template>
  <Dialog
    :visible.sync="dlgDeletarUsuario"
    :closable="false"
    :maximizable="true"
  >
    <Card class="p-card card">
      <template #header>
        <h1>Deletar Usuário</h1>
        <small>Deletar o usuário</small>
      </template>

      <template #content>
        <div class="p-grid">
          <div class="p-col-12">
            <div class="p-inputgroup">
              <span class="p-input-icon-right p-float-label">
                <InputText
                  id="inputtext"
                  type="text"
                  v-model="cpf"
                  class="p-inputtext-lg"
                />
                <label for="inputtext">CPF:</label>
              </span>
            </div>
          </div>
        </div>
      </template>
    </Card>
    <template #footer>
      <Button label="Salvar" icon="pi pi-save" @click="deletarUsuario" />
      <Button label="Cancelar" icon="pi pi-times" @click="fecharDialog" />
    </template>
  </Dialog>
</template>

<script>
import { api } from "../services";
export default {
  data() {
    return {
      cpf: "",
    };
  },

  computed: {
    dlgDeletarUsuario() {
      return this.$store.state.dlgDeletarUsuario;
    },
  },

  methods: {
    fecharDialog() {
      this.$store.state.dlgDeletarUsuario = false;
    },

    deletarUsuario() {
      api
        .delete(`/usuario/${this.cpf}`)
        .then(() => console.log("Deletado com sucesso!"))
        .catch(() => console.log("Não foi possível deletar!"));
    },
  },
};
</script>

<style>
</style>