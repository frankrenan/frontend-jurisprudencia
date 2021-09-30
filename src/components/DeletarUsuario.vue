<template>
  <Dialog
    :visible.sync="dlgDeletarUsuario"
    :closable="false"
    :maximizable="true"
    :style="{ width: '50vw' }"
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
                <InputMask
                  id="inputtext"
                  v-model="cpf"
                  mask="999.999.999-99"
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
      <Button label="Excluir" icon="pi pi-trash" @click="deletarUsuario" />
      <Button label="Cancelar" icon="pi pi-times" @click="fecharDialog" />
    </template>
    <Toast />
    <Loading />
  </Dialog>
</template>

<script>
import { api } from "../services";
import Loading from "@/pages/Loading.vue";

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
      // console.log(this.cpf.match(/[0-9]/g));
      this.$store.state.dlgLoading = true;

      api
        .delete(`/usuario/${this.cpf}`)
        .then(() => {
          setTimeout(() => {
            this.$store.state.dlgLoading = false;
            this.$toast.add({
              severity: "success",
              summary: "Sucesso!",
              detail: "Usuário deletado com sucesso!",
              life: 3000,
            });
          }, 2000);
        })
        .catch(() => {
          setTimeout(() => {
            this.$store.state.dlgLoading = false;
            this.$toast.add({
              severity: "error",
              summary: "Error!",
              detail: "Erro ao deletar usuário!",
              life: 3000,
            });
          }, 2000);
        });
    },
  },
  components: {
    Loading,
  },
};
</script>

<style>
</style>