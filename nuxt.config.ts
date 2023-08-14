// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //自动引入全局css样式
  css: ['normalize.css', '@/assets/css/global.scss',"@/assets/cus-font/iconfont.css"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@use '@/assets/css/var.scss' as * ;",
        }
      }
    }
  },
})
