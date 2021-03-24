// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Bootstrap
import {
	LayoutPlugin,
	NavbarPlugin,
	VBVisiblePlugin,
	FormPlugin, FormInputPlugin, FormRadioPlugin, FormGroupPlugin, InputGroupPlugin, ButtonPlugin, ButtonGroupPlugin,
	ModalPlugin,
} from 'bootstrap-vue' 

//Общие стили
import '~/assets/scss/app.scss'

//Базовая разметка
import DefaultLayout from '~/layouts/Default.vue'


export default function(Vue, { head }) {
	//Register service worker
	// if (isClient && process.env.NODE_ENV === 'production') {
	// 	require('./registerServiceWorker')
	// }

	//Общая для всех страниц META
	head.meta.push(
		{ property: "article:publisher", content: "https://www.facebook.com/carrotquest/" },
		{ property: "fb:app_id", content: "733142947310591" },
		{ property: "og:locale", content: "ru_RU" },
		{ property: "og:type", content: "website" },
	)
	head.link.push(
		{ rel: "icon", 	href: "https://www.carrotquest.io/favicon.ico" },
	)

	//Подключаем Шрифты
	head.link.push(
		{ rel: "preconnect", 	href: "https://fonts.gstatic.com" },
		{ rel: "preload", 		href: "/assets/font/Stag%20Sans-Medium-Web.woff", as: "font", type: "font/woff", crossorigin:"anonymous" },
		{ rel: "stylesheet", 	href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap", media: "print", onload: "this.onload=null;this.removeAttribute('media');" }
	)

	//Bootstrap
	Vue.use(LayoutPlugin)
	Vue.use(NavbarPlugin)
	Vue.use(VBVisiblePlugin)
	Vue.use(FormPlugin)
	Vue.use(FormInputPlugin)
	Vue.use(FormRadioPlugin)
	Vue.use(FormGroupPlugin)
	Vue.use(InputGroupPlugin)
	Vue.use(ButtonPlugin)
	Vue.use(ButtonGroupPlugin)
	Vue.use(ModalPlugin)


	//Базовая разметка
	Vue.component('Layout', DefaultLayout)

	//v-scroll
	Vue.directive('scroll', {
		inserted: function(el, binding) {
			let f = function(evt) {
				if (binding.value(evt, el)) {
					window.removeEventListener('scroll', f)
				}
			}
			window.addEventListener('scroll', f)
		}
	})
}