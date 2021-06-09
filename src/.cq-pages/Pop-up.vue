<template>
  <Layout :header="true" :footer="true" class="page page-pop-up">
    <section class="hero">
      <b-container>
        <b-row class="align-items-center justify-content-center">
          <b-col lg="9" class="text-lg-center">
            <h1>
              Больше лидов и продаж с помощью поп‑ап окон c гиперсегментацией
            </h1>
            <p class="py-3">
              Легко запускайте поп‑ап окна на&nbsp;вашем сайте, на&nbsp;основе
              поведения пользователей. Собирайте лиды, сегментируйте их&nbsp;для
              дальнейших коммуникаций
            </p>
            <b-button href="/panel/register/" variant="primary"
              >Начать бесплатно</b-button
            >
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="pop_ups_accordeon">
      <b-container>
        <b-row>
          <div class="left_col col-12 col-lg-8">
            <g-image
              id="pop--1"
              class="left_col__pop active"
              src="@/assets/images/pop-up/1.png"
              alt="Pop up 1"
              @click="next_pop"
              data-pop="1"
            />
            <g-image
              id="pop--2"
              class="left_col__pop"
              src="@/assets/images/pop-up/2.png"
              alt="Pop up 2"
              @click="next_pop"
              data-pop="2"
            />
            <g-image
              id="pop--3"
              class="left_col__pop"
              src="@/assets/images/pop-up/3.png"
              alt="Pop up 3"
              @click="next_pop"
              data-pop="3"
            />
            <g-image
              id="pop--4"
              class="left_col__pop"
              src="@/assets/images/pop-up/4.png"
              alt="Pop up 4"
              @click="next_pop"
              data-pop="4"
            />
            <g-image
              id="pop--5"
              class="left_col__pop"
              src="@/assets/images/pop-up/5.png"
              alt="Pop up 5"
              @click="next_pop"
              data-pop="5"
            />
            <g-image
              id="pop--6"
              class="left_col__pop"
              src="@/assets/images/pop-up/6.png"
              alt="Pop up 6"
              @click="next_pop"
              data-pop="6"
            />
            <g-image
              id="pop--7"
              class="left_col__pop"
              src="@/assets/images/pop-up/7.png"
              alt="Pop up 7"
              @click="next_pop"
              data-pop="7"
            />
            <g-image
              id="pop--8"
              class="left_col__pop"
              src="@/assets/images/pop-up/8.png"
              alt="Pop up 8"
              @click="next_pop"
              data-pop="8"
            />
            <g-image
              id="pop--9"
              class="left_col__pop"
              src="@/assets/images/pop-up/9.png"
              alt="Pop up 9"
              @click="next_pop"
              data-pop="9"
            />
            <g-image
              id="pop--10"
              class="left_col__pop"
              src="@/assets/images/pop-up/10.png"
              alt="Pop up 10"
              @click="next_pop"
              data-pop="10"
            />
            <g-image
              id="pop--11"
              class="left_col__pop"
              src="@/assets/images/pop-up/11.png"
              alt="Pop up 11"
              @click="next_pop"
              data-pop="11"
            />
            <g-image
              id="pop--12"
              class="left_col__pop"
              src="@/assets/images/pop-up/12.png"
              alt="Pop up 12"
              @click="next_pop"
              data-pop="12"
            />
            <g-image
              id="pop--13"
              class="left_col__pop"
              src="@/assets/images/pop-up/13.png"
              alt="Pop up 13"
              @click="next_pop"
              data-pop="13"
            />
            <g-image
              id="pop--14"
              class="left_col__pop"
              src="@/assets/images/pop-up/14.png"
              alt="Pop up 14"
              @click="next_pop"
              data-pop="14"
            />
            <g-image
              id="pop--15"
              class="left_col__pop"
              src="@/assets/images/pop-up/15.png"
              alt="Pop up 15"
              @click="next_pop"
              data-pop="15"
            />
            <g-image
              id="pop--16"
              class="left_col__pop"
              src="@/assets/images/pop-up/16.png"
              alt="Pop up 16"
              @click="next_pop"
              data-pop="16"
            />
            <a v-b-modal.popupVideo>
              <g-image
                class="left_col__watch"
                src="@/assets/images/pop-up/hero_watch.svg"
                alt="Смотреть видео"
              />
            </a>
            <b-modal id="popupVideo" size="xl" hide-header hide-footer>
              <b-embed
                type="video"
                aspect="16by9"
                autoplay
                loop
                muted
                playsinline
              >
                <source
                  src="/assets/video/pop-up/edit.webm"
                  type="video/webm"
                />
                <source src="/assets/video/pop-up/edit.mp4" type="video/mp4" />
              </b-embed>
            </b-modal>
            <g-image
              class="left_col__bg"
              src="@/assets/images/pop-up/hero_browser_bg.png"
              alt="Фон, браузер"
            />
          </div>
          <b-col lg="4" class="right_col d-none d-lg-block">
            <div class="accordion-item">
              <h3 class="accordion-item-head active" @click="accordion">
                Сбор лидов
              </h3>
              <div class="accordion-item-body">
                <ul>
                  <li>
                    <a data-show="1" @click="change_pop" class="active"
                      >Для сбора обратной связи</a
                    >
                  </li>
                  <li>
                    <a data-show="2" @click="change_pop"
                      >Со скидкой на получение лида с квалификацией</a
                    >
                  </li>
                  <li>
                    <a data-show="3" @click="change_pop"
                      >На сбор контактов с определением геолокации</a
                    >
                  </li>
                  <li>
                    <a data-show="4" @click="change_pop"
                      >Для лидогенерации со сбором предпочтений пользователя</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="accordion-item">
              <h3 class="accordion-item-head" @click="accordion">
                Квалификация лидов
              </h3>
              <div class="accordion-item-body">
                <ul>
                  <li>
                    <a data-show="6" @click="change_pop"
                      >Со скидкой на получение лида с квалификацией</a
                    >
                  </li>
                  <li>
                    <a data-show="7" @click="change_pop"
                      >Со скидкой или промокодом</a
                    >
                  </li>
                  <li>
                    <a data-show="8" @click="change_pop"
                      >С квалификацией пользователя по потребностям или
                      интересам</a
                    >
                  </li>
                </ul>
              </div>
            </div>

            <div class="accordion-item">
              <h3 class="accordion-item-head" @click="accordion">
                Увеличение конверсии
              </h3>
              <div class="accordion-item-body">
                <ul>
                  <li>
                    <a data-show="9" @click="change_pop"
                      >С квизом для увеличения вовлеченности</a
                    >
                  </li>
                  <li>
                    <a data-show="10" @click="change_pop"
                      >На увеличение среднего чека</a
                    >
                  </li>
                  <li>
                    <a data-show="11" @click="change_pop"
                      >Для увеличения конверсии в регистрацию</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="accordion-item">
              <h3 class="accordion-item-head" @click="accordion">
                Активация и удержание пользователей
              </h3>
              <div class="accordion-item-body">
                <ul>
                  <li>
                    <a data-show="12" @click="change_pop"
                      >Для напоминания о сроке оплаты</a
                    >
                  </li>
                  <li>
                    <a data-show="13" @click="change_pop"
                      >Для обучающей серии в продукте</a
                    >
                  </li>
                  <li>
                    <a data-show="14" @click="change_pop"
                      >Мотивирующий на общение и консультацию</a
                    >
                  </li>
                  <li>
                    <a data-show="15" @click="change_pop"
                      >На увеличение подписчиков в соц-сетях</a
                    >
                  </li>
                  <li>
                    <a data-show="16" @click="change_pop"
                      >Для вовлечения и обучения пользователя с помощью
                      контента</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="tasks">
      <b-container>
        <b-row class="align-items-center justify-content-center tasks__about">
          <b-col lg="8" xl="5" class="text-center">
            <div class="h1 mb-4">
              Какие задачи решают <span>поп-ап окна</span>
            </div>
            <p>
              Используйте конструктор поп-ап окон, чтобы создать любое поп-ап
              окно. Вам не нужно писать код - все можно сделать в сервисе
            </p>
          </b-col>
        </b-row>
        <b-row>
          <div class="d-none d-md-block pop--1">
            <g-image src="@/assets/images/pop-up/1.png" alt="Pop-up 1" />
          </div>
          <div class="d-none d-xl-block pop--5">
            <g-image src="@/assets/images/pop-up/5.png" alt="Pop-up 5" />
          </div>
          <div class="d-none d-md-block pop--14">
            <g-image src="@/assets/images/pop-up/14.png" alt="Pop-up 14" />
          </div>
          <div class="d-none d-lg-block pop--4">
            <g-image src="@/assets/images/pop-up/4.png" alt="Pop-up 4" />
          </div>
          <div class="d-none d-md-block pop--7">
            <g-image src="@/assets/images/pop-up/7.png" alt="Pop-up 7" />
          </div>
          <div class="d-none d-md-block pop--11">
            <g-image src="@/assets/images/pop-up/11.png" alt="Pop-up 11" />
          </div>
          <div class="d-none d-xl-block pop--8">
            <g-image src="@/assets/images/pop-up/8.png" alt="Pop-up 8" />
          </div>
        </b-row>
      </b-container>
    </section>

    <section class="scripts">
      <b-container>
        <b-row>
          <b-col lg="6" class="mb-4">
            <p class="h1 mb-4">Настройте сценарий</p>
            <p class="mb-4">
              Выберите настройки для показа поп-апа, которые будут точно
              соответствовать целевой аудитории. Выберите максимально целевой
              сегмент
            </p>
            <p>
              <b-link
                @click="scriptsIndex = 0"
                :class="{ 'font-weight-bold text-primary': scriptsIndex == 0 }"
                >Выберите триггер</b-link
              >
            </p>
            <p>
              <b-link
                @click="scriptsIndex = 1"
                :class="{ 'font-weight-bold text-primary': scriptsIndex == 1 }"
                >Определите сегмент</b-link
              >
            </p>
            <p>
              <b-link
                @click="scriptsIndex = 2"
                :class="{ 'font-weight-bold text-primary': scriptsIndex == 2 }"
                >Настройте условия отправки</b-link
              >
            </p>
          </b-col>
          <b-col lg="6">
            <g-image
              src="@/assets/images/pop-up/scripts-1.png"
              quality="100"
              class="mw-100 scripts__pics"
              :class="{ active: scriptsIndex == 0 }"
              alt="Выберите триггер"
            />
            <g-image
              src="@/assets/images/pop-up/scripts-2.png"
              quality="100"
              class="mw-100 scripts__pics"
              :class="{ active: scriptsIndex == 1 }"
              alt="Определите сегмент"
            />
            <g-image
              src="@/assets/images/pop-up/scripts-3.png"
              quality="100"
              class="mw-100 scripts__pics"
              :class="{ active: scriptsIndex == 2 }"
              alt="Настройте условия отправки"
            />
          </b-col>
        </b-row>
      </b-container>
    </section>

    <!-- Вся информация о лидах, их действиях на сайте и история общения -->
    <b-container class="information">
      <b-row>
        <b-col lg="10" xl="8">
          <h2 class="mb-3 mb-lg-4">Создайте поп-ап</h2>
          <p class="mb-3 mb-lg-4">
            Добавляйте кнопки, поля ввода, картинки, меняйте размер
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-embed type="video" aspect="16by9" controls playsinline>
            <source src="/assets/video/pop-up/edit.webm" type="video/webm" />
            <source src="/assets/video/pop-up/edit.mp4" type="video/mp4" />
          </b-embed>
        </b-col>
      </b-row>
    </b-container>

    <section class="analitics">
      <b-container>
        <b-row>
          <b-col lg="8" class="order-2 order-lg-1">
            <g-image
              src="@/assets/images/components/32.png"
              quality="100"
              class="mw-100"
              alt="Анализируйте результат"
            />
          </b-col>
          <b-col lg="4" class="order-lg-2 order-1 text">
            <p class="h1 mb-4">Анализируйте результат</p>
            <ul>
              <li>Сколько посетителей увидели поп-ап</li>
              <li>Сколько ответили на него</li>
              <li>Сколько совершили целевое действие</li>
              <li>Сколько денег принес поп-ап</li>
              <li>Как его результативность отображается в воронке продаж</li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="ab_tests">
      <b-container>
        <b-row>
          <b-col lg="4" class="mb-4">
            <p class="h1 mb-4">Запускайте А/Б тесты</p>
            <p>
              Кроме тестов самих сообщений сравнивайте между собой разные каналы
              (типы сообщений). Что эффективнее? Например, сравните письмо
              со всплывающим окном или сообщением в чат
            </p>
          </b-col>
          <b-col lg="8">
            <g-image
              src="@/assets/images/components/31.png"
              quality="100"
              class="mw-100"
              alt="Запускайте А/Б тесты"
            />
          </b-col>
        </b-row>
      </b-container>
    </section>

    <Integrations />

    <Consultation
      title="Запишитесь на бесплатную демонстрацию сервиса"
      text="Мы познакомимся, определим ваши задачи, за 30 минут обучим продукту и&nbsp;🎁&nbsp;бесплатно настроим базовый сценарий сбора лидов на вашем сайте"
      pic="medium-2.png"
      alt="Девочка, живущая в сети"
      bg="#F3F3FF"
    />

    <Cases />

    <Logos />

    <Study />
  </Layout>
