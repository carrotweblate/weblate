<template>
	<Layout class="page page-library">

		<section  class="hero">
			<b-container>
				<b-row class="align-items-center">
					<b-col>
						<div id="text" class="h1 mb-4">
							<h1 class="h1">Библиотека Carrot quest.</h1>
							<p>
								Полезные <nobr><span class="book"></span>&nbsp;материалы</nobr> про маркетинг <nobr>и&nbsp;<span class="plane"></span>&nbsp;развитие</nobr> продуктов, 
								а также инсайты от наших экспертов — всё это вы найдете <nobr>в <span class="db"></span>&nbsp;библиотеке</nobr>
							</p>
						</div>
						<p>
							Подпишитесь, чтобы получать еженедельный дайджест Carrot&nbsp;quest
						</p>
						<SubscribeForm />
					</b-col> 
				</b-row>

				<div class="bg d-none d-md-block">
					<ul class="circles-container">
						<li class="circle"></li>
						<li class="circle"></li>
						<li class="circle"></li>
						<li class="circle"></li>
						<li class="circle"></li>
						<li class="circle"></li>
						<li class="circle"></li>
						<li class="circle"></li>
						<li class="circle"></li>
						<li class="circle"></li>
					</ul>
				</div>
			</b-container>
		</section>

		<!-- Книги -->
		<section class="books">
			<b-container>
				<b-row>
					<b-col lg="8" xl="7">
						<p class="h1">
							Книги
						</p>
						<p>
							Собрали всю экспертизу команды Carrot quest в пошаговых руководствах по автоматизации 
							маркетинга и коммуникаций для интернет-магазинов и онлайн-сервисов.
						</p>
					</b-col>
				</b-row>
				<b-row>
					<b-col lg="6">
						<g-link to="/ecom-book/" class="books__wrapper d-block">
							<p class="font20px">
								Полное руководство по коммуникациям и автоматизации воронки пользователей в интернет-магазинах
							</p>
							<span>Посмотреть книгу</span>
							<g-image src="~/assets/images/library/book_ecom.png" width="360" quality="100" alt="Полное руководство по коммуникациям и автоматизации воронки пользователей в интернет-магазинах" />
						</g-link>
					</b-col>
					<b-col lg="6">
						<g-link to="/saas-book/" class="books__wrapper peach d-block">
							<p class="font20px">
								Самый подробный гайд по автоматизации маркетинга для продакт-маркетологов и CEO онлайн-продуктов
							</p>
							<span>Посмотреть книгу</span>
							<g-image src="~/assets/images/library/book_scripts.png" width="384" quality="100" alt="Самый подробный гайд по автоматизации маркетинга для продакт-маркетологов и CEO онлайн-продуктов" />
						</g-link>
					</b-col>
					<b-col lg="6">
						<g-link to="/ecom-audiobook/" class="books__wrapper d-block">
							<p class="font20px">
								Аудиокнига. Полное руководство по коммуникациям и автоматизации воронки пользователей в интернет-магазинах
							</p>
							<span>Послушать книгу</span>
							<g-image src="~/assets/images/library/audiobook_ecom.png" width="360" quality="100" alt="Полное руководство по коммуникациям и автоматизации воронки пользователей в интернет-магазинах" />
						</g-link>
					</b-col>
				</b-row>
			</b-container>
		</section>
		

		<!-- Курсы -->
		<section class="courses">
			<b-container>
				<b-row>
					<b-col lg="8" xl="7">
						<div class="h1">
							Курсы
						</div>
					</b-col>
				</b-row>
				<b-row class="courses_row">
					<b-col lg="6" class="course">
						<g-link to="/videocourse-online-sales/" class="courses__wrapper d-block">
							<g-image src="~/assets/images/library/courses_video.png" alt="Как увеличить продажи на том же трафике, используя инструменты Carrot quest" />
							<div class="box">
								<div class="h5">
									Как увеличить продажи на том же трафике, используя инструменты Carrot quest
								</div>
								<p>
									Этот видеокурс посвящен увеличению онлайн-продаж на сайте без привлечения дополнительного трафика.
									Вы узнаете как собирать данные о пользователях и правильно взаимодействовать с ними с помощью сообщений в чат, поп-апов, 
									email-рассылок и чат-бота, а также строить воронки и анализировать эффективность коммуникаций.
								</p>
							</div>
						</g-link>
					</b-col>

					<b-col lg="6" class="course">
						<g-link to="/transformsales-course-part1/" class="courses__wrapper d-block">
							<g-image src="~/assets/images/library/courses_transformation.png" alt="Digital-трансформация маркетинга и продаж" />
							<div class="box">
								<div class="h5">
									Digital-трансформация маркетинга и продаж
								</div>
								<p>
									Это первая часть большого контент-курса о том, как шаг за шагом перевести продажи и маркетинг в онлайн. В нем — наш опыт и набор готовых сценариев для вас, 
									чтобы вы могли по-новому взаимодействовать с клиентами, поддерживать пользователей и увеличивать продажи без дополнительных бюджетов на маркетинг.
								</p>
							</div>
						</g-link>
					</b-col>

					<b-col lg="6" class="course">
						<g-link to="/marketing-course/" class="courses__wrapper d-block">
							<g-image src="~/assets/images/library/courses_prodagi.png" alt="Маркетинг на сайте: как продать в 2 раза больше, не увеличивая трафик" />
							<div class="box">
								<div class="h5">
									Маркетинг на сайте: как продать в 2 раза больше, не увеличивая трафик
								</div>
								<p>
									Этот курс — выжимка опыта, который мы получили за 5 лет внедрения автоворонок для 400 сайтов. Все рекомендации можно внедрить за неделю. Разработчик не понадобится 🙂
								</p>
							</div>
						</g-link>
					</b-col>

					<b-col lg="6" class="course">
						<g-link to="/kurs-email-marketing/" class="courses__wrapper d-block">
							<g-image src="~/assets/images/library/courses_email.png" alt="Email-маркетинг за 8 шагов" />
							<div class="box">
								<div class="h5">
									Email-маркетинг за 8 шагов
								</div>
								<p>
									Этот курс посвящен построению автоворонок на сайте с момента посещения до покупки. 
									Вы узнаете, как настраивать коммуникацию с клиентами с помощью поп-апов, емейлов и онлайн-чата.
								</p>
							</div>
						</g-link>
					</b-col>
				</b-row>
			</b-container>
		</section>

		<!-- Гайды -->
		<section class="courses">
			<b-container>
				<b-row>
					<b-col lg="8" xl="7">
						<div class="h1">
							Гайды
						</div>
						<p>
							В этом разделе вы найдете пошаговые руководства по определенным темам, которые помогут вам стать еще эффективнее. 
							Как построить квалификацию на сайте, создать качественную поддержку клиентов и научиться проводить продуктовые исследования — все ответы на эти вопросы вы найдете здесь 😉
						</p>
					</b-col>
				</b-row>
				<b-row class="courses_row">
					<b-col lg="6" class="course"> 
						<g-link to="/support-guide/" class="courses__wrapper d-block">
							<g-image src="~/assets/images/library/gaid-po-podderzhke.png" alt="Гайд по поддержке пользователей" />
							<div class="box">
								<div class="h5">
									Гайд по поддержке пользователей
								</div>
								<p>
									Стратегия и цели в команде поддержки. Строим работу с обращениями, анализируем эффективность работы.
								</p>
							</div>
						</g-link>
					</b-col>
					<b-col lg="6" class="course"> 
						<g-link to="/qualification-guide/" class="courses__wrapper d-block">
							<g-image src="~/assets/images/library/guide_user.png" alt="Гайд по квалификации пользователей на сайте" />
							<div class="box">
								<div class="h5">
									Гайд по квалификации пользователей на сайте
								</div>
								<p>
									Вы узнаете, как построить процесс по оценке лидов с помощью чат-бота и лид-магнитов.
								</p>
							</div>
						</g-link>
					</b-col>
				</b-row>
			</b-container>
		</section>

	</Layout>
