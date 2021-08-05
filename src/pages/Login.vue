<template>
	<div class="login-body">

		<div class="login-panel"></div>

		<div class="login-content">
			<img src="assets/layout/images/logo-black.png" alt="babylon-layout"/>

			<h1><span>SIGN IN</span> TO BABYLON</h1>
			<p>Welcome, please use the form to sign-in.</p>

			<div class="login-input-wrapper">
				<InputText placeholder="Username"/>
			</div>

			<div class="login-input-wrapper">
				<InputText type="password" placeholder="Password"/>
			</div>

			<Button label="Sign In" icon="pi pi-check" @click="goDashboard"/>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			goDashboard(){
				window.location = "/#/"
			}
		}
	}
</script>

<style scoped>

</style>