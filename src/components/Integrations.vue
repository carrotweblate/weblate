<template>
	<ClientOnly>
		<!-- Интеграции -->
		<b-container class="Integrations outline-tabs">
			<b-row >
				<b-col col-12 lg="9">
					<div class="h2 mb-4">
						Безболезненно <g-link to="/integration/">интегрируемся</g-link> с вашими<br> 
						самыми любимыми и полезными сервисами
					</div>
					<p>
						Более 30 готовых интеграций. Открытый API для web, iOS и Android
					</p>
				</b-col>
			</b-row>
			<b-row>
				<b-col>
					<b-tabs pills class="mt-3 mt-lg-4 mb-3">
						<b-tab title="Коммуникации" active lazy>
							<b-row class="mt-4">
								<b-col class="d-flex flex-wrap">
									<a href="https://help.carrotquest.io/article/171" class="Integrations__logo email" alt="email"></a>
									<g-link to="/integration/facebook/" class="Integrations__logo facebook" alt="facebook"></g-link>
									<g-link to="/integration/yandex_dialogs/" class="Integrations__logo yandex_dialogs" alt="yandex_dialogs"></g-link>
									<g-link to="/integration/vk/" class="Integrations__logo vk" alt="vk"></g-link>
									<g-link to="/integration/telegram/" class="Integrations__logo telegram" alt="telegram"></g-link>
									<g-link to="/integration/viber/" class="Integrations__logo viber" alt="viber"></g-link>
									<g-link to="/integration/slack/" class="Integrations__logo slack_chat" alt="slack_chat"></g-link>
									<g-link href="https://help.carrotquest.io/article/158/" class="Integrations__logo zendesk" alt="zendesk"></g-link>
									<g-link href="https://help.carrotquest.io/article/166/" class="Integrations__logo omnidesk" alt="omnidesk"></g-link>
									<g-link href="https://help.carrotquest.io/article/163/" class="Integrations__logo usedesk" alt="usedesk"></g-link>
									<g-link href="https://help.carrotquest.io/article/1129/" class="Integrations__logo calendly" alt="calendly"></g-link>
								</b-col>
							</b-row>
						</b-tab>
						<b-tab title="CMS и CRM" lazy>
							<b-row class="mt-4">
								<b-col class="d-flex flex-wrap">
									<g-link to="/integration/1c-bitrix/" class="Integrations__logo bitrix1c" alt="1c-bitrix"></g-link>
									<g-link to="/integration/insales/" class="Integrations__logo insales" alt="insales"></g-link>
									<g-link to="/integration/opencart/" class="Integrations__logo opencart" alt="opencart"></g-link>
									<g-link to="/integration/prestashop/" class="Integrations__logo prestashop" alt="prestashop"></g-link>
									<g-link to="/integration/wordpress/" class="Integrations__logo wordpress" alt="wordpress"></g-link>
									<g-link to="/integration/amocrm/" class="Integrations__logo amocrm" alt="amocrm"></g-link>
									<g-link to="/integration/bitrix24/" class="Integrations__logo bitrix24" alt="bitrix24"></g-link>
									<g-link to="/integration/retailcrm/" class="Integrations__logo retailcrm" alt="retailcrm"></g-link>
								</b-col>
							</b-row>
						</b-tab>
						<b-tab title="Лиды из лидформ" lazy>
							<b-row class="mt-4">
								<b-col class="d-flex flex-wrap">
									<a class="Integrations__logo facebook_leads" alt="facebook_leads"></a>
									<a class="Integrations__logo mytarget" alt="mytarget"></a>
									<a href="https://help.carrotquest.io/article/141/" class="Integrations__logo sendsay" alt="sendsay"></a>
									<a class="Integrations__logo vk_forms" alt="vk_forms"></a>
								</b-col>
							</b-row>
						</b-tab>
						<b-tab title="Своими руками" lazy>
							<b-row class="mt-4">
								<b-col class="d-flex flex-wrap">
									<g-link href="https://developers.carrotquest.io/" class="Integrations__logo api" alt="api"></g-link>
									<a class="Integrations__logo dialogflow" alt="dialogflow"></a>
									<a class="Integrations__logo lambdascript" alt="lambdascript"></a>
									<a class="Integrations__logo jsscript" alt="jsscript"></a>
									<a class="Integrations__logo webhook" alt="webhook"></a>
									<a href="https://help.carrotquest.io/article/361/" class="Integrations__logo zapier" alt="zapier"></a>
								</b-col>
							</b-row>
						</b-tab>
						<b-tab title="Аналитика" lazy>
							<b-row class="mt-4">
								<b-col class="d-flex flex-wrap">
									<a href="https://help.carrotquest.io/article/147" class="Integrations__logo google_analytics" alt="google_analytics"></a>
									<a href="https://help.carrotquest.io/article/146" class="Integrations__logo mixpanel" alt="mixpanel"></a>
									<a href="https://help.carrotquest.io/article/145" class="Integrations__logo roistat" alt="roistat"></a>
									<a href="https://help.carrotquest.io/article/144" class="Integrations__logo yandex_metrica" alt="yandex_metrica"></a>
								</b-col>
							</b-row>
						</b-tab>
						<template #tabs-end>
							<g-link to="/integration/" class="nav-item-all d-none d-xl-block">Посмотрите все интеграции</g-link>
						</template>
					</b-tabs>
					<g-link to="/integration/" class="d-xl-none">
						Посмотрите все интеграции
					</g-link>
				</b-col>
			</b-row>
		</b-container>
	</ClientOnly>
