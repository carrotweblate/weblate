<template>
  <footer>
    <b-container>
      <!-- Navigation -->
      <b-row class="footer-nav pt-4 mb-4">
        <template v-for="(item, index) in bottomMenu">
          <b-col
            col
            cols="12"
            md="6"
            :class="{ 'col-lg-5': index <= 1, 'col-lg-2': index == 2 }"
            class="mb-5"
            :key="index"
          >
            <b-nav vertical>
              <b-nav-text>
                {{ item.title }}
              </b-nav-text>
              <b-nav-item
                v-for="(subLink, index) in item.subLinks"
                :href="subLink.to"
                :key="index"
              >
                {{ subLink.title }}
              </b-nav-item>
            </b-nav>
          </b-col>
        </template>
      </b-row>

      <!-- Social -->
      <b-row class="mb-5 mb-xl-0 pb-5 pb-xl-3 justify-content-between">
        <b-col md="8" lg="3">
          <b-nav class="social-nav mb-4" justified>
            <b-nav-text class="d-lg-none"> Читайте и смотрите нас: </b-nav-text>
            <b-nav-item
              class="p-1"
              href="https://www.facebook.com/dashlyio/"
              target="_blank"
              rel="noopener noreferrer"
              alt="facebook"
            >
              <svg
                width="11"
                height="21"
                viewBox="0 0 11 21"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 7.3532H3.08256V4.744C3.08256 1.6604 4.98275 0 7.71428 0C8.63014 0 9.48763 0.058291 10.0003 0.0931415C10.2189 0.108002 10.3748 0.1186 10.4458 0.1186V3.3208H8.54562C7.00171 3.3208 6.76418 4.0324 6.76418 5.0998V7.3532H10.327L9.852 10.9112H6.76418V20.178H3.08256V10.9112H0V7.3532Z"
                  fill="#333333"
                />
              </svg>
            </b-nav-item>
            <b-nav-item
              class="p-1"
              href="https://twitter.com/dashlyio/"
              target="_blank"
              rel="noopener noreferrer"
              alt="twitter"
            >
              <svg
                width="23"
                height="19"
                viewBox="0 0 23 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.8844 4.56792C19.8984 4.76479 19.8984 4.9617 19.8984 5.15856C19.8984 11.1632 15.3282 18.082 6.97501 18.082C4.40156 18.082 2.01095 17.3367 0 16.043C0.365638 16.0851 0.717166 16.0992 1.09687 16.0992C3.22028 16.0992 5.17499 15.382 6.73594 14.1586C4.73906 14.1164 3.06561 12.8086 2.48904 11.0086C2.77032 11.0507 3.05155 11.0789 3.34689 11.0789C3.75469 11.0789 4.16253 11.0226 4.54219 10.9242C2.46095 10.5023 0.899963 8.67418 0.899963 6.46637V6.41014C1.50463 6.74764 2.20781 6.95857 2.95307 6.98667C1.72963 6.17103 0.928099 4.77886 0.928099 3.20384C0.928099 2.36011 1.15306 1.58667 1.54683 0.911667C3.78278 3.66792 7.14374 5.46788 10.9124 5.66479C10.8422 5.32729 10.7999 4.97576 10.7999 4.62419C10.7999 2.12104 12.825 0.0820007 15.3421 0.0820007C16.6499 0.0820007 17.8312 0.630437 18.6609 1.51638C19.6874 1.31951 20.6718 0.939803 21.5437 0.419503C21.2062 1.47421 20.489 2.36015 19.5468 2.92261C20.4609 2.82422 21.3468 2.57104 22.1624 2.21952C21.5438 3.11948 20.7703 3.92101 19.8844 4.56792V4.56792Z"
                  fill="black"
                />
              </svg>
            </b-nav-item>
            <b-nav-item
              class="p-1"
              href="https://www.youtube.com/dashly/"
              target="_blank"
              rel="noopener noreferrer"
              alt="youtube"
            >
              <svg
                width="22"
                height="16"
                viewBox="0 0 22 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.2302 0C11.2302 0 4.73732 -9.0155e-06 2.96653 0.590254C2.00146 1 1.50146 1.5 1.19572 2.36106C0.60546 4.13185 0.605469 7.67344 0.605469 7.67344C0.605469 7.67344 0.60546 11.215 1.19572 12.9858C1.50146 14 2.50146 14.5 2.96653 14.7566C4.73732 15.3468 11.2302 15.3468 11.2302 15.3468C11.2302 15.3468 17.7231 15.3468 19.4939 14.7566C20.5015 14.5 21.0187 13.7236 21.2647 12.9858C21.8549 11.215 21.8549 7.67344 21.8549 7.67344C21.8549 7.67344 21.8549 4.13185 21.2647 2.36106C20.9472 1.40847 20.5015 1 19.4939 0.590254C18.3134 -9.0155e-06 11.2302 0 11.2302 0ZM9.45942 4L14.5015 7.5L9.50147 11L9.45942 4Z"
                  fill="#333333"
                />
              </svg>
            </b-nav-item>
            <b-nav-item
              class="p-1"
              href="https://www.linkedin.com/company/dashlyio"
              target="_blank"
              rel="noopener noreferrer"
              alt="linkedin"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.11305 18.375H0.303516V6.10721H4.11305V18.375ZM2.20623 4.43378C0.988066 4.43378 0 3.42479 0 2.20663C8.7191e-09 1.6215 0.232441 1.06034 0.64619 0.646587C1.05994 0.232838 1.6211 0.000396729 2.20623 0.000396729C2.79136 0.000396729 3.35252 0.232838 3.76627 0.646587C4.18002 1.06034 4.41246 1.6215 4.41246 2.20663C4.41246 3.42479 3.42398 4.43378 2.20623 4.43378ZM18.3709 18.375H14.5696V12.4031C14.5696 10.9799 14.5409 9.15467 12.5889 9.15467C10.6083 9.15467 10.3048 10.701 10.3048 12.3006V18.375H6.49934V6.10721H10.153V7.78065H10.2063C10.7149 6.81678 11.9573 5.7996 13.8108 5.7996C17.6663 5.7996 18.375 8.33846 18.375 11.6361V18.375H18.3709Z"
                  fill="black"
                />
              </svg>
            </b-nav-item>
          </b-nav>
        </b-col>

        <!-- Apps -->
        <b-col cols="12" lg="7">
          <b-nav class="apps-nav" justified>
            <b-nav-text class="mr-4">Apps: </b-nav-text>
            <b-nav-item
              class="p-1 windows"
              href="https://files.dashly.app/desktop-app/dashly.exe"
              target="_blank"
              rel="noopener noreferrer"
              alt="windows"
            >
              <svg
                class="mr-1 mb-1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3.4L9.8 2V11.5H0V3.4Z" fill="#333333" />
                <path d="M9.8 12.6V22L0 20.7V12.5L9.8 12.6Z" fill="#333333" />
                <path
                  d="M10.8984 1.9L23.8984 0V11.4L10.8984 11.5V1.9Z"
                  fill="#333333"
                />
                <path
                  d="M23.8984 12.6996V23.9996L10.8984 22.0996V12.5996H23.8984V12.6996Z"
                  fill="#333333"
                />
              </svg>
              Windows
            </b-nav-item>
            <b-nav-item
              class="p-1 android"
              href="https://play.google.com/store/apps/details?id=io.carrrot.CarrrotApp"
              target="_blank"
              rel="noopener noreferrer"
              alt="Android"
            >
              <svg
                class="mr-1 mb-1"
                width="21"
                height="25"
                viewBox="0 0 21 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.5998 10.6988C20.5998 9.89883 19.8998 9.29883 19.1998 9.29883C18.4998 9.29883 17.7998 9.99883 17.7998 10.6988V16.4988C17.7998 17.2988 18.4998 17.8988 19.1998 17.8988C19.8998 17.8988 20.5998 17.1988 20.5998 16.4988V10.6988Z"
                  fill="#333333"
                />
                <path
                  d="M2.9 10.6988C2.9 9.89883 2.2 9.29883 1.5 9.29883C0.8 9.29883 0 9.89883 0 10.6988V16.4988C0 17.3988 0.7 17.9988 1.4 17.9988C2.1 17.9988 2.8 17.2988 2.8 16.5988L2.9 10.6988Z"
                  fill="#333333"
                />
                <path
                  d="M4.10156 9.59961V18.6996C4.10156 19.5996 4.80156 20.1996 5.60156 20.1996H6.30156V23.2996C6.30156 24.2996 7.00156 24.9996 8.00156 24.9996C9.00156 24.9996 9.70156 24.2996 9.70156 23.2996V20.1996H11.0016V23.2996C11.0016 24.1996 11.7016 24.9996 12.7016 24.9996C13.7016 24.9996 14.4016 24.2996 14.4016 23.2996V20.1996H15.1016C16.0016 20.1996 16.6016 19.4996 16.6016 18.6996V9.59961H4.10156Z"
                  fill="#333333"
                />
                <path
                  d="M13.6016 3.49925L14.6016 1.69925C14.7016 1.49925 14.7016 1.19925 14.4016 1.09925C14.2016 0.899251 14.0016 0.999251 13.8016 1.19925L12.8016 3.09925C12.1016 2.79925 11.2016 2.59925 10.3016 2.59925C9.40156 2.59925 8.60156 2.79925 7.80156 3.09925L6.80156 1.19925C6.60156 0.999251 6.40156 0.899251 6.20156 1.09925C6.00156 1.19925 5.90156 1.49925 6.00156 1.69925L7.00156 3.49925C5.20156 4.49925 4.10156 6.39925 4.10156 8.39925H16.7016C16.6016 6.29925 15.4016 4.49925 13.6016 3.49925ZM7.50156 6.39925C7.00156 6.39925 6.70156 5.99925 6.70156 5.59925C6.70156 5.19925 7.10156 4.79925 7.50156 4.79925C7.90156 4.79925 8.30156 5.19925 8.30156 5.59925C8.30156 5.99925 7.90156 6.39925 7.50156 6.39925ZM13.2016 6.39925C12.8016 6.39925 12.4016 5.99925 12.4016 5.59925C12.4016 5.19925 12.8016 4.79925 13.2016 4.79925C13.6016 4.79925 14.0016 5.09925 14.0016 5.59925C14.0016 5.99925 13.6016 6.39925 13.2016 6.39925Z"
                  fill="#333333"
                />
              </svg>
              Android
            </b-nav-item>
            <b-nav-item
              class="p-1 ios"
              href="https://itunes.apple.com/ru/app/carrrot/id1417779506?l=en&mt=8"
              target="_blank"
              rel="noopener noreferrer"
              alt="ios"
            >
              <svg
                class="mr-1 mb-1"
                width="20"
                height="24"
                viewBox="0 0 20 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.2889 12.6996C16.2889 16.2996 19.4889 17.5996 19.4889 17.5996C19.4889 17.6996 18.9889 19.2996 17.8889 20.9996C16.8889 22.3996 15.7889 23.8996 14.1889 23.8996C12.5889 23.8996 12.0889 22.8996 10.1889 22.8996C8.38889 22.8996 7.78889 23.7996 6.28889 23.8996C4.68889 23.9996 3.48889 22.2996 2.48889 20.8996C0.488889 17.9996 -1.11111 12.4996 0.988889 8.89963C1.98889 7.09963 3.88889 5.89963 5.88889 5.79963C7.48889 5.79963 8.88889 6.79963 9.88889 6.79963C10.8889 6.79963 12.5889 5.49963 14.4889 5.69963C15.2889 5.69963 17.3889 5.99963 18.8889 8.09963C18.6889 8.19963 16.1889 9.69963 16.2889 12.6996Z"
                  fill="#333333"
                />
                <path
                  d="M13.1875 3.8C13.9875 2.8 14.5875 1.4 14.3875 0C13.1875 0.1 11.6875 0.8 10.7875 1.8C9.98747 2.7 9.38747 4.1 9.48747 5.5C10.9875 5.6 12.3875 4.9 13.1875 3.8Z"
                  fill="#333333"
                />
              </svg>
              iOS
            </b-nav-item>
          </b-nav>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  data: () => ({
    bottomMenu: [
      {
        title: "FEATURES",
        subLinks: [
          {
            title: "Leadbot",
            to: "/chatbot/",
          },
          {
            title: "Live chat",
            to: "/live-chat-dashly/",
          },
          {
            title: "Knowledge Base",
            to: "/knowledgebase/",
          },
          {
            title: "Pop-ups",
            to: "/pop-ups/",
          },
          {
            title: "Email marketing",
            to: "/email-marketing/",
          },
          {
            title: "Ready-made campaigns",
            to: "/ready-made_campaigns/",
          },
          {
            title: "User Tracking",
            to: "/autotracking/",
          },
          {
            title: "Zoom and Calendly Integration",
            to: "/zoom_calendly/",
          },
          {
            title: "Dashly for eCommerce",
            to: "/ecommerce/",
          },
          {
            title: "Mobile SDK",
            to: "/sdk/",
          },
        ],
      },
      {
        title: "RESOURCES",
        subLinks: [
          {
            title: "Library",
            to: "/library/",
          },
          {
            title: "Customer stories",
            to: "/blog/category/success-story/",
          },
          {
            title: "Download playbook",
            to: "/saas-playbook/",
          },
          {
            title: "Help Center",
            to: "https://help.dashly.io/",
          },
          {
            title: "Developers API",
            to: "https://developers.dashly.io/",
          },
          {
            title: "Pricing",
            to: "/pricing/",
          },
          {
            title: "Terms and policies",
            to: "/terms-and-policies/",
          },
          {
            title: "About us",
            to: "/about-us/",
          },
        ],
      },
      {
        title: "BLOG",
        subLinks: [
          {
            title: "Use Cases",
            to: "/blog/category/usecase/",
          },
          {
            title: "Customer stories",
            to: "/blog/category/success-story/",
          },
          {
            title: "Blog",
            to: "/blog/",
          },
        ],
      },
    ],
  }),
};
</script>


<style lang="scss">
footer {
  margin-top: 3rem;
  color: #333;
  .container {
    margin-bottom: 0 !important;
  }
  .footer-nav {
    border-bottom: 1px solid #f2f2f2;
  }
  .apps-nav {
    svg {
      position: relative;
    }
    .windows svg,
    .android svg {
      top: -1px;
    }
    .ios svg {
      top: -2px;
    }
  }
  .navbar-text {
    font-weight: bold;
  }
  .nav-link {
    padding: 0.25rem 0;
    color: #333;

    &:hover,
    &:hover path {
      color: $primary;
      fill: $primary;
    }
  }
  a::after {
    display: none !important;
  }
  @media (max-width: 575.98px) {
    .social-nav .navbar-text,
    .apps-nav .navbar-text {
      width: 100%;
    }
    .apps-nav svg {
      display: block;
      width: 100%;
    }
  }
  @media (min-width: 1200px) {
    .social-nav {
      position: relative;
      left: -0.25rem;
    }
  }
}
</style>