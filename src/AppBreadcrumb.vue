<template>
	<div class="route-bar">
		<div class="route-bar-breadcrumb">
			<ul>
				<li><button class="p-link" @click="home"><i class="pi pi-home"></i></button></li>
				<li v-if="$route.path === '/'">/</li>
				<template v-for="(path,i) of $route.path.split('/')">
					<li :key="i" v-if="$route.path !== '/' && path === ''">/</li>
					<li :key="i" v-else>{{$route.path.split('/')[1]}}</li>
				</template>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			home() {
				window.location = "/#/"
			}
		}
	}
</script>

<style scoped>

</style>