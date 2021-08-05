<template>
	<div class="p-grid">
		<div class="p-col-12">
			<div class="card docs">
				<h4>Current Version</h4>
				<p>Vue 2.6.10 and PrimeVue 2.0.x</p>

				<h4>Getting Started</h4>
				<p>Babylon is an application template for Vue based on the <a href="https://cli.vuejs.org/">Vue CLI</a>
					that provides out-of-the-box standard
					tooling for Vue projects. If you don't have CLI installed already run the following command.</p>
<CodeHighlight>
npm install -g @vue/cli

# OR

yarn global add @vue/cli
</CodeHighlight>

				<p>Once CLI is ready in your system, extract the contents of the Babylon zip file distribution, cd to
					the directory and install the libraries from npm.</p>

<CodeHighlight>
npm install

# OR

yarn
</CodeHighlight>

				<p>Final step is running the application using the serve script and navigate to <b>http://localhost:8080/</b>
					to view the application.
					That is it, you may now start with the development of your application using the Babylon template.
				</p>

<CodeHighlight>
npm run serve
</CodeHighlight>

				<h4>Vue CLI Scripts</h4>
				<p>Following commands are derived from create-app-app.</p>
<CodeHighlight>
"npm run serve": Starts the development server
"npm run build": Builds the application for deployment.
"npm run lint": Executes the lint checks.
"npm run test:unit": Runs the tests.
</CodeHighlight>

				<h4>Structure</h4>
				<p>Babylon consists of 2 main parts; the application layout and the resources. <i>App.vue</i> inside src
					folder is the main component containing the template for the base layout
					whereas required resources such as SASS structure for the layout are placed inside the <b>public/assets/</b>
					folder.</p>

				<h4>Template</h4>
				<p>Main layout is the template of the <i>App.vue</i>, it is divided into a couple of child components
					such as topbar, content, profile, menu and footer. Here is template of the
					<i>App.vue</i> component that implements the logic such as menu state, layout modes and other
					configurable options.
				</p>

<CodeHighlight>
<template v-pre>
&lt;div :class="containerClass" @click="onDocumentClick"&gt;
	&lt;AppTopBar :topbarMenuActive="topbarMenuActive" :activeTopbarItem="activeTopbarItem" :horizontal="isHorizontal()" :profileMode="profileMode"
				@menubutton-click="onMenuButtonClick" @topbar-menubutton-click="onTopbarMenuButtonClick" @topbar-item-click="onTopbarItemClick"&gt;&lt;/AppTopBar&gt;

	&lt;transition name="layout-menu-container"&gt;
		&lt;div class="layout-menu-container" @click="onMenuClick" v-show="isMenuVisible()"&gt;
			&lt;div class="layout-menu-logo"&gt;
				&lt;button class="p-link"&gt;
					&lt;img id="layout-menu-logo" src="assets/layout/images/logo-white.png" alt="babylon-layout"/&gt;
				&lt;/button&gt;
			&lt;/div&gt;
			&lt;div class="layout-menu-wrapper"&gt;
				&lt;div class="menu-scroll-content"&gt;
					&lt;AppInlineProfile v-if="displayInlineProfile" @profile-click="onProfileClick" :expanded="profileExpanded"&gt;&lt;/AppInlineProfile&gt;

					&lt;AppMenu :model="grouped ? menuGrouped : menuUngrouped" :layoutMode="layoutMode" :active="menuActive" @menuitem-click="onMenuItemClick" @root-menuitem-click="onRootMenuItemClick"&gt;&lt;/AppMenu&gt;
				&lt;/div&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/transition&gt;

	&lt;div class="layout-main"&gt;
		&lt;AppBreadcrumb&gt;&lt;/AppBreadcrumb&gt;

		&lt;div class="layout-content"&gt;
			&lt;router-view/&gt;
		&lt;/div&gt;
	&lt;/div&gt;

	&lt;AppConfig :layoutMode="layoutMode" @layout-change="onLayoutChange" :darkMenu="darkMenu" @menu-color-change="onMenuColorChange" :profileMode="profileMode" @profile-mode-change="onProfileModeChange" :grouped="grouped"
					@menu-type-change="onMenuTypeChange"&gt;&lt;/AppConfig&gt;

	&lt;AppFooter/&gt;

	&lt;div v-if="staticMenuMobileActive" class="layout-mask"&gt;&lt;/div&gt;
&amp;lt;/div&amp;gt;
</template>
</CodeHighlight>

				<h4>Menu</h4>
				<p>Menu is a separate component defined in <i>AppMenu.vue</i> file based on PrimeNG MenuModel API. In
					order to define the menuitems,
					navigate to data section of <i>App.vue</i> file and define your own model as a nested structure
					using the menu property.
					Here is the menu component from the demo application. Notice that menu object is bound to the model
					property of AppMenu component as shown above.</p>

<div style="height: 400px; overflow: auto">
<CodeHighlight lang="javascript">
data() {
	return {
		menu : [
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
		]
	}
}
</CodeHighlight>
</div>

				<p style="margin-top: 10px">Dependencies of Babylon are listed below and needs to be added to
					package.json. Babylon has no direct dependency, even PrimeVue components
					are an optional dependency.</p>

<CodeHighlight>
{
	"primevue": "^2.0.0",			//optional: PrimeVue components
	"primeicons": "4.0.0",			//optional: Icons
	"primeflex": "1.0.0",			//optional: Grid system
}
</CodeHighlight>

				<h4>Component Theme</h4>
				<p>Babylon provides 17 PrimeVue themes out of the box, setup of a theme simple including the css of
					theme to your page that is located inside public/assets/sass/theme folder
					such as <b>assets/theme/theme-blue.css</b>.</p>
				<p>In the demo application, theme css file is added to the index page to enable themeswitcher
					functionality however since VueCLI supports
					SASS compilation via webpack, you may also import the sass of the theme to App.vue as well.</p>

				<p>Full list of available themes are;</p>

				<ul>
					<li>amber</li>
					<li>blue</li>
					<li>bluegrey</li>
					<li>brown</li>
					<li>cyan</li>
					<li>deeporange</li>
					<li>deeppurple</li>
					<li>green</li>
					<li>indigo</li>
					<li>lightblue</li>
					<li>lightgreen</li>
					<li>lime</li>
					<li>orange</li>
					<li>pink</li>
					<li>purple</li>
					<li>teal</li>
					<li>yellow</li>
				</ul>

				<p>A custom theme can be developed by the following steps.</p>
				<ul>
					<li>Choose a custom theme name such as theme-myown.</li>
					<li>Create a file named theme-myown.scss under <i>public/assets/sass/theme folder</i>.</li>
					<li>Define the variables listed below and import the <i>../sass/theme/_theme.scss</i> file.</li>
					<li>Build the scss to generate css.</li>
					<li>Include the theme file to your application.</li>
				</ul>

				<p>Here are the variables required to create a theme.</p>

