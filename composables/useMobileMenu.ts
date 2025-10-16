import { ref, watch } from 'vue'

const isOpen = ref(false)

export function useMobileMenu() {
  const open = () => { isOpen.value = true }
  const close = () => { isOpen.value = false }
  const toggle = () => { isOpen.value = !isOpen.value }

  // lock body scroll when open
  if (typeof globalThis !== 'undefined' && globalThis.window) {
    watch(isOpen, (v) => {
      const b = document.body
      if (!b) return
      if (v) {
        b.style.overflow = 'hidden'
      } else {
        b.style.overflow = ''
      }
    }, { immediate: true })
  }

  return { isOpen, open, close, toggle }
}
