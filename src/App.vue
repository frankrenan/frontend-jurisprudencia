<template>
	<div :class="containerClass" @click="onDocumentClick">
		<AppTopBar :topbarMenuActive="topbarMenuActive" :activeTopbarItem="activeTopbarItem" :horizontal="isHorizontal()" :profileMode="profileMode"
					@menubutton-click="onMenuButtonClick" @topbar-menubutton-click="onTopbarMenuButtonClick" @topbar-item-click="onTopbarItemClick"></AppTopBar>

		<transition name="layout-menu-container">
			<div class="layout-menu-container" @click="onMenuClick" v-show="isMenuVisible()">
				<div class="layout-menu-logo">
					<button class="p-link">
						<img id="layout-menu-logo" src="assets/layout/images/logo-white.png" alt="babylon-layout"/>
					</button>
				</div>
				<div class="layout-menu-wrapper">
					<div class="menu-scroll-content">
						<AppInlineProfile v-if="displayInlineProfile" @profile-click="onProfileClick" :expanded="profileExpanded"></AppInlineProfile>
						<AppMenu :model="grouped ? menuGrouped : menuUngrouped" :layoutMode="layoutMode" :active="menuActive" @menuitem-click="onMenuItemClick" @root-menuitem-click="onRootMenuItemClick"></AppMenu>
					</div>
				</div>
			</div>
		</transition>

		<div class="layout-main">
			<AppBreadcrumb></AppBreadcrumb>

			<div class="layout-content">
				<router-view/>
			</div>

			<AppFooter/>
		</div>

		<AppConfig :layoutMode="layoutMode" @layout-change="onLayoutChange" :darkMenu="darkMenu" @menu-color-change="onMenuColorChange"
					:profileMode="profileMode" @profile-mode-change="onProfileModeChange" :grouped="grouped" @menu-type-change="onMenuTypeChange"></AppConfig>

		<div v-if="staticMenuMobileActive" class="layout-mask"></div>
	</div>
</template>

<script>
import AppTopBar from './AppTopbar.vue';
import AppInlineProfile from './AppInlineProfile.vue';
import AppMenu from './AppMenu.vue';
import AppConfig from './AppConfig.vue';
import AppBreadcrumb from './AppBreadcrumb.vue';
import AppFooter from './AppFooter.vue';
import EventBus from './event-bus';

