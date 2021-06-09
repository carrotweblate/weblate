<template>
  <Layout :header="true" :footer="true" class="page page-partner">
    <section class="hero">
      <b-container>
        <b-row class="align-items-center">
          <b-col lg="5" class="d-none d-lg-block">
            <g-image
              src="@/assets/images/partner/hero.png"
              width="1060"
              quality="100"
              class="mw-100"
              alt="Партнерская программа Carrot quest"
              title="Фытыщщщ"
            />
          </b-col>
          <b-col lg="7">
            <h1>Партнерская программа Carrot quest</h1>
            <p class="pt-3 pb-4">
              Зарабатывайте за каждое внедрение Carrot quest от 50 000
              до 200 000 рублей в месяц или получайте дополнительный доход
              от реферальной программы
            </p>
            <b-button
              href="https://carrotquest.io/partner/register/"
              variant="primary"
              class="mr-4"
              >Стать партнером</b-button
            >
            <b-button
              href="https://carrotquest.io/partner/direct/"
              variant="outline-primary"
              >Партнерский логин</b-button
            >
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="advantages">
      <b-container>
        <b-row>
          <b-col lg="9" xl="7">
            <div class="h2 mb-5">
              Carrot&nbsp;quest дает вам инструменты для повышения продаж ваших
              клиентов без привлечения дополнительного трафика
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6" class="mb-5 mb-lg-0">
            <b-row>
              <b-col cols="3">
                <g-image
                  src="@/assets/images/components/small-5.png"
                  width="300"
                  height="300"
                  fit="contain"
                  background="#fff"
                  position="left top"
                  class="mw-100"
                  alt="Больше 50 функций и интеграций"
                />
              </b-col>
              <b-col cols="9">
                <div class="h5">Больше 50 функций и интеграций</div>
                <p>
                  формируют мощный инструмент для решения задач
                  диджитал-маркетинга, клиентской поддержки и&nbsp;лидогенерации
                </p>
              </b-col>
            </b-row>
          </b-col>
          <b-col lg="6">
            <b-row>
              <b-col cols="3">
                <g-image
                  src="@/assets/images/components/small-11.png"
                  width="300"
                  height="300"
                  fit="contain"
                  background="#fff"
                  position="left top"
                  class="mw-100"
                  alt="Готовые кейсы применения"
                />
              </b-col>
              <b-col cols="9">
                <div class="h5">Готовые кейсы применения</div>
                <p>
                  А&nbsp;множество
                  <g-link to="/cases/" target="_blank" rel="noopener"
                    >кейсов</g-link
                  >
                  использования позволит сразу найти подходящий вариант решения
                  задачи и&nbsp;использовать его как источник вдохновения
                </p>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="cards">
      <b-container>
        <b-row>
          <b-col>
            <div class="h2 mb-4 mb-lg-5">Варианты партнерства</div>
          </b-col>
        </b-row>
        <b-row class="cards__list-cards list-cards">
          <b-col xl="4" class="mb-5 mb-xl-0">
            <article class="list-cards__card">
              <span>Шаг 1</span>
              <div class="h3 my-3">Реферальный партнер</div>
              <p class="list-cards__desc">
                Вознаграждение&nbsp;&mdash; 10% от&nbsp;платежей приведенных
                клиентов
              </p>
            </article>
            <article
              class="
                list-cards__advatages
                d-flex
                justify-content-between
                flex-column
                text
              "
            >
              <ul>
                <li>
                  Вы&nbsp;&mdash; делитесь ссылкой на&nbsp;подключение продукта.
                  Мы&nbsp;&mdash; делимся выручкой от&nbsp;клиента.
                </li>
                <li>
                  Если клиент подключится по&nbsp;вашей ссылке, мы&nbsp;будем
                  выплачивать&nbsp;10% от&nbsp;его платежей за&nbsp;все время,
                  пока он&nbsp;платит.
                </li>
                <li>
                  Вы&nbsp;так&nbsp;же можете самостоятельно настроить
                  инструменты Carrot quest вашему клиенту. И&nbsp;договориться
                  как вам удобно.
                </li>
              </ul>
              <div class="list-cards__links">
                <b-button
                  href="https://carrotquest.io/partner/register/"
                  variant="primary"
                  class="mb-3"
                  >Стать реферальным партнером</b-button
                >
                <p class="list-cards__referral-note">
                  Действуем на основании
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://www.carrotquest.io/blog/wp-content/uploads/2020/11/Шаблон-Реферальный-договор.docx"
                    >реферального договора</a
                  >
                </p>
              </div>
            </article>
          </b-col>
          <b-col xl="4" class="mb-5 mb-xl-0">
            <article class="list-cards__card">
              <span>Шаг 2</span>
              <div class="h3 my-3">Официальный партнер</div>
              <p class="list-cards__desc">
                Вы&nbsp;зарабатываете от&nbsp;30&nbsp;000
                до&nbsp;150&nbsp;000&nbsp;р.&nbsp;за&nbsp;каждого клиента
                за&nbsp;внедрение сервиса
                <br />
                <br />
                + 20% процентов за&nbsp;продление подписки клиентом ежемесячно
              </p>
            </article>
            <article
              class="
                list-cards__advatages
                d-flex
                justify-content-between
                flex-column
                text
              "
            >
              <ul>
                <li>
                  Предоставляем скидку на&nbsp;решения Carrot quest от&nbsp;20%
                  в&nbsp;зависимости от&nbsp;выбранного тарифа и&nbsp;срока
                  оплаты.
                </li>
                <li>
                  Обучаем всех партнеров, знакомим и&nbsp;помогаем повышать
                  качество внедрения инструментов Carrot quest для ваших
                  клиентов.
                </li>
              </ul>
              <div class="list-cards__links">
                <b-button
                  href="https://carrotquest.io/partner/register/"
                  variant="primary"
                  class="mb-3"
                  >Стать официальным партнером</b-button
                >
                <p class="list-cards__referral-note">
                  Действуем на основании
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://www.carrotquest.io/blog/wp-content/uploads/2020/11/Шаблон-Партнёрский-договор.doc"
                    >лицензионного соглашения</a
                  >
                </p>
              </div>
            </article>
          </b-col>
          <b-col xl="4">
            <article class="list-cards__card">
              <span>Шаг 3</span>
              <div class="h3 my-3">Сертифицированный партнер</div>
              <p class="list-cards__desc">
                Вы&nbsp;зарабатываете от&nbsp;30&nbsp;000
                до&nbsp;150&nbsp;000&nbsp;р.&nbsp;за&nbsp;каждого клиента
                за&nbsp;внедрение сервиса
                <br />
                <br />
                + 20% процентов за&nbsp;продление подписки клиентом ежемесячно
              </p>
            </article>
            <article
              class="
                list-cards__advatages
                d-flex
                justify-content-between
                flex-column
                text
              "
            >
              <ul>
                <li>
                  Предоставляем скидку на&nbsp;решения Carrot quest&nbsp;20%
                  в&nbsp;зависимости от&nbsp;выбранного тарифа и&nbsp;срока
                  оплаты.
                </li>
                <li>
                  Обучаем всех партнеров, знакомим и&nbsp;помогаем повышать
                  качество внедрения инструментов Carrot quest для ваших
                  клиентов.
                </li>
                <li>
                  Продвигаем успешные кейсы внедрения от&nbsp;партнеров
                  в&nbsp;нашем блоге и&nbsp;на&nbsp;внешних ресурсах. Лиды,
                  из&nbsp;аудитории этих кейсов отправляются напрямую партнерам.
                </li>
                <li>
                  Заявки на&nbsp;внедрение автоматизации маркетинга, которые
                  поступают в&nbsp;Carrot quest, передаем сертифицированным
                  партнерам.
                </li>
              </ul>
              <div class="list-cards__links">
                <b-button
                  href="https://carrotquest.io/partner/register/"
                  variant="primary"
                  class="mb-3"
                  >Подтвердить статус</b-button
                >
                <p class="list-cards__referral-note">
                  Действуем на основании
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://www.carrotquest.io/blog/wp-content/uploads/2020/11/Шаблон-Партнёрский-договор.doc"
                    >лицензионного соглашения</a
                  >
                </p>
              </div>
            </article>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <Study />

    <section class="partners">
      <b-container>
        <b-row>
          <div class="col-12">
            <div class="h2 mb-4 mb-lg-5">Партнеры Carrot&nbsp;quest</div>
          </div>
        </b-row>
        <b-row>
          <ul class="partners__list">
            <li class="partners__list__item">
              <figure
                class="
                  partners__list__sprite partners__list__sprite_registratura
                "
              ></figure>
            </li>
            <li class="partners__list__item">
              <figure
                class="partners__list__sprite partners__list__sprite_ingate"
              ></figure>
            </li>
            <li class="partners__list__item">
              <figure
                class="partners__list__sprite partners__list__sprite_sintez"
              ></figure>
            </li>
            <li class="partners__list__item">
              <figure
                class="partners__list__sprite partners__list__sprite_profitator"
              ></figure>
            </li>
            <li class="partners__list__item">
              <figure
                class="partners__list__sprite partners__list__sprite_email-sold"
              ></figure>
            </li>
            <li class="partners__list__item">
              <figure
                class="partners__list__sprite partners__list__sprite_soft-form"
              ></figure>
            </li>
            <li class="partners__list__item">
              <figure
                class="partners__list__sprite partners__list__sprite_intr"
              ></figure>
            </li>
            <li class="partners__list__item">
              <figure
                class="partners__list__sprite partners__list__sprite_xpage"
              ></figure>
            </li>
            <li class="partners__list__item">
              <figure
                class="partners__list__sprite partners__list__sprite_future-bit"
              ></figure>
            </li>
            <li class="partners__list__item">
              <figure
                class="partners__list__sprite partners__list__sprite_flame"
              ></figure>
            </li>
            <li class="partners__list__item">
              <figure
                class="partners__list__sprite partners__list__sprite_biarch"
              ></figure>
            </li>
            <li class="partners__list__item">
              <figure
                class="partners__list__sprite partners__list__sprite_s-media"
              ></figure>
            </li>
            <li class="partners__list__item">
              <figure
                class="partners__list__sprite partners__list__sprite_biz-mail"
              ></figure>
            </li>
            <li class="partners__list__item">
              <figure
                class="partners__list__sprite partners__list__sprite_allure"
              ></figure>
            </li>
            <li class="partners__list__item">
              <figure
                class="partners__list__sprite partners__list__sprite_cxema"
              ></figure>
            </li>
            <li class="partners__list__item">
              <figure
                class="partners__list__sprite partners__list__sprite_techart"
              ></figure>
            </li>
            <li class="partners__list__item">
              <a
                href="https://internetactive.ru/?utm_source=carrot_partnet&utm_medium=cpc&utm_campaign=partner"
                target="_blank"
                rel="nofollow"
              >
                <figure
                  class="
                    partners__list__sprite partners__list__sprite_internetactive
                  "
                ></figure>
              </a>
            </li>
          </ul>
        </b-row>
      </b-container>
    </section>

    <FAQ
      title="Часто задаваемые вопросы"
      :items="this.faq"
      :button="{
        text: 'Стать партнером',
        href: 'https://carrotquest.io/partner/register/',
      }"
    />

    <section class="connect">
      <b-container>
        <b-row>
          <b-col cols="6" md="3">
            <g-image
              src="@/assets/images/partner/IvanKomаrov.png"
              class="mw-100"
              quality="100"
              alt="Иван Комаров"
              title="Привет!"
            />
          </b-col>
          <b-col md="9" class="text mt-4 mt-md-0">
            <p class="h3">
              Иван Комаров, руководитель направления по&nbsp;работе
              с&nbsp;партнерами
            </p>
            <p>
              Отвечу на&nbsp;ваши вопросы, помогу с&nbsp;документами, подскажу
              по&nbsp;сервису или передам вопрос разработчикам
            </p>
            <ul>
              <li>
                <a href="mailto:komarov@carrotquest.ru" rel="nofollow"
                  >komarov@carrotquest.ru</a
                >
              </li>
              <li>
                <a href="skype:partner_carrot_quest" rel="nofollow"
                  >Skype: partner_carrot_quest</a
                >
              </li>
              <li>
                <a href="tel:+79194848347" rel="nofollow">+7 (919) 48-48-347</a>
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </Layout>
</template>

