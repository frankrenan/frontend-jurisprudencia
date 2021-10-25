<template>
  <div>
    <Dialog
      :visible.sync="dlgCadastrarProcesso"
      :closable="false"
      :maximizable="true"
      :style="{ width: '50vw' }"
    >
      <Card class="p-card card">
        <template #header>
          <h1>Cadastrar Processo</h1>
          <small
            >Realiza o cadastro do Processo no sistema de jurisprudência</small
          >
        </template>

        <template #content>
          <div class="p-grid">
            <div class="p-col-2">
              <div class="p-inputgroup">
                <span class="p-input-icon-right p-float-label">
                  <InputNumber
                    v-model="numero"
                    class="input"
                    mode="decimal"
                    :useGrouping="false"
                  />
                  <label for="inputtext">Número:</label>
                </span>
              </div>
            </div>

            <div class="p-col-2">
              <div class="p-inputgroup">
                <span class="p-input-icon-right p-float-label">
                  <InputNumber
                    showButtons
                    v-model="ano"
                    :min="1900"
                    :max="anoAtual"
                    :useGrouping="false"
                  />
                  <label for="inputtext2">Ano:</label>
                </span>
              </div>
            </div>

            <div class="p-inputgroup">
              <div class="p-col-8 p-mt-4">
                <span class="p-input-icon-right p-float-label">
                  <Textarea
                    v-model="natureza"
                    :autoResize="true"
                    rows="3"
                    cols="90"
                  />
                  <label for="inputtext2">Natureza:</label>
                </span>
              </div>
            </div>

            <div class="p-inputgroup">
              <div class="p-col-8 p-mt-4">
                <span class="p-input-icon-right p-float-label">
                  <Textarea
                    v-model="especie"
                    :autoResize="true"
                    rows="3"
                    cols="90"
                  />
                  <label for="inputtext2">Especie:</label>
                </span>
              </div>
            </div>

            <div class="p-inputgroup">
              <div class="p-col-8 p-mt-4">
                <span class="p-input-icon-right p-float-label">
                  <Textarea
                    v-model="objeto"
                    :autoResize="true"
                    rows="5"
                    cols="90"
                  />
                  <label for="inputtext2">Objeto:</label>
                </span>
              </div>
            </div>

            <div class="p-col-2 p-mt-4">
              <div class="p-inputgroup">
                <span class="p-input-icon-right p-float-label">
                  <InputNumber
                    v-model="numeroPagina"
                    class="input"
                    mode="decimal"
                  />
                  <label for="inputtext">Número de página:</label>
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
          @click="cadastrarProcesso"
        />
      </template>
    </Dialog>
    <Loading />
    <Toast />
  </div>
</template>

<script>
import Loading from "@/pages/Loading.vue";
import { api } from "../services.js";
export default {
  data() {
    return {
        numero: null,
        ano: new Date().getFullYear(),
        natureza: "",
        especie: "",
        objeto: "",
        numeroPagina: null,
      anoAtual: new Date().getFullYear(),
    };
  },

  computed: {
    dlgCadastrarProcesso() {
      return this.$store.state.dlgCadastrarProcesso;
    },
  },

  methods: {
    fecharDialog() {
      this.$store.state.dlgCadastrarProcesso = false;
    },

    cadastrarProcesso() {
      console.log(this.processo)
    
      this.$store.state.dlgLoading = true;
      api
        .post("/processo", {numero: this.numero, ano: this.ano, natureza: this.natureza, especie: this.especie, objeto: this.objeto, numeroPagina: this.numeroPagina})
        .then(() => {
          setTimeout(() => {
            this.$store.state.dlgLoading = false;
            this.$toast.add({
              severity: "success",
              summary: "Sucesso",
              detail: "Cadastrado com sucesso!",
              life: 3000,
            });
            this.$store.state.dlgCadastrarProcesso = false;
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
            this.$store.state.dlgCadastrarProcesso = false;
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