<CodeHighlight lang="css">
$primaryColor: #2196F3 !default;
$primaryLightColor: scale-color($primaryColor, $lightness: 60%) !default;
$primaryDarkColor: scale-color($primaryColor, $lightness: -10%) !default;
$primaryDarkerColor: scale-color($primaryColor, $lightness: -20%) !default;
$primaryTextColor: #ffffff !default;

$highlightBg: $primaryColor;
$highlightTextColor: $primaryTextColor;

@import '../sass/theme/_theme';
</CodeHighlight>

				<p>If you prefer to compile manually, an example sass command to compile the css is;</p>

<CodeHighlight>
sass public/assets/theme/theme-myown.scss:public/assets/theme/theme-myown.css
</CodeHighlight>

				<p>Watch mode is handy to avoid compiling everytime when a change is made, instead use the following
					command
					so that sass generates the file whenever you make a customization. This builds all css files
					whenever a change is made to any scss file.</p>
<CodeHighlight>
sass --watch public/assets:public/assets
</CodeHighlight>

				<h4>Layout Theme</h4>
				<p>Babylon offers 17 layout themes out of the box, setup of a layout theme simple including the css of
					theme to your page that is located inside public/assets/layout/css folder such as
					<b>assets/layout/css/layout-blue.css</b>.</p>
				<p>In the demo application, layout css file is added to the index page to enable themeswitcher
					functionality however since VueCLI supports
					SASS compilation via webpack, you may also import the sass of the theme to App.vue as well. Here are
					the full list of available layout themes;</p>

				<ul>
					<li>amber</li>
					<li>blue</li>
					<li>bluegrey</li>
					<li>brown</li>
					<li>cyan</li>
					<li>deeporange</li>
					<li>deeppurple</li>
					<li>green</li>
					<li>indigo</li>
					<li>lightblue</li>
					<li>lightgreen</li>
					<li>lime</li>
					<li>orange</li>
					<li>pink</li>
					<li>purple</li>
					<li>teal</li>
					<li>yellow</li>
				</ul>

				<p>A custom layout theme can be developed by the following steps.</p>
				<ul>
					<li>Choose a layout name such as layout-myown.</li>
					<li>Create an empty file named layout-myown.scss inside <i>public/assets/layout/css</i> folder.</li>
					<li>Define the variables listed below and import the <i>../../sass/layout/_layout.scss</i> file.
					</li>
					<li>Build the scss to generate css</li>
					<li>Include the theme file to your application.</li>
				</ul>

				<p>The variables required to create a layout;</p>
<CodeHighlight lang="css">
$primaryColor: #2196F3;
$primaryTextColor:#ffffff;

$logoBgColor:#42A5F5;
$topbarBgColor:#2196F3;
$topbarIconColor:#ffffff;
$topbarIconHoverBgColor:#64b5f6;
$lightMenuitemActiveTextColor:#2196F3;
$darkMenuitemActiveTextColor:#2196F3;
$horizontalMenuitemActiveBgColor:#2196F3;
$horizontalMenuitemActiveTextColor:#ffffff;
$badgeBgColor:#2196F3;
$badgeTextColor:#ffffff;

@import '../../sass/layout/_layout';
</CodeHighlight>

				<h4>Common SASS Variables</h4>
				<p>In case you'd like to customize common variables, the <i>_variables.scss</i> under sass/layout or sass/theme folder is
					where the core variables (e.g. font size, paddings) for the layout are defined.</p>

				<h5>sass/layout/_variables.scss</h5>
<CodeHighlight lang="css">
$fontFamily:'cabin',sans-serif;
$fontSize:14px;
$textColor:#495057;
$textSecondaryColor:#6c757d;
$borderRadius:3px;
$transitionDuration:.3s;

//main
$bodyBgColor:#f2f2f2;
$dividerColor:#E0E0E0;

$footerBgColor:#ffffff;
$footerBorderColor:#e8e8e8;

//breadcrumb
$breadcrumbBgColor:#ffffff;
$breadcrumbBorder: 1px solid #e8e8e8;

//light menu
$menuBgColor:#ffffff;
$menuBorder: 1px solid #E0E0E0;
$menuSeparator:1px solid $dividerColor;
$rootMenuitemTextColor:$textSecondaryColor;
$menuitemTextColor:$textSecondaryColor;
$menuitemIconColor:$textSecondaryColor;
$menuitemHoverBgColor:#e0e0e0;

//dark menu
$darkMenuBgColor:#212121;
$darkMenuBorder: 0 none;
$darkMenuSeparator:1px solid #373737;
$darkMenuRootMenuitemTextColor:#757575;
$darkMenuitemTextColor:#BDBDBD;
$darkMenuitemIconColor:#BDBDBD;
$darkMenuitemHoverBgColor:#373737;

//topbar
$topbarMenuBgColor:#ffffff;
$topbarMenuBorderColor:#e0e0e0;
$topbarBadgeBgColor:#e0284f;
$topbarBadgeTextColor:#ffffff;

//card
$cardBgColor:#ffffff;
$cardBorder:1px solid #EEEEEE;

//tooltip
$tooltipBgColor:#212121;
$tooltipTextColor:#ffffff;

</CodeHighlight>

				<h5>sass/theme/_variables.scss</h5>
<div style="height: 400px; overflow: auto">
<CodeHighlight lang="css">
//reused color variables
$shade000:#ffffff !default; //surface
$shade100:#f8f9fa !default; //header background
$shade200:#e9ecef !default; //hover background
$shade300:#dee2e6 !default; //border, divider
$shade400:#ced4da !default; //input border
$shade500:#adb5bd !default; //input icon
$shade600:#6c757d !default; //text secondary color
$shade700:#495057 !default; //text color
$shade800:#343a40 !default; //unused
$shade900:#212529 !default; //unused

