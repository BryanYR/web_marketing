<template>
  <footer class="border-t border-slate-200 bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-3">
        <div>
          <div class="text-lg font-extrabold text-slate-900">Markting.pe</div>
          <p class="mt-2 text-sm text-slate-600">Agencia creativa. Estrategia, diseño y desarrollo.</p>
        </div>
        <div>
          <div class="text-sm font-semibold text-slate-900">Navegación</div>
          <ul class="mt-3 space-y-2 text-sm text-slate-600">
            <li><a href="#about" class="hover:text-slate-900" @click.prevent="scrollToSection('#about', { updateHash: false })">Nosotros</a></li>
            <li><a href="#services" class="hover:text-slate-900" @click.prevent="scrollToSection('#services', { updateHash: false })">Servicios</a></li>
            <li><a href="#portfolio" class="hover:text-slate-900" @click.prevent="scrollToSection('#portfolio', { updateHash: false })">Portafolio</a></li>
            <li><a href="#contact" class="hover:text-slate-900" @click.prevent="scrollToSection('#contact', { updateHash: false })">Contacto</a></li>
          </ul>
        </div>
        <div>
          <div class="text-sm font-semibold text-slate-900">Contacto</div>
          <ul class="mt-3 space-y-2 text-sm text-slate-600">
            <li>hola@tuagencia.com</li>
            <li>+51 999 999 999</li>
            <li>LATAM / Remoto</li>
          </ul>
        </div>
      </div>
      <div class="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row">
        <p>© {{ new Date().getFullYear() }} Markting.pe. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useScrollToSection } from '@/composables/useScrollToSection'
const { scrollToSection } = useScrollToSection()
</script>