</template>

<script>
import Layout from "~/layouts/Default.vue";
import Integrations from "~/components/Integrations.vue";
import Consultation from "~/components/Consultation.vue";
import Cases from "~/components/Cases/Cases.vue";
import Logos from "~/components/Logos.vue";
import Study from "~/components/Study.vue";
import { BEmbed, BLink } from "bootstrap-vue";

export default {
  components: {
    Layout,
    Integrations,
    Consultation,
    Cases,
    Logos,
    Study,
    BEmbed,
    BLink,
  },
  data() {
    return {
      //Делаем в HEAD
      metaTitle:
        "Поп-ап окна: эффективный инструмент коммуникации с пользователями",
      metaDescription:
        "Получайте больше лидов и заявок с помощью триггерных всплывающих окон. Используйте pop up окна для сбора лидов, коммуникации с пользователями и оповещений о акциях",
      metaCanonical: "https://www.carrotquest.io/pop-up/",
      metaImage: "https://www.carrotquest.io/assets/images/cover/ru/pop-up.png",

      //Сценарии
      scriptsIndex: 0,
    };
  },
  methods: {
    disableHrefs: function () {
      var hrefs = document.querySelectorAll(".accordion-item a");
      for (var i = 0; i < hrefs.length; i++) {
        hrefs[i].classList.remove("active");
      }
      var pics = document.querySelectorAll(".left_col__pop");
      for (var i = 0; i < pics.length; i++) {
        pics[i].classList.remove("active");
      }
    },
    accordion: function (element) {
      var matches = document.querySelectorAll(".accordion-item-head");
      for (var i = 0; i < matches.length; i++) {
        matches[i].classList.remove("active");
      }
      this.disableHrefs();
      element.target.classList.toggle("active");
      element.target.parentElement
        .querySelector("a")
        .classList.toggle("active");
      var pic =
        "#pop--" + element.target.parentElement.querySelector("a").dataset.show;
      document.querySelector("" + pic + "").classList.toggle("active");
    },
    change_pop: function (href) {
      this.disableHrefs();
      href.target.classList.toggle("active");
      var pic = "#pop--" + href.target.dataset.show;
      document.querySelector("" + pic + "").classList.toggle("active");
    },
    next_pop: function (pop) {
      const mq = window.matchMedia("(min-width: 991.98px)");
      if (!mq.matches) {
        this.disableHrefs();
        var thisPop = pop.target.dataset.pop;
        var pics = document.querySelectorAll(".left_col__pop");
        if (thisPop == pics.length) {
          thisPop = 0;
        }
        for (var i = 0; i < pics.length; i++) {
          pics[thisPop].classList.add("active");
        }
      }
    },
  },
};
</script>


