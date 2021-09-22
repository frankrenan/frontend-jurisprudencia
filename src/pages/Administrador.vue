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
            <!-- <Button label="Sair" icon="pi pi-power-off" :style="{'margin-left': '0 .5em'}"/> -->
          </template>
        </Menubar>
      </template>

      <template #content>
        <form class="p-card-body" style="width: 90%">
          <keep-alive>
            <components :is="opcao" v-bind="propsGeral" />
          </keep-alive>
        </form>
      </template>
    </Card>
  </div>
</template>

<script>
import CadastrarUsuario from "@/components/CadastrarUsuario.vue";
import AlterarUsuario from "@/components/AlterarUsuario.vue";
import ConsultarUsuario from "@/components/ConsultarUsuario.vue";
import DeletarUsuario from "@/components/DeletarUsuario.vue";

export default {
  data() {
    return {
      opcao: "",
      items: [
        {
          label: "Usuários",
          icon: "pi pi-fw pi-user",
          items: [
            {
              label: "Novo",
              icon: "pi pi-fw pi-user-plus",
              command: () => {
                this.opcao = "CadastrarUsuario";
                this.$store.state.dlgCadastrarUsuario = true;
              },
            },
            {
              label: "Alterar",
              icon: "pi pi-fw pi-user-edit",
              command: () => {
                this.opcao = "AlterarUsuario";
                this.$store.state.dlgAlterarUsuario = true;
              },
            },
            {
              label: "Consultar",
              icon: "pi pi-fw pi-users",
              command: () => {
                this.opcao = "ConsultarUsuario";
                this.$store.state.dlgConsultarUsuario = true;
              },
            },
            {
              label: "Deletar",
              icon: "pi pi-fw pi-user-minus",
              command: () => {
                this.opcao = "DeletarUsuario";
                this.$store.state.dlgDeletarUsuario = true;
              },
            },
          ],
        },
      ],
    };
  },

  created() {
    console.log(this.$route.fullPath);
  },

  computed: {
    propsGeral() {
      return this.opcao ? { opcao: this.opcao } : {};
    },
  },

  components: {
    CadastrarUsuario,
    AlterarUsuario,
    ConsultarUsuario,
    DeletarUsuario,
  },
};
</script>

<style>
</style>