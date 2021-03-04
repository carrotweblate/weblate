<template>
	<Layout :header="true" :footer="true" class="page page-testdrive">

		<div class="hero">
			<b-container>
				<b-row class="align-items-center justify-content-center">
					<b-col class="text-lg-center">
						<h1>
							Примерьте Carrot quest на своем сайте
						</h1>
						<p class="my-4">
							Примерьте чат, лид-бота и поп-апы. <b>Carrot quest на вашем сайте без установки кода</b>
						</p>
						<b-form v-on:submit.prevent="fit">
							<b-input-group>
								<b-form-input 
									placeholder="Введите адрес вашего сайта" 
									type="text" 
									required
									v-model="site"
									class="p-4"
								/>
								<b-input-group-append>
									<b-button type="submit" variant="primary" class="px-4">
										Примерить
									</b-button>
								</b-input-group-append>
							</b-input-group>
						</b-form>
					</b-col>
					<b-col cols="12" class="more">
						<b-row class="row">
							<b-col lg="7">
								<video autoplay="autoplay" loop="loop" muted="muted" playsinline="" class="embed-responsive-item mw-100">
									<source src="/assets/video/components/13.webm" type="video/webm">
									<source src="/assets/video/components/13.mp4" type="video/mp4">
								</video>
							</b-col>
							<b-col lg="5" class="mt-3 mt-lg-0 mt-xl-5">
								<p class="h4">
									Carrot quest помогает увеличивать продажи на сайте без привлечения нового трафика и обеспечивать лучшую поддержку пользователей
								</p>
								<div id="fit__silent"></div>
							</b-col>
						</b-row>
					</b-col>
				</b-row>
				
			</b-container>
		</div>

		<Logos />

		<Ready />

		<Consultation 
			title="Запишитесь на бесплатную демонстрацию сервиса" 
			text="Мы познакомимся, определим ваши задачи, за 30 минут обучим продукту и&nbsp;🎁&nbsp;бесплатно настроим базовый сценарий сбора лидов на вашем сайте"
			pic="medium-2.png"
			alt="Девочка, живущая в сети"
			bg="#fff3e6"
		/>

	</Layout>
</template>

<script>
	import Logos 				from '~/components/Logos.vue'
	import Ready 				from '~/components/Ready.vue'
	import Consultation 		from '~/components/Consultation.vue'

	export default {
		components: {
			Logos,
			Ready,
			Consultation,
		},
		data() {
			return {
				//Делаем в HEAD
				metaTitle: 'Примерка чата Carrot quest на своем сайте без строчки кода',
				metaDescription: 'Посмотрите как будут выглядеть и работать инструменты Carrot quest на вашем сайте',
				metaCanonical: 'https://www.carrotquest.io/testdrive/',
				metaImage: 'https://www.carrotquest.io/assets/images/cover/testdrive.png',
				
				//Тестдрайв
				site: '',
				openUrl: '',
			}
		},
		methods: {
			fit: function (event) {
				//Какой сайт запросил
				carrotquest.track('Тестдрайв - ввёл адрес сайта', {
					'URL': this.site
				})				
				carrotquest.identify([
					{op: 'update_or_create', key: 'Сайт', value: this.site }]
				)
				if (!!this.site.search('http')) {
					if (!this.site.search('http://')) {
						this.openUrl = this.site.replace('http://','https://')
					} else {
						this.openUrl = 'https://' + this.site
					}
				}
				this.openUrl = 'https://api.apiflash.com/v1/urltoimage?access_key=f883a85678514489bf673efe63f814fe&format=jpeg&full_page=true&width=1200&quality=80&url=' + this.site
				let iframe = document.createElement('iframe') 
				iframe.id = 'fit__site__iframe'
				iframe.src = this.openUrl
				iframe.style.width = '10px'
				iframe.style.height = '10px'
				iframe.style.opacity = '0'
				document.getElementById('fit__silent').appendChild(iframe)
				console.log(this.openUrl)
				this.site = ''
			}
		},
		created: function () {
			//Редирект для мобильника на Онлайн-консультант
			if (typeof window !== 'undefined') {
				if (window.innerWidth < 992) {
					document.location = "/online-consultant/";
				} else {
					carrotquest.track('Тестдрайв - зашёл')
				}
			}
		}
	}	
</script>


<style lang="scss">
	.page-testdrive {
		.hero {
			background-color: #F8F8FF;
			height: 80vh;
			min-height: 800px;
			form .input-group {
				margin: 0 auto;
			}
		}
	}
</style>