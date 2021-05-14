<template>
	<b-modal content-class="universalModal" ref="open-modal-consultation" size="lg" hide-header hide-footer>
		<b-button @click="hideModal" class="universalModal__close font12px">
			<span>Закрыть</span>
		</b-button>
		<b-container>
			<b-row>
				<b-col lg="6" class="leftCol d-none d-lg-block" style="background-image: url(https://ik.imagekit.io/0nyjr4jxhmg/tr:w-494/components/10.png?ik-sdk-version=vuejs-1.0.9);" />
				<b-col lg="6" class="rightCol">

					<div class="h3 mb-4" v-html="modalData.title" />

					<b-form v-on:submit.prevent="Consultation">
						<TakeAll @newdata="handleData($event)" />
						{{ modalData.name }}
						<b-button 
							type="submit" 
							variant="primary" 
							class="px-3 py-2 mt-4 w-100">
							Отправить
						</b-button>
					</b-form>

					Связаться с нами: 
					<a href="tel:+74951059169" class="ml-md-2 my-3 my-md-0">+7 (495) 105 91 69</a>
					<a href="https://m.me/carrotquest" class="ml-md-4" aria-label="Facebook">
						<svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.95163H2.91342V4.48492C2.91342 1.56972 4.70984 0 7.2922 0C8.15804 0 8.9687 0.0551076 9.45337 0.0880548C9.66004 0.102103 9.80743 0.112123 9.87455 0.112123V3.13944H8.07813C6.61854 3.13944 6.39399 3.81218 6.39399 4.82129V6.95163H9.76228L9.31317 10.3153H6.39399V19.076H2.91342V10.3153H0V6.95163Z" fill="#FF7C16"/>
						</svg>
					</a>
					<a href="tg://resolve?domain=carrotquestbot" class="ml-4" aria-label="Telegram">
						<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M16.7196 16.0413L19.6529 2.19645C19.7507 1.61554 19.7507 1.22827 19.4574 0.937823C19.164 0.647372 18.8707 0.647372 18.4796 0.841006L0.879981 7.42457C0.586654 7.6182 0.293327 7.71502 0.0977757 7.90865C0 8.19911 0 8.29592 0 8.48956C0.0977757 8.58637 0.293327 8.78001 0.68443 8.87682L5.18211 10.2323L15.6441 3.6487C15.9374 3.45507 16.133 3.45507 16.3285 3.55188C16.4263 3.6487 16.4263 3.6487 16.2308 3.84234L7.82205 11.4909L7.43095 16.1381C7.72428 16.1381 8.01761 16.0413 8.40871 15.7508L10.5598 13.6209L15.0575 16.9126C15.9374 17.3967 16.4263 17.1063 16.7196 16.0413Z" fill="#FF7C16"/>
						</svg>
					</a>						
					<a href="#open-chat" class="ml-4" aria-label="Carrot quest chat">
						<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 2.71797C0 0.905555 1 0 3 0H15C17 0 18 0.905555 18 2.71667V9.96111C18 11.7722 17 12.6778 15 12.6778H6C5.33333 13.2815 3.52632 14.7737 2 16.3C1 17.3 0 16.3 0 15.5V2.71797Z" fill="#FF7C16"/>
							<circle cx="5" cy="6.5" r="1" fill="white"/>
							<circle cx="9" cy="6.5" r="1" fill="white"/>
							<circle cx="13" cy="6.5" r="1" fill="white"/>
						</svg>
					</a>

				</b-col>
			</b-row>
		</b-container>
	</b-modal>
</template>


<script>
	import TakeAll from '~/components/Forms/TakeAll.vue'
	
	export default {
		components: {
			TakeAll
		},
		data: function() {
			return {
				event:     '',

				modalData: {
					title:	'Оставить заявку на внедрение',
					name:   '',
					phone:	'',
					email:  '',
					site:   '',
					role:   '',
				}
			};
		},
		mounted () {
			this.searchHrefs()
		},
		methods: {
			// Ищем ссылки на страницах
			searchHrefs() {
				// Ищем ссылки для открытия модалок на скачивание файлов
				if ( document.querySelector('a[href*="#open-modal-consultation"]') ) {
					document.querySelectorAll('a[href*="#open-modal-consultation"]').forEach(function(item) {
						item.addEventListener('click', function(e) {
							e.preventDefault()
							this.$refs['open-modal-consultation'].show()
							let addr = new URL(e.srcElement.href.replace('#open-modal-consultation' , ''))
							//Заголовок
							if (!!addr.searchParams.get('title')) {
								this.modalData = addr.searchParams.get('title')
							}
						}.bind(this))
					}.bind(this))
				}
			},

			hideModal() {
				this.$refs['open-modal-consultation'].hide()
			},

			//Данные из формы
			handleData: function(e) {
				[ this.modalData.name, this.modalData.phone, this.modalData.email, this.modalData.role, this.modalData.site ] = e;
			},

			//Отправка формы
			Consultation() {
			// 	carrotquest.identify([
			// 		{"op": "update_or_create", "key": "$phone", "value": this.phone},
			// 		{"op": "update_or_create", "key": "$name", "value": this.name},
			// 		{"op": "update_or_create", "key": "$email", "value": this.email}
			// 	]);

			// 	dataLayer.push({ event: 'UAevent', eventCategory: 'leads', eventAction: 'phone', eventLabel: location.host + location.pathname })
			// 	fbq('trackCustom', 'get_demo', {page: location.pathname})

			// 	carrotquest.track("Заполнил форму на демо", {
			// 		'phone': this.phone,
			// 		'email': this.email,
			// 		'type': 'form',
			// 		'url': location.host + location.pathname
			// 	});
				
			// 	this.name = ""
			// 	this.phone = ""
			// 	this.email = ""

			// 	this.$refs['modalConsultation'].hide()
			// 	this.$refs['suсcessDownload'].show()
			// 	setTimeout(() => {
			// 		this.$refs['suсcessDownload'].hide()
			// 	}, 7000);
			}
		}
	}
</script>