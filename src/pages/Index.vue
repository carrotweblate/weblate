<template>
	<Layout class="page page-index">

		<b-container>
			<br>
			<br>
			<p>
				<g-link to="/lead-manager/">eCRM</g-link>
			</p>
			<p>
				<g-link to="/automation-marketing/">Автоматизация</g-link>
			</p>
			<p>
				<g-link to="/blog/kak-sdelat-email-rassylku-2/">Тестовая статья</g-link>
			</p>
			<p>
				<g-link to="/case21shop/">Тестовая тильда</g-link>
			</p>
			<p>
				<g-link to="/qualification-guide/">Гайд</g-link>
			</p>
			
		</b-container>

	</Layout>
</template>

<script>
	export default {
		//Делаем в HEAD
		metaInfo() {
			return {
				title: 'Инструменты для увеличения продаж на сайтах без привлечения нового трафика',
				meta: [
					{
						key: 'description',
						name: 'description',
						content: 'Carrot quest — сервис для увеличения продаж, автоматизации маркетинга, улучшения коммуникации с клиентами ✔️онлайн-консультант ✔️чат-боты ✔️поп-ап окна ✔️триггерные письма ✔️eCRM'
					},
					{
						property: "og:image",
						content: 'https://www.carrotquest.io/img/cover.gif'
					},
				],
				link: [
					{
						rel: 'canonical',
						href: 'https://www.carrotquest.io/'
					}
				]
			}
		}
	}	
</script>