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
		},
		{
			path: '/',
			redirect: '/login'
		},
		{
			path: '/login',
			name: 'login',
			exact: true,
			component: () => import('./pages/Login.vue')
		}
	],
	scrollBehavior() {
		return { x: 0, y: 0 };
	}
});

// router.beforeEach((t, f, next) => {

// 	if (t.path == "/login") {

// 		/*
// 		 * Acesso livre à página de login. Opcionalmente, pode-se verificar se há um token
// 		 * de acesso salvo em localStorage e direcionar o usuário diretamente ao dashboard
// 		 */

// 		next()

// 	} else {

// 		/*
// 		 * Verifica se há um token de acesso salvo. Se não existir, redireciona o usuário
// 		 * para a tela de login
// 		 */

// 		var loginService = new LoginService();

// 		if (loginService.isUserLogged()) {
// 			const userToken = loginService.getUserToken();
// 			api.defaults.headers["Authorization"] = "Bearer " + userToken;
// 			next()
// 		} else {
// 			console.log("Usuário não logado. Redirecionando para tela de login...")
// 			next("/login")
// 		}
// 	}

// });