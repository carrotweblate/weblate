<template>
	<Layout class="page page-saas">
		<div class="blue">
			<div class="hero">
				<b-container>
					<b-row class="align-items-center">
						<b-col lg="6">
							<h1>
								Превратите своих пользователей в довольных клиентов
							</h1>
							<p class="py-3">
								Carrot quest — это сервис, который решит ваши задачи поддержки пользователей, удержания клиентов и поиска инсайтов о вашем онлайн-продукте
							</p>
							<RegistrationForm />
						</b-col>
					</b-row>
					<!-- Фоновое изображение -->
					<g-image class="hero__guy d-none d-lg-block" src="@/assets/images/saas/hero__guy.png" width="926" immediate blur="5" />
					<g-image class="hero__flower-left" src="@/assets/images/saas/hero__flower-left.png" width="500" />
					<g-image class="hero__flower-right" src="@/assets/images/saas/hero__flower-right.png" width="276" />
					<g-image class="hero__message-1 d-none d-lg-block" src="@/assets/images/saas/hero__message-1.png" width="328" immediate blur="5" />
					<g-image class="hero__message-2 d-none d-lg-block" src="@/assets/images/saas/hero__message-2.png" width="332" immediate blur="5" />
					<svg class="hero__bg" width="1919" height="736" viewBox="0 0 1919 736" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M233.5 18.7373C107 41.2373 27.9995 127.237 0.499512 169.737L0.999514 735.237H1919V0.237312C1901.5 -5.26269 1755 86.7373 1660.5 89.2373C1566 91.7373 1481 44.7373 1406 45.7373C1331 46.7373 1265 58.7373 1180 120.737C1095 182.737 1070.5 220.737 921 230.237C771.5 239.737 510.062 -30.4537 233.5 18.7373Z" fill="#F5F6FE"/>
					</svg>
					<g-image class="hero__girl d-none d-lg-block" src="@/assets/images/saas/hero__girl.png" width="258" immediate blur="5" />
				</b-container>
			</div>
			<b-container>
				<b-row class="features">
					<MegaTabs 
						title="Улучшайте метрики вашего продукта: конверсия сайта, больше ретеншн, меньше отток клиентов"
						:tabs="[
							{
								title: 'Вы увеличите число квалифицированных лидов с сайта с помощью поп-апов и чат-бота',
								pic: '/assets/video/components/1.mp4'
							},
							{
								title: 'Больше пользователей поймут ваш сервис и вернутся к использованию. С помощью емейл-сценариев, поп-ап окошек и бизнес-чата',
								pic: '2.png'
							},
							{
								title: 'Пользователи дольше останутся в сервисе, если работать с оттоком с помощью триггерных сценариев и персональной поддержки',
								pic: '3.png'
							}
						]"
						:instruments="[
							{
								title: '<i>Автоматический трекинг</i> данных о пользователях с сегментацией',
								pic: 'small-1.png',
								href: '/automation-marketing'
							},
							{
								title: '<i>Лид-бот</i> на сайте для генерации и квалификации лидов',
								pic: 'small-2.png',
								href: '/chatbot/'
							},
							{
								title: '<i>Поп-ап окна</i>, работающие на основе поведения пользователей',
								pic: 'small-3.png',
								href: '/pop-up/'
							},
							{
								title: '<i>Триггерные емейл-кампании</i> для удержания и возвращения клиентов',
								pic: 'small-4.png',
								href: '/email-marketing/'
							}
						]"
					/>


					<MegaTabs 
						title="Помогите клиенту пользоваться вашим продуктом с минимальными нагрузками на команду поддержки"
						:tabs="[
							{
								title: '90% людей предпочитают писать. Объедините каналы общения в один простой интерфейс для клиента и менеджера поддержки',
								pic: '4.png'
							},
							{
								title: 'Снимайте 80% стандартных вопросов с поддержки с помощью базы знаний, быстрых ответов и чат-бота',
								pic: '5.png'
							},
							{
								title: '30% сложных вопросов решаются проще, если менеджер знает о клиенте всё, благодаря подробному профилю клиента',
								pic: '6.png'
							}
						]"
						:instruments="[
							{
								title: '<i>Бизнес-чат</i> с персонализацией и аудио/видео звонками для лучшей поддержки клиентов',
								pic: 'small-5.png',
								href: '/online-consultant/'
							},
							{
								title: '<i>База знаний</i> для самообслуживания клиентов и ускорения работы менеджеров',
								pic: 'small-6.png',
								href: '/knowledge-base/'
							},
							{
								title: '<i>Каналы диалогов</i> для распределения диалогов по командам и менеджерам',
								pic: 'small-7.png',
								href: '/online-consultant/'
							},
							{
								title: '<i>База пользователей</i> со всеми данными о них в одном сервисе и интеграциями',
								pic: 'small-8.png',
								href: '/lead-manager'
							}
						]"
					/>


					<MegaTabs 
						title="Понимайте своего клиента и находите инсайты для улучшения продукта"
						:tabs="[
							{
								title: 'Клиенты готовы рассказать вам о багах и своих задачах. Дайте им такую возможность — объедините чат, мессенджеры, соцсети, почту',
								pic: '7.png'
							},
							{
								title: 'Собирайте инсайты о том, как клиенты используют ваш продукт. Это помогает его развивать в нужном направлении',
								pic: '8.png'
							},
							{
								title: 'Находите узкие места и улучшайте продукт. С помощью воронок сайта и подробного пути пользователя',
								pic: '9.png'
							}
						]"
						:instruments="[
							{
								title: '<i>Бизнес-чат</i> в котором пользователи рассказывают о багах и фиче реквестах',
								pic: 'small-5.png',
								href: '/online-consultant/'
							},
							{
								title: '<i>Карточка каждого пользователя</i> с подробными данными о нем и его действиях на сайте',
								pic: 'small-8.png',
								href: '/lead-manager'
							},
							{
								title: '<i>Трекинг данных</i>, воронки сайта, аналитика событий для поиска узких мест',
								pic: 'small-1.png',
								href: '/automation-marketing'
							},
							{
								title: '<i>Интеграции с сервисами</i> и вашей инфраструктурой, чтобы знать все о клиенте',
								pic: 'small-9.png',
								href: '/integration/'
							}
						]"
					/>

				</b-row>

			</b-container>
		</div>
		
		<Cases />

		<Consultation 
			title="Запишитесь на бесплатную демонстрацию сервиса" 
			text="Мы познакомимся, определим ваши задачи, за 30 минут обучим продукту и&nbsp;🎁&nbsp;бесплатно настроим базовый сценарий сбора лидов на вашем сайте"
			pic="medium-1.png"
			alt="Девочка, живущая в сети"
			bg="#EAEAFC"
		/>

		<Integrations />

		<Study />

		<b-container>
			<b-col class="p-4" style="background-color: #EAEAFC; border-radius: 5px;">
				<b-row class="align-items-center justify-content-center">
					<b-col lg="6">
						<g-image src="@/assets/images/components/10.png" width="494" alt="Регистрация в сервисе" title="Поехали!" style="max-width: 100%" />
					</b-col>
					<b-col lg="6">
						<div class="h1 mb-4">Регистрация в сервисе</div>
						<RegistrationForm text="14 дней бесплатно" />
					</b-col>
				</b-row>
			</b-col>
		</b-container>

	</Layout>
