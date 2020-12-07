<template>
	<b-container class="FAQ">

		<!-- Заголовок блока -->
		<b-row>
			<b-col cols="12" lg="10" xl="9">
				<h2 class="h1 mb-4" v-html="title" />
			</b-col>
		</b-row>

		<!-- Вопросы и ответы -->
		<b-row>
			<b-col cols="12" v-for="(item , index ) in items" :key="index">
				<div class="FAQ__box mt-2">
					<b-button v-b-toggle="'answer-' + index" v-html="item.question" />
					<b-collapse :id="'answer-' + index">
						<div class="FAQ__box__answer" v-html="item.answer" />
					</b-collapse>
				</div>
			</b-col>
		</b-row>
		
	</b-container>
</template>



<script>
	export default {
		props: {
			title: String,
			items: Array
		},

		data() {
			return {
				shema: {
					"@context": "https://schema.org",
					"@type": "FAQPage",
					"mainEntity": []
				}
			}
		},

		metaInfo() {
			return {
				script: [
					{ 
						type: 'application/ld+json', 
						json: this.shema
					}
				]
			}
		},

		mounted () {
			for (let item of this.items) {
				this.mainEntity = {
					'@type': "Question",
					name: item.question,
					acceptedAnswer: {
						'@type': "Answer",
						text: item.answer
					}
				}
				this.shema.mainEntity.push(this.mainEntity)
			}
		}
	}
</script>



<style lang="scss">
	.FAQ {
		&__box {
			background-color: #F8F8FF;
			border-radius: 5px;
			.btn {
				position: relative;
				width: 100%;
				text-align: left;
				color: #000;
				background-color: transparent;
				border: none;
				padding: 0.75rem 1rem;
				font-weight: bold;
				&::after {
					content: " ";
					display: block;
					width: 10px;
					height: 10px;
					border: 1px solid #000;
					border-top: 0;
					border-right: 0;
					transform: rotate(-45deg);
					position: absolute;
					right: 1rem;
					top: 50%;
					margin-top: -6px;
					transition: 0.35s all cubic-bezier(0.175, 0.885, 0.320, 1.275);
				}
			}
			.btn.not-collapsed::after {
				transform: rotate(135deg);
			}
			&__answer {
				padding: 0.1rem 1rem;
			}
		}
	}
</style>