//global
$fontFamily:'cabin',sans-serif;
$fontSize:1rem !default;
$fontWeight:normal !default;
$textColor:$shade700 !default;
$textSecondaryColor:$shade600 !default;
$borderRadius:3px !default;
$transitionDuration:.2s !default;
$formElementTransition:background-color $transitionDuration, color $transitionDuration, border-color
$transitionDuration, box-shadow $transitionDuration !default;
$actionIconTransition:background-color $transitionDuration, color $transitionDuration, box-shadow
$transitionDuration !default;
$listItemTransition:box-shadow $transitionDuration !default;
$primeIconFontSize:1rem !default;
$divider:1px solid $shade300 !default;
$inlineSpacing:.5rem !default;
$disabledOpacity:.6 !default;
$maskBg:rgba(0, 0, 0, 0.4) !default;
$loadingIconFontSize:2rem !default;
$errorColor:#f44336 !default;

//scale
$scaleSM:0.875 !default;
$scaleLG:1.25 !default;

//focus
$focusOutlineColor:$primaryLightColor !default;
$focusOutline:0 none !default;
$focusOutlineOffset:0 !default;
$focusShadow:0 0 0 0.2rem $focusOutlineColor !default;

//action icons
$actionIconWidth:2rem !default;
$actionIconHeight:2rem !default;
$actionIconBg:transparent !default;
$actionIconBorder:0 none !default;
$actionIconColor:$shade600 !default;
$actionIconHoverBg:$shade200 !default;
$actionIconHoverBorderColor:transparent !default;
$actionIconHoverColor:$shade700 !default;
$actionIconBorderRadius:50% !default;

//input field (e.g. inputtext, spinner, inputmask)
$inputPadding:.5rem .5rem !default;
$inputTextFontSize:1rem !default;

$inputBg:$shade000 !default;
$inputTextColor:$shade700 !default;
$inputIconColor:$shade600 !default;
$inputBorder:1px solid $shade400 !default;
$inputHoverBorderColor:$primaryColor !default;
$inputFocusBorderColor:$primaryColor !default;
$inputErrorBorderColor:$errorColor !default;
$inputPlaceholderTextColor:$shade600 !default;
$inputFilledBg:$shade100 !default;
$inputFilledHoverBg:$inputFilledBg !default;
$inputFilledFocusBg:$inputFilledBg !default;

//input groups
$inputGroupBg:$shade200 !default;
$inputGroupTextColor:$shade600 !default;
$inputGroupAddOnMinWidth:2.357rem !default;

//input lists (e.g. dropdown, autocomplete, multiselect, orderlist)
$inputListBg:$shade000 !default;
$inputListTextColor:$shade700 !default;
$inputListBorder:$inputBorder !default;
$inputListPadding:.5rem 0 !default;
$inputListItemPadding:.5rem 1rem !default;
$inputListItemBg:transparent !default;
$inputListItemTextColor:$shade700 !default;
$inputListItemHoverBg:$shade200 !default;
$inputListItemTextHoverColor:$shade700 !default;
$inputListItemBorder:0 none !default;
$inputListItemBorderRadius:0 !default;
$inputListItemMargin:0 !default;
$inputListItemFocusShadow:inset 0 0 0 0.15rem $focusOutlineColor !default;
$inputListHeaderPadding:.5rem 1rem !default;
$inputListHeaderMargin:0 !default;
$inputListHeaderBg:$shade100 !default;
$inputListHeaderTextColor:$shade700 !default;
$inputListHeaderBorder:0 none !default;

//inputs with overlays (e.g. autocomplete, dropdown, multiselect)
$inputOverlayBg:$inputListBg !default;
$inputOverlayHeaderBg:$inputListHeaderBg !default;
$inputOverlayBorder:0 none !default;
$inputOverlayShadow:0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0
rgba(0,0,0,.12) !default;

//button
$buttonPadding:.5rem 1rem !default;
$buttonIconOnlyWidth:2.357rem !default;
$buttonIconOnlyPadding:.5rem 0 !default;
$buttonBg:$primaryColor !default;
$buttonTextColor:$primaryTextColor !default;
$buttonBorder:1px solid $primaryColor !default;
$buttonHoverBg:$primaryDarkColor !default;
$buttonTextHoverColor:$primaryTextColor !default;
$buttonHoverBorderColor:$primaryDarkColor !default;
$buttonActiveBg:$primaryDarkerColor !default;
$buttonTextActiveColor:$primaryTextColor !default;
$buttonActiveBorderColor:$primaryDarkerColor !default;
$raisedButtonShadow:0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0
rgba(0,0,0,.12) !default;
$roundedButtonBorderRadius:2rem !default;

$textButtonHoverBgOpacity:.04 !default;
$textButtonActiveBgOpacity:.16 !default;
$outlinedButtonBorder:1px solid !default;
$plainButtonTextColor:$textSecondaryColor !default;
$plainButtonHoverBgColor:$shade200 !default;
$plainButtonActiveBgColor:$shade300 !default;

$secondaryButtonBg:#607D8B !default;
$secondaryButtonTextColor:#ffffff !default;
$secondaryButtonBorder:1px solid $secondaryButtonBg !default;
$secondaryButtonHoverBg:scale-color($secondaryButtonBg, $lightness: -10%) !default;
$secondaryButtonTextHoverColor:$secondaryButtonTextColor !default;
$secondaryButtonHoverBorderColor:scale-color($secondaryButtonBg, $lightness: -10%) !default;
$secondaryButtonActiveBg:scale-color($secondaryButtonBg, $lightness: -20%) !default;
$secondaryButtonTextActiveColor:$secondaryButtonTextColor !default;
$secondaryButtonActiveBorderColor:scale-color($secondaryButtonBg, $lightness: -20%) !default;
$secondaryButtonFocusShadow:0 0 0 0.2rem scale-color($secondaryButtonBg, $lightness: 60%) !default;

$infoButtonBg:#0288D1 !default;
$infoButtonTextColor:#ffffff !default;
$infoButtonBorder:1px solid $infoButtonBg !default;
$infoButtonHoverBg:scale-color($infoButtonBg, $lightness: -10%) !default;
$infoButtonTextHoverColor:$infoButtonTextColor !default;
$infoButtonHoverBorderColor:scale-color($infoButtonBg, $lightness: -10%) !default;
$infoButtonActiveBg:scale-color($infoButtonBg, $lightness: -20%) !default;
$infoButtonTextActiveColor:$infoButtonTextColor !default;
$infoButtonActiveBorderColor:scale-color($infoButtonBg, $lightness: -20%) !default;
$infoButtonFocusShadow:0 0 0 0.2rem scale-color($infoButtonBg, $lightness: 60%) !default;