<style lang="scss">
.page-pop-up {
  background: 50% -50px no-repeat url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="3281" height="982" viewBox="0 0 3281 982" fill="none"%3E%3Cpath d="M-4.00834e-05 450.5C-6.22208e-05 197.278 734.477 -7.99978 1640.5 -7.99986C2546.52 -7.99994 3281 197.277 3281 450.5C3281 703.723 2546.52 909 1640.5 909C734.477 909 -1.79459e-05 703.723 -4.00834e-05 450.5Z" fill="url(%23paint0_linear)"%3E%3C/path%3E%3Cpath d="M1073.79 228.898C1073.79 228.898 1070.96 237.512 1059.89 238.296C1048.81 239.079 1046.4 231.727 1048.79 229.78C1052.94 226.408 1062 234.555 1052.3 246.862C1042.78 258.924 1031.58 251.058 1032.69 247.874C1034.73 242.037 1048.13 247.916 1037.84 264.263C1035.43 267.894 1031.77 270.515 1027.55 271.628" stroke="%23FF8246" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"%3E%3C/path%3E%3Cpath d="M2383.57 693.617C2383.57 693.617 2374.65 695.225 2368.7 685.857C2362.74 676.489 2368.06 670.874 2370.91 672.049C2375.85 674.094 2372.99 685.939 2357.55 683.257C2342.42 680.621 2344.01 667.021 2347.34 666.486C2353.44 665.509 2354.64 680.091 2335.37 678.81C2331.03 678.415 2326.98 676.442 2324 673.263" stroke="%23FF8246" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"%3E%3C/path%3E%3Cpath d="M1293.06 405.545L1292.08 384.664C1292.04 383.91 1292.82 383.39 1293.51 383.713L1310.55 391.793C1311.22 392.11 1311.32 393.018 1310.75 393.479L1294.68 406.281C1294.04 406.789 1293.1 406.36 1293.06 405.545Z" stroke="%23ADE06B" stroke-width="3"%3E%3C/path%3E%3Cpath d="M946.62 693.609L964.251 682.378C964.888 681.973 965.727 682.392 965.786 683.144L967.25 701.95C967.307 702.688 966.572 703.23 965.884 702.958L946.789 695.382C946.03 695.082 945.932 694.048 946.62 693.609Z" stroke="%23484848" stroke-width="3"%3E%3C/path%3E%3Ccircle cx="2259" cy="328" r="9.5" stroke="%23484848" stroke-width="3"%3E%3C/circle%3E%3Ccircle cx="2279" cy="811" r="9.5" stroke="%23ADE06B" stroke-width="3"%3E%3C/circle%3E%3Cpath d="M2077.72 961.279L2088.28 975.857M2075.71 973.847L2090.29 963.289" stroke="%23FF8246" stroke-width="3"%3E%3C/path%3E%3Cpath d="M1851.29 390.279L1861.85 404.857M1849.28 402.847L1863.86 392.289" stroke="%23FF8246" stroke-width="3"%3E%3C/path%3E%3Cdefs%3E%3ClinearGradient id="paint0_linear" x1="1640.5" y1="909" x2="1640.5" y2="-7.99992" gradientUnits="userSpaceOnUse"%3E%3Cstop stop-color="%23F3F3FF"%3E%3C/stop%3E%3Cstop offset="1" stop-color="%23F3F3FF" stop-opacity="0"%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E');
  .pop_ups_accordeon {
    margin-top: -15rem;
    .left_col__bg {
      position: relative;
      z-index: 1;
      max-width: 100%;
      top: -5px;
    }
    .left_col__watch {
      position: absolute;
      top: 400px;
      left: 65px;
      z-index: 2;
    }
    .left_col__pop {
      position: absolute;
      top: 90px;
      right: 45px;
      z-index: 3;
      opacity: 0;
      transition-property: all;
      transition-duration: 0.3s;
    }
    .left_col__pop.active {
      z-index: 4;
      display: block;
      opacity: 1;
      @media (max-width: 991.98px) {
        cursor: pointer;
      }
    }
    .right_col__accordions {
      padding-left: 40px;
    }
    .accordion-item {
      background: #fff;
      border-radius: 5px;
      margin-bottom: 8px;
      box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
    }
    .accordion-item-head {
      margin: 0;
      padding: 16px;
      cursor: pointer;
      text-transform: uppercase;
      color: #808080;
      font-family: "Open Sans", Arial, sans-serif;
      font-size: 14px;
      font-weight: normal;
    }
    .accordion-item-body {
      overflow: hidden;
      max-height: 0;
      transition-property: all;
      transition-duration: 0.3s;
      padding: 0 16px;
      ul li:before,
      ul li:after {
        display: none;
      }
      a {
        text-decoration: none !important;
        font-size: 14px;
      }
    }
    .accordion-item-head.active + .accordion-item-body {
      max-height: 300px;
      padding: 0 16px 20px;
    }
    .accordion-item-body ul,
    .accordion-item-body li {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .accordion-item-body li {
      margin-bottom: 12px;
    }
    .accordion-item-body li:last-child {
      margin-bottom: 0;
    }
    .accordion-item-body a {
      text-decoration: underline;
      color: #000 !important;
      cursor: pointer;
    }
    .accordion-item-body a.active {
      color: #ff8246 !important;
    }
    @media (max-width: 1199.98px) {
      margin-top: -8rem;
      .left_col__watch {
        width: 240px;
        left: 50px;
        top: 340px;
      }
      .left_col__pop {
        max-width: 50%;
        top: 60px;
      }
    }
    @media (max-width: 991.98px) {
      .left_col__watch {
        width: 240px;
        top: inherit;
        bottom: 40px;
        left: 50px;
      }
      .left_col__pop {
        max-width: 50%;
      }
    }
    @media (max-width: 767.98px) {
      background-position: bottom;
    }
    @media (max-width: 575.98px) {
      margin-top: 0;
      .about,
      .left_col {
        margin-bottom: 3rem;
      }
      .left_col__watch {
        width: 160px;
        left: 35px;
        bottom: 20px;
      }
      .left_col__pop {
        max-width: 40%;
        max-height: 80%;
        top: 30px;
        right: 35px;
      }
    }
  }

  .scripts {
    &__pics {
      position: relative;
    }
    &__pics.active {
      position: relative;
      right: -10px;
      z-index: 2;
      opacity: 1;
    }
    &__pics:not(.active) {
      position: absolute;
      opacity: 0.5;
      top: 20px;
      left: 12px;
      z-index: 1;
      width: calc(100% - 2.5rem);
    }
  }

  .tasks {
    background: url("data:image/svg+xml,%0A%3Csvg width='731' height='731' viewBox='0 0 731 731' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='365.5' cy='365.5' r='365.5' fill='url(%23paint0_linear)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear' x1='365.5' y1='731' x2='365.5' y2='0' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23F3F3FF'/%3E%3Cstop offset='1' stop-color='%23F3F3FF' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A")
      50% -50px no-repeat;
    .container {
      position: relative;
    }
    &__about {
      position: relative;
      height: 680px;
    }
    [class*="pop"] {
      position: absolute;
      overflow: hidden;
      bottom: 0;
      img {
        position: relative;
        top: -20px;
      }
    }

    .pop--1 {
      top: 70px;
      left: 0;
      img {
        width: 280px;
      }
      @media (max-width: 991.98px) {
        top: 20px;
      }
    }
    .pop--5 {
      top: 0px;
      left: 370px;
      img {
        width: 100px;
      }
    }
    .pop--14 {
      top: -80px;
      left: 570px;
      img {
        width: 230px;
      }
      @media (max-width: 1199.98px) {
        top: -50px;
        left: 380px;
      }
      @media (max-width: 991.98px) {
        top: -30px;
        left: 480px;
      }
    }
    .pop--4 {
      top: 160px;
      right: 0;
      img {
        width: 250px;
      }
      @media (max-width: 1199.98px) {
        top: 90px;
      }
    }
    .pop--7 {
      bottom: 10px;
      right: 30px;
      img {
        width: 360px;
      }
      @media (max-width: 1199.98px) {
        right: 70px;
        bottom: 30px;
      }
      @media (max-width: 991.98px) {
        right: -10px;
        bottom: -20px;
      }
    }
    .pop--11 {
      bottom: -50px;
      right: 470px;
      img {
        width: 300px;
      }
      @media (max-width: 1199.98px) {
        right: inherit;
        left: 80px;
        bottom: 0;
      }
      @media (max-width: 991.98px) {
        left: 10px;
        bottom: 20px;
      }
    }
    .pop--8 {
      bottom: 60px;
      left: 50px;
      img {
        width: 230px;
      }
    }
  }
}
</style>