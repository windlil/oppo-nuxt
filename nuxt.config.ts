// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Hello-Nuxt",
      charset: "utf-8",
      meta: [
        {
          name: 'keywords',
          content: 'nuxt'
        }
      ]
    }
  }
})