$successButtonBg:#689F38 !default;
$successButtonTextColor:#ffffff !default;
$successButtonBorder:1px solid $successButtonBg !default;
$successButtonHoverBg:scale-color($successButtonBg, $lightness: -10%) !default;
$successButtonTextHoverColor:$successButtonTextColor !default;
$successButtonHoverBorderColor:scale-color($successButtonBg, $lightness: -10%) !default;
$successButtonActiveBg:scale-color($successButtonBg, $lightness: -20%) !default;
$successButtonTextActiveColor:$successButtonTextColor !default;
$successButtonActiveBorderColor:scale-color($successButtonBg, $lightness: -20%) !default;
$successButtonFocusShadow:0 0 0 0.2rem scale-color($successButtonBg, $lightness: 60%) !default;

$warningButtonBg:#FBC02D !default;
$warningButtonTextColor:#212529 !default;
$warningButtonBorder:1px solid $warningButtonBg !default;
$warningButtonHoverBg:scale-color($warningButtonBg, $lightness: -10%) !default;
$warningButtonTextHoverColor:$warningButtonTextColor !default;
$warningButtonHoverBorderColor:scale-color($warningButtonBg, $lightness: -10%) !default;
$warningButtonActiveBg:scale-color($warningButtonBg, $lightness: -20%) !default;
$warningButtonTextActiveColor:$warningButtonTextColor !default;
$warningButtonActiveBorderColor:scale-color($warningButtonBg, $lightness: -20%) !default;
$warningButtonFocusShadow:0 0 0 0.2rem scale-color($warningButtonBg, $lightness: 60%) !default;

$helpButtonBg:#9C27B0 !default;
$helpButtonTextColor:#ffffff !default;
$helpButtonBorder:1px solid $helpButtonBg !default;
$helpButtonHoverBg:scale-color($helpButtonBg, $lightness: -10%) !default;
$helpButtonTextHoverColor:$helpButtonTextColor !default;
$helpButtonHoverBorderColor:scale-color($helpButtonBg, $lightness: -10%) !default;
$helpButtonActiveBg:scale-color($helpButtonBg, $lightness: -20%) !default;
$helpButtonTextActiveColor:$helpButtonTextColor !default;
$helpButtonActiveBorderColor:scale-color($helpButtonBg, $lightness: -20%) !default;
$helpButtonFocusShadow:0 0 0 0.2rem scale-color($helpButtonBg, $lightness: 60%) !default;

$dangerButtonBg:#D32F2F !default;
$dangerButtonTextColor:#ffffff !default;
$dangerButtonBorder:1px solid $dangerButtonBg !default;
$dangerButtonHoverBg:scale-color($dangerButtonBg, $lightness: -10%) !default;
$dangerButtonTextHoverColor:$dangerButtonTextColor !default;
$dangerButtonHoverBorderColor:scale-color($dangerButtonBg, $lightness: -10%) !default;
$dangerButtonActiveBg:scale-color($dangerButtonBg, $lightness: -20%) !default;
$dangerButtonTextActiveColor:$dangerButtonTextColor !default;
$dangerButtonActiveBorderColor:scale-color($dangerButtonBg, $lightness: -20%) !default;
$dangerButtonFocusShadow:0 0 0 0.2rem scale-color($dangerButtonBg, $lightness: 60%) !default;

$linkButtonColor:$primaryDarkerColor !default;
$linkButtonHoverColor:$primaryDarkerColor !default;
$linkButtonTextHoverDecoration:underline !default;
$linkButtonFocusShadow:0 0 0 0.2rem $focusOutlineColor !default;

//checkbox
$checkboxWidth:20px !default;
$checkboxHeight:20px !default;
$checkboxBorder:2px solid $shade400 !default;
$checkboxIconFontSize:14px !default;
$checkboxActiveBorderColor:$primaryColor !default;
$checkboxActiveBg:$primaryColor !default;
$checkboxIconActiveColor:$primaryTextColor !default;
$checkboxActiveHoverBg:$primaryDarkerColor !default;
$checkboxIconActiveHoverColor:$primaryTextColor !default;
$checkboxActiveHoverBorderColor:$primaryDarkerColor !default;

//radiobutton
$radiobuttonWidth:20px !default;
$radiobuttonHeight:20px !default;
$radiobuttonBorder:2px solid $shade400 !default;
$radiobuttonIconSize:12px !default;
$radiobuttonActiveBorderColor:$primaryColor !default;
$radiobuttonActiveBg:$primaryColor !default;
$radiobuttonIconActiveColor:$primaryTextColor !default;
$radiobuttonActiveHoverBg:$primaryDarkerColor !default;
$radiobuttonIconActiveHoverColor:$primaryTextColor !default;
$radiobuttonActiveHoverBorderColor:$primaryDarkerColor !default;

//colorpicker
$colorPickerPreviewWidth:2rem !default;
$colorPickerPreviewHeight:2rem !default;
$colorPickerBg:#323232 !default;
$colorPickerBorderColor:#191919 !default;
$colorPickerHandleColor:$shade000 !default;

//togglebutton
$toggleButtonBg:$inputBg !default;
$toggleButtonBorder:1px solid $shade400 !default;
$toggleButtonTextColor:$shade700 !default;
$toggleButtonIconColor:$shade600 !default;
$toggleButtonHoverBg:$shade200 !default;
$toggleButtonHoverBorderColor:$shade400 !default;
$toggleButtonTextHoverColor:$shade700 !default;
$toggleButtonIconHoverColor:$shade600 !default;
$toggleButtonActiveBg:$primaryColor !default;
$toggleButtonActiveBorderColor:$primaryColor !default;
$toggleButtonTextActiveColor:$primaryTextColor !default;
$toggleButtonIconActiveColor:$primaryTextColor !default;
$toggleButtonActiveHoverBg:$primaryDarkColor !default;
$toggleButtonActiveHoverBorderColor:$primaryDarkColor !default;
$toggleButtonTextActiveHoverColor:$primaryTextColor !default;
$toggleButtonIconActiveHoverColor:$primaryTextColor !default;

//inplace
$inplacePadding:$inputPadding !default;
$inplaceHoverBg:$shade200 !default;
$inplaceTextHoverColor:$shade700 !default;

//rating
$ratingIconFontSize:1.143rem !default;
$ratingCancelIconColor:#e74c3c !default;
$ratingCancelIconHoverColor:#c0392b !default;
$ratingStarIconOffColor:$shade700 !default;
$ratingStarIconOnColor:$primaryColor !default;
$ratingStarIconHoverColor:$primaryColor !default;