<script>
import Layout from "~/layouts/Default.vue";
import Study from "~/components/Study.vue";
import FAQ from "~/components/FAQ.vue";

export default {
  components: {
    Layout,
    Study,
    FAQ,
  },
  metaInfo() {
    return {
      script: [
        {
          type: "application/ld+json",
          json: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: this.faq,
          },
        },
      ],
    };
  },
  data() {
    return {
      //Делаем в HEAD
      metaTitle: "Партнерская программа",
      metaDescription:
        "Зарабатывайте за каждое внедрение Carrot quest от 50 000 р. до 200 000 р. или получайте дополнительный доход от реферальной программы",
      metaCanonical: "https://www.carrotquest.io/partner/",
      metaImage: "https://www.carrotquest.io/assets/images/cover/ru/index.gif",

      //FAQ
      faq: [
        {
          "@type": "Question",
          name: "Как стать партнёром?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Для того, чтобы стать партнером нужно сначала зарегистрироваться в&nbsp;партнерском кабинете. После регистрации мы&nbsp;свяжемся с&nbsp;вами, чтобы обсудить дальнейшие действия и&nbsp;проконсультировать по&nbsp;всем вопросам.",
          },
        },
        {
          "@type": "Question",
          name: "Как я буду зарабатывать?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Вы&nbsp;будете получать комиссию с&nbsp;каждого платежа клиента, которого вы&nbsp;подключили к&nbsp;Carrot quest. А&nbsp;еще вы&nbsp;можете профессионально освоить сервис, стать сертифицированным партнером и&nbsp;зарабатывать на&nbsp;внедрении автоматизации маркетинга вашим клиентам от&nbsp;30&nbsp;000 до&nbsp;150&nbsp;000&nbsp;рублей.",
          },
        },
        {
          "@type": "Question",
          name: "Какие варианты партнерства есть?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Мы&nbsp;предлагаем два варианта партнерского взаимодействия: подключение клиентов по&nbsp;реферальной ссылке и&nbsp;прямое подключение через партнера. С&nbsp;каждой оплаты реферального клиента вы&nbsp;получаете&nbsp;10%, а&nbsp;с&nbsp;платежей прямых клиентов&nbsp;20%.",
          },
        },
        {
          "@type": "Question",
          name: "Чем отличаются реферальные и прямые клиенты?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Реферальные клиенты взаимодействуют с&nbsp;сервисом самостоятельно, сами настраивают сервис, сами его оплачивают. Клиентам, с&nbsp;которыми вы&nbsp;работаете в&nbsp;рамках партнерской программы, вы&nbsp;помогаете настраивать сервис, и&nbsp;все платежи по&nbsp;подписке тоже проходят через вас. В&nbsp;таком случае &nbsp;20% от&nbsp;каждого платежа клиента являются вашей комиссией.",
          },
        },
        {
          "@type": "Question",
          name: "Может ли мой клиент получить скидку?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ваши клиенты могут получить скидку на оплату сервиса в соответствии с нашей <a href=/price/>тарифной сеткой</a>. При оплате на 3 месяца скидка составит 10%, на 6 месяцев - 20%, на 12 месяцев - 30%. Вы при этом получаете партнерскую скидку в размере 20% на все тарифы. Скидки суммируются между собой.",
          },
        },
        {
          "@type": "Question",
          name: "Могу&nbsp;ли я&nbsp;получить эксклюзивные права в&nbsp;своём регионе (white label)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Нет, партнерская программа не&nbsp;предусматривает эксклюзивные права на&nbsp;внедрение продукта.",
          },
        },
        {
          "@type": "Question",
          name: "Где я&nbsp;могу посмотреть полезные материалы?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Полезные материалы для партнеров вы&nbsp;можете найти в&nbsp;партнерском кабинете, <a href=/cases/>в&nbsp;разделе кейсы</a>, <a href=/blog/>в&nbsp;нашем блоге</a> и&nbsp;написав нам на&nbsp;<a href=mailto:komarov@carrotquest.ru>komarov@carrotquest.ru</a>. А&nbsp;еще мы&nbsp;разрабатываем обучающий курс для партнеров, следите за&nbsp;обновлениями.",
          },
        },
        {
          "@type": "Question",
          name: "У&nbsp;меня проблемы с&nbsp;настройкой сервиса, что делать?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Если вы&nbsp;столкнулись со&nbsp;сложностями при настройке сервиса, напишите в&nbsp;чат на&nbsp;нашем сайте и&nbsp;отзывчивая техподдержка поможет.",
          },
        },
        {
          "@type": "Question",
          name: "У&nbsp;меня есть клиент, но&nbsp;я&nbsp;сам не&nbsp;хочу разбираться в&nbsp;сервисе, что делать?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Мы&nbsp;можем взять настройку сервиса для вашего клиента на&nbsp;себя. При этом процент со&nbsp;всех оплат привлеченного клиента получите&nbsp;вы. Для того, чтобы обсудить условия, напишите нам в&nbsp;чат или на&nbsp;почту.",
          },
        },
        {
          "@type": "Question",
          name: "Как получать от&nbsp;Вас клиентов?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Для того, что&nbsp;бы мы&nbsp;передавали вам клиентов, вы&nbsp;должны быть сертифицированным партнером и&nbsp;написать совместно с&nbsp;нами кейс о&nbsp;внедрении вашим клиентам автоматизации маркетинга на&nbsp;базе сервиса Carrot quest. Чтобы узнать подробнее о&nbsp;том, как пройти сертификацию, напишите на&nbsp;<a href=mailto:komarov@carrotquest.ru>komarov@carrotquest.ru</a>",
          },
        },
        {
          "@type": "Question",
          name: "У&nbsp;меня есть еще вопросы!",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Если у&nbsp;вас еще остались вопросы, можете задать их&nbsp;на&nbsp;почту <a href=mailto:komarov@carrotquest.ru>komarov@carrotquest.ru</a> или написать в&nbsp;чат на&nbsp;нашем сайте.",
          },
        },
      ],
    };
  },
};
</script>


