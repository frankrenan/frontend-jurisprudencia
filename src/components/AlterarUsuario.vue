<template>
  <div>
    <Dialog
      :visible.sync="dlgAlterarUsuario"
      :closable="false"
      :maximizable="true"
      :style="{ width: '50vw' }"
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
                  <Password
                    id="inputtext2"
                    v-model="senha"
                    class="p-inputtext-lg"
                  />
                  <label for="inputtext2">Senha:</label>
                </span>
              </div>
            </div>

            <div class="p-col-6">
              <div class="p-inputgroup">
                <span class="p-input-icon-right p-float-label">
                  <InputText
                    id="inputtext3"
                    v-model="usuario.email"
                    class="p-inputtext-lg"
                  />
                  <label for="inputtext2">E-mail:</label>
                </span>
              </div>
            </div>

            <div class="p-col-6 p-mt-4">
              <div class="p-inputgroup">
                <span class="p-input-icon-right p-float-label">
                  <InputText
                    id="inputtext4"
                    v-model="usuario.nome"
                    class="p-inputtext-lg"
                  />
                  <label for="inputtext2">Nome:</label>
                </span>
              </div>
            </div>
          </div>
        </template>
      </Card>
      <template #footer>
        <Button
          label="Cancelar"
          class="p-button-danger"
          icon="pi pi-times"
          @click="fecharDialog"
        />
        <Button
          label="Alterar"
          class="p-button-success p-mr-2"
          icon="pi pi-save"
          @click="alterarUsuario"
        />
      </template>
    </Dialog>
    <Toast />
    <Loading />
  </div>
</template>

<script>
import { api } from "../services";
import Loading from "@/pages/Loading.vue";

export default {
  data() {
    return {
      senha: "",
    };
  },

  props: {
    usuario: {
      type: Object,
      required: true,
    },
  },

  computed: {
    dlgAlterarUsuario() {
      return this.$store.state.dlgAlterarUsuario;
    },
  },

  created(){
    console.log(this.usuario.cpf)
  },

  methods: {
    fecharDialog() {
      this.$store.state.dlgAlterarUsuario = false;
    },

    alterarUsuario() {
      this.$store.state.dlgLoading = true;
      api
        .put("/api/v1/advogado", {
          cpf: this.usuario.cpf,
          nome: this.nome,
          email: this.email,
          senha: this.senha,
        })
        .then(() => {
          setTimeout(() => {
            this.$store.state.dlgLoading = false;
            this.$toast.add({
              severity: "success",
              summary: "Sucesso",
              detail: "Alterado com sucesso!",
              life: 3000,
            });
            this.$store.state.dlgAlterarUsuario = false;
          }, 2000);
        })
        .catch(() => {
          setTimeout(() => {
            this.$store.state.dlgLoading = false;
            this.$toast.add({
              severity: "error",
              summary: "Erro!",
              detail: "Erro ao alterar Advogado!",
              life: 3000,
            });
            this.$store.state.dlgAlterarUsuario = false;
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