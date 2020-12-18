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
		{ property: "og:locale", content: "ru_RU" },
	)

	//Подключаем Open Sans
	head.link.push(
		{ rel: "preconnect", href: "https://fonts.gstatic.com" },
		{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" },
	)	

	// Добавляем jQuery и CQ
	head.script.push({
		src: 'https://static.tildacdn.com/js/jquery-1.10.2.min.js',
		rel: 'preload'

	})
	head.script.push({
		src: 'https://www.carrotquest.io/blog/article/assets/js/cq.js',
		rel: 'preload'
	})

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