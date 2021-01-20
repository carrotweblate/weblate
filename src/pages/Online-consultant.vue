<template>
	<Layout class="page page-online-consultant">

		<div class="hero blue">
			<b-container>
				<b-row class="align-items-center">
					<b-col lg="6" class="order-2 order-lg-1">
						<g-image src="@/assets/images/online-consultant/hero.png" alt="Онлайн-консультант" />
					</b-col>
					<b-col lg="6" class="order-1 order-lg-2">
						<h1>
							Повышайте продажи на сайте и улучшайте поддержку ваших клиентов с помощью онлайн-консультанта
						</h1>
						<b-button href="/panel/register/" variant="primary" class="my-3">Подключить к своему сайту</b-button>
						<p>
							14 дней бесплатно
						</p>
					</b-col>
				</b-row>
			</b-container>
		</div>

		<section class="advantages">
			<b-container>
				<b-row class="advantages__automatization align-items-start">
					<b-col lg="4" class="mb-5 d-flex align-items-center align-items-lg-start">
						<g-image src="@/assets/images/components/small-22.png" width="158" height="158" alt="Live Chat" fit="inside" class="mr-4" />
						<p><b>Live Chat</b> с персонализацией и аудио/видео звонками ;)</p>
					</b-col>
					<b-col lg="4" class="mb-5 d-flex align-items-center align-items-lg-start">
						<g-image src="@/assets/images/components/small-2.png" width="158" height="158" alt="Лид-бот" fit="inside" class="mr-4" />
						<p><b>Лид-бот</b> на сайте для генерации и квалификации лидов</p>
					</b-col>
					<b-col lg="4" class="mb-5 d-flex align-items-center align-items-lg-start">
						<g-image src="@/assets/images/components/small-9.png" width="158" height="158" alt="Объединени почты, мессенджеров, соцсетей" fit="inside" class="mr-4" />
						<p><b>Объединение почты, мессенджеров, соцсетей</b> чтобы не потерять ни одного клиента</p>
					</b-col>
					<b-col lg="4" class="mb-5 d-flex align-items-center align-items-lg-start">
						<g-image src="@/assets/images/components/small-7.png" width="158" height="158" alt="Каналы диалогов" fit="inside" class="mr-4" />
						<p><b>Каналы диалогов</b> для автоматического распределения диалогов по командам и менеджерам</p>
					</b-col>
					<b-col lg="4" class="mb-5 d-flex align-items-center align-items-lg-start">
						<g-image src="@/assets/images/components/small-6.png" width="158" height="158" alt="База знаний" fit="inside" class="mr-4" />
						<p><b>База знаний</b> для самообслуживания клиентов и ускорения работы менеджеров</p>
					</b-col>
				</b-row>
			</b-container>
		</section>

		<section class="blue">
			<b-container>
				<b-row class="features">

					<!-- Будьте с клиентами настолько близко, насколько это возможно -->
					<MegaTabs 
						title="Будьте с клиентами настолько близко, насколько это возможно"
						:tabs="[
							{
								title: 'Аудио и&nbsp;видео звонки с&nbsp;помощью ZOOM интеграции помогут проводить демо, консультацию или разобраться в&nbsp;баге',
								pic: '/assets/video/components/6.mp4'
							},
							{
								title: 'Интеграция с&nbsp;Calendly автоматически согласует и&nbsp;добавит в&nbsp;календарь звонок с&nbsp;клиентом',
								pic: '/assets/video/components/5.mp4'
							},
							{
								title: 'Еще больше интеграций, чтобы встроить бизнес чат в&nbsp;ваши бизнес процессы',
								pic: '18.png'
							}
						]"
					/>

					<!-- Лид-бот помогает собирать больше качественных лидов -->
					<MegaTabs 
						title="Лид-бот помогает собирать больше качественных лидов с&nbsp;сайта без нагрузки на&nbsp;ваших менеджеров"
						:tabs="[
							{
								title: 'На&nbsp;основе поведения посетителя задаст ему вопросы и&nbsp;либо соберет контакты, либо переключит на&nbsp;менеджера',
								pic: '19.png'
							},
							{
								title: 'Может организовать запись на&nbsp;демо или консультацию с&nbsp;перспективным клиентом',
								pic: '/assets/video/components/8.mp4'
							},
							{
								title: 'Настройте за&nbsp;5&nbsp;минут в&nbsp;визуальном конструкторе. Программист не&nbsp;понадобится',
								pic: '11.png'
							}
						]"
						:more="{
							href:'/chatbot/', 
							text:'Подробнее про лид-бота'
						}"
					/>
				</b-row>
			</b-container>
		</section>

		<Integrations />

		<Consultation 
			title="Запишитесь на бесплатную демонстрацию сервиса" 
			text="Мы познакомимся, определим ваши задачи, за 30 минут обучим продукту и&nbsp;🎁&nbsp;бесплатно настроим базовый сценарий сбора лидов на вашем сайте"
			pic="medium-2.png"
			alt="Девочка, живущая в сети"
			bg="#fff3e6"
		/>

		<Cases />

		<Logos />

		<b-container>
			<b-col class="p-4" style="background-color: #fff3e6; border-radius: 5px;">
				<b-row class="align-items-center justify-content-center">
					<b-col lg="6">
						<g-image src="@/assets/images/components/10.png" width="494" alt="Регистрация в сервисе" title="Поехали!" style="max-width: 100%" />
					</b-col>
					<b-col lg="6">
						<div class="h1 mb-4">Регистрация в&nbsp;сервисе</div>
						<RegistrationForm text="14 дней бесплатно" />
					</b-col>
				</b-row>
			</b-col>
		</b-container>

		<Study />

	</Layout>
</template>

<script>
	import AnimatedNumber 		from "animated-number-vue"
	import Logos 				from '~/components/Logos.vue'
	import MegaTabs 			from '~/components/MegaTabs.vue'
	import Consultation 		from '~/components/Consultation.vue'
	import Integrations 		from '~/components/Integrations.vue'
	import Cases 				from '~/components/Cases/Cases.vue'
	import RegistrationForm 	from '~/components/Forms/RegistrationForm.vue'
	import Study 				from '~/components/Study.vue'

	export default {
		components: {
			AnimatedNumber,
			Logos,
			MegaTabs,
			Consultation,
			Integrations,
			Cases,
			RegistrationForm,
			Study
		},
		//Делаем в HEAD
		metaInfo() {
			return {
				title: 'Онлайн-консультант для сайта',
				meta: [
					{
						key: 'description',
						name: 'description',
						content: 'Онлайн-консультант для вашего сайта. Повышает конверсию и продажи. Установка за 10 минут. Попробуйте сейчас - 14 дней бесплатно.'
					},
					{
						property: "og:image",
						content: 'https://www.carrotquest.io/assets/images/cover/online-consultant.png'
					},
				],
				link: [
					{
						rel: 'canonical',
						href: 'https://www.carrotquest.io/online-consultant/'
					}
				]
			}
		}
	}	
</script>


<style lang="scss">
	.page-online-consultant {
		.hero {
			padding-top: 0 !important;
			img {
				max-width: 100%;
			}
		}

		.advantages {
			img {
				width: 74px;
			}
			p {
				margin-bottom: 0;
			}
		}

		.blue {
			padding-top: 5rem;
			background-color: #F5F6FE;
		}
	}

	
</style>