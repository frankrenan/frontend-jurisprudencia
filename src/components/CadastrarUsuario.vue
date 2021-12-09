<template>
  <div>
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
                    v-model="cpf"
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
                    v-model="senha"
                    class="p-inputtext-lg"
                  />
                  <label for="inputtext2">Senha:</label>
                </span>
              </div>
            </div>

            <div class="p-col-6 p-mt-4">
              <div class="p-inputgroup">
                <span class="p-input-icon-right p-float-label">
                  <InputText
                    id="inputtext3"
                    v-model="email"
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
                    v-model="nome"
                    class="p-inputtext-lg"
                  />
                  <label for="inputtext2">Nome:</label>
                </span>
              </div>
            </div>

            <div class="p-col-4 p-mt-4">
              <div class="p-inputgroup">
                <span class="p-input-icon-right p-float-label">
                  <InputText v-model="oab" class="p-inputtext-lg" />
                  <label for="inputtext6">OAB:</label>
                </span>
              </div>
            </div>

            <div class="p-col p-mt-4">
              <div class="p-inputgroup">
                <span class="p-input-icon-right p-float-label">
                  <Dropdown
                    v-model="estado"
                    :options="regiao"
                    optionLabel="sigla"
                    class="p-inputtext-lg"
                  />
                  <label for="inputtext2">Estado:</label>
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
          label="Salvar"
          icon="pi pi-save"
          class="p-button-success p-mr-2"
          autofocus
          @click="cadastrarUsuario"
        />
      </template>
    </Dialog>
    <Loading />
    <Toast />
  </div>
</template>

<script>
import { api } from "../services";
import Loading from "@/pages/Loading.vue";
import regiao from "../utils/estados.json";

export default {
  data() {
    return {
      cpf: null,
      nome: "",
      senha: "",
      email: "",
      oab: "",
      estado: null,
      regiao: null,
    };
  },

  computed: {
    dlgCadastrarUsuario() {
      return this.$store.state.dlgCadastrarUsuario;
    },
  },

  created() {
    this.regiao = regiao.UF;
  },

  methods: {
    fecharDialog() {
      this.$store.state.dlgCadastrarUsuario = false;
    },

    cadastrarUsuario() {
      this.$store.state.dlgLoading = true;
      api
        .post("/api/v1/advogado", {
          oab: this.oab,
          nome: this.nome,
          email: this.email,
          estado: this.estado.sigla,
          cpf: this.cpf,
          senha: this.senha,
        })
        .then(() => {
          setTimeout(() => {
            this.$store.state.dlgLoading = false;
            this.$toast.add({
              severity: "success",
              summary: "Sucesso",
              detail: "Cadastrado com sucesso!",
              life: 3000,
            });
            this.$store.state.dlgCadastrarUsuario = false;
            location.reload();
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
            this.$store.state.dlgCadastrarUsuario = false;
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