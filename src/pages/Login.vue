<template>
  <div class="login-body">
    <div class="login-panel"></div>

    <div class="login-content">
      <img src="../assets/logo-principal.png" alt="babylon-layout" />

      <h1><span>ENTRE</span> NO CONSULTA DE JURISPRUDENCIAS</h1>
      <p>Bem vindo, por favor, preencha o formulário de login.</p>

      <div class="login-input-wrapper">
        <!-- <InputText placeholder="Digite seu CPF: Ex. 03207394221" /> -->
        <InputMask
          id="inputtext"
          mask="999.999.999-99"
          v-model="cpf"
          placeholder="Digite seu CPF:"
        />
      </div>

      <div class="login-input-wrapper">
        <InputText
          type="password"
          placeholder="Digite sua senha:"
          v-model="senha"
        />
      </div>

      <Button
        label="Entrar"
        class="p-mb-4"
        icon="pi pi-check"
        @click="autenticarUsuario"
      />
      <Loading />
      <Toast />
      <p>
        Caso não tenha acesso<a
          target="_blank"
          href="https://advogados.tce.am.gov.br/advogados/pages/conta/criar_conta_acesso.jsf;jsessionid=xlM1GayA4Pp2_tEORnEnzZl3D1PkD-5GQDTjWh4s.746ef3856dad"
        >
          clique aqui!</a
        >
      </p>
    </div>
  </div>
</template>

<script>
import Loading from "./Loading.vue";
import { api } from "../services";

export default {
  data() {
    return {
      cpf: "",
      senha: "",
      valor: null,
    };
  },

  created() {
    // this.$state.store.usuario = null;
  },
  methods: {
    autenticarUsuario() {
      this.$store.state.dlgLoading = true;
      api
        .post("/api/v1/autenticar", { cpf: this.cpf, senha: this.senha })
        .then((data) => {
          // console.log(JSON.stringify(data.data.token));
          this.$store.state.usuario = JSON.stringify(data.data);
          const usuario = JSON.parse(this.$store.state.usuario);
          setTimeout(() => {
            this.$store.state.dlgLoading = false;
            if (usuario.advogado.admin === false) {
              // this.$router.push("/home");
              window.location = "/#/home";
            } else {
              // this.$router.push("/administrador");
              window.location = "/#/administrador";
            }
          }, 2000);
        })
        .catch(() => {
          setTimeout(() => {
            this.$store.state.dlgLoading = false;
            this.$toast.add({
              severity: "error",
              summary: "Erro!",
              detail: "CPF ou senha incorreto!",
              life: 3000,
            });
          }, 2000);
        });
    },
  },
  components: {
    Loading,
  },
};
</script>

<style scoped>
</style>