<template>
  <Dialog
    :visible.sync="dlgCadastrarUsuario"
    :closable="false"
    :maximizable="true"
    :style="{ width: '50vw' }"
  >
    <Card class="p-card card">
      <template #header>
        <h1>Cadastrar Usuário</h1>
        <small
          >Realiza o cadastro do usuário no sistema de jurisprudência</small
        >
      </template>

      <template #content>
        <div class="p-grid">
          <div class="p-col-6">
            <div class="p-inputgroup">
              <span class="p-input-icon-right p-float-label">
                <InputMask
                  id="inputtext"
                  mask="999.999.999-99"
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
      <Button
        label="Salvar"
        icon="pi pi-save"
        autofocus
        @click="cadastrarUsuario"
      />
      <Button label="Cancelar" icon="pi pi-times" @click="fecharDialog" />
    </template>
    <Loading />
    <Toast />
  </Dialog>
</template>

<script>
import { api } from "../services";
import Loading from "@/pages/Loading.vue";

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
    dlgCadastrarUsuario() {
      return this.$store.state.dlgCadastrarUsuario;
    },
  },

  methods: {
    fecharDialog() {
      this.$store.state.dlgCadastrarUsuario = false;
    },

    cadastrarUsuario() {
      this.$store.state.dlgLoading = true;
      api
        .post("/usuario", this.usuario)
        .then(() => {
          setTimeout(() => {
            this.$store.state.dlgLoading = false;
            this.$toast.add({
              severity: "success",
              summary: "Sucesso",
              detail: "Cadastrado com sucesso!",
              life: 3000,
            });
          }, 2000);
        })
        .catch(() => {
          setTimeout(() => {
            this.$store.state.dlgLoading = false;
            this.$toast.add({
              severity: "error",
              summary: "Erro!",
              detail: "Deu algum erro!",
              life: 3000,
            });
          }, 2000);
        });
    },
  },
  components: {
    Loading
  }
};
</script>

<style>
</style>