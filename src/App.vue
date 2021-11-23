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
        <AppFooter :items="items" />
      </div>
    </div>
  </div>
</template>

<script>
import AppTopbar from "./AppTopbar.vue";
import AppFooter from "./AppFooter.vue";

export default {
  data() {
    return {
      items: Array,
    };
  },
  components: {
    AppTopbar,
    AppFooter,
  },
  created() {
    this.items = [
      { label: "Home", icon: "pi pi-fw pi-home", to: "/home" },
      { label: "Jurisprudência", icon: "pi pi-file-o", to: "/jurisprudencia" },
      { label: "Fale Conosco", icon: "pi pi-question", to: "/faleConosco" },
      { label: "Sair", icon: "pi pi-sign-out", to: "/login" },
    ];
  },
};
</script>

<style lang="scss">

</style>
