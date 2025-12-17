const HTTP_ORIGIN = 'https://persol-career-techstudio.com.vn';
const companyName = 'PERSOL CAREER TECH STUDIO VIETNAM';
// TODO: change
const description =
  'PERSOL CAREER TECH STUDIO VETNAM is the studio to create new services related to "WORK".';
const keywords = ['PERSOL CAREER TECH STUDIO VIETNAM', 'PERSOL CAREER', 'TECH STUDIO'];


export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  
  router: {
    base: '/test_PCT_HP' // Sets the base URL for the application's routes
  },


  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: companyName,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: description
      },
      {
        name: 'format-detection',
        content: 'telephone=no',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: keywords.join(','),
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: companyName,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: companyName,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description,
      },
      {
        property: 'og:url',
        content: HTTP_ORIGIN,
      },
      {
        property: 'og:image',
        content: `${HTTP_ORIGIN}/ogp.png`,
      }, // MEMO:絶対パスじゃないとtwitter:cardで読み込まれない
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      { rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ress',
    '~/assets/styles/index.scss',
    '~/assets/styles/tailwind.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/v-smooth-scroll', mode: 'client' },
    { src: '~/plugins/vue-awesome-swiper', mode: 'client' },
    { src: '~/plugins/router-scroll-behavior', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources',
    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],
  googleFonts: {
    families: {
      Roboto: [300,400,500,700],
      'Noto Sans': [400, 700],
      Montserrat: [100,300,400,500,700,900],
      Hind: [400, 700]
    },
    display: 'swap'
  },

  styleResources: {
    scss: ['~/assets/styles/_variable.scss'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
