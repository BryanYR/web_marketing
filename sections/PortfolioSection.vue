
<script setup lang="ts">
import { computed } from 'vue'
import { portfolio } from '@/constants/portfolio'

const items = computed(() => portfolio)

// Decide aspect ratio by index: first 3 portrait, rest landscape
const ratioClass = (idx: number) => (idx < 3 ? 'aspect-[3/4]' : 'aspect-[4/3]')
</script>
<template>
  <SectionContainer id="portfolio" padding="lg" class="bg-primary-50">
    <SectionHeading eyebrow="Portafolio" sub="Una selección de proyectos recientes.">
      Trabajo destacado
    </SectionHeading>

    <!-- Masonry-style columns -->
    <div class="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3 [column-gap:1.5rem]">
      <div
        v-for="(p, i) in items"
        :key="`${p.title}-${i}`"
        class="mb-6 inline-block w-full align-top [break-inside:avoid]"
      >
        <div class="group relative w-full">
          <div :class="['relative w-full overflow-hidden rounded-2xl border border-slate-200 shadow-sm', ratioClass(i)]">
            <!-- Front (image) rotates on hover -->
            <img
              :src="p.image"
              :alt="p.title"
              class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:[transform:rotateY(180deg)]"
              loading="lazy"
            >
            <!-- Info card fades in (not rotated) -->
            <div class="absolute inset-0 grid place-items-center bg-slate-900/85 p-6 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div>
                <h3 class="text-lg font-semibold">{{ p.title }}</h3>
                <p class="mt-2 text-sm text-white/80">{{ p.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>


