<template>
    <div id="layout-config" :class="containerClass">
        <div class="layout-config-content">
            <a href="#" class="layout-config-button" id="layout-config-button" @click="toggleConfigurator">
                <i class="pi pi-cog"></i>
            </a>
            <a href="#" class="layout-config-close" @click="hideConfigurator">
                <i class="pi pi-times"></i>
            </a>
            <TabView>
                <TabPanel header="Menu">
                    <h5>Menu Modes</h5>
                    <div class="p-grid">
                        <div class="p-col p-col-fixed">
                            <a href="#" @click="changeLayout($event, 'static')">
                                <img src="assets/layout/images/configurator/menu/babylon-static.png" alt="babylon">
                                <i class="pi pi-check" v-if="layoutMode === 'static'"></i>
                            </a>
                            <span>Static</span>
                        </div>
                        <div class="p-col p-col-fixed">
                            <a href="#" @click="changeLayout($event, 'overlay')">
                                <img src="assets/layout/images/configurator/menu/babylon-overlay.png" alt="babylon">
                                <i class="pi pi-check" v-if="layoutMode === 'overlay'"></i>
                            </a>
                            <span>Overlay</span>
                        </div>
                        <div class="p-col p-col-fixed">
                            <a href="#" @click="changeLayout($event, 'horizontal')">
                                <img src="assets/layout/images/configurator/menu/babylon-horizontal.png" alt="babylon">
                                <i class="pi pi-check" v-if="layoutMode === 'horizontal'"></i>
                            </a>
                            <span>Horizontal</span>
                        </div>
                        <div class="p-col p-col-fixed">
                            <a href="#" @click="changeLayout($event, 'slim')">
                                <img src="assets/layout/images/configurator/menu/babylon-slim.png" alt="babylon">
                                <i class="pi pi-check" v-if="layoutMode === 'slim'"></i>
                            </a>
                            <span>Slim</span>
                        </div>
                    </div>

                    <h5>Menu Type</h5>
                    <div class="p-grid">
                        <div class="p-col p-col-fixed">
                            <a href="#" @click="changeMenuType($event, true)">
                                <img src="assets/layout/images/configurator/menu/babylon-grouped.png" alt="babylon">
                                <i class="pi pi-check" v-if="grouped === true"></i>
                            </a>
                            <span>Grouped</span>
                        </div>
                        <div class="p-col p-col-fixed">
                            <a href="#" @click="changeMenuType($event, false)">
                                <img src="assets/layout/images/configurator/menu/babylon-ungrouped.png" alt="babylon">
                                <i class="pi pi-check" v-if="grouped === false"></i>
                            </a>
                            <span>Ungrouped</span>
                        </div>
                    </div>

                    <h5>Menu Colors</h5>
                    <div class="p-grid">
                        <div class="p-col p-col-fixed">
                            <a href="#" @click="changeMenuColor($event, true)">
                                <img src="assets/layout/images/configurator/menu/babylon-static.png" alt="babylon">
                                <i class="pi pi-check" v-if="darkMenu === true"></i>
                            </a>
                            <span>Dark</span>
                        </div>
                        <div class="p-col p-col-fixed">
                            <a href="#" @click="changeMenuColor($event, false)">
                                <img src="assets/layout/images/configurator/menu/babylon-light.png" alt="babylon">
                                <i class="pi pi-check" v-if="darkMenu === false"></i>
                            </a>
                            <span>Light</span>
                        </div>
                    </div>
                </TabPanel>

                <TabPanel header="User Profile">
                    <div class="p-grid">
                        <div class="p-col p-col-fixed">
                            <a href="#" :class="{'p-disabled':layoutMode === 'horizontal'}" @click="changeProfileMode($event, 'inline')">
                                <img src="assets/layout/images/configurator/menu/babylon-inline.png" alt="babylon">
                                <i class="pi pi-check" v-if="profileMode === 'inline'"></i>
                            </a>
                            <span>Inline</span>
                        </div>
                        <div class="p-col p-col-fixed">
                            <a href="#" :class="{'p-disabled':layoutMode === 'horizontal'}" @click="changeProfileMode($event, 'popup')">
                                <img src="assets/layout/images/configurator/menu/babylon-popup.png" alt="babylon">
                                <i class="pi pi-check" v-if="profileMode === 'popup'"></i>
                            </a>
                            <span>Popup</span>
                        </div>
                    </div>
                </TabPanel>

                <TabPanel header="Theme Customization">
                    <h5 style="margin-top: 0">Input Style</h5>
                    <div class="p-formgroup-inline">
                        <div class="p-field-radiobutton">
                            <RadioButton id="input_outlined" name="inputstyle" value="outlined" :modelValue="value" @input="onChange" />
                            <label for="input_outlined">Outlined</label>
                        </div>
                        <div class="p-field-radiobutton">
                            <RadioButton id="input_filled" name="inputstyle" value="filled" :modelValue="value" @input="onChange" />
                            <label for="input_filled">Filled</label>
                        </div>
                    </div>

                    <h5>Ripple Effect</h5>
                    <InputSwitch :value="rippleActive" @input="onRippleChange"  />

                    <h5>Theme Colors</h5>
                    <div class="p-grid">
                        <div class="p-col p-col-fixed colors" v-for="t of themes" :key="t.name">
                            <a @click="changeComponentTheme($event, t.file)" :class="['layout-config-option', {'selected': (theme === t.file)}]" :style="{backgroundColor:t.color}">
                                <i class="pi pi-check" v-if="theme === t.file"></i>
                            </a>
                        </div>
                    </div>
                </TabPanel>
            </TabView>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        layoutMode: {
            type: String,
            default: null
        },
        darkMenu: {
            type: Boolean,
            default: null
        },
        grouped: {
            type: Boolean,
            default: null
        },
        profileMode: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            active: false,
            theme: 'blue',
            themes: [
                {name: 'Amber Accent', file: 'amber', color:'#FFC107'},
                {name: 'Blue Accent', file: 'blue', color:'#2196F3'},
                {name: 'Blue Gray Accent', file: 'bluegray', color:'#607D8B'},
                {name: 'Brown Accent', file: 'brown', color:'#795548'},
                {name: 'Cyan Accent', file: 'cyan', color:'#00BCD4'},
                {name: 'Deep Orange Accent', file: 'deeporange', color:'#FF5722'},
                {name: 'Deep Purple Accent', file: 'deeppurple', color:'#673AB7'},
                {name: 'Green Accent', file: 'green', color:'#4CAF50'},
                {name: 'Indigo Accent', file: 'indigo', color:'#3F51B5'},
                {name: 'Light Blue Accent', file: 'lightblue', color:'#03A9F4'},
                {name: 'Light Green Accent', file: 'lightgreen', color:'#8BC34A'},
                {name: 'Lime Accent', file: 'lime', color:'#CDDC39'},
                {name: 'Orange Accent', file: 'orange', color:'#FF9800'},
                {name: 'Pink Accent', file: 'pink', color:'#E91E63'},
                {name: 'Purple Accent', file: 'purple', color:'#9C27B0'},
                {name: 'Teal Accent', file: 'teal', color:'#00796B'},
                {name: 'Yellow Accent', file: 'yellow', color:'#FFEB3B'},
            ],
        }
    },
    watch: {
        $route() {
            if (this.active) {
                this.active = false;
                this.unbindOutsideClickListener();
            }
        }
    },
    outsideClickListener: null,
    methods: {
        onChange(value) {
            this.$appState.inputStyle = value;
        },
        onRippleChange(value) {
            this.$primevue.ripple = value;
        },
        toggleConfigurator(event) {
            this.active = !this.active;
            event.preventDefault();

            if (this.active)
                this.bindOutsideClickListener();
            else
                this.unbindOutsideClickListener();
        },
        hideConfigurator(event) {
            this.active = false;
            this.unbindOutsideClickListener();
            event.preventDefault();
        },
        changeLayout(event, layoutMode) {
            this.$emit('layout-change', layoutMode);
            event.preventDefault();
        },
        changeMenuColor(event, menuColor) {
            this.$emit('menu-color-change', menuColor);
            event.preventDefault();
        },
        changeMenuType(event, menuType) {
            this.$emit('menu-type-change', menuType);
            event.preventDefault();
        },
        changeProfileMode(event, profileMode) {
            this.$emit('profile-mode-change', profileMode);
            event.preventDefault();
        },
        changeComponentTheme(event, theme) {
            this.changeStyleSheetUrl('theme-css', theme, 'theme-');
            this.changeStyleSheetUrl('layout-css', theme, 'layout-');
            this.theme = theme;
            event.preventDefault();
        },
        changeStyleSheetUrl(id, value, prefix) {
            let element = document.getElementById(id);
            let urlTokens = element.getAttribute('href').split('/');
            urlTokens[urlTokens.length - 1] = prefix + value + '.css' ;
            let newURL = urlTokens.join('/');
            this.replaceLink(element, newURL);

            let topbarLogo = document.getElementById('layout-topbar-logo');
            let menuLogo = document.getElementById('layout-menu-logo');

            if (value.localeCompare('yellow') === 0 || value.localeCompare('lime') === 0) {
                topbarLogo.src = 'assets/layout/images/logo-black.png';
                menuLogo.src = 'assets/layout/images/logo-black.png';

            } else {
                topbarLogo.src = 'assets/layout/images/logo-white.png';
                menuLogo.src = 'assets/layout/images/logo-white.png';
            }
        },
        replaceLink(linkElement, href) {
            const id = linkElement.getAttribute('id');
            const cloneLinkElement = linkElement.cloneNode(true);

            cloneLinkElement.setAttribute('href', href);
            cloneLinkElement.setAttribute('id', id + '-clone');

            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', id);
            });
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.active && this.isOutsideClicked(event)) {
                        this.active = false;
                    }
                };
                document.addEventListener('click', this.outsideClickListener);
            }
        },
        unbindOutsideClickListener() {
            if (this.outsideClickListener) {
                document.removeEventListener('click', this.outsideClickListener);
                this.outsideClickListener = null;
            }
        },
        isOutsideClicked(event) {
            return !(this.$el.isSameNode(event.target) || this.$el.contains(event.target));
        }
    },
    computed: {
        containerClass() {
            return ['layout-config', {'layout-config-active': this.active}];
        },
        rippleActive() {
            return this.$primevue.ripple;
        },
        value() {
            return this.$appState.inputStyle;
        }
    }
}
</script>
