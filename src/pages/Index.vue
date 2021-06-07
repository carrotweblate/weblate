<template>
	<Layout :header="true" :footer="true"  class="page page-index">

		<section class="hero">
			<b-container>
				<b-row class="align-items-center">
					<b-col lg="10">
						<h1 class="mb-4 mb-lg-5">
							Поможем онлайн-бизнесу увеличить продажи на том же трафике, удержим клиентов и превратим спящих в платящих <span>при помощи 💬 чата на сайте, 💌️ триггерных email-кампаний, 🧲 поп-ап окон и 🤖 чат‑бота</span>
						</h1>
						<RegistrationForm text="14 дней бесплатно. Регистрируйтесь" />
					</b-col>
				</b-row>
			</b-container>
		</section>

		
		<!-- Видео о Carrot quest -->
		<section class="video-about">
			<b-container>
				<b-row >
					<b-col>
						<a v-b-modal.youtubeCQ>
							<span class="btn font24px d-flex align-items-center">
								<span class="d-none d-md-inline">
									Посмотреть, как работает сервис. 97 секунд
								</span>
							</span>
							<!-- Для мобилки -->
							<ik-image
								path="/components/video-about.png"
								:transformation="[{width:374,height:185}]"
								:lqip="{active:true, quality: 40, blur: 10}"
								width="374"
								height="185"
								loading="lazy"
								alt="Видео о Carrot quest"
								class="mw-100 d-md-none"
							/>
							<!-- Для десктопа -->
							<ik-image
								path="/components/medium-20.png"
								:transformation="[{width:241,height:320}]"
								:lqip="{active:true, quality: 40, blur: 10}"
								width="241"
								height="320"
								loading="lazy"
								alt="Кофеман"
								class="cofeboy d-none d-md-block"
							/>
							<ik-image
								path="/components/video-about.png"
								:transformation="[{width:1320,height:654}]"
								:lqip="{active:true, quality: 40, blur: 10}"
								width="1320"
								height="654"
								loading="lazy"
								alt="Видео о Carrot quest"
								class="mw-100 d-none d-md-block"
							/>
						</a>
						<span class="d-block d-md-none mt-2 lightgrey-text font14px">
							Посмотреть, как работает сервис. 97 секунд
						</span>
						<VideoModal />
					</b-col>
				</b-row>
			</b-container>
		</section>

		
		<section class="blue">
			<!-- Роли клиентов -->
			<b-container class="roles">
				<b-row>
					<b-col lg="6" xl="4">
						<div class="roles__box h-100">
							<ik-image
								path="/components/medium-18.png"
								:transformation="[{width:130,height:80,cropMode:'pad_resize'}]"
								:lqip="{active:true, quality: 40, blur: 10}"
								width="130"
								height="80"
								loading="lazy"
								alt="Маркетологам"
								class="mb-4"
							/>
							<div class="h4 mb-4">Маркетологам</div>
							<ul>
								<li>Поможем собрать больше лидов и передать в продажи только качественные</li>
								<li>Прогреем холодных лидов триггерными рассылками и доведем до покупки</li>
								<li>Увеличим количество лояльных клиентов и повторных продаж</li>
							</ul>
						</div>
					</b-col>
					<b-col lg="6" xl="4">
						<div class="roles__box h-100">
							<ik-image
								path="/components/medium-19.png"
								:transformation="[{width:130,height:80,cropMode:'pad_resize'}]"
								:lqip="{active:true, quality: 40, blur: 10}"
								width="130"
								height="80"
								loading="lazy"
								alt="Продакт-менеджерам"
								class="mb-4"
							/>
							<div class="h4 mb-4">Продакт-менеджерам</div>
							<ul>
								<li>Подскажем, как находить инсайты о продукте и пользователях</li>
								<li>Починим дыры в воронке без разработчиков и увеличим продажи внутри продукта</li>
							</ul>
						</div>
					</b-col>
					<b-col lg="6" xl="4">
						<div class="roles__box h-100">
							<ik-image
								path="/components/10.png"
								:transformation="[{width:154,height:80,cropMode:'pad_resize'}]"
								:lqip="{active:true, quality: 40, blur: 10}"
								width="154"
								height="80"
								loading="lazy"
								alt="Командам поддержки"
								class="mb-4"
							/>
							<div class="h4 mb-4">Командам поддержки</div>
							<ul>
								<li>Сократим время ответа на сложные вопросы пользователей</li>
								<li>Настроим автоматические готовые ответы на простые вопросы</li>
								<li>Соберем все запросы в одно окно, чтобы было удобно отвечать</li>
							</ul>
						</div>
					</b-col>
				</b-row>
				<b-row class="justify-content-center d-none d-xl-flex">
					<b-col class="text-center">
						<svg width="940" height="165" viewBox="0 0 940 165" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M491.5 76C491.5 56.3939 507.325 40.5 526.847 40.5H832.07H899.653C919.175 40.5 935 24.6061 935 5V0" stroke="white" stroke-width="10"/>
							<path d="M450.5 76C450.5 56.3939 434.675 40.5 415.153 40.5H93.9296H40.3467C20.8253 40.5 5 24.6061 5 5V0" stroke="white" stroke-width="10"/>
							<path d="M471 0L471 76" stroke="white" stroke-width="10"/>
							<path d="M480.889 153.741H452.125C450.951 153.741 449.854 154.328 449.216 155.298L444.698 161.984C441.763 166.323 435 164.256 435 159.049V118.469C435 113.595 438.956 109.639 443.831 109.639H471.65C472.186 109.613 472.67 109.333 472.977 108.873C473.334 108.363 473.538 107.801 473.615 107.163C473.793 105.734 473.691 105.121 473.104 103.82L472.798 103.258L472.134 102.033C471.726 101.268 471.343 100.476 470.96 99.6853C470.884 99.5322 470.833 99.3535 470.782 99.2004C470.169 97.3373 471.165 95.3466 473.028 94.734C473.334 94.632 473.64 94.5809 473.972 94.5554C476.218 94.4533 478.336 95.1169 480.225 96.3164L480.174 96.0101C479.919 94.0705 481.271 92.3095 483.186 92.0287C483.798 91.9521 484.411 92.0287 484.972 92.2584C486.784 92.9985 488.851 95.4231 489.643 97.1842C489.898 97.7712 490.102 98.2816 490.281 98.741C491.914 98.205 493.547 97.9753 495.206 98.0774C496.559 98.154 498.167 98.5113 499.213 99.0983C500.643 99.8895 501.332 101.574 500.872 103.131C502.25 103.488 503.527 104.228 504.496 105.275C505.747 106.755 505.568 108.975 504.088 110.251C503.96 110.379 503.807 110.481 503.654 110.583C504.369 111.323 504.93 112.191 505.288 113.135C506.002 114.947 505.134 116.989 503.322 117.729C502.633 118.01 501.842 118.061 501.127 117.857C500.592 117.704 499.775 117.449 498.984 117.193C495.13 115.917 492.884 115.509 491.557 115.968C491.455 116.019 491.327 116.045 491.174 116.147C491.097 116.198 490.74 116.479 490.791 116.402C490.715 116.53 489.668 117.602 489.668 118.648V144.91C489.694 149.785 485.738 153.741 480.889 153.741Z" fill="url(#paint0_linear)"/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M441.767 160.045C441.231 160.862 440.133 161.066 439.317 160.53C438.832 160.198 438.525 159.662 438.525 159.05V118.47C438.525 115.535 440.899 113.187 443.808 113.187H480.866C483.801 113.187 486.149 115.56 486.149 118.47V144.936C486.149 147.871 483.776 150.219 480.866 150.219H451.184C449.423 150.219 447.79 151.087 446.795 152.567L441.767 160.045Z" fill="#EF7F28"/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M480.885 111.4H475.883L476.546 109.767C476.725 109.256 477.006 108.363 477.082 107.776C477.44 105.938 477.159 104.024 476.317 102.34C476.061 101.778 474.122 98.3582 474.173 98.0775C477.082 97.9243 479.737 100.043 481.319 101.931L482.493 103.514C482.595 103.718 482.672 103.896 482.799 104.075C482.876 104.024 483.003 103.794 483.055 103.692L483.284 103.284C484.203 101.523 484.305 99.7109 484.075 97.7457C483.973 96.98 483.769 96.2399 483.667 95.5508C484.611 95.9336 486.066 97.8733 486.449 98.6645C487.266 100.323 487.7 102.135 487.725 103.973C489.92 102.467 492.472 101.472 494.999 101.625C495.739 101.676 496.964 101.88 497.5 102.212C495.764 102.646 490.099 105.581 489.231 107.265C489.461 107.189 489.665 107.061 489.894 106.934C490.124 106.832 490.328 106.755 490.584 106.678C493.365 105.836 496.326 105.709 499.184 106.347C500.078 106.551 501.379 107.036 501.839 107.572C500.078 107.725 495.994 108.49 493.799 110.047C497.934 110.941 501.099 112.115 502.043 114.463C501.507 114.309 500.665 114.054 500.103 113.876C497.27 112.931 493.314 111.681 490.43 112.651C489.358 113.008 488.414 113.697 487.776 114.616C487.546 114.82 487.393 115.177 487.291 115.586C486.168 113.033 483.642 111.4 480.885 111.4Z" fill="url(#paint1_linear)"/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M448.242 119.338H475.576C477.031 119.338 478.231 120.512 478.231 121.992C478.231 123.447 477.057 124.646 475.576 124.646H448.242C446.787 124.646 445.588 123.472 445.588 121.992C445.588 120.537 446.762 119.338 448.242 119.338Z" fill="#C75A15"/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M451.768 129.035H472.058C473.512 129.035 474.712 130.209 474.712 131.689C474.712 133.144 473.538 134.344 472.058 134.344H451.768C450.313 134.344 449.113 133.17 449.113 131.689C449.113 130.235 450.313 129.035 451.768 129.035Z" fill="#C75A15"/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M456.182 138.759H467.641C469.096 138.759 470.295 139.933 470.295 141.413C470.295 142.868 469.121 144.067 467.641 144.067H456.182C454.727 144.067 453.527 142.893 453.527 141.413C453.527 139.933 454.701 138.759 456.182 138.759Z" fill="#C75A15"/>
							<defs>
							<linearGradient id="paint0_linear" x1="495.861" y1="90.4875" x2="435.773" y2="160.814" gradientUnits="userSpaceOnUse">
							<stop stop-color="#4D6924"/>
							<stop offset="0.2228" stop-color="#4D6924"/>
							<stop offset="0.4394" stop-color="#C75A15"/>
							<stop offset="1" stop-color="#C75A15"/>
							</linearGradient>
							<linearGradient id="paint1_linear" x1="502.565" y1="95.8793" x2="483.581" y2="122.328" gradientUnits="userSpaceOnUse">
							<stop stop-color="#B1D400"/>
							<stop offset="1" stop-color="#98B91B"/>
							</linearGradient>
							</defs>
						</svg>
					</b-col>
				</b-row>
				<b-row class="justify-content-center">
					<b-col xl="8">
						<div class="h2 mt-5 text-lg-center">
							Мы упаковали инструменты для коммуникаций, лидогенерации, удержания и прогрева в один сервис. Больше не нужно вручную переносить данные или костылить интеграции. А еще так дешевле.
						</div>
					</b-col>
				</b-row>
			</b-container>

			<!-- Инструменты -->
			<b-container class="instruments">
				<b-row>
					<b-col md="6" xl="4" class="mb-5 h-100">
						<g-link to="/online-consultant/" class="d-block withbg first">
							<span class="instruments__title font24px">
								Онлайн-консультант
							</span>
							<ik-image
								path="/components/medium-21.png"
								:transformation="[{width:298,height:470}]"
								:lqip="{active:true, quality: 40, blur: 10}"
								width="298"
								height="470"
								loading="lazy"
								alt="Онлайн-консультант"
								class="mw-100"
							/>
							<span class="d-block instruments__about font14px">
								Соберет вопросы пользователей из разных чатов в одно окно. Бережно сохранит историю и бесшовно переключит диалоги между операторами. Запланирует встречу и проведет аудио — и видеозвонок.
							</span>
						</g-link>
					</b-col>
					<b-col md="6" xl="4" class="mb-5 h-100">
						<g-link to="/chatbot/" class="d-block font24px withbg second">
							<span class="instruments__title font24px">
								Чат-боты для сайта
							</span>
							<ik-image
								path="/components/medium-22.png"
								:transformation="[{width:330,height:340}]"
								:lqip="{active:true, quality: 40, blur: 10}"
								width="330"
								height="340"
								loading="lazy"
								alt="Чат-боты для сайта"
								class="mw-100"
							/>
							<span class="d-block instruments__about font14px">
								Соберет и квалифицирует лиды ночью и в выходные. Передаст в отдел продаж только целевых клиентов. Вежливо и компетентно ответит на вопросы пользователей и разгрузит поддержку.
							</span>
						</g-link>
					</b-col>
					<b-col md="6" xl="4" class="mb-5 h-100">
						<g-link to="/pop-up/" class="d-block font24px withbg third">
							<span class="instruments__title font24px">
								Поп-ап окна
							</span>
							<ik-image
								path="/components/medium-23.png"
								:transformation="[{width:300,height:370}]"
								:lqip="{active:true, quality: 40, blur: 10}"
								width="300"
								height="370"
								loading="lazy"
								alt="Поп-ап окна"
								class="mw-100"
							/>
							<span class="d-block instruments__about font14px">
								Соберут лидов, удержат уходящих пользователей, расскажут про акции и новое в продукте или интерфейсе. Проведут опрос и помогут с прохождением шагов регистрации.
							</span>
						</g-link>
					</b-col>
					<b-col md="6" xl="8" class="mb-5 h-100">
						<g-link to="/lead-manager/" class="d-block font24px">
							<span class="instruments__title font24px">
								Трекинг данных о пользователях
							</span>
							<!-- Для мобилки -->
							<ik-image
								path="/components/video-about.png"
								:transformation="[{width:374,height:185}]"
								:lqip="{active:true, quality: 40, blur: 10}"
								width="354"
								height="185"
								loading="lazy"
								alt="Трекинг данных о пользователях"
								class="mw-100 mt-4 d-md-none"
								style="border-radius: 5px;"
							/>
							<!-- Для десктопа -->
							<ik-image
								path="/components/video-about.png"
								:transformation="[{width:868,height:430}]"
								:lqip="{active:true, quality: 40, blur: 10}"
								width="868"
								height="430"
								loading="lazy"
								alt="Трекинг данных о пользователях"
								class="mw-100 mt-4 d-none d-md-block"
								style="border-radius: 5px;"
							/>
							<span class="d-block instruments__about font14px">
								Трекинг данных пользователей. Сбор данных пользователей. Мастер сбора данных. <br>
								Сохранит в одном месте всю информацию о лидах, их действиях и покупках. Поможет сегментировать базу по свойствам и событиям и запустить триггерные рассылки.
							</span>
						</g-link>
					</b-col>
					<b-col md="6" xl="4" class="mb-5 h-100">
						<g-link to="/email-marketing/" class="d-block font24px">
							<span class="instruments__title font24px">
								Триггерные email-кампании
							</span>
							<ik-image
								path="/components/medium-24.png"
								:transformation="[{width:354,height:430}]"
								:lqip="{active:true, quality: 40, blur: 10}"
								width="354"
								height="430"
								loading="lazy"
								alt="Триггерные email-кампании"
								class="mw-100 mt-4"
								style="border-radius: 5px;"
							/>
							<span class="d-block instruments__about font14px">
								Персонализированные цепочки писем проведут знакомство, расскажут об акциях и новинках, увеличат средний чек, доведут до продажи брошенные корзины и подогреют холодную аудиторию.
							</span>
						</g-link>
					</b-col>
					<b-col md="6" xl="4" class="mb-5 h-100">
						<g-link to="/knowledge-base/" class="d-block font24px">
							<span class="instruments__title font24px">
								База знаний<br> для вашего сайта
							</span>
							<ik-image
								path="/components/medium-25.png"
								:transformation="[{width:412,height:312}]"
								:lqip="{active:true, quality: 40, blur: 10}"
								width="412"
								height="312"
								loading="lazy"
								alt="База знаний для вашего сайта"
								class="mw-100 mt-4"
								style="border-radius: 5px;"
							/>
							<span class="d-block instruments__about font14px">
								Обучит пользователей, снимет нагрузку со службы поддержки, улучшит SEO сайта.
							</span>
						</g-link>
					</b-col>
					<b-col md="6" xl="4" class="mb-5 h-100">
						<g-link href="https://developers.carrotquest.io/" class="d-block font24px api">
							<span class="instruments__title font24px">
								API
							</span>
							<ik-image
								path="/components/medium-26.png"
								:transformation="[{width:412,height:312}]"
								:lqip="{active:true, quality: 40, blur: 10}"
								width="412"
								height="312"
								loading="lazy"
								alt="API"
								class="mw-100"
								style="border-radius: 5px;"
							/>
							<span class="d-block instruments__about font14px">
								Поможет интегрировать Carrot quest с чем угодно
							</span>
						</g-link>
					</b-col>
					<b-col md="6" xl="4" class="mb-5 h-100">
						<g-link to="/sdk/" class="d-block font24px">
							<span class="instruments__title font24px">
								Чат и push в мобильных приложениях
							</span>
							<ik-image
								path="/components/medium-27.png"
								:transformation="[{width:412,height:311}]"
								:lqip="{active:true, quality: 40, blur: 10}"
								width="412"
								height="311"
								loading="lazy"
								alt="Чат и push в мобильных приложениях"
								class="mw-100 mt-4"
								style="border-radius: 5px;"
							/>
							<span class="d-block instruments__about font14px">
								Встроятся в мобильное приложение и помогут пользователям задать вопрос, разобраться с интерфейсом, оповестят об акциях и статусе заказа.
							</span>
						</g-link>
					</b-col>
				</b-row>
			</b-container>
		</section>

		<Ready />

		<Consultation 
			title="Запишитесь на бесплатную консультацию" 
			text="Мы познакомимся, определим ваши задачи и предложим варианты их решения. За 30 минут обучим продукту и бесплатно настроим сценарий квалификации лидов на вашем сайте"
			button="Заказать консультацию"
			pic="medium-12.png"
			alt="Девочка, живущая в сети"
			bg="#fff3e6"
		/>

		<Integrations />

		<Cases />

		<b-container>
			<b-col class="px-lg-5 py-4" style="background-color: #FFEAD7; border-radius: 5px;">
				<b-row class="align-items-center justify-content-center">
					<b-col lg="8">
						<div class="h2 mb-4">Регистрируйтесь и пользуйтесь полной версией 14 дней бесплатно</div>
						<RegistrationForm />
					</b-col>
					<b-col lg="4" class="d-none d-lg-block">
						<!-- <g-image src="@/assets/images/components/10.png" width="494" alt="Регистрация в сервисе" title="Поехали!"  style="max-width: 100%" /> -->
						<ik-image
							path="/components/medium-9.png"
							:transformation="[{width:308}]"
							:lqip="{active:true, quality: 40, blur: 10}"
							width="308"
							height="222"
							loading="lazy"
							class="mw-100"
							alt="Регистрация в сервисе" title="Поехали!" 
						/>
					</b-col>
				</b-row>
			</b-col>
		</b-container>

		<Study />

	</Layout>
