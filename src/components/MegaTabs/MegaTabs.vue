<template>
	<b-container class="MegaTabs">

		<!-- Заголовок блока -->
		<b-row class="justify-content-center">
			<b-col cols="12" lg="10" xl="9">
				<div class="h1 mb-5" v-html="title" />
			</b-col>
		</b-row>

		<!-- Вкладки -->
		<b-row class="d-none d-lg-flex">
			<b-col>
				<b-tabs pills vertical end nav-wrapper-class="col-4">
					<b-tab v-for="item in tabs" :key="item.title" :title="item.title" lazy>
						<!-- Видео -->
						<b-embed v-if="item.pic.search('mp4') > 0"
							type="video" 
							autoplay loop muted playsinline
							>
							<source :src="item.pic" type="video/mp4">
						</b-embed>
						<!-- Изображение -->
						<g-image v-else
							:src="require(`!!assets-loader!@/assets/images/components/MegaTabs/${item.pic}`)"
							:alt="item.title"
							width="720"
							height="540"
						/>
					</b-tab>
					<template v-if="more" #tabs-end>
						<div class="more">
							<a href="more.href" v-text="more.text" />
						</div>
					</template>
				</b-tabs>
			</b-col> 
		</b-row>

		<!-- Аккардеон -->
		<b-row class="d-lg-none">
			<b-col cols="12">
				<div class="accordion" role="tablist">
					<b-card no-body v-for="(item , index) in tabs" :key="item.title" :title="item.title">
						<div role="tab">
							<b-button block v-b-toggle="'accordion-' + index" v-html="item.title" class="p-3" />
						</div>
						<b-collapse :id="'accordion-' + index" visible accordion="my-accordion" role="tabpanel" class="p-5">
							<!-- Видео -->
							<b-embed
								v-if="item.pic.search('mp4') > 0"
								type="video" 
								autoplay loop muted playsinline
								>
								<source :src="item.pic" type="video/mp4">
							</b-embed>
							<!-- Изображение -->
							<g-image
								v-else
								:src="require(`!!assets-loader!@/assets/images/components/MegaTabs/${item.pic}`)"
								:alt="item.title"
								width="540"
								height="540"
							/>
						</b-collapse>
					</b-card>
				</div>
				<div v-if="more" class="more">
					<a :href="more.href" v-text="more.text" />
				</div>
			</b-col>
		</b-row>

		<!-- Инструменты для этих задач -->
		<b-row v-if="instruments" class="instruments">
			<b-col cols="12">
				<div class="h2">
					Инструменты для этих задач
				</div>
			</b-col>
			<b-col cols="6" lg="3" v-for="item in instruments" :key="item.title" class="mt-5 mt-lg-4">
				<a :href="item.href" class="box">
					<g-image
						:src="require(`!!assets-loader!@/assets/images/components/MegaTabs/${item.pic}`)"
						:alt="item.title.replace('<i>', '').replace('</i>', '')"
						width="130"
						height="130"
						fit="contain"
					/>
					<div class="title" v-html="item.title" />
				</a>
			</b-col>
		</b-row>
		
	</b-container>
</template>

<script>
	import '~/components/MegaTabs/MegaTabs.scss'

	export default {
		props: {
			title: String,
			tabs: Array,
			more: Array,
			instruments: Array
		}
	}
</script>