</template>

<script>
	import { BTabs , BTab } from 'bootstrap-vue'

	export default {
		components: {
			BTabs,
			BTab
		}
	}
</script>

<style lang="scss">
	.Integrations {
		&__logo {
			position: relative;
			display: block;
			width: 150px;
			height: 50px;
			margin: 0.5rem  1rem 0.5rem 0;
			background: url(/assets/images/logos/integrations.png) no-repeat; 
			background-position: center;
		}
		.h2 {
			a {
				color: #000;
			}
		}

		.bitrix1c {
			background-position: 50% -900px;
		}
		.insales {
			background-position: 50% -350px;
			top: -8px;
		}
		.opencart {
			background-position: 50% -950px;
		}
		.prestashop {
			background-position: 50% -1200px;
		}
		.wordpress {
			background-position: 50% -1000px;
		}

		.amocrm {
			background-position: 50% -200px;
			top: -4px;
		}
		.bitrix24 {
			background-position: 50% -700px;
		}
		.retailcrm {
			background-position: 50% -1550px;
		}

		.email {
			background-position: 50% -1100px;
			width: 80px;
		}
		.facebook, .facebook_leads {
			background-position: 50% -800px;
			width: 80px;
		}
		.yandex_dialogs {
			background-position: 50% -1800px;
		}
		.vk {
			background-position: 50% -650px;
			width: 80px;
		}
		.telegram {
			background-position: 50% -750px;
			width: 80px;
		}
		.viber {
			background-position: 50% -1050px;
			width: 110px;
			top: 4px;
		}
		.slack_chat {
			background-position: 50% 0;
		}
		.zendesk {
			background-position: 50% -850px;
			top: -4px;
		}
		.omnidesk {
			background-position: 50% -1400px;
			top: 4px;
		}
		.usedesk {
			background-position: 50% -750px;
		}
		.usedesk {
			background-position: 50% -1450px;
		}
		.calendly {
			background-position: 50% -1950px;
			top: 4px;
		}

		.google_analytics {
			background-position: 50% -550px;
		}
		.mixpanel {
			background-position: 50% -50px;
		}
		.roistat {
			background-position: 50% -1150px;
		}
		.yandex_metrica {
			background-position: 50% -600px;
		}

		.mytarget {
			background-position: 50% -1850px;
		}
		.sendsay {
			background-position: 50% -1350px;
		}
		.vk_forms {
			background-position: 50% -1500px;
			width: 80px;
		}

		.api {
			background-position: 50% -100px;
		}
		.dialogflow {
			background-position: 50% -1700px;
		}
		.lambdascript {
			background-position: 50% -400px;
		}
		.jsscript {
			background-position: 50% -450px;
		}
		.webhook {
			background-position: 50% -300px;
		}
		.zapier {
			background-position: 50% -1750px;
		}
	}
</style>