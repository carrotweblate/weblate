<template>
	<Layout>
		<b-container class="page">
		
			<g-link to="/ecom-book/">Книга Ecom</g-link>

		</b-container>
	</Layout>
</template>

<style lang="scss">

</style>

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
						href: 'https://www.carrotquest.io/'
					}
				]
			}
		}
	}	
</script>