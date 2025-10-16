<template>
  <SectionContainer id="standards" padding="lg" class="bg-primary-700 text-white">
    <SectionHeading variant="secondary" eyebrow="Nuestros estándares" sub="Principios que guían cada proyecto.">
      Cómo garantizamos calidad
    </SectionHeading>
    <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <FeatureCard
        v-for="(s, i) in standards"
        :key="i"
        v-reveal
        :style="{ transitionDelay: `${i * 60}ms` }"
        :title="s.title"
        :desc="s.desc"
        tone="dark"
      >
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
            <!-- quality: shield-check -->
            <path v-if="s.icon==='quality'" fill-rule="evenodd" d="M11.7 2.253a.75.75 0 0 1 .6 0l7.5 3.214a.75.75 0 0 1 .45.688v6.56c0 3.803-2.501 7.258-7.95 8.93a.75.75 0 0 1-.45 0C6.9 20.973 4.4 17.718 4.4 13.715V6.155a.75.75 0 0 1 .45-.688l6.85-2.958Zm4.103 6.764a.75.75 0 1 0-1.106-1.014l-3.61 3.94-1.59-1.59a.75.75 0 0 0-1.06 1.061l2.121 2.121a.75.75 0 0 0 1.09-.02l4.155-4.499Z" clip-rule="evenodd" />
            <!-- values: heart -->
            <path v-else-if="s.icon==='values'" fill-rule="evenodd" d="M11.645 20.91 12 21.2l.355-.29c4.017-3.29 6.645-5.445 6.645-8.41A4.5 4.5 0 0 0 12 9.108a4.5 4.5 0 0 0-7 3.392c0 2.965 2.628 5.12 6.645 8.41Z" clip-rule="evenodd" />
            <!-- strategy: compass -->
            <path v-else-if="s.icon==='strategy'" fill-rule="evenodd" d="M12 2.25a9.75 9.75 0 1 0 9.75 9.75A9.761 9.761 0 0 0 12 2.25Zm2.62 5.38a.75.75 0 0 1 .99.99l-1.5 3.75a.75.75 0 0 1-.39.39l-3.75 1.5a.75.75 0 0 1-.99-.99l1.5-3.75a.75.75 0 0 1 .39-.39l3.75-1.5Z" clip-rule="evenodd" />
            <!-- feasibility: calendar-check -->
            <path v-else-if="s.icon==='feasibility'" fill-rule="evenodd" d="M6.75 3A.75.75 0 0 1 7.5 2.25h9a.75.75 0 0 1 .75.75V4.5h.75A2.25 2.25 0 0 1 20.25 6.75v10.5A2.25 2.25 0 0 1 18 19.5H6a2.25 2.25 0 0 1-2.25-2.25V6.75A2.25 2.25 0 0 1 6 4.5h.75V3Zm1.5 1.5v.75h7.5V4.5h-7.5Zm8.25 8.25a.75.75 0 1 0-1.06-1.06l-3.22 3.22-1.22-1.22a.75.75 0 0 0-1.06 1.06l1.75 1.75a.75.75 0 0 0 1.06 0l3.75-3.75Z" clip-rule="evenodd" />
            <!-- fallback: sparkles -->
            <path v-else fill-rule="evenodd" d="M9.813 15.904 7.5 21.75l-2.063-4.969L.469 14.25l5.906-2.313L9.75 6l2.156 5.937 6 2.25-5.906 2.25L9.813 15.904Z" clip-rule="evenodd" />
          </svg>
        </template>
      </FeatureCard>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
const standards = [
  {
    title: 'Calidad en cada entregable',
    desc: 'Cuidamos cada detalle y la calidad de todo lo que producimos.',
    icon: 'quality',
  },
  {
    title: 'Alineados a nuestros valores',
    desc: 'Cada proyecto refleja principios que no negociamos.',
    icon: 'values',
  },
  {
    title: 'Estrategia antes del diseño',
    desc: 'No diseñamos sin un análisis estratégico de marca.',
    icon: 'strategy',
  },
  {
    title: 'Viabilidad antes de prometer',
    desc: 'Evaluamos factibilidad antes de definir plazos o metas.',
    icon: 'feasibility',
  },
]
</script>
