<template>
  <div class="p-mt-4 p-ml-6">
    <h3>Decisórios</h3>

    <Card class="card">
      <template #header>
        <div>RESULTADOS:</div>
        <hr />
      </template>
      <template #content>
        <DataView
          :value="decisorios"
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
                  Processo: {{ slotProps.data.numeroProcesso }}/{{
                    slotProps.data.anoProcesso
                  }}

                  Decisório: {{ slotProps.data.numeroDecisorio }}/{{
                    slotProps.data.anoDecisorio
                  }}
                </h4>
              </template>
              <p style="text-align: justify; font-size: 16px">
                {{ slotProps.data.conteudo }}
              </p>
              <template #icons>
                <Button icon="pi pi-download" @click="download" />
              </template>
            </Panel>
          </template>
          <template #empty>
            <div v-if="decisorios">
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
      this.decisorioSelecionado(this.selectedCostumers);
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
    decisorios: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>