</template>

<script>
	import VideoModal 			from '~/components/Modals/VideoModal.vue'
	import Ready 				from '~/components/Ready.vue'
	import Consultation 		from '~/components/Consultation.vue'
	import Integrations 		from '~/components/Integrations.vue'
	import Cases 				from '~/components/Cases/Cases.vue'
	import RegistrationForm 	from '~/components/Forms/RegistrationForm.vue'
	import Study 				from '~/components/Study.vue'
	

	export default { 
		components: {
			VideoModal,
			Ready,
			Consultation,
			Integrations,
			Cases,
			RegistrationForm,
			Study
		},
		data() {
			return {
				//Делаем в HEAD
				metaTitle: 'Увеличение продаж на сайте на текущем трафике',
				metaDescription: 'Carrot quest — сервис для увеличения продаж на том же трафике, удержания клиентов и превращения спящих в платящих',
				metaCanonical: 'https://www.carrotquest.io/',
				metaImage: 'https://www.carrotquest.io/assets/images/cover/index.jpeg',

				visible: false
			};
		},
		methods: {
			formatToPrice(value) {
				return `${value.toLocaleString('ru', {maximumFractionDigits: 0})}`;
			},
			callback(visible) {
				if (visible) {
					this.visible = true
				}
			}
		}
	}	
