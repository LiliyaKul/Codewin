// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  // modules: ['nuxt-svgo', '@primevue/nuxt-module'],
  modules: ['nuxt-svgo', '@element-plus/nuxt'],
  srcDir: "src/",
  svgo: {
    autoImportPath: './assets/icons/',
  },
  css: ['~/assets/scss/main.scss'],
})