export default {
	data() {
		return {
			layoutMode: 'static',
			staticMenuDesktopInactive: false,
			staticMenuMobileActive: false,
			overlayMenuActive: false,
			topbarMenuActive: false,
			activeTopbarItem: null,
			menuActive: false,
			darkMenu: true,
			profileMode: 'inline',
			profileExpanded: false,
			grouped: true,
			menuGrouped: Array,
			menuUngrouped: Array
		}
	},
	created: function(){
		this.menuGrouped = [
			{
                label: 'Home Page', icon: 'pi pi-fw pi-home',
				items: [
					{label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/'}
				]
			},
			{
				label: 'UI Kit', icon: 'pi pi-fw pi-sitemap',
				items: [
					{label: 'Form Layout', icon: 'pi pi-fw pi-id-card', to: '/formlayout'},
					{label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/input'},
					{label: 'Button', icon: 'pi pi-fw pi-mobile', to: '/button'},
					{label: 'Table', icon: 'pi pi-fw pi-table', to: '/table'},
					{label: 'List', icon: 'pi pi-fw pi-list', to: '/list'},
					{label: 'Tree', icon: 'pi pi-fw pi-share-alt', to: '/tree'},
					{label: 'Panel', icon: 'pi pi-fw pi-tablet', to: '/panel'},
					{label: 'Overlay', icon: 'pi pi-fw pi-clone', to: '/overlay'},
					{label: 'Menu', icon: 'pi pi-fw pi-bars', to: '/menu'},
					{label: 'Message', icon: 'pi pi-fw pi-comment', to: '/messages'},
					{label: 'File', icon: 'pi pi-fw pi-file', to: '/file'},
					{label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: '/chart'},
					{label: 'Misc', icon: 'pi pi-fw pi-circle-off', to: '/misc'},
				]
			},
			{
				label: "Utilities", icon:'pi pi-fw pi-globe',
				items: [
					{label: 'Display', icon:'pi pi-fw pi-desktop', to:'/display'},
					{label: 'Elevation', icon:'pi pi-fw pi-external-link', to:'/elevation'},
					{label: 'Flexbox', icon:'pi pi-fw pi-directions', to:'/flexbox'},
					{label: 'Icons', icon:'pi pi-fw pi-search', to:'/icons'},
					{label: 'Widgets', icon:'pi pi-fw pi-star-o', to:'/widgets'},
					{label: 'Grid System', icon:'pi pi-fw pi-th-large', to:'/grid'},
					{label: 'Spacing', icon:'pi pi-fw pi-arrow-right', to:'/spacing'},
					{label: 'Typography', icon:'pi pi-fw pi-align-center', to:'/typography'},
					{label: 'Text', icon:'pi pi-fw pi-pencil', to:'/text'},
				]
			},
			{
				label: 'Pages', icon: 'pi pi-fw pi-clone',
				items: [
					{label: 'Crud', icon: 'pi pi-fw pi-pencil', to: '/crud'},
					{label: 'Calendar', icon: 'pi pi-fw pi-calendar-plus', to: '/calendar'},
					{label: 'Landing', icon: 'pi pi-fw pi-user-plus', url: 'assets/pages/landing.html', target: '_blank'},
					{label: 'Login', icon: 'pi pi-fw pi-sign-in', to: '/login'},
					{label: 'Invoice', icon: 'pi pi-fw pi-dollar', to: '/invoice'},
					{label: 'Help', icon: 'pi pi-fw pi-question-circle', to: '/help'},
					{label: 'Error', icon: 'pi pi-fw pi-times-circle', to: '/error'},
					{label: 'Not Found', icon: 'pi pi-fw pi-exclamation-circle', to: '/notfound'},
					{label: 'Access Denied', icon: 'pi pi-fw pi-lock', to: '/access'},
					{label: 'Empty Page', icon: 'pi pi-fw pi-circle-off', to: '/empty'}
				]
			},
			{
				label: 'Hierarchy', icon: 'pi pi-fw pi-sitemap',
				items: [
					{
						label: 'Submenu 1', icon: 'pi pi-fw pi-sign-in',
						items: [
							{
								label: 'Submenu 1.1', icon: 'pi pi-fw pi-sign-in',
								items: [
									{ label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-sign-in' },
									{ label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-sign-in' },
									{ label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-sign-in' },
								]
							},
							{
								label: 'Submenu 1.2', icon: 'pi pi-fw pi-sign-in',
								items: [
									{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-sign-in' },
									{ label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-sign-in' }
								]
							},
						]
					},
					{
						label: 'Submenu 2', icon: 'pi pi-fw pi-sign-in',
						items: [
							{
								label: 'Submenu 2.1', icon: 'pi pi-fw pi-sign-in',
								items: [
									{ label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-sign-in' },
									{ label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-sign-in' },
									{ label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-sign-in' },
								]
							},
							{
								label: 'Submenu 2.2', icon: 'pi pi-fw pi-sign-in',
								items: [
									{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-sign-in' },
									{ label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-sign-in' }
								]
							},
						]
					}
				]
			},
			{
                label: 'Get Started', icon: 'pi pi-fw pi-download',
				items: [
					{
						label: 'Docs', icon: 'pi pi-fw pi-file',to: '/documentation'
					},
					{
						label: 'Buy Now', icon: 'pi pi-fw pi-money-bill', url: ['https://www.primefaces.org/store']
					}
				]
			}
		];
		this.menuUngrouped = [
			{
				label: 'Main Menu',
				icon: 'pi pi-fw pi-home',
				items: this.menuGrouped
			}
		]
	},
	watch: {
		$route() {
			this.menuActive = false;
			this.$toast.removeAllGroups();
		}
	},
	methods: {
		onDocumentClick() {
			if (!this.topbarItemClick) {
				this.activeTopbarItem = null;
				this.topbarMenuActive = false;
			}

			if (!this.menuClick) {
				if (this.isHorizontal() || this.isSlim()) {
					EventBus.$emit('reset_active_index');
					this.menuActive = false;
				}
				this.hideOverlayMenu();
			}

			if(!this.profileClick) {
				if (this.isSlim()) {
					this.profileExpanded = false;
				}
			}

			this.topbarItemClick = false;
			this.menuClick = false;
			this.profileClick = false;
		},
		onMenuButtonClick(event) {
			this.menuClick = true;
			this.topbarMenuActive = false;

			if (this.layoutMode === 'overlay') {
				if (this.isDesktop())
					this.overlayMenuActive = !this.overlayMenuActive;
				else
					this.staticMenuMobileActive = !this.staticMenuMobileActive;
			}
			else {
				if (this.isDesktop())
					this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive;
				else
					this.staticMenuMobileActive = !this.staticMenuMobileActive;
			}

			event.preventDefault();
		},
		onTopbarMenuButtonClick(event) {
			this.topbarItemClick = true;
			this.topbarMenuActive = !this.topbarMenuActive;
			this.hideOverlayMenu();
			event.preventDefault();
		},
		onTopbarItemClick(event) {
			this.topbarItemClick = true;

			if (this.activeTopbarItem === event.item)
				this.activeTopbarItem = null;
			else
				this.activeTopbarItem = event.item;

			event.originalEvent.preventDefault();
		},
		onMenuClick() {
			this.menuClick = true;
		},
		isMenuVisible() {
			if (this.isDesktop()) {
				if (this.layoutMode === 'static')
					return !this.staticMenuDesktopInactive;
				else if (this.layoutMode === 'overlay')
					return this.overlayMenuActive;
				else
					return true;
			} else {
				return true;
			}
		},
		onProfileClick(event) {
			this.profileClick = true;
			this.profileExpanded = !this.profileExpanded;
			if(this.isHorizontal() || this.isSlim()) {
				EventBus.$emit('reset_active_index');
			}

			event.preventDefault();
		},
		onLayoutChange(layoutMode) {
			this.layoutMode = layoutMode;
			this.staticMenuDesktopInactive = false;
			this.overlayMenuActive = false;

			if(this.isHorizontal()) {
				this.profileMode = 'popup'
			}
		},
		onMenuTypeChange(menuType) {
			this.grouped = menuType;
		},
		onMenuColorChange(menuColor) {
			this.darkMenu = menuColor;
		},
		onProfileModeChange(profileMode) {
			this.profileMode = profileMode;
		},
		isHorizontal() {
			return this.layoutMode === 'horizontal';
		},
		isSlim() {
			return this.layoutMode === 'slim';
		},
		hideOverlayMenu() {
			this.overlayMenuActive = false;
			this.staticMenuMobileActive = false;
		},
		isDesktop() {
			return window.innerWidth > 1024;
		},
		isMobile() {
			return window.innerWidth <= 640;
		},
		onMenuItemClick(event) {
			if (!event.item.items) {
				EventBus.$emit('reset_active_index');
				this.hideOverlayMenu();
			}
			if (!event.item.items && (this.isHorizontal() || this.isSlim())) {
				this.menuActive = false;
			}
		},
		onRootMenuItemClick() {
			this.menuActive = !this.menuActive;
		}
	},
	computed: {
		containerClass() {
			return ['layout-wrapper', {
				'layout-horizontal': this.layoutMode === 'horizontal',
				'layout-overlay': this.layoutMode === 'overlay',
				'layout-static': this.layoutMode === 'static',
				'layout-slim': this.layoutMode === 'slim',
				'layout-static-inactive': this.staticMenuDesktopInactive,
				'layout-mobile-active': this.staticMenuMobileActive,
				'layout-overlay-active': this.overlayMenuActive,
				'layout-menu-dark': this.darkMenu,
				'layout-menu-light':!this.darkMenu,
				'p-input-filled': this.$appState.inputStyle === 'filled',
				'p-ripple-disabled': this.$primevue.ripple === false
			}];
        },
        displayInlineProfile() {
            return this.profileMode === 'inline' && this.layoutMode !== 'horizontal'
        }
	},
	components: {
		'AppTopBar': AppTopBar,
		'AppConfig': AppConfig,
		'AppInlineProfile': AppInlineProfile,
		'AppMenu': AppMenu,
		'AppBreadcrumb': AppBreadcrumb,
		'AppFooter': AppFooter
	}
}
</script>

<style lang="scss">
	@import 'App.scss';
</style>
