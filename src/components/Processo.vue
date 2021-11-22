<template>
  <div>
    <Loading />
    <Toolbar class="p-mb-4">
      <template #left>
        <Button
          label="Novo Processo"
          icon="pi pi-fw pi-plus"
          class="p-button-success p-mr-2"
          @click="cadastrarProcesso"
        />
      </template>

      <template #right>
        <Button
          label="Exportar"
          icon="pi pi-upload"
          class="p-button-help"
          @click="exportCSV($event)"
        />
      </template>
    </Toolbar>

    <DataTable
      :value="processos"
      ref="dt"
      class="p-datatable-responsive"
      columnResizeMode="fit"
      :lazy="true"
      dataKey="id"
      :filters="filters"
      :paginator="true"
      :rows="10"
      :rowsPerPageOptions="[5, 10, 25]"
    >
      <template #header>
        <div class="table-header">
          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText v-model="filters['global']" placeholder="Pesquise..." />
          </span>
        </div>
      </template>

      <Column
        v-for="col in columns"
        :key="col.field"
        :field="col.field"
        :header="col.header"
      />

      <template #empty>
        <span>Nenhum processo encontrado!</span>
      </template>
    </DataTable>

    <keep-alive>
      <components :is="processo" v-bind="propsGeral" />
    </keep-alive>
  </div>
</template>

<script>
import { api } from "../services";
import CadastrarProcesso from "./CadastrarProcesso.vue";
import Loading from "@/pages/Loading.vue";

export default {
  data() {
    return {
      processos: null,
      processo: null,
      filters: {},
      columns: [],
    };
  },
  computed: {
    propsGeral() {
      return this.processo ? { processo: this.processo } : {};
    },
  },
  created() {
    api
      .get("/api/v1/processo")
      .then((data) => {
        this.processos = data.data;
      })
      .catch((error) => {
        console.log(error);
      });

    this.columns = [
      { field: "numero", header: "Número" },
      { field: "ano", header: "Ano" },
      { field: "natureza", header: "Natureza" },
      { field: "especie", header: "Especie" },
      { field: "objeto", header: "Objeto" },
      { field: "numeroPaginas", header: "Número de Páginas" },
    ];
  },
  methods: {
    cadastrarProcesso() {
      this.processo = "CadastrarProcesso";
      this.$store.state.dlgCadastrarProcesso = true;
    },
  },

  components: {
    CadastrarProcesso,
    Loading,
  },
};
</script>

<style>
</style>