<template>
  <div id="features">
    <Card class="card p-card p-mb-6 p-ml-6" style="width: 75%">
      <template #title>
        <div style="text-align: left">Perfil Administrador</div>
      </template>

      <template #subtitle>
        <Menubar :model="items">
          <template #end>
            <InputText placeholder="Search" type="text" />
          </template>
        </Menubar>
      </template>

      <template #content>
        <form class="p-card-body" style="width: 90%">
          <keep-alive exclude="Usuario">
            <components :is="opcao" />
          </keep-alive>
        </form>
      </template>
    </Card>
  </div>
</template>

<script>
import CadastrarUsuario from "@/components/CadastrarUsuario.vue";
import AlterarUsuario from "@/components/AlterarUsuario.vue";
import DeletarUsuario from "@/components/DeletarUsuario.vue";
import CadastrarProcesso from "@/components/CadastrarProcesso.vue";
import Usuario from "@/components/Usuario.vue";
import Processo from "@/components/Processo.vue";

export default {
  data() {
    return {
      opcao: "",
      items: [
        {
          label: "Usuários",
          icon: "pi pi-fw pi-user",
          command: () => {
            this.opcao = "Usuario";
          },
        },
        {
          label: "Processos",
          icon: "pi pi-fw pi-clone",
          command: () => {
            this.opcao = "Processo";
          },
        },
      ],
    };
  },

  created() {
    // const usuario = JSON.parse(this.$store.state.usuario);
    // if (usuario.advogado.admin === false) {
    //   window.location = "/#/notfound";
    // }
  },

  computed: {
    propsGeral() {
      return this.opcao ? { opcao: this.opcao } : {};
    },
  },

  components: {
    CadastrarUsuario,
    AlterarUsuario,
    DeletarUsuario,
    Usuario,
    Processo,
    CadastrarProcesso,
  },
};
</script>

<style>
</style>