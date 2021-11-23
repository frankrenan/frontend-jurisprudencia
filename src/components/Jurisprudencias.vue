<template>
  <div id="features">
    <Card class="card p-card p-mb-6 p-ml-6" style="width: 75%">
      <template #title>
        <div style="text-align: left">Pesquisa de Jurisprudências</div>
      </template>

      <template #content>
        <form class="p-card-body" style="width: 90%">
          <div class="p-inputgroup">
            <span class="p-input-icon-right p-float-label">
              <i
                style="cursor: pointer"
                class="pi pi-search"
                @click="realizarPesquisa"
              />
              <InputText
                id="inputtext"
                type="text"
                v-model="campoPesquisa"
                class="p-inputtext-lg"
                @keyup.enter="realizarPesquisa"
              />
              <label for="inputtext">Pesquisar por</label>
            </span>
            <Button label="Buscar" @click="realizarPesquisa" />
          </div>
        </form>
      </template>
    </Card>
    <div>
      <JurisprudenciaLista :jurisprudencia="this.dados" />
    </div>
  </div>
</template>
<script>
import JurisprudenciaLista from "./JurisprudenciaLista.vue";

export default {
  data() {
    return {
      campoPesquisa: null,
      pesquisar: false,
      jurisprudenciaService: null,
      dados: null,
    };
  },
  methods: {
    realizarPesquisa() {
      this.$store.state.dlgLoading = true;
    },
  },
  components: {
    JurisprudenciaLista,
  },
};
</script>

<style scoped>
</style>

