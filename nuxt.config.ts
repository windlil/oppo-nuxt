// https://nuxt.com/docs/api/configuration/nuxt-config
import Component from 'unplugin-element-plus/vite'

export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  build: {
    transpile: ["element-plus/es"]
  },
  //自动引入全局css样式
  css: ['normalize.css', '@/assets/css/global.scss',"@/assets/cus-font/iconfont.css"],
  vite: {
    plugins: [Component({})],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@use '@/assets/css/var.scss' as * ;",
        }
      }
    }
  },
  app: {
    head: {
      meta: [
        {
          name: "description",
          content: "nuxt project"
        },
        {
          name: "keywords",
          content: "商城,手机,电子产品"
        }
      ]
    }
  },
})
