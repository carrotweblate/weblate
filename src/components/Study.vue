<template>
	<ClientOnly>

		<!-- Образовательные штучки -->
		<b-container class="Study">
			<b-row >
				<b-col col-12 lg="9">
					<div class="h2">
						Мы подготовили программу обучения для вас и ваших менеджеров
					</div>
				</b-col>
			</b-row>
			<b-row>
				<b-col lg="6">
					<a href="/videocourse-online-sales/" class="box box-shadow font20px">
						<span>Видеокурс по продукту</span>
						<g-image src="@/assets/images/components/study-videocourse.png" width="450" alt="Видеокурс по продукту" class="mt-4" />
					</a>
				</b-col>
				<b-col lg="6">
					<a href="https://help.carrotquest.io/" class="box box-shadow font20px">
						<span>Удобная база знаний с ответами на все вопросы</span>
						<g-image src="@/assets/images/components/study-help.png" width="500" alt="Удобная база знаний с ответами на все вопросы" class="mt-4" />
					</a>
				</b-col>
				<b-col lg="6">
					<a href="/library/" class="box box-shadow font20px">
						<span>Библиотека с полезными материалами и книгами</span>
						<g-image src="@/assets/images/components/study-library.png" width="470" alt="Библиотека с полезными материалами и книгами" />
					</a>
				</b-col>
				<b-col lg="6">
					<a href="/cases/" class="box box-shadow font20px">
						<span>Кейсы по использованию продукта</span>
						<g-image src="@/assets/images/components/study-cases.png" width="400" alt="Кейсы по использованию продукта" style="margin-top: 4.5rem" />
					</a>
				</b-col>
			</b-row>
		</b-container>

	</ClientOnly>
</template>

<script>
	export default {

	}
</script>

<style lang="scss">
	.Study {
		.box {
			margin-top: 40px;
			color: #000;
			border-radius: 5px;
			overflow: hidden;
			height: 270px;
			span {
				display: inline-block;
				width: 30%;
				margin: 1rem;
			}
			img {
				position: absolute;
			}
		}
	}
</style>