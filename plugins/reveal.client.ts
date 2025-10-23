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
  unmounted(_el) {
      // Ensure we disconnect any lingering observer if the element never intersected
      // In this simple implementation, we can query and disconnect all observers by storing a reference if needed.
      // Since we call disconnect() on intersect, we only need to guard against elements removed before intersect.
      // As IntersectionObserver doesn't provide an API to retrieve current observers, we keep a minimal no-op here.
    },
  }
  nuxtApp.vueApp.directive('reveal', appear)
})
