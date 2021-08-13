import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'decisorios',
			exact: true,
			component: () => import('./components/Home.vue')
		},
		{
			path: '/decisorios',
			name: 'decisorioSelecionado',
			exact: true,
			component: () => import('./components/Decisorios.vue')
		},
		{
			path: '/faleConosco',
			name: 'faleConosco',
			exact: true,
			component: () => import('./components/FaleConosco.vue')
		}
	],
	scrollBehavior() {
		return { x: 0, y: 0 };
	}
});
