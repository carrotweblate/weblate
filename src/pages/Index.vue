<template>
	<Layout :header="true" :footer="true"  class="page page-index">

		<section class="hero">
			<b-container>
				<b-row class="align-items-center">
					<b-col lg="10">
						<h1 class="mb-4 mb-lg-5">
							Поможем онлайн-бизнесу увеличить продажи на том же трафике, удержим клиентов и превратим спящих в платящих
						</h1>
						<RegistrationForm text="14 дней бесплатно. Регистрируйтесь" />
					</b-col>
				</b-row>
			</b-container>
		</section>

		<!-- Видео о Carrot quest -->
		<section class="video-about">
			<b-container>
				<b-row >
					<b-col>
						<a v-b-modal.youtubeCQ class="VideoRegistration__play">
							<span class="btn font24px d-flex align-items-center">
								<span class="d-none d-md-inline">
									Посмотреть, как работает сервис. 97 секунд
								</span>
							</span>
							<g-image class="mw-100" src="@/assets/images/index/video-about.png" width="1320" height="654" alt="Видео о Carrot quest" />
						</a>
						<span class="d-block d-md-none mt-2 lightgrey-text font14px">
							Посмотреть, как работает сервис. 97 секунд
						</span>
						<VideoModal />
					</b-col>
				</b-row>
			</b-container>
		</section>

		<section class="features">
			<b-container>
				<b-row>

				</b-row>
			</b-container>
		</section>

		<Ready />

		<Consultation 
			title="Запишитесь на бесплатную демонстрацию сервиса" 
			text="Мы познакомимся, определим ваши задачи, за 30 минут обучим продукту и&nbsp;🎁&nbsp;бесплатно настроим базовый сценарий сбора лидов на вашем сайте"
			button="Заказать консультацию"
			pic="medium-12.png"
			alt="Девочка, живущая в сети"
			bg="#fff3e6"
		/>

		<Integrations />

		<Cases />

		<b-container>
			<b-col class="px-5 py-4" style="background-color: #FFEAD7; border-radius: 5px;">
				<b-row class="align-items-center justify-content-center">
					<b-col lg="8">
						<div class="h2 mb-4">Регистрируйтесь и пользуйтесь полной версией 14 дней бесплатно</div>
						<RegistrationForm />
					</b-col>
					<b-col lg="4" class="d-none d-lg-block">
						<!-- <g-image src="@/assets/images/components/10.png" width="494" alt="Регистрация в сервисе" title="Поехали!"  style="max-width: 100%" /> -->
						<ik-image
							path="/components/medium-9.png"
							:transformation="[{width:308}]"
							:lqip="{active:true, quality: 40, blur: 10}"
							width="308"
							height="222"
							loading="lazy"
							class="mw-100"
							alt="Регистрация в сервисе" title="Поехали!" 
						/>
					</b-col>
				</b-row>
			</b-col>
		</b-container>

		<Study />

	</Layout>
</template>

<script>
	import VideoModal 			from '~/components/Modals/VideoModal.vue'
	import Ready 				from '~/components/Ready.vue'
	import Consultation 		from '~/components/Consultation.vue'
	import Integrations 		from '~/components/Integrations.vue'
	import Cases 				from '~/components/Cases/Cases.vue'
	import RegistrationForm 	from '~/components/Forms/RegistrationForm.vue'
	import Study 				from '~/components/Study.vue'
	

	export default { 
		components: {
			VideoModal,
			Ready,
			Consultation,
			Integrations,
			Cases,
			RegistrationForm,
			Study
		},
		data() {
			return {
				//Делаем в HEAD
				metaTitle: 'Инструменты для увеличения продаж на сайтах без привлечения нового трафика',
				metaDescription: 'Carrot quest — сервис для увеличения продаж, автоматизации маркетинга, улучшения коммуникации с клиентами ✔️онлайн-консультант ✔️чат-боты ✔️поп-ап окна ✔️триггерные письма ✔️eCRM',
				metaCanonical: 'https://www.carrotquest.io/',
				metaImage: 'https://www.carrotquest.io/assets/images/cover/index.gif',

				//Бегущие числа
				carrotNumbersCommunications: 758464786,
				carrotNumbersLids: 94324071,
				carrotNumbersSites: 9325,

				visible: false
			};
		},
		methods: {
			formatToPrice(value) {
				return `${value.toLocaleString('ru', {maximumFractionDigits: 0})}`;
			},
			callback(visible) {
				if (visible) {
					this.visible = true
				}
			}
		}
	}	
</script>


<style lang="scss">
	.page-index {
		.container {
			max-width: 1360px;
		}
		.hero {
			.Registration {
				color: $light-grey;
				.TakeMe__group {
					border: 2px solid $primary;
				}
			}
			
			@media (min-width: 768px) {
				form {
					margin-bottom: 2.5rem !important;
				}
				.TakeMe__group {
					border-radius: 5px 0px 0px 5px;
					margin-right: 0 !important;
				}
				.btn {
					border-radius: 0px 5px 5px 0px;
				}
			}
		}

		.video-about {
			margin-top: -10rem;
			a {
				position: relative;
				top: 0;
				display: block;
				&::before {
					content: " ";
					display: block;
					position: absolute;
					z-index: 1;
					top: 0; bottom: 0; left: 0; right: 0;
					background-color: rgba(0, 0, 0, 0.05);
					border-radius: 5px;
					transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
				}
				&:hover {
					&::before {
						background-color: rgba(0, 0, 0, 0.10);
					}
					.btn {
						margin-top: -63px;
						box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.15);
					}
				}
				.btn {
					position: absolute;
					top: 50%;
					left: 50%;
					z-index: 2;
					margin: -55px 0 0 -348px;
					padding: 2.375rem 4rem;
					color: #000;
					background-color: #FFF;
					border: none;
					border-radius: 4rem;
					box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
					transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
					&::before {
						content: " ";
						display: inline-block;
						width: 30px;
						height: 34px;
						margin-right: 1.5rem;
						background-image: url("data:image/svg+xml,%3Csvg width='30' height='34' viewBox='0 0 30 34' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M28.5004 14.4054C30.5003 15.5601 30.5003 18.4467 28.5004 19.6014L4.50008 33.4589C2.50008 34.6137 2.14641e-06 33.1704 2.24736e-06 30.8609L3.45874e-06 3.14591C3.55968e-06 0.83647 2.50008 -0.606896 4.50008 0.547882L28.5004 14.4054Z' fill='%23FF7C16'/%3E%3C/svg%3E%0A");
						background-size: contain;
					}
					
				}
				@media (max-width: 991.98px) {
					&:hover {
						.btn {
							margin-top: -30px;
							box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.15);
						}
					}
					.btn {
						font-size: 0.875rem;
						line-height: 1.4rem;
						margin: -27px 0 0 -190px;
						padding: 1rem 1.75rem;
						&::before {
							width: 13px;
							height: 15px;
							margin-right: 0.75rem;
						}
					}
				}
				@media (max-width: 575.98px) {
					.btn {
						margin: -30px 0 0 -31px;
						padding: 1.2rem 1rem 1rem 1.2rem;
						&::before {
							width: 21px;
							height: 24px;
							margin-right: 0;
						}
					}
				}
			}
		}

		.features {
			padding-top: 5rem;
			background-color: #F3F3FF;
		}
	}
	
</style>