</template>

<script>
	import SubscribeForm from '~/components/Forms/SubscribeForm.vue'

	export default {
		components: {
			SubscribeForm
		},
		//Делаем в HEAD
		metaInfo() {
			return {
				title: 'Библиотека | Полезные материалы про маркетинг',
				meta: [
					{
						key: 'description',
						name: 'description',
						content: 'Книги, шаблоны, карты и чек-листы, а также инсайты от экспертов Carrot quest для маркетологов и СЕО онлайн-продуктов. Подпишитесь, чтобы получать на почту.'
					},
					{
						property: "og:image",
						content: 'https://www.carrotquest.io/assets/images/cover/library.gif'
					},
				],
				link: [
					{
						rel: 'canonical',
						href: 'https://www.carrotquest.io/library/'
					}
				]
			}
		}
	}
</script>

<style lang="scss">
	.page-library {
		.hero {
			.row {
				position: relative;
				z-index: 2;
			}
			.bg {
				background-color: #F8F8FF;
				position: absolute;
				z-index: 1;
				top: 0; left: 0; right: 0;
				height: 90vh;
				max-height: 1024px;
				overflow: hidden;

				.circle{
					position: absolute;
					display: block;
					list-style: none;
					width: 100px;
					height: 100px;
					background: url("data:image/svg+xml,%0A%3Csvg width='54' height='88' viewBox='0 0 54 88' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M33.7089 77.7474C33.5424 83.6691 29.1456 87.3286 23.4497 87.1622C17.987 86.9959 13.6901 83.1035 13.8566 77.1486C14.0232 71.2268 18.5532 67.4676 24.0159 67.6339C29.7451 67.8002 33.9088 71.8257 33.7089 77.7474ZM49.9305 35.3972C48.5315 37.36 45.4005 39.8884 41.47 42.949L37.1065 45.9431C34.9747 47.5733 33.6423 49.5028 32.9428 51.6985C32.5764 52.8629 32.3099 55.8903 32.2433 57.9196C32.21 58.3189 31.9769 59.2171 30.7444 59.2171C29.512 59.2171 19.0862 59.2171 17.7205 59.2171C16.3548 59.2171 16.1883 58.4187 16.2216 58.0194C16.4215 52.4969 17.2209 47.9392 19.5192 44.2797C22.617 39.3561 31.344 34.1663 31.344 34.1663C32.6763 33.1682 33.7089 32.1036 34.5083 30.9393C35.974 28.9432 37.1731 26.7142 37.1731 24.3189C37.1731 21.5577 36.5069 18.9295 34.7415 16.7338C32.6763 14.1722 30.4446 12.9413 26.1477 12.9413C21.9175 12.9413 19.4526 15.0704 17.6872 17.8649C15.9218 20.6594 16.2216 23.953 16.2216 26.9471H0C0 15.636 2.96453 8.41681 9.22666 4.1585C13.4569 1.26419 18.853 0 25.1485 0C33.4092 0 39.9711 1.53033 45.7669 5.92171C51.1297 9.98041 53.9609 15.7025 53.9609 23.4207C53.9609 28.178 52.2955 32.1702 49.9305 35.3972Z' fill='%23EBEBFB'/%3E%3C/svg%3E%0A") no-repeat;
					background-size: contain;
					animation-name: float;
					animation-duration: 25s;
					animation-direction: alternate;
					animation-timing-function: linear;
					animation-iteration-count: infinite;
					bottom: -150px;
					&::before, &::after {
						display: none;
					}
				}
				.circle:first-child{
					left: 25%;
					width: 80px;
					height: 80px;
					animation-delay: 0;
				}
				.circle:nth-child(2){
					left: 10%;
					width: 70px;
					height: 70px;
					animation-delay: 12s;
					animation-duration: 20s;
				}
				.circle:nth-child(3){
					left: 70%;
					width: 40px;
					height: 40px;
					animation-delay: 4s;
				}
				.circle:nth-child(4){
					left: 5%;
					width: 60px;
					height: 60px;
					animation-delay: 0s;
					animation-duration: 30s;
				}
				.circle:nth-child(5){
					left: 0%;
					width: 20px;
					height: 20px;
					animation-delay: 0s;
					animation-duration: 20s;
				}
				.circle:nth-child(6){
					left: 45%;
					width: 70px;
					height: 70px;
					animation-delay: 20s;
				}
				.circle:nth-child(7){
					left: 35%;
					width: 50px;
					height: 50px;
					animation-delay: 7s;
					animation-duration: 17s;
				}
				.circle:nth-child(8){
					left: 65%;
					width: 25px;
					height: 25px;
					animation-delay: 19s;
				}
				.circle:nth-child(9){
					left: 75%;
					width: 80px;
					height: 80px;
					animation-delay: 12s;
				}
				.circle:nth-child(10){
					left: 90%;
					width: 30px;
					height: 30px;
					animation-delay: 0s;
					animation-duration: 21s;
				}
				@keyframes float {
					0%{
						transform: translateY(0) rotate(0deg);
						opacity: 1;
						border-radius: 0;
					}

					100%{
						transform: translateY(-1000px) rotate(720deg);
						opacity: 0.3;
						border-radius: 50%;
					}
				}
			}
			.h1 {
				color: #96A0AE;
				font-size: 2.85rem;
				h1 {
					color: #000;
				}
				h1 , p {
					display: inline;
					margin: 0;
				}
				span {
					display: inline-block;
					position: relative;
					width: 35px;
					height: 35px;
					top: 6px;
					background-size: contain !important;
					background-repeat: no-repeat;
				}
				.book {
					background-image: url("data:image/svg+xml,%0A%3Csvg width='39' height='40' viewBox='0 0 39 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19.5 22.5V5C18.1667 4 13.7 2 6.5 2V27C9.5 26.8333 15.8 26.8 19 30M6.5 5.5H2V32H10C11.8333 32 15.8 33.3 19 36.5' stroke='%239DA3AF' stroke-width='3'/%3E%3Cpath d='M19.5 22.5V5C20.8333 4 25.3 2 32.5 2V27C29.5 26.8333 23.2 26.8 20 30L19.5 30.5L19 30M32.5 5.5H37V32H29C27.1667 32 23.2 33.3 20 36.5L19.5 37L19 36.5' stroke='%239DA3AF' stroke-width='3'/%3E%3C/svg%3E%0A");
				}
				.plane {
					background-image: url("data:image/svg+xml,%0A%3Csvg width='41' height='41' viewBox='0 0 41 41' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3 13.5897L13.0513 23.641L37.641 3.35897L17.1795 27.7692L27.4103 38L38 3L3 13.5897Z' stroke='%239DA3AF' stroke-width='3'/%3E%3Cpath d='M13.0513 23.6415C13.0513 23.6415 15.3849 21.8466 17.1795 23.6415C18.9741 25.4363 17.1795 27.7697 17.1795 27.7697' stroke='%239DA3AF' stroke-width='3'/%3E%3C/svg%3E%0A");
				}
				.db {
					width: 38px;
					height: 34px;
					top: 4px;
					background-image: url("data:image/svg+xml,%0A%3Csvg width='41' height='37' viewBox='0 0 41 37' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M35.3502 6.9219L18.8781 2C18.8781 2 1.65143 6.70476 1.79619 6.70476C1.94095 6.70476 18.8781 11.2648 18.8781 11.2648L35.019 6.9219C37.2177 6.9219 39 8.70424 39 10.9029C39 12.1725 38.4056 13.3033 37.48 14.0322C36.8027 14.5656 36.4667 14.4495 35.019 14.8838L18.8781 19.3714L1 14.3048' stroke='%2396A0AE' stroke-width='3'/%3E%3Cpath d='M34.9468 14.8838C37.1454 14.8838 38.9277 16.6661 38.9277 18.8647C38.9277 20.1344 38.3334 21.2652 37.4077 21.9941C36.7304 22.5275 36.3944 22.4114 34.9468 22.8457L18.8058 27.3333L1.07251 22.2666' stroke='%2396A0AE' stroke-width='3'/%3E%3Cpath d='M34.9468 22.8462C37.1454 22.8462 38.9277 24.6285 38.9277 26.8271C38.9277 28.0968 38.3334 29.2276 37.4077 29.9565C36.7304 30.4899 36.3944 30.3738 34.9468 30.8081L18.8058 35.2957L1.07251 30.229' stroke='%2396A0AE' stroke-width='3'/%3E%3C/svg%3E%0A");
				}
			}
			@media (max-width: 991.98px) { 
				background-color: #F8F8FF; 
				.h1 {
					font-size: 2rem;
					line-height: 2.5rem;
					span {
						width: 30px;
						height: 30px;
						top: 6px;
					}
					.db {
						width: 32px;
						height: 30px;
						top: 5px;
					}
				}
			}
			@media (max-width: 575.98px) {
				.h1 {
					font-size: 1.5rem;
					line-height: 2rem;
					span {
						width: 24px;
						height: 24px;
						top: 5px;
					}
					.db {
						width: 25px;
						height: 25px;
						top: 6px;
					}
				}
			}
		}

		.books {
			position: relative;
			z-index: 2;
			margin-top: -10rem;

			&__wrapper {
				background-color: #ECF9EC;
				padding: 3rem 2rem;
				margin-bottom: 40px;
				text-align: center;
				border-radius: 5px;
				width: 100%;
				height: 0;
				padding-bottom: 84%;
				overflow: hidden;
				position: relative;
				top: 0;
				transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
				&.peach {
					background-color: #FFF0E5;
				}
				&:hover {
					top: -8px;
					box-shadow: 0px 4px 20px rgba(79, 79, 170, 0.25);
					padding-bottom: calc(84%);
					img {
						top: 8px;
					}
				}
				p {
					color: #000;
				}
				img {
					max-width: 100%;
					max-height: 385px;
					margin: 0 auto;
					display: block;
					position: relative;
					top: 20px;
					left: -3%;
					transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
				}
				
			}
			@media (max-width: 991px) {
				&__wrapper {
					padding: 2rem;
					padding-bottom: 60%;
					margin-bottom: 38px;
					&:hover {
						top: -8px;
						padding-bottom: 60%;
					}
				}
			}
			@media (max-width: 575px) {
				margin-top: 0;
				&__wrapper {
					padding: 2rem 1rem;
					padding-bottom: 120%;
					&:hover {
						top: -8px;
						padding-bottom: 120%;
					}
				}
			}
		}

		.courses {
			.course {
				margin-top: 40px;
			}
			&_row {
				margin-top: -2rem;
			}
			&__wrapper {
				color: #000;
				border-radius: 5px;
				overflow: hidden;
				cursor: pointer;
				height: 100%;
				position: relative;
				top: 0;
				transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
				&:hover {
					top: -5px;
					box-shadow: 0px 4px 20px rgba(79, 79, 170, 0.25);
					.box {
						background-color: #FFF; 
					}
				}
				img {
					width: 100%;
				}
				.box {
					background-color: #F8F8FF;
					padding: 1.5rem;
					height: 100%;
					transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
					@media (max-width: 575.98px) {
						padding: 1rem;
					}
					a {
						color: #000;
						font-size: 20px;
						font-weight: bold;
					}
				}
			}
			

		}
	}
</style>