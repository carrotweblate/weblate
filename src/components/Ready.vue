<template>
	<ClientOnly>
		<!-- Готовые решения -->
		<section class="ready">
			<b-container>
				<b-row>
					<b-col lg="9" xl="7">
						<div class="h1 mb-4">
							Внедрим проверенные решения для каждого типа бизнеса
						</div>
					</b-col>
				</b-row>
				<b-row>
					<b-col lg="4">
						<div class="box h-100">
							<a href="/ecommerce/" class="d-flex align-items-center mb-4">
								<!-- <g-image src="@/assets/images/components/small-15.png" fit="contain" background="transparent" height="222" alt="Для интернет магазинов" class="mb-4" /> -->
								<ik-image
									path="/components/small-15.png"
									:transformation="[{width:78,height:68,cropMode:'pad_resize'}]"
									:lqip="{active:true, quality: 40, blur: 10}"
									width="78"
									height="68"
									loading="lazy"
									alt="Для интернет магазинов"
									class="mr-3"
								/>
								<div class="h5 mb-0">Интернет-магазинам</div>
							</a>
							<ul>
								<li>Увеличим количество лидов на том же трафике</li>
								<li>Снизим количество брошенных корзин</li>
								<li>Вернем уходящих пользователей</li>
								<li>Увеличим повторные продажи</li>
							</ul>
							<b-container class="ready__logos">
								<b-row class="align-items-center">
									<b-col cols="6" md="4" lg="6">
										<div class="ready__logos__box">
											<img src="/assets/images/logos/maria.svg" alt="maria" width="138" height="32" />
										</div>
									</b-col>
									<b-col cols="6" md="4" lg="6">
										<div class="ready__logos__box">
											<img src="/assets/images/logos/westfalika.svg" alt="westfalika" width="138" height="28" />
										</div>
									</b-col>
									<b-col cols="6" md="4" lg="6">
										<div class="ready__logos__box">
											<img src="/assets/images/logos/loreal.svg" alt="loreal" width="138" height="25" />
										</div>
									</b-col>
								</b-row>
							</b-container>
							<b-button href="/ecommerce/" variant="primary">Подробнее</b-button>
						</div>
					</b-col>
					<b-col lg="4">
						<div class="box h-100">
							<a href="/saas/" class="d-flex align-items-center mb-4">
								<!-- <g-image src="@/assets/images/components/small-24.png" fit="contain" background="transparent" height="222" alt="Для интернет сервисов (SaaS)" class="mb-4" /> -->
								<ik-image
									path="/components/small-24.png"
									:transformation="[{width:78,height:68,cropMode:'pad_resize'}]"
									:lqip="{active:true, quality: 40, blur: 10}"
									width="78"
									height="68"
									loading="lazy"
									alt="Для интернет сервисов (SaaS)"
									class="mr-3"
								/>
								<div class="h5 mb-0">Интернет-сервисам (SaaS)</div>
							</a>
							<ul>
								<li>Увеличение количества лидов на том же трафике сайта</li>
								<li>Снизим нагрузку на службу поддержки</li>
								<li>Улучшим C1 и retention</li>
								<li>Настроим аналитику пользовательского поведения и исследуем использование фичей</li>
							</ul>
							<b-container class="ready__logos">
								<b-row class="align-items-center">
									<b-col cols="6" md="4" lg="6">
										<div class="ready__logos__box">
											<img src="/assets/images/logos/geekbrains.svg" alt="geekbrains" width="138" height="24" />
										</div>
									</b-col>
									<b-col cols="6" md="4" lg="6">
										<div class="ready__logos__box">
											<img src="/assets/images/logos/kontur.svg" alt="kontur" width="138" height="32" />
										</div>
									</b-col>
									<b-col cols="6" md="4" lg="6">
										<div class="ready__logos__box">
											<img src="/assets/images/logos/timepad.svg" alt="timepad" width="138" height="16" />
										</div>
									</b-col>
								</b-row>
							</b-container>
							<b-button href="/saas/" variant="primary">Подробнее</b-button>
						</div>
					</b-col>
					<b-col lg="4">
						<div class="box h-100">
							<a href="/introduction-carrotquest/" class="d-flex align-items-center mb-4">
								<!-- <g-image src="@/assets/images/components/small-25.png" fit="contain" background="transparent" height="222" alt="Для крупных компаний" class="mb-4" /> -->
								<ik-image
									path="/components/small-25.png"
									:transformation="[{width:78,height:68,cropMode:'pad_resize'}]"
									:lqip="{active:true, quality: 40, blur: 10}"
									width="78"
									height="68"
									loading="lazy"
									alt="Крупным компаниям"
									class="mr-3"
								/>
								<div class="h5 mb-0">Крупным компаниям</div>
							</a>
							<ul>
								<li>Проведем аудит лидогенерации и подскажем точки роста</li>
								<li>Поделимся экспертизой и кейсами из вашей отрасли</li>
								<li>Автоматизируем маркетинговую рутину</li>
								<li>Настроим процесс тестирования гипотез и научим растить нужные метрики</li>
							</ul>
							<b-container class="ready__logos">
								<b-row class="align-items-center">
									<b-col cols="6" md="4" lg="6">
										<div class="ready__logos__box">
											<img src="/assets/images/logos/samolet.svg" alt="samolet" width="116" height="18" />
										</div>
									</b-col>
									<b-col cols="6" md="4" lg="6">
										<div class="ready__logos__box py-2">
											<img src="/assets/images/logos/domru.svg" alt="domru" width="40" height="40" style="max-height: 2.5rem" />
										</div>
									</b-col>
									<b-col cols="6" md="4" lg="6">
										<div class="ready__logos__box">
											<img src="/assets/images/logos/bank-spb.svg" alt="bank-spb" width="145" height="28" />
										</div>
									</b-col>
								</b-row>
							</b-container>
							<b-button href="/introduction-carrotquest/" variant="primary">Подробнее</b-button>
						</div>
					</b-col>
				</b-row>
			</b-container>
		</section>
	</ClientOnly>
</template>

<style lang="scss">
	.ready {
		.box {
			background: #FFFFFF;
			box-shadow: 0 5px 10px rgba(0,0,0,.1);
			border-radius: 5px;
			padding: 1.5rem 1.25rem;
		}
		a {
			color: #000;
		}
		ul {
			padding: 0;
			margin-bottom: 2rem;
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
		&__logos {
			margin-bottom: 4rem !important;
			.row {
				margin: 0 -30px;
				.col-6 {
					padding-right: 0.625rem;
    				padding-left: 0.625rem;
					height: 100%;
				}
			}
			&__box {
				text-align: center;
				height: 100%;
				background-color: $blue;
				border-radius: 5px;
				padding: 1rem;
				margin-bottom: 1.25rem;
				img {
					max-width: 100%;
					max-height: 1.7rem;
					transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
					filter: grayscale(100%);
					&:hover {
						filter: grayscale(0);
					}
				}
			}
		}
		.btn {
			position: absolute;
			bottom: 1.5rem;
		}
		@media (max-width: 991.98px) {
			.col-lg-4 {
				margin-bottom: 5rem;
				&:last-child {
					margin-bottom: 0;
				}
			}
		}
	}
</style>