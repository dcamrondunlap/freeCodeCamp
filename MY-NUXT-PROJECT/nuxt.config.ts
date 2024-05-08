// https://nuxt.com/docs/api/configuration/nuxt-config



export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt freeCodeCamp YouTube tutorial',
      meta: [
        {
          name: "description",
          content: "This is a course from youtube for Nuxt 3",
        },
      ],
    },
  },
  devtools: { enabled: true },

  alias: {
    // "@": resolve(__dirname, "/"),
    assets:"/<rootDir>/assets"
  },

  css: ["~/assets/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    "@nuxt/content",
    "@pinia/nuxt",
  ],
  ssr: false,
})
