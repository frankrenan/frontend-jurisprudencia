<template>
  <Dialog
    :visible.sync="dlgConsultarUsuario"
    :closable="false"
    :maximizable="true"
  >
    <Card class="p-card card">
      <template #header>
        <h1>Consultar Usuário</h1>
      </template>

      <template #content>
        <DataTable
          :value="usuarios"
          class="p-datatable-sm"
          :paginator="true"
          :rows="10"
        >
          <Column
            v-for="col of columns"
            :field="col.field"
            :header="col.header"
            :key="col.field"
            :sortable="true"
          />
        </DataTable>
      </template>
    </Card>
    <template #footer>
      <!-- <Button label="Cadastrar" autofocus @click="cadastrarUsuario" /> -->
      <Button label="Cancelar" @click="fecharDialog" />
    </template>
  </Dialog>
</template>

<script>
import { api } from "../services";

export default {
  data() {
    return {
      usuarios: null,
      columns: Array,
    };
  },
  created() {
    api
      .get("/usuarios")
      .then((data) => {
        this.usuarios = data.data;
      })
      .catch((error) => console.error(error));

    this.columns = [
      { field: "cpf", header: "CPF" },
      { field: "created_at", header: "Data de Criação" },
      { field: "updated_at", header: "Data da ultima atualização" },
    ];
  },

  computed: {
    dlgConsultarUsuario() {
      return this.$store.state.dlgConsultarUsuario;
    },
  },

  methods: {
    fecharDialog() {
      this.$store.state.dlgConsultarUsuario = false;
    },
  },
};
</script>

<style>
</style>