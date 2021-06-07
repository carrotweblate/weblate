<template>
	<!-- Запрос консультации -->
	<b-container id="Consultation" class="Consultation">
		<b-row>
			<b-col>
				<div class="Consultation__box" :style=" 'background-color: ' + bg ">
					<b-row class="align-items-center justify-content-center">
						<b-col xl="10" >
							<b-row class="align-items-center justify-content-center">
								<b-col cols="12" lg="6">
									<div class="h2 mb-4" v-html="title" />
									<p v-html="text" />
								</b-col>
								<b-col cols="8" lg="6" class="d-none d-lg-block">
									<ik-image
										:path="'/components/' + pic"
										:transformation="[{width:475,height:300,cropMode:'pad_resize'}]"
										:lqip="{active:true, quality: 40, blur: 10}"
										width="475"
										height="300"
										class="mw-100 h-auto"
										loading="lazy"
										:alt="alt" 
										:title="alt" 
									/>
								</b-col>
							</b-row>
							<b-row class="mt-3 mb-5">
								<b-col>
									<ConsultationForm :button="button" />
								</b-col>
							</b-row>
							<b-row>
								<b-col>
									<ContactsHrefs />
								</b-col>
							</b-row>
						</b-col>
					</b-row>
				</div>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
	import ConsultationForm 	from '~/components/Forms/ConsultationForm.vue'
	import ContactsHrefs 		from '~/components/ContactsHrefs.vue'

	export default {
		components: {
			ConsultationForm,
			ContactsHrefs
		},
		props: [ 'title' , 'text' , 'button' , 'pic' , 'alt' , 'bg' ]
	}
</script>

<style lang="scss">
	.Consultation {
		&__box {
			border-radius: 5px;
			padding: 2rem 0 4.5rem;
			form {
				width: 100% !important;
			}
			@media (max-width: 1199.98px) {
				padding: 2rem 20px;
			}
			@media (min-width: 992px) {
				.TakeMe {
					display: flex;
					flex-wrap: wrap;
					margin-left: -1.25rem;
					&__group , .btn {
						flex: 0 0 50%;
						max-width: calc(50% - 1.25rem);
						position: relative;
						width: 100%;
						margin-left: 1.25rem;
					}
					.btn {
						margin-top: 0 !important;
					}
				}
			}
			@media (max-width: 991.98px) {
				.ContactsHrefs {
					flex-wrap: wrap;
					&__phone {
						width: 100%;
					}
					&__icon {
						margin-top: 1rem !important;
					}
				}
			}
		}
	}
</style>