<template>
	<ClientOnly>
		<!-- Готовые решения -->
		<section class="ready">
			<b-container>
				<b-row>
					<b-col lg="9" xl="7">
						<div class="h1">Готовые решения для разных типов бизнеса</div>
					</b-col>
				</b-row>
				<b-row>
					<b-col lg="4">
						<div class="box h-100">
							<g-image src="@/assets/images/components/small-15.png" fit="contain" background="transparent" height="222" alt="Для интернет магазинов" class="mb-4" />
							<div class="h5 mb-3">Для интернет-магазинов</div>
							<ul>
								<li>Увеличение количества лидов на&nbsp;том&nbsp;же трафике</li>
								<li>Борьба с&nbsp;брошенными корзинами</li>
								<li>Возвращение уходящих пользователей</li>
								<li>Увеличение повторных продаж</li>
							</ul>
							<b-button href="/ecommerce/" variant="primary">Подробнее</b-button>
						</div>
					</b-col>
					<b-col lg="4">
						<div class="box h-100">
							<g-image src="@/assets/images/components/small-24.png" fit="contain" background="transparent" height="222" alt="Для интернет сервисов (SaaS)" class="mb-4" />
							<div class="h5 mb-3">Для онлайн-сервисов (SaaS)</div>
							<ul>
								<li>Увеличение количества лидов на&nbsp;том&nbsp;же трафике сайта</li>
								<li>Организация поддержки пользователей</li>
								<li>Вовлечение и&nbsp;удержание пользователей в&nbsp;продукте</li>
								<li>Аналитика поведения пользователей в&nbsp;продукте и&nbsp;использования фичей</li>
							</ul>
							<b-button href="/saas/" variant="primary">Подробнее</b-button>
						</div>
					</b-col>
					<b-col lg="4">
						<div class="box h-100">
							<g-image src="@/assets/images/components/small-25.png" fit="contain" background="transparent" height="222" alt="Для крупных компаний" class="mb-4" />
							<div class="h5 mb-3">Для крупных компаний</div>
							<ul>
								<li>Весь сервис без ограничений</li>
								<li>Подключим нашего эксперта</li>
								<li>Поделимся экспертизой по&nbsp;автоматизации маркетинга и&nbsp;построению процесса тестирования гипотез</li>
								<li>Запустим гипотезы на&nbsp;увеличение конверсии на&nbsp;вашем сайте (на&nbsp;сбор лидов, на&nbsp;удержание клиентов, на&nbsp;возвращение клиентов)</li>
							</ul>
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
		img {
			display: block;
			margin: -5rem auto 0;
			width: auto;
			height: 111px;
		}
		.h1 {
			margin-bottom: 5rem;
		}
		ul {
			padding: 0;
			margin-bottom: 3.5rem;
			li {
				margin: 0;
				margin-bottom: 8px;
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
		.btn {
			position: absolute;
			bottom: 20px;
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