//slider
$sliderBg:$shade300 !default;
$sliderBorder:0 none !default;
$sliderHorizontalHeight:.286rem !default;
$sliderVerticalWidth:0.286rem !default;
$sliderHandleWidth:1.143rem !default;
$sliderHandleHeight:1.143rem !default;
$sliderHandleBg:$shade000 !default;
$sliderHandleBorder:2px solid $primaryColor !default;
$sliderHandleBorderRadius:50% !default;
$sliderHandleHoverBorderColor:$primaryColor !default;
$sliderHandleHoverBg:$primaryColor !default;
$sliderRangeBg:$primaryColor !default;

//calendar
$calendarTableMargin:.5rem 0 !default;
$calendarPadding:.5rem !default;
$calendarBg:$shade000 !default;
$calendarInlineBg:$calendarBg !default;
$calendarTextColor:$shade700 !default;
$calendarBorder:$inputListBorder !default;
$calendarOverlayBorder:$inputOverlayBorder !default;

$calendarHeaderPadding:.5rem !default;
$calendarHeaderBg:$shade000 !default;
$calendarInlineHeaderBg:$calendarBg !default;
$calendarHeaderBorder:1px solid $shade300 !default;
$calendarHeaderTextColor:$shade700 !default;
$calendarHeaderFontWeight:600 !default;
$calendarHeaderCellPadding:.5rem !default;

$calendarCellDatePadding:.5rem !default;
$calendarCellDateWidth:2.5rem !default;
$calendarCellDateHeight:2.5rem !default;
$calendarCellDateBorderRadius:50% !default;
$calendarCellDateBorder:1px solid transparent !default;
$calendarCellDateHoverBg:$shade200 !default;
$calendarCellDateTodayBg:$shade400 !default;
$calendarCellDateTodayBorderColor:transparent !default;
$calendarCellDateTodayTextColor:$shade700 !default;

$calendarButtonBarPadding:1rem 0 !default;
$calendarTimePickerPadding:.5rem !default;
$calendarTimePickerElementPadding:0 .5rem !default;
$calendarTimePickerTimeFontSize:1.25rem !default;

$calendarBreakpoint:769px !default;
$calendarCellDatePaddingSM:0 !default;

//input switch
$inputSwitchWidth:3rem !default;
$inputSwitchHeight:1.75rem !default;
$inputSwitchBorderRadius:30px !default;
$inputSwitchHandleWidth:1.250rem !default;
$inputSwitchHandleHeight:1.250rem !default;
$inputSwitchHandleBorderRadius:50% !default;
$inputSwitchSliderPadding:.25rem !default;
$inputSwitchSliderOffBg:$shade400 !default;
$inputSwitchHandleOffBg:$shade000 !default;
$inputSwitchSliderOffHoverBg:scale-color($shade400, $lightness: -10%) !default;
$inputSwitchSliderOnBg:$primaryColor !default;
$inputSwitchSliderOnHoverBg:$primaryDarkColor !default;
$inputSwitchHandleOnBg:$shade000 !default;

//panel
$panelHeaderBorder:1px solid $shade300 !default;
$panelHeaderBg:$shade100 !default;
$panelHeaderTextColor:$shade700 !default;
$panelHeaderFontWeight:600 !default;
$panelHeaderPadding:1rem !default;
$panelToggleableHeaderPadding:.5rem 1rem !default;

$panelHeaderHoverBg:$shade200 !default;
$panelHeaderHoverBorderColor:$shade300 !default;
$panelHeaderTextHoverColor:$shade700 !default;

$panelContentBorder:1px solid $shade300 !default;
$panelContentBg:$shade000 !default;
$panelContentTextColor:$shade700 !default;
$panelContentPadding:1rem !default;

$panelFooterBorder:1px solid $shade300 !default;
$panelFooterBg:$shade000 !default;
$panelFooterTextColor:$shade700 !default;
$panelFooterPadding:0.5rem 1rem !default;

//accordion
$accordionSpacing:0 !default;
$accordionHeaderBorder:$panelHeaderBorder !default;
$accordionHeaderBg:$panelHeaderBg !default;
$accordionHeaderTextColor:$panelHeaderTextColor !default;
$accordionHeaderFontWeight:$panelHeaderFontWeight !default;
$accordionHeaderPadding:$panelHeaderPadding !default;

$accordionHeaderHoverBg:$shade200 !default;
$accordionHeaderHoverBorderColor:$shade300 !default;
$accordionHeaderTextHoverColor:$shade700 !default;

$accordionHeaderActiveBg:$panelHeaderBg !default;
$accordionHeaderActiveBorderColor:$shade300 !default;
$accordionHeaderTextActiveColor:$shade700 !default;

$accordionHeaderActiveHoverBg:$shade200 !default;
$accordionHeaderActiveHoverBorderColor:$shade300 !default;
$accordionHeaderTextActiveHoverColor:$shade700 !default;

$accordionContentBorder:$panelContentBorder !default;
$accordionContentBg:$panelContentBg !default;
$accordionContentTextColor:$panelContentTextColor !default;
$accordionContentPadding:$panelContentPadding !default;

//tabview
$tabviewNavBorder:1px solid $shade300 !default;
$tabviewNavBorderWidth:0 0 2px 0 !default;
$tabviewNavBg:$shade000 !default;

$tabviewHeaderSpacing:0 !default;
$tabviewHeaderBorder:solid $shade300 !default;
$tabviewHeaderBorderWidth:0 0 2px 0 !default;
$tabviewHeaderBorderColor:transparent transparent $shade300 transparent !default;
$tabviewHeaderBg:$shade000 !default;
$tabviewHeaderTextColor:$shade600 !default;
$tabviewHeaderFontWeight:$panelHeaderFontWeight !default;
$tabviewHeaderPadding:$panelHeaderPadding !default;
$tabviewHeaderMargin:0 0 -2px 0 !default;

$tabviewHeaderHoverBg:$shade000 !default;
$tabviewHeaderHoverBorderColor:$shade600 !default;
$tabviewHeaderTextHoverColor:$shade600 !default;

$tabviewHeaderActiveBg:$shade000 !default;
$tabviewHeaderActiveBorderColor:$primaryColor !default;
$tabviewHeaderTextActiveColor:$primaryColor !default;

$tabviewContentBorder:0 none !default;
$tabviewContentBg:$panelContentBg !default;
$tabviewContentTextColor:$panelContentTextColor !default;
$tabviewContentPadding:$panelContentPadding !default;

//upload
$fileUploadProgressBarHeight:.25rem !default;
$fileUploadContentPadding:2rem 1rem !default;

//scrollpanel
$scrollPanelTrackBorder:0 none !default;
$scrollPanelTrackBg:$shade100 !default;

