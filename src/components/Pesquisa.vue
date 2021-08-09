<template>
  <div>
    <div class="teste p-grid p-ml-6 p-mt-6">
      <Card class="p-card p-col-fixed" style="width: 50%" >
        <template #title>
          <h5>Pesquisa de Jurisprudencia</h5>
        </template>

        <template #header>
          <Menubar :model="items" />
        </template>

        <template #content>
          <form class="p-card-body">
            <div class="p-inputgroup">
              <span class="p-input-icon-right p-float-label">
                <i
                  style="cursor: pointer"
                  class="pi pi-search"
                  @click="decisorios = 'Decisorios'"
                />
                <InputText
                  id="inputtext"
                  type="text"
                  v-model="campoPesquisa"
                  class="p-inputtext-lg"
                />
                <label for="inputtext">Pesquisar por</label>
              </span>
              <Button label="Buscar" @click="decisorios = 'Decisorios'" />
            </div>
          </form>
        </template>
      </Card>

      <DecisorioSelecionado
        v-if="decisorioSelecionado"
        @decisorioSelecionado="decisorioSelecionado = $event"
        :decisorio="decisorioSelecionado"
        class="p-col p-ml-6"
      />
    </div>
    <component :is="decisorios"></component>

    <AppFooter :style="footerFixed"></AppFooter>
  </div>
</template>

<script>
import AppFooter from "../AppFooter.vue";
import eventBus from "../event-bus";
import Decisorios from "./Decisorios.vue";
import DecisorioSelecionado from "./DecisorioSelecionado.vue";

export default {
  data() {
    return {
      campoPesquisa: "",
      decisorios: "",
      decisorioSelecionado: undefined,
      classe: "",
      items: [
        {
          label: "Decisórios",
          icon: "pi pi-fw pi-file",
        },
        {
          label: "Acordãos",
          icon: "pi pi-fw pi-file",
          // icon: "pi pi-fw pi-pencil",
        },
        {
          label: "Publicações",
          icon: "pi pi-fw pi-file",
          // icon: "pi pi-fw pi-user",
        },
      ],
    };
  },
  components: {
    AppFooter,
    Decisorios,
    DecisorioSelecionado,
  },
  computed: {
    footerFixed() {
      return this.decisorios != "Decisorios" ? { position: "fixed" } : {};
    },
  },
  created() {
    eventBus.$on("decisorioSelecionado", (decisorioSelecionado) => {
      this.decisorioSelecionado = decisorioSelecionado;
    });
  },
};
</script>

<style lang="scss" scoped>

</style>