import Toast from 'vue-toastification'

export default defineNuxtPlugin((nuxtApp) => {
  const options = {
    position: 'top-right',
    timeout: 3000
  }
  nuxtApp.vueApp.use(Toast, options)
})
