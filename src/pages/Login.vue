<template>
  <div class="login-body">
    <div class="login-panel"></div>

    <div class="login-content">
      <img src="../assets/logo-principal.png" alt="babylon-layout" />

      <h1><span>ENTRE</span> NO CONSULTA DE DECISÓRIOS</h1>
      <p>Bem vindo, por favor, preencha o formulário de login.</p>

      <div class="login-input-wrapper">
        <InputText placeholder="Digite seu usuário: Ex. frank.lima" />
      </div>

      <div class="login-input-wrapper">
        <InputText type="password" placeholder="Digite sua senha: Ex. frank@lima" />
      </div>

      <Button label="Entrar" class="p-mb-4" icon="pi pi-check" @click="goDashboard" />

			<p>Caso não tenha acesso<a href="#"> clique aqui!</a></p>
    </div>
		
  </div>
</template>

<script>
export default {
  methods: {
    goDashboard() {
      window.location = "/#/";
    },
  },
};
</script>

<style scoped>
</style>