//card
$cardBodyPadding:1rem !default;
$cardTitleFontSize:1.5rem !default;
$cardTitleFontWeight:700 !default;
$cardSubTitleFontWeight:400 !default;
$cardSubTitleColor:$shade600 !default;
$cardContentPadding:1rem 0 !default;
$cardFooterPadding:1rem 0 0 0 !default;
$cardShadow:0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)
!default;

//editor
$editorToolbarBg:$panelHeaderBg !default;
$editorToolbarBorder:$panelHeaderBorder !default;
$editorToolbarPadding:$panelHeaderPadding !default;
$editorToolbarIconColor:$textSecondaryColor !default;
$editorToolbarIconHoverColor:$textColor !default;
$editorIconActiveColor:$primaryColor !default;
$editorContentBorder:$panelContentBorder !default;
$editorContentBg:$panelContentBg !default;

//paginator
$paginatorBg:$shade000 !default;
$paginatorTextColor:$shade600 !default;
$paginatorBorder:solid $shade200 !default;
$paginatorBorderWidth:0 !default;
$paginatorPadding:.5rem 1rem !default;
$paginatorElementWidth:$buttonIconOnlyWidth !default;
$paginatorElementHeight:$buttonIconOnlyWidth !default;
$paginatorElementBg:transparent !default;
$paginatorElementBorder:0 none !default;
$paginatorElementIconColor:$shade600 !default;
$paginatorElementHoverBg:$shade200 !default;
$paginatorElementHoverBorderColor:transparent !default;
$paginatorElementIconHoverColor:$shade700 !default;
$paginatorElementBorderRadius:$borderRadius !default;
$paginatorElementMargin:.143rem !default;
$paginatorElementPadding:0 !default;

//table
$tableHeaderBorder:1px solid $shade200 !default;
$tableHeaderBorderWidth:1px 0 1px 0 !default;
$tableHeaderBg:$shade100 !default;
$tableHeaderTextColor:$shade700 !default;
$tableHeaderFontWeight:600 !default;
$tableHeaderPadding:1rem 1rem !default;

$tableHeaderCellPadding:1rem 1rem !default;
$tableHeaderCellBg:$shade100 !default;
$tableHeaderCellTextColor:$shade700 !default;
$tableHeaderCellFontWeight:600 !default;
$tableHeaderCellBorder:1px solid $shade200 !default;
$tableHeaderCellBorderWidth:0 0 1px 0 !default;
$tableHeaderCellHoverBg:$shade200 !default;
$tableHeaderCellTextHoverColor:$shade700 !default;
$tableHeaderCellIconColor:$shade600 !default;
$tableHeaderCellIconHoverColor:$shade600 !default;
$tableHeaderCellHighlightBg:$shade100 !default;
$tableHeaderCellHighlightTextColor:$primaryColor !default;
$tableHeaderCellHighlightHoverBg:$shade200 !default;
$tableHeaderCellHighlightTextHoverColor:$primaryColor !default;
$tableSortableColumnBadgeSize:1.143rem !default;

$tableBodyRowBg:$shade000 !default;
$tableBodyRowTextColor:$shade700 !default;
$tableBodyRowEvenBg:scale-color($tableBodyRowBg, $lightness: -1%) !default;
$tableBodyRowHoverBg:$shade200 !default;
$tableBodyRowTextHoverColor:$shade700 !default;
$tableBodyCellBorder:1px solid $shade200 !default;
$tableBodyCellBorderWidth:0 0 1px 0 !default;
$tableBodyCellPadding:1rem 1rem !default;

$tableFooterCellPadding:1rem 1rem !default;
$tableFooterCellBg:$shade100 !default;
$tableFooterCellTextColor:$shade700 !default;
$tableFooterCellFontWeight:600 !default;
$tableFooterCellBorder:1px solid $shade200 !default;
$tableFooterCellBorderWidth:0 0 1px 0 !default;
$tableResizerHelperBg:$primaryColor !default;

$tableFooterBorder:1px solid $shade200 !default;
$tableFooterBorderWidth:0 0 1px 0 !default;
$tableFooterBg:$shade100 !default;
$tableFooterTextColor:$shade700 !default;
$tableFooterFontWeight:600 !default;
$tableFooterPadding:1rem 1rem !default;

$tableCellContentAlignment:left !default;
$tableTopPaginatorBorderWidth:0 0 1px 0 !default;
$tableBottomPaginatorBorderWidth:0 0 1px 0 !default;

$tableScaleSM:0.5 !default;
$tableScaleLG:1.25 !default;

//dataview
$dataViewContentPadding:0 !default;
$dataViewContentBorder:0 none !default;
$dataViewListItemBorder:solid $shade200 !default;
$dataViewListItemBorderWidth:0 0 1px 0 !default;

//orderlist, picklist
$orderListBreakpoint:769px !default;
$pickListBreakpoint:769px !default;

//schedule
$fullCalendarEventBg:$primaryDarkColor !default;
$fullCalendarEventBorder:1px solid $primaryDarkColor !default;
$fullCalendarEventTextColor:$primaryTextColor !default;

//tree
$treeContainerPadding:0.286rem !default;
$treeNodePadding:0.143rem !default;
$treeNodeContentPadding:.5rem !default;
$treeNodeChildrenPadding:0 0 0 1rem !default;
$treeNodeIconColor:$shade600 !default;

//org chart
$organizationChartConnectorColor:$shade300 !default;

//message
$messageMargin:1rem 0 !default;
$messagePadding:1rem 1.5rem !default;
$messageBorderWidth:0 0 0 6px !default;
$messageIconFontSize:1.5rem !default;
$messageTextFontSize:1rem !default;
$messageTextFontWeight:500 !default;

//inline message
$inlineMessagePadding:$inputPadding !default;
$inlineMessageMargin:0 !default;
$inlineMessageIconFontSize:1rem !default;
$inlineMessageTextFontSize:1rem !default;
$inlineMessageBorderWidth:0px !default;

//toast
$toastIconFontSize:2rem !default;
$toastMessageTextMargin:0 0 0 1rem !default;
$toastMargin:0 0 1rem 0 !default;
$toastPadding:1rem !default;
$toastBorderWidth:0 0 0 6px !default;
$toastShadow:0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0
rgba(0,0,0,.12) !default;
$toastOpacity:.9 !default;
$toastTitleFontWeight:700 !default;
$toastDetailMargin:$inlineSpacing 0 0 0 !default;

