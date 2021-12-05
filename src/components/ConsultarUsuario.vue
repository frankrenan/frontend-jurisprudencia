<template>
  <Dialog
    :visible.sync="dlgConsultarUsuario"
    :closable="false"
    :maximizable="true"
    :style="{ width: '50vw' }"
  >
    <Card class="p-card card">
      <template #header>
        <h1>Consultar Usuário</h1>
        <small
          >Realiza a consulta de todos os usuários do sistema de
          jurisprudencia</small
        >
      </template>

      <template #content>
        <DataTable
          :value="advogados"
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
    <Loading />
  </Dialog>
</template>

<script>
import { api } from "../services";
import Loading from "@/pages/Loading.vue";

export default {
  data() {
    return {
      usuarios: null,
      columns: Array,
    };
  },

  created() {
    this.$store.state.dlgLoading = true;
    setTimeout(() => {
      api
        .get("/advogados")
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
      { field: "nome", header: "Nome" },
      { field: "email", header: "E-mail" },
      { field: "oab", header: "Oab" },
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

  components: {
    Loading,
  },
};
</script>

<style>
</style>