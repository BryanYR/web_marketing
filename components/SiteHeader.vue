<template>
  <header :class="['fixed top-0 left-0 right-0 z-50 w-full border-b border-slate-200/70 backdrop-blur bg-white/80 transition-shadow', {'shadow-sm': scrolled}]">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <a href="#hero" class="font-extrabold tracking-tight text-slate-900" @click.prevent="onLinkClick('#hero')">Marketing.pe</a>
      <nav aria-label="Principal" class="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
        <a v-for="l in links" :key="l.href" :href="l.href" :class="navClass(l.href)" @click.prevent="onLinkClick(l.href)">{{ l.label }}</a>
      </nav>
      <button aria-label="Abrir menú" class="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-300 bg-white" @click="toggle()">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
    </div>
    <!-- Mobile full-screen overlay menu -->
    <Transition name="fade">
      <div v-if="isOpen" class="md:hidden fixed h-[100dvh] w-full inset-0 z-50 bg-black/80">
        <div class="absolute inset-0" aria-hidden="true" @click="close()" />
        <div class="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <button aria-label="Cerrar menú" class="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/30 text-white/90" @click="close()">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
          <nav aria-label="Principal móvil" class="w-full max-w-sm space-y-3">
            <a v-for="l in links" :key="l.href" :href="l.href" class="block rounded-xl px-4 py-3 text-lg font-medium text-white hover:bg-white/10" @click.prevent="onMobileLink(l.href)">{{ l.label }}</a>
          </nav>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
// Composables for smooth scroll and mobile menu state
const { scrollToSection } = useScrollToSection()
const { isOpen, close, toggle } = useMobileMenu()

const scrolled = ref(false)
const active = ref('#hero')

const links = [
  { href: '#hero', label: 'Inicio' },
  { href: '#about', label: 'Nosotros' },
  { href: '#services', label: 'Servicios' },
  { href: '#portfolio', label: 'Portafolio' },
  { href: '#contact', label: 'Contacto' },
]

const navClass = (href: string) => [
  'hover:text-slate-900 transition-colors',
  active.value === href ? 'text-slate-900' : 'text-slate-600'
].join(' ')

const onLinkClick = (href: string) => {
  active.value = href
  scrollToSection(href, { updateHash: false })
}
const onMobileLink = (href: string) => {
  active.value = href
  close()
  scrollToSection(href, { updateHash: false })
}

// Scroll spy
let observer: IntersectionObserver | null = null
onMounted(() => {
  const ids = links.map(l => l.href.replace('#',''))
  const sections = ids
    .map(id => document.getElementById(id))
    .filter(Boolean) as HTMLElement[]

  observer = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        active.value = `#${e.target.id}`
      }
    }
  }, { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] })

  for (const s of sections) {
    observer!.observe(s)
  }

  const onScroll = () => { scrolled.value = window.scrollY > 2 }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.slideDown-enter-active, .slideDown-leave-active { transition: transform .2s ease, opacity .2s ease; }
.slideDown-enter-from, .slideDown-leave-to { transform: translateY(-6px); opacity: 0; }
</style>
