<template>
	<Layout class="page">
        
        lead-manager

	</Layout>
</template>

<script>
	export default {

		//Делаем в HEAD
		metaInfo() {
			return {
				title: 'eCRM от Carrot quest: Сбор данных о клиентах и лидах на своем сайте',
				meta: [
					{
						key: 'description',
						name: 'description',
						content: 'Собирайте данные о каждом пользователе сайта и сегментируйте лиды в eCRM Carrot quest ✅ Добейтесь максимальной персонализации и повысьте конверсию'
					},
					{
						property: "og:image",
						content: 'https://www.carrotquest.io/blog/article/assets/images/cover/lead-manager.jpg'
					},
				],
				link: [
					{
						rel: 'canonical',
						href: 'https://www.carrotquest.io/lead-manager/'
					}
				]
			}
		},
	}	
</script>

<style lang="scss">

</style>