<template>

	<!-- Кейс -->
	<b-col cols="12" lg="6" class="mb-4">
		<a :href="href" class="box box-shadow">
			<b-row class="align-items-center mb-4">
				<div class="col-7">
					<div class="font24px number" v-html="number" />
					<div class="font20px title" v-html="title" />
				</div>
				<div class="col-5 logo">
					<img
						:src="'https://www.carrotquest.io/blog/article/assets/images/logos/' + logo"
						:alt="title"
					/>
				</div>
			</b-row>
			<div class="description" v-html="text" />
			<div class="link">Подробнее</div>
		</a>
	</b-col>

</template>



<script>
	export default {
		props: [ 'number' , 'logo' , 'title' , 'text' , 'href' ]
	}
</script>