</template>

<script>
	import RegistrationForm from '~/components/Forms/RegistrationForm.vue'
	import MegaTabs 		from '~/components/MegaTabs.vue'
	import Cases 			from '~/components/Cases/Cases.vue'
	import Consultation 	from '~/components/Consultation.vue'
	import Integrations 	from '~/components/Integrations.vue'
	import Study 			from '~/components/Study.vue'

	export default {
		components: {
			RegistrationForm,
			MegaTabs,
			Cases,
			Consultation,
			Integrations,
			Study
		},

		//Делаем в HEAD
		metaInfo() {
			return {
				title: 'Сервис увеличения продаж для SAAS: больше конверсия сайта, больше ретеншн, меньше отток клиентов',
				meta: [
					{
						key: 'description',
						name: 'description',
						content: 'Увеличьте продажи в своем SaaS сервисе с помощью автоматизации маркетинга ✅ Инструменты аналитики и автосообщения для привлечения платящих клиентов'
					},
					{
						property: "og:image",
						content: '/assets/images/cover/saas.jpg'
					},
				],
				link: [
					{
						rel: 'canonical',
						href: 'https://www.carrotquest.io/sass/'
					}
				]
			}
		},
	}	
</script>

<style lang="scss">
	.page-saas {
		.hero {
			background: #EAEAFC;
			overflow: hidden;
			.row {
				position: relative;
				z-index: 10;
			}
			&__bg {
				position: absolute;
				z-index: 5;
				width: 1900px;
				top: 5%;
				bottom: 0;
				left: 50%;
				margin-left: -950px;
				@media (min-width: 1900px) {
					width: 100%;
					left: 0;
					margin-left: 0;
				}
			}
			&__girl {
				position: absolute;
				z-index: 4;
				top: 195px;
				left: 50%;
				margin-left: -130px;
				animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
				animation-delay: 600ms;
				@keyframes slide-top {
					0% {
						transform: translateY(0);
					}
					100% {
						transform: translateY(-105px);
					}
				}
			}
			&__guy {
				position: absolute;
				z-index: 7;
				bottom: 0;
				left: 50%;
				margin-left: -130px;
			}
			&__message-1 {
				position: absolute;
				z-index: 8;
				bottom: 410px;
				left: 50%;
				margin-left: -24px;
				animation: slide-fwd-right 6s infinite cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
				animation-delay: 1500ms;
				@keyframes slide-fwd-right {
					0% {
						transform: scale(0.5) translateX(0);
						opacity: 0;
					}
					5% {
						transform: scale(1) translateX(100px);
						opacity: 1;
						scale: 1;
					}
					80% {
						transform: scale(1) translateX(100px);
						opacity: 1;
					}
					85% {
						transform: scale(1) translateX(100px);
						opacity: 0;
					}
					100% {
						opacity: 0;
					}
				}
			}
			&__message-2 {
				position: absolute;
				z-index: 8;
				bottom: 310px;
				left: 50%;
				margin-left: 100px;
				animation: slide-fwd-left 6s infinite cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
				animation-delay: 2000ms;
				@keyframes slide-fwd-left {
					0% {
						transform: scale(0.5) translateX(0);
						opacity: 0;
					}
					5% {
						transform: scale(1) translateX(-100px);
						opacity: 1;
						scale: 1;
					}
					80% {
						transform: scale(1) translateX(-100px);
						opacity: 1;
					}
					85% {
						transform: scale(1) translateX(-100px);
						opacity: 0;
					}
					100% {
						opacity: 0;
					}
				}
			}
			&__flower-left {
				position: absolute;
				z-index: 6;
				bottom: 0;
				left: 0;
			}
			&__flower-right {
				position: absolute;
				z-index: 6;
				bottom: -7px;
				right: -40px;
			}
			@media (max-width: 1439.98px) {
				&__guy {
					width: 700px;
					margin-left: 0;
				}
				&__flower-left {
					width: 300px;
					opacity: 0.2;
				}
				&__flower-right {
					width: 200px;
					opacity: 0.5;
				}
				&__message-1 {
					bottom: 310px;
				}
				&__message-2 {
					bottom: 220px;
				}
				&__girl {
					width: 180px;
					margin-left: -50px;
					top: 255px
				}
			}
		}
		.blue {
			margin-bottom: 9rem;
			background-color: #F5F6FE;
		}
	}
</style>