//severities
$infoMessageBg:#B3E5FC !default;
$infoMessageBorder:solid scale-color($infoMessageBg, $lightness: -50%) !default;
$infoMessageTextColor:scale-color($infoMessageBg, $lightness: -75%) !default;
$infoMessageIconColor:scale-color($infoMessageBg, $lightness: -75%) !default;
$successMessageBg:#C8E6C9 !default;
$successMessageBorder:solid scale-color($successMessageBg, $lightness: -50%) !default;
$successMessageTextColor:scale-color($successMessageBg, $lightness: -75%) !default;
$successMessageIconColor:scale-color($successMessageBg, $lightness: -75%) !default;
$warningMessageBg:#FFECB3 !default;
$warningMessageBorder:solid scale-color($warningMessageBg, $lightness: -50%) !default;
$warningMessageTextColor:scale-color($warningMessageBg, $lightness: -75%) !default;
$warningMessageIconColor:scale-color($warningMessageBg, $lightness: -75%) !default;
$errorMessageBg:#FFCDD2 !default;
$errorMessageBorder:solid scale-color($errorMessageBg, $lightness: -50%) !default;
$errorMessageTextColor:scale-color($errorMessageBg, $lightness: -75%) !default;
$errorMessageIconColor:scale-color($errorMessageBg, $lightness: -75%) !default;

//overlays
$overlayContentBorder:0 none !default;
$overlayContentBg:$panelContentBg !default;
$overlayContainerShadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0,
0.14), 0px 9px 46px 8px rgba(0,0,0,.12) !default;

//dialog
$dialogHeaderBg:$shade000 !default;
$dialogHeaderBorder:0 none !default;
$dialogHeaderTextColor:$shade700 !default;
$dialogHeaderFontWeight:600 !default;
$dialogHeaderFontSize:1.25rem !default;
$dialogHeaderPadding:1.5rem !default;
$dialogContentPadding:0 1.5rem !default;
$dialogFooterBorder:0 none !default;
$dialogFooterPadding:1.5rem !default;

//tooltip
$tooltipBg:$shade700 !default;
$tooltipTextColor:$shade000 !default;
$tooltipPadding:$inputPadding !default;

//steps
$stepsItemBg:$shade000 !default;
$stepsItemBorder:1px solid $shade200 !default;
$stepsItemTextColor:$shade600 !default;
$stepsItemNumberWidth:2rem !default;
$stepsItemNumberHeight:2rem !default;
$stepsItemNumberFontSize:1.143rem !default;
$stepsItemNumberColor:$shade700 !default;
$stepsItemNumberBorderRadius:50% !default;
$stepsItemActiveFontWeight:600 !default;

//progressbar
$progressBarHeight:1.5rem !default;
$progressBarBorder:0 none !default;
$progressBarBg:$shade300 !default;
$progressBarValueBg:$primaryColor !default;

//menu (e.g. menu, menubar, tieredmenu)
$menuWidth:12.5rem !default;
$menuBg:$shade000 !default;
$menuBorder:1px solid $shade300 !default;
$menuTextColor:$shade700 !default;
$menuitemPadding:.75rem 1rem !default;
$menuitemBorderRadius:0 !default;
$menuitemTextColor:$shade700 !default;
$menuitemIconColor:$shade600 !default;
$menuitemTextHoverColor:$shade700 !default;
$menuitemIconHoverColor:$shade600 !default;
$menuitemHoverBg:$shade200 !default;
$menuitemTextActiveColor:$shade700 !default;
$menuitemIconActiveColor:$shade600 !default;
$menuitemActiveBg:$shade200 !default;
$menuitemSubmenuIconFontSize:.875rem !default;
$submenuHeaderMargin:0 !default;
$submenuHeaderPadding:.75rem 1rem !default;
$submenuHeaderBg:$shade000 !default;
$submenuHeaderTextColor:$shade700 !default;
$submenuHeaderBorderRadius:0 !default;
$submenuHeaderFontWeight:600 !default;
$overlayMenuBg:$menuBg !default;
$overlayMenuBorder:0 none !default;
$overlayMenuShadow:0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0
rgba(0,0,0,.12) !default;
$verticalMenuPadding:.25rem 0 !default;
$menuSeparatorMargin:.25rem 0 !default;

$breadcrumbPadding:1rem !default;
$breadcrumbBg:$menuBg !default;
$breadcrumbBorder:$menuBorder !default;
$breadcrumbItemTextColor:$menuitemTextColor !default;
$breadcrumbItemIconColor:$menuitemIconColor !default;
$breadcrumbLastItemTextColor:$menuitemTextColor !default;
$breadcrumbLastItemIconColor:$menuitemIconColor !default;
$breadcrumbSeparatorColor:$menuitemTextColor !default;

$horizontalMenuPadding:.5rem !default;
$horizontalMenuBg:$shade100 !default;
$horizontalMenuBorder:$menuBorder !default;
$horizontalMenuTextColor:$menuTextColor !default;
$horizontalMenuRootMenuitemPadding:$menuitemPadding !default;
$horizontalMenuRootMenuitemBorderRadius:$borderRadius !default;
$horizontalMenuRootMenuitemTextColor:$menuitemTextColor !default;
$horizontalMenuRootMenuitemIconColor:$menuitemIconColor !default;
$horizontalMenuRootMenuitemTextHoverColor:$menuitemTextHoverColor !default;
$horizontalMenuRootMenuitemIconHoverColor:$menuitemIconHoverColor !default;
$horizontalMenuRootMenuitemHoverBg:$menuitemHoverBg !default;
$horizontalMenuRootMenuitemTextActiveColor:$menuitemTextActiveColor !default;
$horizontalMenuRootMenuitemIconActiveColor:$menuitemIconActiveColor !default;
$horizontalMenuRootMenuitemActiveBg:$menuitemActiveBg !default;

//badge and tag
$badgeBg:$primaryColor !default;
$badgeTextColor:$primaryTextColor !default;
$badgeMinWidth:1.5rem !default;
$badgeHeight:1.5rem !default;
$badgeFontWeight:700 !default;
$badgeFontSize:.75rem !default;

$tagPadding:.25rem .4rem !default;

//carousel
$carouselIndicatorsPadding:1rem !default;
$carouselIndicatorBg:$shade200 !default;
$carouselIndicatorHoverBg:$shade300 !default;
$carouselIndicatorBorderRadius:0 !default;
$carouselIndicatorWidth:2rem !default;
$carouselIndicatorHeight:.5rem !default;

