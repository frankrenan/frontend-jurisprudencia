<template>
	<div class="exception-body  error">
		<div class="exception-panel"></div>

		<div class="exception-content">
			<img src="assets/layout/images/logo-black.png" alt="babylon-layout"/>
			<h1><span class="exception-name">ERROR</span> OCCURRED</h1>
			<p>Something went wrong.</p>
			<a @click="goDashboard">Back to Dashboard</a>
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