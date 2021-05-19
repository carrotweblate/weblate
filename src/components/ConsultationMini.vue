<template>
	<!-- Запрос консультации -->
	<b-container>
		<b-col class="ConsultationMini" :style=" 'background-color: ' + bg ">
			<b-row class="align-items-center">
				<b-col lg="6">
					<!-- Заголовок модалки -->
					<div class="h3 mb-4" v-html="title" />
					<!-- Кнопка для вызова модалки -->
					<b-button 
						href="#open-modal-consultation"
						variant="primary" 
						class="px-3 py-2 mb-4">
						Заказать консультацию
					</b-button>
					<ContactsHrefs />
				</b-col>
				<b-col lg="6" class="d-none d-lg-block">
					<ik-image
						:path="'/components/' + pic"
						:transformation="[{width:490,height:250,cropMode:'pad_resize'}]"
						:lqip="{active:true, quality: 40, blur: 10}"
						width="490"
						height="250"
						class="mw-100 h-auto"
						loading="lazy"
						:alt="alt" 
						:title="alt" 
					/>
				</b-col>
			</b-row>
		</b-col>
	</b-container>
</template>

<script>
	import ContactsHrefs 	from '~/components/ContactsHrefs.vue'

	export default {
		props: [ 'title' , 'pic' , 'alt' , 'bg' ],
		components: {
			ContactsHrefs
		},
	}
</script>

<style lang="scss">
	.ConsultationMini.col {
		padding: 1.5rem 2.5rem;
		border-radius: 5px;
		@media (max-width: 991.98px) , (min-width: 1200px) {
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
		@media (max-width: 767.98px) {
			padding: 1.25rem;
		}
	}
</style>