<template>
  <div>
    <Loading />
    <Toolbar class="p-mb-4">
      <template #left>
        <Button
          label="Novo"
          icon="pi pi-fw pi-user-plus"
          class="p-button-success p-mr-2"
          @click="cadastrarUsuario"
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
      :value="usuarios"
      ref="dt"
      class="p-datatable-sm"
      :selection.sync="selectedUser"
      dataKey="cpf"
      :filters="filters"
      :paginator="true"
      :rows="10"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      :rowsPerPageOptions="[5, 10, 25]"
      currentPageReportTemplate="Mostrando {first} de {last} com {totalRecords} usuarios"
    >
      <template #header>
        <div class="table-header">
          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputMask mask="999.999.999-99" v-model="filters['global']" placeholder="Pesquise..." />
          </span>
        </div>
      </template>

      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>

      <Column
        v-for="col of columns"
        :field="col.field"
        :header="col.header"
        :key="col.field"
        :sortable="true"
      />

      <Column>
        <template #body="slotProps">
          <Button
            icon="pi pi-pencil"
            class="p-button-rounded p-button-success p-mr-2"
            @click="alterarUsuario(slotProps.data)"
          />
          <Button
            icon="pi pi-trash"
            class="p-button-rounded p-button-warning"
            @click="deletarUsuario(slotProps.data)"
          />
        </template>
      </Column>

      <template #empty>
        <span>Nenhum usuário encontrado!</span>
      </template>
    </DataTable>
    <keep-alive>
      <components :is="opcao" v-bind="propsGeral" />
    </keep-alive>
  </div>
</template>

<script>
import { api } from "../services";
import Loading from "@/pages/Loading.vue";
import CadastrarUsuario from "@/components/CadastrarUsuario.vue";
import DeletarUsuario from "@/components/DeletarUsuario.vue";
import AlterarUsuario from "@/components/AlterarUsuario.vue";

export default {
  data() {
    return {
      usuarios: null,
      usuario: {},
      opcao: null,
      selectedUser: null,
      filters: {},
      columns: Array,
    };
  },

  created() {
    this.$store.state.dlgLoading = true;
    setTimeout(() => {
      api
        .get("/usuarios")
        .then((data) => {
          this.usuarios = data.data;
          this.$store.state.dlgLoading = false;
        })
        .catch(() => {
          this.$store.state.dlgLoading = false;
        });
    }, 1000);

    this.columns = [
      { field: "cpf", header: "CPF" },
      { field: "created_at", header: "Data de Criação" },
      { field: "updated_at", header: "Última atualização" },
    ];
  },

  computed: {
    propsGeral() {
      return this.usuario ? { usuario: this.usuario } : {};
    },
  },

  methods: {
    fecharDialog() {
      this.$store.state.dlgConsultarUsuario = false;
    },

    cadastrarUsuario() {
      this.opcao = "CadastrarUsuario";
      this.$store.state.dlgCadastrarUsuario = true;
    },

    alterarUsuario(usuario) {
      this.usuario = usuario.cpf;
      this.opcao = "AlterarUsuario";
      this.$store.state.dlgAlterarUsuario = true;
    },

    deletarUsuario(usuario) {
      this.usuario = { ...usuario };
      this.opcao = "DeletarUsuario";
      this.$store.state.dlgDeletarUsuario = true;
    },

    exportCSV() {
      this.$refs.dt.exportCSV();
    },
  },

  watch: {
    selectedUser() {
      console.log(this.selectedUser);
    },
  },

  components: {
    Loading,
    CadastrarUsuario,
    DeletarUsuario,
    AlterarUsuario,
  },
};
</script>

<style>
</style>