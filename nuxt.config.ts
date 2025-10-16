// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-06-25",
  devtools: { enabled: true },
  app: {
    head: {
      title: "Marketing.pe",
    },
  },
  modules: [
    "@nuxt/eslint",
  ],
  components: [
    { path: '~/components', pathPrefix: false },
    { path: '~/sections', pathPrefix: false },
  ],
  plugins: [
    '~/plugins/pinia'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    "~/assets/css/main.css",
    'swiper/swiper-bundle.css'
  ],
  build: {
    transpile: ["vue-toastification"],
  },
})
