import type { Directive } from 'vue'

export default defineNuxtPlugin((nuxtApp) => {
  const appear: Directive<HTMLElement, string | undefined> = {
    mounted(el) {
      el.classList.add('reveal-initial')
      const obs = new IntersectionObserver((entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.classList.add('reveal-in')
            el.classList.remove('reveal-initial')
            obs.disconnect()
          }
        }
      }, { threshold: 0.15 })
      obs.observe(el)
    },
  }
  nuxtApp.vueApp.directive('reveal', appear)
})
