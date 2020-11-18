<template>

	<!-- Кейсы -->
	<b-container class="Cases outline-tabs">
		<b-row >
			<b-col col-12 lg="9">
				<div class="h2">
					<a href="/cases/">Более 60 кейсов</a> в разных сферах бизнеса
				</div>
			</b-col>
		</b-row>
		<b-row>
			<b-col>
				<b-tabs pills class="mt-3 mt-lg-4">
					<b-tab title="Онлайн-сервисы" active lazy>
						<b-row class="mt-4 mt-lg-5">
							<Case 
								number="200-250" 
								logo='modulbank.svg'
								title="обращений в чат обрабатывают ежедневно"
								text="
									<p>
										Carrot quest помогает Модульбанку организовать поддержку и&nbsp;продажи через чат. 
										Благодаря распределению диалогов и&nbsp;объединению каналов в&nbsp;одном месте команда 
										Модульбанка снизила скорость первого ответа до&nbsp;10&nbsp;минут.
									</p>
								" 
								href="/blog/kak-organizovana-sluzhba-podderzhki-v-modulbank-i-pochemu-oni-ne-boyatsya-davat-obeshhaniya-o-skorosti-otveta/" 
							/>
							<Case 
								number="На 30%" 
								logo="domru.svg"
								title="увеличилась конверсия сайта"
								text='
									<p>
										Carrot&nbsp;quest помогает <a href="https://domru.ru">Дом.ru</a> собирать лиды и&nbsp;увеличивать продажи с&nbsp;помощью 
										триггерных поп-апов, писем и&nbsp;пуш-уведомлений. В&nbsp;ходе работы внедрили больше 49&nbsp;сценариев, 
										а&nbsp;количество заявок увеличилось на&nbsp;30%.
									</p>
								'
								href="/blog/kejs-kak-dom-ru-uvelichil-konversiyu-sajta-na-30-s-pomoshhyu-carrot-quest/" 
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
										После настройки ручной рассылки с акциями 31,3% пользователя сделали заказ. Еще 20564 пользовался оставили email в поп-апах.
									</p>
								" 
								href="/blog/case_skyshop/" 
							/>
							<Case 
								number="На 28%" 
								logo="vlastah.png"
								title="выросли продажи"
								text='
									<p>
										Carrot quest помогает «В ластах» возвращать клиента к просмотру товаров, увеличивает время нахождения на сайте и повышает продажи.
									</p>
								'
								href="/blog/kejs-nastraivaem-lidogeneraciyu-v-internet-magazine-i-podnimaem-prodazhi-na-28/" 
							/>
						</b-row>
					</b-tab>
					<b-tab title="Недвижимость и строительство" lazy>
						<b-row class="mt-4 mt-lg-5">
							<Case 
								number="На 40%" 
								logo='nagorniy.svg'
								title="выросла конверсия сайта"
								text="
									<p>
										Carrot quest помогает сайту жилого квартала бизнес-класса «Нагорный» увеличивать конверсию на сайте за счет поп-апов. Конверсия сайта выросла с 0.85% до 1,2%.
									</p>
								" 
								href="/blog/case-nagorniy/" 
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
								number="78%" 
								logo='introvert.png'
								title="конверсия в лида"
								text="
									<p>
										Carrot quest помогает собирать с помощью сценариев Лидов. Около половины Лидов на сайте собрано с помощью Carrot quest.
									</p>
								" 
								href="/blog/case-nagorniy/" 
							/>
						</b-row>
					</b-tab>
				</b-tabs>
			</b-col>
		</b-row>
	</b-container>

</template>

<script>
	import Case from '~/components/Cases/Case.vue'

	export default {
		components: {
			Case
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
				color: #FF6600;
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
				color: #FF6600;
			}
		}
	}
	
</style>