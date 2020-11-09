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

	// Добавляем jQuery и CQ
	head.script.push({
		src: '/assets/js/jquery-3.5.1.min.js' , type: 'application/javascript' , charset: 'utf-8'
	})
	head.script.push({
		src: '/assets/js/cq.js' , type: 'application/javascript' , charset: 'utf-8'
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