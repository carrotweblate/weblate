// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

//Bootstrap
import BootstrapVue from 'bootstrap-vue' 

//Общие стили
import '~/assets/scss/app.scss'

//Базовая разметка
import DefaultLayout from '~/layouts/Default.vue'

export default function(Vue, { head }) {

	//Общая для всех страниц META
	head.meta.push(
		{ property: "article:publisher", content: "https://www.facebook.com/carrotquest/" },
		{ property: "fb:app_id", content: "733142947310591" },
		{ property: "og:locale", content: "ru_RU" },
		{ property: "og:type", content: "website" },
	)

	//Подключаем Шрифты
	head.link.push(
		{ rel: "preconnect", 	href: "https://fonts.gstatic.com" },
		{ rel: "stylesheet", 	href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" },
		{ rel: "preload", 		href: "/assets/font/Stag%20Sans-Medium-Web.woff", as: "font", type: "font/woff", crossorigin:"anonymous" }
	)

	//Bootstrap
	Vue.use(BootstrapVue) 

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