//galleria
$galleriaMaskBg:rgba(0,0,0,0.9) !default;
$galleriaCloseIconMargin:.5rem !default;
$galleriaCloseIconFontSize:2rem !default;
$galleriaCloseIconBg:transparent !default;
$galleriaCloseIconColor:$shade100 !default;
$galleriaCloseIconHoverBg:rgba(255,255,255,0.1) !default;
$galleriaCloseIconHoverColor:$shade100 !default;
$galleriaCloseIconWidth:4rem !default;
$galleriaCloseIconHeight:4rem !default;
$galleriaCloseIconBorderRadius:50% !default;

$galleriaItemNavigatorBg:transparent !default;
$galleriaItemNavigatorColor:$shade100 !default;
$galleriaItemNavigatorMargin:0 .5rem !default;
$galleriaItemNavigatorFontSize:2rem !default;
$galleriaItemNavigatorHoverBg:rgba(255,255,255,0.1) !default;
$galleriaItemNavigatorHoverColor:$shade100 !default;
$galleriaItemNavigatorWidth:4rem !default;
$galleriaItemNavigatorHeight:4rem !default;
$galleriaItemNavigatorBorderRadius:$borderRadius !default;

$galleriaCaptionBg:rgba(0,0,0,.5) !default;
$galleriaCaptionTextColor:$shade100 !default;
$galleriaCaptionPadding:1rem !default;

$galleriaIndicatorsPadding:1rem !default;
$galleriaIndicatorBg:$shade200 !default;
$galleriaIndicatorHoverBg:$shade300 !default;
$galleriaIndicatorBorderRadius:50% !default;
$galleriaIndicatorWidth:1rem !default;
$galleriaIndicatorHeight:1rem !default;
$galleriaIndicatorsBgOnItem:rgba(0,0,0,.5) !default;
$galleriaIndicatorBgOnItem:rgba(255,255,255,.4) !default;
$galleriaIndicatorHoverBgOnItem:rgba(255,255,255,.6) !default;

$galleriaThumbnailContainerBg:rgba(0,0,0,.9) !default;
$galleriaThumbnailContainerPadding:1rem .25rem !default;
$galleriaThumbnailNavigatorBg:transparent !default;
$galleriaThumbnailNavigatorColor:$shade100 !default;
$galleriaThumbnailNavigatorHoverBg:rgba(255,255,255,0.1) !default;
$galleriaThumbnailNavigatorHoverColor:$shade100 !default;
$galleriaThumbnailNavigatorBorderRadius:50% !default;
$galleriaThumbnailNavigatorWidth:2rem !default;
$galleriaThumbnailNavigatorHeight:2rem !default;

:root {
--surface-a:#{$shade000};
--surface-b:#{$shade100};
--surface-c:#{$shade200};
--surface-d:#{$shade300};
--surface-e:#{$shade000};
--surface-f:#{$shade000};
--text-color:#{$shade700};
--text-color-secondary:#{$shade600};
--primary-color:#{$primaryColor};
--primary-color-text:#{$primaryTextColor};
--font-family:#{$fontFamily};
}
</CodeHighlight>
</div>

			<h4>Menu Modes</h4>
			<p>Menu has 4 modes, static, overlay, slim and horizontal. Layout container element in App.vue is used to
				define which mode to use by adding specific classes. List
				below indicates the style classes for each mode.</p>

			<ul>
				<li>Static: <b>layout-wrapper layout-static</b></li>
				<li>Overlay: <b>layout-wrapper layout-overlay</b></li>
				<li>Popup: <b>layout-wrapper layout-popup</b></li>
				<li>Horizontal: <b>layout-wrapper layout-horizontal</b></li>
			</ul>

			<p>For example to create a horizontal menu, the div element should be in following form;</p>
<CodeHighlight>
&lt;div class="layout-wrapper layout-horizontal"&gt;
</CodeHighlight>

			<p>It is also possible to leave the choice to the user by keeping the preference at a component and using an
				expression to bind it so that user can switch between modes. Sample
				application has an example implementation of such use case. Refer to App.vue for an example.</p>

			<h4>Dark Menu</h4>
			<p>Default color scheme of menu is light and alternative dark mode can be activated by adding
				layout-menu-dark style class to the main container.</p>
<CodeHighlight>
&lt;div class="layout-wrapper layout-menu-dark"&gt;
</CodeHighlight>

			<h4>Profile Modes</h4>
			<p>There are two possible locations for the user profile menu, first version is inline located inside the
				main menu and second option is the topbar menu. For inline mode,
				profile content should be placed above the menu and for inline mode content goes in topbar-items list.
				The sample demo application provides examples for
				both cases.</p>

			<h4>PrimeFlex Grid System</h4>
			<p>Babylon uses PrimeFlex Grid System throughout the samples, although any Grid library can be used we
				suggest using PrimeFlex as your grid system as it is well tested and supported by PrimeVue. PrimeFlex is
				available at npm for download.</p>

			<h4>Customizing Styles</h4>
			<p>It is suggested to write your customizations in the scss files under the <i>sass/overrides</i> folder for
				seamless updates
				as these files are empty by default and never updated.</p>

			<ul>
				<li>_layout_styles: Customizations for the layout</li>
				<li>_layout_variables: Overrides of layout variables</li>
				<li>_theme_styles: Customizations for the theme</li>
				<li>_theme_variables: Overrides of theme variables</li>
			</ul>

			<h4>Migration Guide</h4>
			<p>Every change is included in <b>CHANGELOG.md</b> file at the root folder of the distribution along with the instructions to update.</p>

			</div>
		</div>
	</div>
</template>

<script>
	import CodeHighlight from './CodeHighlight';

	export default {
		components: {
			'CodeHighlight': CodeHighlight
		}
	}
</script>

<style scoped lang="scss">
	i {
		background-color: #fcf2a7;
		font-family: monaco, Consolas, Lucida Console, monospace;
		font-weight: 700;
		font-style: normal;
		font-size: 14px;
		padding: 2px;
	}

	li {
		line-height: 1.5;
	}

	/deep/ pre[class*="language-"] {
		&:before, &:after {
			display: none !important;
		}

		code {
			border-left: 10px solid var(--surface-d) !important;
			box-shadow: none !important;
			background: var(--surface-b) !important;
			margin: 1em 0;
			color: var(--text-color);
			font-size: 14px;

			.token {
				&.tag,
				&.keyword {
					color: #2196F3 !important;
				}

				&.attr-name,
				&.attr-string {
					color: #2196F3 !important;
				}

				&.attr-value {
					color: #4CAF50 !important;
				}

				&.punctuation {
					color: var(--text-color);
				}

				&.operator,
				&.string {
					background: transparent;
				}
			}
		}
	}
</style>
