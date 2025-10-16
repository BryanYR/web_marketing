<template>
  <SectionContainer id="portfolio" padding="lg" class="bg-primary-50">
    <SectionHeading eyebrow="Portafolio" sub="Una selección de proyectos recientes.">
      Trabajo destacado
    </SectionHeading>
    <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div v-for="i in 6" :key="i" class="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div class="aspect-[4/3] w-full bg-slate-100" />
        <div class="p-5">
          <h3 class="font-semibold">Proyecto {{ i }}</h3>
          <p class="mt-1 text-sm text-slate-600">Branding, Web</p>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
// Placeholder cards; replace with real content or CMS later.
</script>
