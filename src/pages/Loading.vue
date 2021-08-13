<template>
  <div>
    <Dialog
      :visible.sync="carregarTela"
      :closable="false"
      :modal="true"
      header="Aguarde"
    >
      <ProgressSpinner />
    </Dialog>
  </div>
</template>

<script>
export default {
  computed: {
    carregarTela() {
      return this.$store.state.dlgLoading;
    },
  },
};
</script>