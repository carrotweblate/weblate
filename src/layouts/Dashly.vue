<template>
  <div>
    <b-overlay :show="showOverlay" v-on:click="showOverlay = false">
      <Header
        v-if="header"
        v-on:overlay-show="overlay"
        v-on:overlay-close="overlayClose"
      />

      <slot />

      <Footer v-if="footer" />

      <Balcony />
      <ConsultationModal />
      <DownloadMiniModal />
      <DownloadModal />
    </b-overlay>
  </div>
</template>

<script>
import Header from "~/components/HeaderDashly.vue";
import Footer from "~/components/FooterDashly.vue";
import { BOverlay } from "bootstrap-vue";
import Balcony from "~/components/Ads/Balcony.vue";
import ConsultationModal from "~/components/Modals/ConsultationModal.vue";
import DownloadMiniModal from "~/components/Modals/DownloadMiniModal.vue";
import DownloadModal from "~/components/Modals/DownloadModal.vue";

export default {
  components: {
    Header,
    Footer,
    BOverlay,
    Balcony,
    ConsultationModal,
    DownloadMiniModal,
    DownloadModal,
  },
  props: ["header", "footer"],
  data: function () {
    return {
      showOverlay: false,
    };
  },
  methods: {
    // Ищем ссылки на страницах
    searchHrefs() {
      // Ищем ссылки для открытия чата
      if (document.querySelector('[href*="#open-chat"]')) {
        document
          .querySelectorAll('[href*="#open-chat"]')
          .forEach(function (item) {
            item.addEventListener("click", function (e) {
              e.preventDefault();
              carrotquest.open();
            });
          });
      }

      // Ищем ссылки для записи на демо
      if (document.querySelector('a[href*="#open-demo-pop-up"]')) {
        document.querySelectorAll('a[href*="#open-demo-pop-up"]').forEach(
          function (item) {
            item.addEventListener(
              "click",
              function (e) {
                e.preventDefault();
                carrotquest.track("Записаться на демо через поп-ап");
              }.bind(this)
            );
          }.bind(this)
        );
      }
    },

    //Управляем оверлеем
    overlay() {
      this.showOverlay = true;
    },
    overlayClose() {
      this.showOverlay = false;
    },
  },
  mounted() {
    this.searchHrefs();
  },
  updated() {
    this.searchHrefs();
  },
  //Делаем в HEAD
  metaInfo() {
    return {
      title: this.$parent.metaTitle,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$parent.metaDescription,
        },
        {
          key: "og:url",
          property: "og:url",
          content: this.$parent.metaCanonical,
        },
        {
          key: "og:title",
          property: "og:title",
          content: this.$parent.metaTitle,
        },
        {
          key: "og:description",
          property: "og:description",
          content: this.$parent.metaDescription,
        },
        {
          key: "og:image",
          property: "og:image",
          content: this.$parent.metaImage,
        },
      ],
      link: [
        {
          key: "canonical",
          rel: "canonical",
          href: this.$parent.metaCanonical,
        },
        // Подключаем Open sans
        {
          rel: "preload",
          href: "https://www.carrotquest.io/assets/font/OpenSans-Regular.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          href: "https://www.carrotquest.io/assets/font/OpenSans-Bold.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        // Подключаем Stag sans
        {
          rel: "preload",
          href: "https://www.carrotquest.io/assets/font/Stag-Sans-Medium-Web.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
      ],
    };
  },
};
</script>