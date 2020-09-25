<template>
	<Layout class="page">

		<b-container class="hero">
		
		</b-container>

	</Layout>
</template>

<script>
	export default {
		data() {
				return {
					info: null
				}
		},

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
						content:
						'https://www.carrotquest.io/img/cover.gif'
					},
				],
				link: [
					{
						rel: 'canonical',
						href: 'https://cq-test.ru/'
					}
				]
			}
		}
	}	
</script>