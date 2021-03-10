<template>
	<Layout :header="true" :footer="true" class="post">
		<b-container>

			<!-- Хлебные крошки -->
			<b-row>
				<b-col>
					<b-breadcrumb class="font20px d-none d-md-flex">
						<b-breadcrumb-item href="/">Главная</b-breadcrumb-item>
						<b-breadcrumb-item href="/blogtest/">Блог</b-breadcrumb-item>
					</b-breadcrumb>
				</b-col>
			</b-row>

			<!-- Заголовок и описание -->
			<b-row>
				<b-col col xl="9">
					<h1 class="post__title mb-5">
						Как опубликовать гостевой пост в блоге Carrot quest
					</h1>
				</b-col>
			</b-row>

			<!-- Текст статьи -->
			<b-row>
				<b-col col xl="8" class="font20px post__text">
					<!-- wp:paragraph -->
                    <p>Мы в Carrot quest всегда рады сотрудничеству с новыми авторами. Если у вас есть уникальная экспертиза или просто качественный материал, мы с удовольствием поделимся им на страницах <a href="https://www.carrotquest.io/blog">Carrot Blog</a>. Главное чтобы статья была полезна нашим читателям, была качественной и соответствовала нашей тематике.</p>
                    <!-- /wp:paragraph -->

                    <!-- wp:heading -->
                    <h2>Что дает публикация в Carrot Blog</h2>
                    <!-- /wp:heading -->

                    <!-- wp:paragraph -->
                    <p>Здесь вы можете зарекомендовать себя как эксперта и повысить узнаваемость бренда. </p>
                    <!-- /wp:paragraph -->

                    <!-- wp:paragraph -->
                    <p>Наши преимущества:</p>
                    <!-- /wp:paragraph -->

                    <!-- wp:list -->
                    <ul>
                    <li>ежемесячно блог читают более 16000 посетителей;</li>
                    <li>каждый четверг мы отправляем рассылку своей базе читателей. Размер базы: 24 000 подписчиков.</li>
                    <li>все статьи мы мы публикуем в соцсетях.</li>
                    </ul>
                    <!-- /wp:list -->

                    <!-- wp:paragraph -->
                    <p>Наша аудитория — маркетологи и владельцы онлайн и офлайн бизнесов в сферах e-Commerce, SaaS и сегменте B2B, которые ищут способ привлечь больше клиентов, увеличить конверсию и наладить общение с пользователями.</p>
                    <!-- /wp:paragraph -->

                    <!-- wp:heading -->
                    <h2>Про что можно написать</h2>
                    <!-- /wp:heading -->

                    <!-- wp:paragraph -->
                    <p>Вот темы, про которые мы пишем:</p>
                    <!-- /wp:paragraph -->

                    <!-- wp:list -->
                    <ul>
                        <li>техники лидогенерации;</li>
                        <li>инструменты лидогенерации и повышения конверсии;</li>
                        <li>автоматизация маркетинга;</li><li>автоматизация воронки продаж;</li>
                        <li>способы привлечения, удержания и повышения лояльности клиентов;</li>
                        <li>способы повышения конверсии и продаж;</li>
                        <li>сегментация и персонализация в маркетинге;</li>
                        <li>маркетинговая аналитика;</li>
                        <li>продуктовая аналитика;</li>
                        <li>email-маркетинг;</li>
                        <li>контент-маркетинг;</li>
                        <li>повышение качества работы службы поддержки пользователей.</li>
                    </ul>
                    <!-- /wp:list -->

                    <!-- wp:heading -->
                    <h2>Какой должна быть статья</h2>
                    <!-- /wp:heading -->

                    <!-- wp:paragraph -->
                    <p>Вот примеры гостевых статей:</p>
                    <!-- /wp:paragraph -->

                    <!-- wp:list -->
                    <ul>
                        <li><a href="https://www.carrotquest.io/blog/vizualizaciya-dannyx/">https://www.carrotquest.io/blog/vizualizaciya-dannyx/</a></li>
                        <li><a href="https://www.carrotquest.io/blog/linkbuilding/">https://www.carrotquest.io/blog/linkbuilding/</a></li>
                    </ul>
                    <!-- /wp:list -->

                    <!-- wp:paragraph -->
                    <p>Прежде всего, статья должна быть полезна нашим читателям: нам интересны практические советы, фишки, хаки, опыт, который вы наработали. Должно быть сразу понятно, о какой боли читателя вы пишете и какое решение предлагаете. Не нужно воды или общих фраз: пишите четко и по делу. Объем статьи зависит от темы и формата: пишите столько, сколько нужно, чтобы раскрыть тему, но не выжимайте лишний текст только ради объема. Нам не подходят копии других статей. Если материал повторяет уже опубликованный, нужно его переписать, дополнить и адаптировать под аудиторию нашего блога.</p>
                    <!-- /wp:paragraph -->

                    <!-- wp:paragraph -->
                    <p>Нам не подходят откровенно рекламные статьи. Если упоминание вашего сайта или сервиса к месту и решает проблему читателя, это нормально. То же касается ссылок: они нужны только там, где необходима дополнительная информация.</p>
                    <!-- /wp:paragraph -->

                    <!-- wp:paragraph -->
                    <p>Статья должна быть хорошо оформленной: структурированной (с заголовками, подзаголовками и списками), содержать качественные иллюстрации.</p>
                    <!-- /wp:paragraph -->

                    <!-- wp:paragraph -->
                    <p>За статьи мы не платим, зато вы получаете бесплатную ссылку на свой сайт и упоминание бренда.</p>
                    <!-- /wp:paragraph -->

                    <!-- wp:paragraph -->
                    <p>Мы заинтересованы в высоком качестве статей, и если чего-то не хватает, поможем доработать.</p>
                    <!-- /wp:paragraph -->

                    <!-- wp:paragraph -->
                    <p>Если вы готовы прислать нам статью, напишите на <a href="mailto:kaptieva.o@carrotquest.io">kaptieva.o@carrotquest.io</a>. В письме нужно указать тему статьи и желательно — примерное содержание или структуру.</p>
                    <!-- /wp:paragraph -->
				</b-col>
				<b-col col cols="4" class="post__info d-none d-xl-block">
					<!-- Автор -->
					<template v-for="{ node } in $page.allAuthors.edges">
						<div v-if="4 == node.id" class="post__authors" :key="node.id">
							<img :src="node.avatar._96" alt="">
							<p>
								<b v-text="node.name" />
								<br>
								<span class="grey-text" v-text="node.description" />
							</p>
						</div>
					</template>
				</b-col>
			</b-row>

			<b-row class="disqus">
				<b-col>
					<Disqus shortname="carrotquest" :identifier="$context.id + ' https://www.carrotquest.io/blog/?p=' + $context.id" lang="ru" />
				</b-col>
			</b-row>

			<BannerSobirayte />

		</b-container>

		<VideoRegistration />

	</Layout>
</template>


<page-query>
	query post {
		allAuthors {
			edges {
				node {
					id
					name
					description
					avatar {
						_96
					}
				}
			}
		}
	}
</page-query>


<script>
	import '~/assets/scss/post.scss'
	import VideoRegistration from '~/components/VideoRegistration.vue'
	import BannerSobirayte from '~/components/BannerSobirayte/BannerSobirayte.vue'
	import { Disqus } from 'vue-disqus'

	export default {
		components: {
			VideoRegistration,
			BannerSobirayte,
			Disqus
		},
		mounted() {
			
		}
	}	
</script>