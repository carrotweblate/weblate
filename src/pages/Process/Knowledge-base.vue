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
				metaImage: 'https://www.carrotquest.io/assets/images/cover/knowledge-base.png',
			}
		}
	}	
</script>


<style lang="scss">
	// .page-knowledge-base {

	// }
</style>