<template>
  <div>
    <div class="landing-body">
      <div class="landing-wrapper">
        <AppTopbar :items="items" />

        <div class="layout-main">
          <div class="layout-content">
            <router-view />
          </div>
        </div>
        <AppFooter />
      </div>
    </div>
  </div>
</template>

<script>
import AppTopbar from "./AppTopbar.vue";
import Decisorios from "./components/Decisorios.vue";
import AppFooter from "./AppFooter.vue";

export default {
  data() {
    return {
      items: Array,
    };
  },
  components: {
    AppTopbar,
    Decisorios,
    AppFooter,
  },
  created() {
    this.items = [
      { label: "Home", icon: "pi pi-fw pi-home", to: "/" },
      { label: "Decisórios", icon: "pi pi-file-o", to: "/decisorios" },
      { label: "Fale Conosco", icon: "pi pi-question", to: "/faleConosco" },
    ];
  },
};
</script>

<style lang="scss">

</style>
