<template>
	<Layout class="page page-knowledge-base">

		<section class="hero blue">
			<b-container>
				<b-row class="align-items-center justify-content-center">
					<b-col lg="9" class="text-lg-center"> 
						<h1>
							Разгрузите техподдержку: создайте базу знаний для вашего сайта
						</h1>
						<p class="py-3">
							База знаний, в которой пользователи могут самостоятельно найти ответы на свои вопросы, и не нагружают поддержку
						</p>
						<b-button href="/panel/toAPP/knowledge-base/" variant="primary">Создать базу знаний</b-button>
					</b-col>
				</b-row>
			</b-container>
		</section>

		<!-- Мобильное приложение -->
		<section class="mobile-app">
			<b-container>
				<b-row>
					<b-col lg="6" class="order-lg-2 mb-5 text">
						<h2 class="mb-4">
							Статьи из базы знаний в чат можно отправлять в мобильном приложении оператора
						</h2>
						<ul class="mb-5">
							<li>
								Операторы могут общаться с пользователями и отправлять статьи из базы знаний прямо из мобильного приложения
							</li>
							<li>
								Пользователь быстро получит подробный и эталонный ответ на свой вопрос из базы знаний, независимо от загруженности поддержки
							</li>
						</ul>
						<p>
							Скачивайте мобильное приложение для операторов:
						</p>
						<a href="https://apps.apple.com/us/app/carrot-quest/id1259157795" target="_blank" rel="noopener" class="AppStore mr-4">
							<img src="@/assets/images/components/AppStore-button.png" alt="AppStore" />
						</a>
						<a href="https://play.google.com/store/apps/details?id=carrotquest.mobil.inkov.carrotquest" target="_blank" rel="noopener" class="GooglePlay">
							<img src="@/assets/images/components/GooglePlay-button.png" alt="GooglePlay" />
						</a>
					</b-col>
					<b-col lg="6">
						<g-image src="@/assets/images/components/33.png" width="530" quality="100" class="mw-100" alt="Скачивайте мобильное приложение для операторов" title="Mobile Apps" />
					</b-col>
				</b-row>
			</b-container>
		</section>

		<Consultation 
			title="Запишитесь на бесплатную демонстрацию сервиса" 
			text="Мы познакомимся, определим ваши задачи, за 30 минут обучим продукту и&nbsp;🎁&nbsp;бесплатно настроим базовый сценарий сбора лидов на вашем сайте"
			pic="medium-2.png"
			alt="Девочка, живущая в сети"
			bg="#fff3e6"
		/>

		<Integrations />

		<Cases />

		<Study />

		<Logos />

	</Layout>
</template>

<script>
	import Consultation 		from '~/components/Consultation.vue'
	import Integrations 		from '~/components/Integrations.vue'
	import Cases 				from '~/components/Cases/Cases.vue'
	import Study 				from '~/components/Study.vue'
	import Logos 				from '~/components/Logos.vue'

	export default {
		components: {
			Consultation,
			Integrations,
			Cases,
			Study,
			Logos,
		},
		data() {
			return {
				//Делаем в HEAD
				metaTitle: 'База знаний для поддержки клиентов 24x7: Бесплатно пользователям',
				metaDescription: 'Разгрузите операторов и сократите количество обращений в поддержку с помощью удобной базы знаний',
				metaCanonical: 'https://www.carrotquest.io/knowledge-base/',
				metaImage: 'https://www.carrotquest.io/assets/images/cover/knowledge-base.gif',
			}
		}
	}	
</script>


<style lang="scss">
	// .page-knowledge-base {

	// }
</style>