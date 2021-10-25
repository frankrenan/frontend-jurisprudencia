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
                    v-model="processo.numero"
                    class="input"
                    mode="decimal"
                    :useGrouping="false"
                  />
                  <label for="inputtext">Número:</label>
                </span>
              </div>
            </div>

            <div class="p-col-4">
              <div class="p-inputgroup">
                <span class="p-input-icon-right p-float-label">
                  <InputNumber
                    showButtons
                    v-model="processo.ano"
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
                    v-model="processo.natureza"
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
                    v-model="processo.especie"
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
                    v-model="processo.objeto"
                    :autoResize="true"
                    rows="5"
                    cols="90"
                  />
                  <label for="inputtext2">Objeto:</label>
                </span>
              </div>
            </div>

            <div class="p-col-4 p-mt-4">
              <div class="p-inputgroup">
                <span class="p-input-icon-right p-float-label">
                  <InputNumber
                    v-model="processo.numeroPagina"
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
import { api } from "../services";
export default {
  data() {
    return {
      anoAtual: new Date().getFullYear(),
      processo: {
        numero: null,
        ano: new Date().getFullYear(),
        objeto: "",
        natureza: "",
        especie: "",
        numeroPagina: undefined,
      },
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
      this.$store.state.dlgLoading = true;
      api
        .post("/processo", this.processo)
        .then(() => {
          setTimeout(() => {
            this.$toast.add({
              severity: "sucess",
              summary: "Sucesso",
              detail: "Processo cadastrado com sucesso!",
              life: 3000,
            });
            this.$store.state.dlgLoading = false;
          }, 2000);
        })
        .catch(() => {
          setTimeout(() => {
            this.$toast.add({
              severity: "error",
              summary: "Error",
              detail: "Ocorreu um problema ao cadastrar!",
              life: 3000,
            });
            this.$store.state.dlgLoading = false;
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