</script>


<style lang="scss">
	.page-index {
		.container {
			max-width: 1360px;
		}
		.hero {
			h1 span {
				color: #929298;
			}
			.Registration {
				color: $light-grey;
				.TakeMe__group {
					border: 2px solid $primary;
				}
			}
			
			@media (min-width: 768px) {
				form {
					margin-bottom: 2.5rem !important;
				}
				.TakeMe__group {
					border-radius: 5px 0px 0px 5px;
					margin-right: 0 !important;
				}
				.btn {
					border-radius: 0px 5px 5px 0px;
				}
			}
		}

		.video-about {
			margin-top: -10rem;
			&>.container {
				margin-bottom: 0;
			}
			.cofeboy {
				position: absolute;
				top: -12.5rem;
				right: 1.5rem;
				z-index: 1;
			}
			a {
				position: relative;
				top: 0;
				display: block;
				&::before {
					content: " ";
					display: block;
					position: absolute;
					z-index: 1;
					top: 0; bottom: 0; left: 0; right: 0;
					background-color: rgba(0, 0, 0, 0.05);
					border-radius: 5px;
					transition: background-color 150ms cubic-bezier(0, 0, 0.2, 1);
				}
				&:hover {
					&::before {
						background-color: rgba(0, 0, 0, 0.10);
					}
					.btn {
						margin-top: -63px;
						box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.15);
					}
				}
				img {
					height: auto;
				}
				.btn {
					position: absolute;
					top: 50%;
					left: 50%;
					z-index: 2;
					margin: -55px 0 0 -348px;
					padding: 2.375rem 4rem;
					color: #000;
					background-color: #FFF;
					border: none;
					border-radius: 4rem;
					box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
					transition: margin 150ms cubic-bezier(0, 0, 0.2, 1);
					&::before {
						content: " ";
						display: inline-block;
						width: 30px;
						height: 34px;
						margin-right: 1.5rem;
						background-image: url("data:image/svg+xml,%3Csvg width='30' height='34' viewBox='0 0 30 34' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M28.5004 14.4054C30.5003 15.5601 30.5003 18.4467 28.5004 19.6014L4.50008 33.4589C2.50008 34.6137 2.14641e-06 33.1704 2.24736e-06 30.8609L3.45874e-06 3.14591C3.55968e-06 0.83647 2.50008 -0.606896 4.50008 0.547882L28.5004 14.4054Z' fill='%23FF7C16'/%3E%3C/svg%3E%0A");
						background-size: contain;
					}
					
				}
			}
			@media (max-width: 991.98px) {
				a {
					&:hover {
						.btn {
							margin-top: -30px;
							box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.15);
						}
					}
					.cofeboy {
						width: 120px;
						top: -6rem;
						right: 0.5rem;
					}
					.btn {
						font-size: 0.875rem;
						line-height: 1.4rem;
						margin: -27px 0 0 -190px;
						padding: 1rem 1.75rem;
						&::before {
							width: 13px;
							height: 15px;
							margin-right: 0.75rem;
						}
					}
				}
			}
			@media (max-width: 575.98px) {
				margin-top: -5rem;
				a {
					.btn {
						margin: -30px 0 0 -31px;
						padding: 1rem 1rem 1rem 1.3rem;
						&::before {
							width: 21px;
							height: 24px;
							margin-right: 0;
						}
					}
				}

			}
		}

		.blue {
			margin-top: -14rem;
			margin-bottom: 7rem;
			padding-top: 25rem;
			padding-bottom: 1px;
			background-color: #F3F3FF;

			.roles {
				margin-bottom: 5rem;
				&__box {
					border-radius: 5px;
					background: #fff;
					padding: 2rem;
					img {
						margin-top: -4.5rem;
					}
				}
				ul {
					padding: 0;
					margin-bottom: 0;
					li {
						margin: 0;
						margin-bottom: 1rem;
						padding-left: 1.5rem !important;
						position: relative;
						list-style: none;
					}
					li::before {
						content: url("data:image/svg+xml,%3Csvg width='16' height='2' viewBox='0 0 16 2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.640625 1.30469V0.117188H15.3594V1.30469H0.640625Z' fill='%23FF7C16'/%3E%3C/svg%3E%0A") !important;
						top: -4px !important;
						left: 0;
						position: absolute;
					}
				}
			}

			.instruments {
				margin-bottom: 5rem;
				a {
					position: relative;
					.instruments__title {
						color: #000;
						border-bottom: 1px solid $primary;
					}
					img {
						display: block;
						position: relative;
						z-index: 2;
						height: auto;
						margin: auto;
					}
					.instruments__about {
						position: absolute;
						z-index: 2;
						width: 100%;
						bottom: 0;
						opacity: 0;
						padding: 1.25rem;
						background-color: rgba(0, 0, 0, 0.7);
						color: #fff;
						transition: opacity 150ms cubic-bezier(0, 0, 0.2, 1);
						&::after {
							content: "Подробнее";
							display: block;
							margin-top: 0.5rem;
							color: $primary;
						}
					}
					&:hover {
						.instruments__title {
							border-bottom: 1px solid $blue;
						}
						.instruments__about {
							opacity: 1;
						}
					}
					&.withbg {
						overflow: hidden;
						padding-bottom: 2rem;
						img {
							width: 200px;
						}
						&::before {
							content: " ";
							display: block;
							position: absolute;
							z-index: 1;
							top: 4rem;
							bottom: 0;
							left: 0;
							right: 0;
						}
					}
					&.first {
						img {
							margin: 3.5rem auto 0;
						}
						&::before {
							background: 
								linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), 
								linear-gradient(320.63deg, #FFFFFF 3.76%, rgba(255, 255, 255, 0) 89.73%);
							border-radius: 0px 0px 50px 0px;
						}
					}
					&.second {
						img {
							margin: 10.25rem auto 0;
						}
						&::before {
							background: 
								linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), 
								linear-gradient(320.63deg, #FFFFFF 3.76%, rgba(255, 255, 255, 0) 89.73%);
							border-radius: 0px 0px 50px 0px;
						}
					}
					&.third {
						img {
							margin: 3.5rem auto 0;
						}
						&::before {
							background: 
								linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), 
								linear-gradient(218.04deg, #FFFFFF 17.83%, rgba(255, 255, 255, 0) 72.44%);
							border-radius: 0px 50px 0px 0px;
						}
					}
					&.api {
						img {
							margin-top: 1.5rem;
						}
					}
				}
				@media (max-width: 575.98px) {
					a.api img {
						margin-top: 0;
					}
				}
				@media (min-width: 1200px) {
					a {
						&.withbg {
							height: 36.25rem;
						}
						&.first {
							img {
								width: 298px;
								float: right;
								margin-top: 3.5rem;
								margin-right: 1.5rem;
							}
						}
						&.second {
							img {
								width: 330px;
								float: right;
								margin-top: 11rem;
								margin-right: 1.5rem;
							}
						}
						&.third {
							img {
								width: 300px;
								float: right;
								margin-top: 3.5rem;
								margin-right: 1.5rem;
							}
						}
						&.api {
							img {
								margin-top: 3.5rem;
							}
						}
					}
				}
			}

			@media (max-width: 1199.98px) {
				.roles {
					.col-lg-6 {
						margin-bottom: 4.5rem;
						&:last-child {
							margin-bottom: 0;
						}
					}
				}
			}
			@media (max-width: 767.98px) {
				margin-bottom: 5rem;
			}
			@media (max-width: 575.98px) {
				margin-top: -5rem;
				padding-top: 12rem;
			}
		}
	}
	
</style>
