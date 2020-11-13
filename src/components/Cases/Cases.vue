<template>

	<!-- Кейсы -->
	<b-container class="Cases">
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
					<b-tab title="Онлайн-сервисы" active>
						<b-row class="mt-4 mt-lg-4">
							<b-col cols="12" lg="6">
								<a href="/blog/kak-organizovana-sluzhba-podderzhki-v-modulbank-i-pochemu-oni-ne-boyatsya-davat-obeshhaniya-o-skorosti-otveta/" class="box">
									<b-row class="mb-3">
										<div class="col-12 col-lg-6 number">
											200-250
										</div>
										<div class="col-6 logo">
											<g-image src="~/assets/images/logos/modulbank.svg" alt="Модульбанк" width="170" />
										</div>
									</b-row>								
									<div class="title">
										обращений в&nbsp;чат обрабатывают ежедневно
									</div>
									<div class="description">
										<p>
											Carrot quest помогает Модульбанку организовать поддержку и&nbsp;продажи через чат. 
											Благодаря распределению диалогов и&nbsp;объединению каналов в&nbsp;одном месте команда 
											Модульбанка снизила скорость первого ответа до&nbsp;10&nbsp;минут.
										</p>
									</div>
									<div class="link">
										Подробнее
									</div>
								</a>
							</b-col>
							<b-col cols="12" lg="6">
								<a href="/blog/kak-organizovana-sluzhba-podderzhki-v-modulbank-i-pochemu-oni-ne-boyatsya-davat-obeshhaniya-o-skorosti-otveta/" class="box">
									<b-row class="mb-3">
										<div class="col-12 col-lg-6 number">
											200-250
										</div>
										<div class="col-6 logo">
											<g-image src="~/assets/images/logos/modulbank.svg" alt="Модульбанк" width="170" />
										</div>
									</b-row>								
									<div class="title">
										обращений в&nbsp;чат обрабатывают ежедневно
									</div>
									<div class="description">
										<p>
											Carrot quest помогает Модульбанку организовать поддержку и&nbsp;продажи через чат. 
											Благодаря распределению диалогов и&nbsp;объединению каналов в&nbsp;одном месте команда 
											Модульбанка снизила скорость первого ответа до&nbsp;10&nbsp;минут.
										</p>
									</div>
									<div class="link">
										Подробнее
									</div>
								</a>
							</b-col>
						</b-row>
					</b-tab>
					<b-tab title="eCommerce">
						Tab contents 1
					</b-tab>
					<b-tab title="Недвижимость и строительство">
						Tab contents 1
					</b-tab>
					<b-tab title="Услуги и консалтинг">
						Tab contents 1
					</b-tab>
				</b-tabs>
			</b-col>
		</b-row>
	</b-container>

</template>

<script>
	export default {

	}
</script>

<style lang="scss">
	.Cases {
		.box {
			color: #000;
			padding: 1rem;
			border-radius: 5px;
		}
	}
	
</style>