<style lang="scss">
.page-partner {
  .hero {
    background-color: #fef8ea;
  }

  .cards {
    .h3 {
      margin-top: 10px;
    }
    .list-cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      &__card {
        padding: 1rem;
        background: #f8f8ff;
        border-radius: 5px 5px 0px 0px;
        height: 305px;
      }
      &__desc {
        color: #128a12;
        font-weight: bold;
      }
      &__advatages {
        border: 1px solid #e7ebf4;
        border-radius: 0px 0px 5px 5px;
        border-top: none;
        padding: 1rem;
        height: 660px;
      }
      &__referral-note {
        font-size: 14px;
        color: #a4a4a4;
        a {
          color: #a4a4a4;
          text-decoration: underline;
        }
      }
    }
    @media (max-width: 1199.98px) {
      .list-cards {
        &__card,
        &__advatages {
          height: initial;
        }
      }
    }
  }

  .partners {
    &__list {
      display: flex;
      flex-wrap: wrap;
      &__item {
        height: 100px;
        margin: 0 20px;
        list-style: none;
        :last-child {
          margin-bottom: 0;
        }
      }
      &__sprite {
        height: 66px;
        overflow: hidden;
        background-image: url(../assets/images/partner/partners.png);
        background-repeat: no-repeat;
        &_registratura {
          width: 148px;
          background-position: -20px 10px;
        }
        &_ingate {
          width: 163px;
          background-position: -25px -60px;
        }
        &_sintez {
          width: 284px;
          background-position: -24px -122px;
        }
        &_profitator {
          width: 168px;
          background-position: -30px -186px;
        }
        &_email-sold {
          width: 134px;
          background-position: -18px -270px;
        }
        &_soft-form {
          width: 132px;
          background-position: -33px -368px;
        }
        &_intr {
          width: 154px;
          background-position: -30px -440px;
        }
        &_xpage {
          width: 130px;
          background-position: -28px -508px;
        }
        &_future-bit {
          width: 102px;
          background-position: -28px -580px;
        }
        &_flame {
          width: 50px;
          background-position: -26px -665px;
        }
        &_biarch {
          width: 84px;
          background-position: -32px -755px;
        }
        &_s-media {
          width: 56px;
          background-position: -30px -825px;
        }
        &_biz-mail {
          width: 122px;
          background-position: -30px -904px;
        }
        &_allure {
          width: 100px;
          background-position: -30px -988px;
        }
        &_cxema {
          width: 131px;
          background-position: -30px -1064px;
        }
        &_techart {
          width: 185px;
          background-position: -23px -1135px;
        }
        &_internetactive {
          width: 66px;
          background-position: -23px -1219px;
        }
      }
    }
  }

  .connect {
    img {
      overflow: hidden;
      border-radius: 50%;
    }
  }
}
</style>