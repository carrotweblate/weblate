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
				<b-col lg="6" class="Study__videocourse">
					<g-link to="/videocourse-online-sales/" class="box box-shadow font20px">
						<span>Видеокурс по продукту</span>
						<g-image src="@/assets/images/components/study-videocourse.png" width="450" alt="Видеокурс по продукту" />
					</g-link>
				</b-col>
				<b-col lg="6" class="Study__help">
					<a href="https://help.carrotquest.io/" class="box box-shadow font20px">
						<span>Удобная база знаний с ответами на все вопросы</span>
						<g-image src="@/assets/images/components/study-help.png" width="500" alt="Удобная база знаний с ответами на все вопросы" />
					</a>
				</b-col>
				<b-col lg="6" class="Study__library">
					<g-link to="/library/" class="box box-shadow font20px">
						<span>Библиотека с полезными материалами и книгами</span>
						<g-image src="@/assets/images/components/study-library.png" width="470" alt="Библиотека с полезными материалами и книгами" />
					</g-link>
				</b-col>
				<b-col lg="6" class="Study__cases">
					<g-link to="/cases/" class="box box-shadow font20px">
						<span>Кейсы по использованию продукта</span>
						<g-image src="@/assets/images/components/study-cases.png" width="400" alt="Кейсы по использованию продукта" />
					</g-link>
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
		&__videocourse img , &__help img{
			margin-top: 3rem;
			border-radius: 5px;
		}
		&__cases img {
			margin-top: 4.5rem;
		}
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
		@media (max-width: 767.98px) {
			&__videocourse .box {
				margin-top: 20px;
			}
			.box {
				height: 320px;
				span {
					width: 100%;
				}
				img {
					margin-top: 0;
					left: 100px
				}
			}
		}
	}
</style>