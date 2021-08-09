<template>
  <div class="layout-footer">
    <div class="p-grid">
      <div class="p-col-6">
        <a href="https://www2.tce.am.gov.br/" target="_blank"
          ><img
            src="./assets/logo-amazonas.png"
            alt="Logo do tribunal"
            class="imagem-logo"
        /></a>
      </div>
      <div class="p-col-6 footer-icons">
        <button class="p-link">
          <i class="pi pi-home"></i>
        </button>
        <button class="p-link">
          <i class="pi pi-globe"></i>
        </button>
        <button class="p-link">
          <i class="pi pi-envelope"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
.layout-footer {
  width: 100%;
  margin: auto;
  bottom: 0;
}
</style>