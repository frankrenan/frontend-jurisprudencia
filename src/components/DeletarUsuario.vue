<template>
  <div>
    <Dialog
      :visible.sync="dlgDeletarUsuario"
      :closable="false"
      :maximizable="true"
      :style="{ width: '450px' }"
      header="Confirmar Exclusão?"
    >
      <div>
        <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
        <span v-if="usuario"
          >Deseja mesmo excluir o CPF: <b>{{ usuario.cpf }}</b
          >?</span
        >
      </div>

      <template #footer>
        <Button
          label="Não"
          class="p-button-text"
          icon="pi pi-times"
          @click="fecharDialog"
        />
        <Button
          label="Sim"
          class="p-button-text"
          icon="pi pi-trash"
          @click="deletarUsuario"
        />
      </template>
    </Dialog>
    <Toast />
    <Loading />
  </div>
</template>

<script>
import { api } from "../services";
import Loading from "@/pages/Loading.vue";

export default {
  // data() {
  //   return {
  //     cpf: "",
  //   };
  // },

  props: {
    usuario: {
      type: Object,
      required: true,
    },
  },

  computed: {
    dlgDeletarUsuario() {
      return this.$store.state.dlgDeletarUsuario;
    },
  },

  methods: {
    fecharDialog() {
      this.$store.state.dlgDeletarUsuario = false;
    },

    deletarUsuario() {
      this.$store.state.dlgLoading = true;
      api
        .delete(`/usuario/${this.usuario.cpf}`)
        .then(() => {
          setTimeout(() => {
            this.$store.state.dlgLoading = false;
            this.$toast.add({
              severity: "success",
              summary: "Sucesso!",
              detail: "Usuário deletado com sucesso!",
              life: 3000,
            });
            this.$store.state.dlgDeletarUsuario = false;
          }, 2000);
        })
        .catch(() => {
          setTimeout(() => {
            this.$store.state.dlgLoading = false;
            this.$toast.add({
              severity: "error",
              summary: "Error!",
              detail: "Erro ao deletar usuário!",
              life: 3000,
            });
            this.$store.state.dlgDeletarUsuario = false;
          }, 2000);
        });
    },
  },
  components: {
    Loading,
  },
};
</script>

<style>
</style>