<template>
  <div class="">
    <div class="p-col">
      <h2>Decisorio Selecionado</h2>

      <p><strong>Titulo:</strong> {{ decisorio.name }}</p>
      <p><strong>Assunto:</strong> {{ decisorio.assunto }}</p>
    </div>

    <Button label="Baixe Aqui" icon="pi pi-download" />
  </div>
</template>

<script>
export default {
  props: {
    decisorio: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>



</style>