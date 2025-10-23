import type { Directive } from 'vue'

// SSR-safe stub for the v-reveal directive so SSR doesn't throw when reading getSSRProps
export default defineNuxtPlugin((nuxtApp) => {
  const appear: Directive<HTMLElement, string | undefined> = {
    // Provide initial classes on the server render to avoid SSR errors and flashes
    getSSRProps() {
      // Return no extra classes on SSR to prevent hydration mismatch warnings
      return {}
    },
  }
  nuxtApp.vueApp.directive('reveal', appear)
})
