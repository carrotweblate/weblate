<template>
	<ClientOnly>

		<!-- Кейсы -->
		<b-container class="Cases outline-tabs">
			<b-row >
				<b-col col-12 lg="9">
					<div class="h2">
						<g-link to="/cases/">Более 60 кейсов</g-link> в разных сферах бизнеса
					</div>
				</b-col>
			</b-row>
			<b-row>
				<b-col>
					<b-tabs pills class="mt-3 mt-lg-4">
						<b-tab title="Онлайн-сервисы" active lazy>
							<b-row class="mt-4 mt-lg-5">
								<Case 
									number="29,45%" 
									logo='instaplus.svg'
									title="зарегистрировались из приветственного письма"
									text="
										<p>
											Carrot quest помогает маркетологам сервиса Instaplus привлечь пользователей, активировать в регистрацию и оплату. Благодаря сценариям Carrot quest конверсия в оплату увеличилась на 25,3%.
										</p>
									" 
									href="/blog/case-instaplus/" 
								/>
								<Case 
									number="19,3%" 
									logo="mofy.svg"
									title="всех заказов принес Carrot quest"
									text='
										<p>
											Маркетологи сервиса Mofy.life собирают контакты пользователей и мотивируют сделать заказ с помощью персонализированных поп-апов и писем со скидками и полезными материалами.
										</p>
									'
									href="/blog/case-mofylife/" 
								/>
							</b-row>
						</b-tab>
						<b-tab title="eCommerce" lazy>
							<b-row class="mt-4 mt-lg-5">
								<Case 
									number="31,3%" 
									logo='skyshop.svg'
									title="сделали заказ из рассылки с акциями SkyShop"
									text="
										<p>
											Carrot quest помогает SkyShop найти слабые стороны и пересмотреть способы работы с пользователями. 
											После настройки ручной рассылки с акциями 31,3% пользователя сделали заказ. Еще 20 564 пользовался оставили email в поп-апах.
										</p>
									" 
									href="/blog/case_skyshop/" 
								/>
								<Case 
									number="40%" 
									logo="Boxmarket.jpg"
									title="всех заказов получают благодаря сценариям Carrot quest"
									text='
										<p>
											В оптовом интернет-магазине одежды BoxMarket с помощью Carrot quest собирают лиды и работают с брошенными корзинами. Из тех, кто прочитал письмо о брошенной корзине, 24% сделали заказ.
										</p>
									'
									href="/blog/broshennaya-korzina-v-b2b-kejs/" 
								/>
							</b-row>
						</b-tab>
						<b-tab title="Недвижимость и строительство" lazy>
							<b-row class="mt-4 mt-lg-5">
								<Case 
									number="4%" 
									logo='pzsp.png'
									title="конверсия в заявку из ручной рассылки"
									text="
										<p>
											Carrot quest помогает ПЗСП собрать лидов с помощью цепочек автосообщений, а потом с этим лидами работают с помощью персонализированных рассылок.
										</p>
									" 
									href="/blog/cepochki-soobshhenij-v-17-raz-effektivnee/" 
								/>
								<Case 
									number="78%" 
									logo='SPK.png'
									title="конверсия в лида"
									text="
										<p>
											«СтройПанельКомплект» (СПК)
										</p>
										<p>
											Carrot quest помогает автоматизировать маркетинг. Настроены сценарий с поп-апами: при попытке ухода с сайта, для сбора телефонов, после заявки на сайте, в ночное время.
										</p>
									" 
									href="/blog/kejs-avtomatizacii-uvelichivaem-konversiyu-v-lida-v-sfere-nedvizhimosti-na-78/" 
								/>
							</b-row>
						</b-tab>
						<b-tab title="Услуги и консалтинг" lazy>
							<b-row class="mt-4 mt-lg-5">
								<Case 
									number="на 25%" 
									logo='teatr-teatr.svg'
									title="увеличили конверсию в покупку"
									text="
										<p>
											Carrot quest помогает Театру-Театру квалифицировать и собирать лидов. 1676 пользователей оставили данные о своих предпочтениях. 3809 клиентов совершили повторные покупки.
										</p>
									" 
									href="/blog/case-teatr/" 
								/>
								<Case 
									number="7,3%" 
									logo='astykzhan.png'
									title="сделали заказ из приветственного письма"
									text="
										<p>
											Carrot quest помогает сервису доставки еды «Астыкжан Экспресс» увеличить конверсию в заказ с помощью сбора лидов и работы с брошенными заказами. Конверсия в заказ увеличилась до 9,37%.
										</p>
									" 
									href="/blog/case-astykzhan/" 
								/>
							</b-row>
						</b-tab>
						<template #tabs-end>
							<a href="/cases/" class="nav-item-all d-none d-xl-block">Посмотрите все кейсы</a>
						</template>
					</b-tabs>
					<a href="/cases/" class="d-xl-none">
						Посмотрите все кейсы
					</a>
				</b-col>
			</b-row>
		</b-container>
		
	</ClientOnly>
</template>

<script>
	import Case from '~/components/Cases/Case.vue'
	import { BTabs , BTab } from 'bootstrap-vue'

	export default {
		components: {
			Case,
			BTabs,
			BTab
		}
	}
</script>

<style lang="scss">
	.Cases {
		.box {
			color: #000;
			padding: 1rem 1rem 3.5rem;
			border-radius: 5px;
			height: 100%;
			.number {
				color: #FF7C16;
			}
			.logo {
				text-align: right;
				img {
					max-width: 100%;
					max-height: 50px;
				}
			}
			.link {
				position: absolute;
				bottom: 1.5rem;
				color: #FF7C16;
			}
		}
		.h2 {
			a {
				color: #000;
			}
		}
	}
	
</style>