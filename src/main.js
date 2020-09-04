// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

//Bootstrap
import BootstrapVue from 'bootstrap-vue'

//Общие стили
import '~/assets/scss/app.scss'

//Базовая разметка
import DefaultLayout from '~/layouts/Default.vue'


export default function(Vue, { router, head, isClient, appOptions }) {

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