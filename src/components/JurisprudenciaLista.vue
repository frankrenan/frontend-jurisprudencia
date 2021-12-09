<template>
  <div class="p-mt-4 p-ml-6">
    <h3>Jurisprudências</h3>

    <Card class="card">
      <template #header>
        <div>RESULTADOS:</div>
        <hr />
      </template>
      <template #content>
        <DataView
          :value="jurisprudencia"
          paginatorPosition="top"
          :paginator="true"
          :rows="5"
          class="p-mb-1 p-mt-1"
          ref="dv"
        >
          <template #list="slotProps">
            <Panel style="width: 100%">
              <template #header>
                <h4>
                  Tipo: {{ slotProps.data.tipo }} - {{ slotProps.data.ata }}
                </h4>
              </template>
              <h5 style="text-align: justify">Objeto:</h5>
              <p style="text-align: justify; font-size: 16px">
                {{ slotProps.data.objeto }} <strong>Descrição: </strong>
                {{ slotProps.data.descricao }} <strong>Relator: </strong>
                {{ slotProps.data.relator }} <strong>Auditor: </strong>
                {{ slotProps.data.auditor }}.
              </p>
              <template #icons>
                <Button icon="pi pi-download" @click="download" />
              </template>
            </Panel>
          </template>
          <template #empty>
            <div v-if="jurisprudencia">
              <span>Não foi encontrado nenhum resultado</span>
            </div>
            <div v-else>
              <span>Realize a pesquisa</span>
            </div>
          </template>
        </DataView>
        <Loading />
        <Toast></Toast>
      </template>
    </Card>
  </div>
</template>

<script>
import Loading from "../pages/Loading.vue";

export default {
  data() {
    return {
      selectedCostumers: null,
      jurisprudenciaService: null,
      selecionarTodos: false,
      loading: false,
      baixar: false,
      teste: null,
      layout: "list",
    };
  },
  watch: {
    selectedCostumers() {
      console.log(this.selectedCostumers);
      // this.decisorioSelecionado(this.selectedCostumers);
    },
  },
  methods: {
    download() {
      this.$store.state.dlgLoading = true;
      this.$toast.add({
        severity: "info",
        summary: "Atenção",
        detail: "Baixando...",
        life: 3000,
      });
      setTimeout(() => {
        this.$store.state.dlgLoading = false;
        this.$toast.add({
          severity: "success",
          summary: "Sucesso",
          detail: "Download concluído!",
          life: 3000,
        });
      }, 2000);
    },
  },
  components: {
    Loading,
  },
  props: {
    jurisprudencia: {
      type: Array,
      required: true,
    },
  },

  watch: {
    jurisprudencia() {
      for (const teste of this.jurisprudencia) {
        console.log(teste.assunto);
      }
    },
  },
};
</script>

<style scoped>
</style>