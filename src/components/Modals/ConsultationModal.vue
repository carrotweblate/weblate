<template>
	<b-modal content-class="universalModal" ref="open-modal-consultation" size="lg" hide-header hide-footer>
		<!-- Кнопка закрытия модалки -->
		<b-button @click="hideModal" class="universalModal__close font12px">
			<span>Закрыть</span>
		</b-button>
		<b-container>
			<b-row>
				<b-col lg="6" class="leftCol d-none d-lg-block" :style="pic" />
				<b-col lg="6" class="rightCol">

					<!-- Заголовок модалки -->
					<div class="h3 mb-4" v-html="title" :class="{ 'hide' : this.send }" />

					<!-- Форма для сбора данных -->
					<ConsultationForm @newdata="handleData($event)" button="Отправить" />

					<!-- Контактная информация -->
					<div class="mt-4 font14px">
						<ContactsHrefs />
					</div>

				</b-col>
			</b-row>
		</b-container>
	</b-modal>
</template>


<script>
	import ConsultationForm 	from '~/components/Forms/ConsultationForm.vue'
	import ContactsHrefs 		from '~/components/ContactsHrefs.vue'
	
	export default {
		components: {
			ConsultationForm,
			ContactsHrefs
		},
		data: function() {
			return {
				title:	'Оставить заявку на консультацию',
				pic: 	'background-image: url(https://ik.imagekit.io/0nyjr4jxhmg/tr:w-494/components/medium-12.png?ik-sdk-version=vuejs-1.0.9);',
				send: 	false
			};
		},
		mounted () {
			// Ищем ссылки для открытия модалок для записи на демо
			if ( document.querySelector('a[href*="#open-modal-consultation"],a[href*="#open-demo-pop-up"]') ) {
				document.querySelectorAll('a[href*="#open-modal-consultation"],a[href*="#open-demo-pop-up"]').forEach(function(item) {
					item.addEventListener('click', function(e) {
						e.preventDefault()
						this.$refs['open-modal-consultation'].show()
						gtag('event' , 'lead form' ,
							{'category': 'demo',
							'subject': 'started fill the form',
							'page_title' : document.title,
							'page_location' : location.host + location.pathname
						})
						let addr = new URL(e.srcElement.href.replace('#open-modal-consultation' , '').replace('#open-demo-pop-up' , ''))
						//Заголовок
						if (!!addr.searchParams.get('title')) {
							this.title = addr.searchParams.get('title')
						}
						//Изображения
						if (!!addr.searchParams.get('pic')) {
							this.pic = 'background-image: url(https://ik.imagekit.io/0nyjr4jxhmg/tr:w-494/components/' + addr.searchParams.get('pic') + '?ik-sdk-version=vuejs-1.0.9);'
						}
					}.bind(this))
				}.bind(this))
			}
		},
		methods: {
			// Закрытие модалки
			hideModal() {
				this.$refs['open-modal-consultation'].hide()
			},
			// Данные из формы
			handleData: function(e) {
				this.send = e;
			},
		},
		watch: {
			// Что делать после отправки формы
			send:  function () {
				setTimeout(() => {
					this.hideModal()
				}, 7000);
			}
		}
	}
</script>

<style lang="scss">
	.universalModal {
		.h3.hide , form.hide {
			transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
			opacity: 0;
		}
		.afterSend {
			position: absolute;
			top: 0;
			bottom: 6rem;
		}
		.ContactsHrefs {
			flex-wrap: wrap;
			&__phone {
				width: 100%;
			}
			&__icon {
				margin-top: 1rem !important;
			}
		}
	}
</style>