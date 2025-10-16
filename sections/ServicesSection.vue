<template>
  <SectionContainer id="services" padding="lg" class="bg-primary-50">
    <SectionHeading eyebrow="Servicios" sub="Soluciones integrales: identidad, social media, audiovisual, eventos y más.">
      Nuestros servicios
    </SectionHeading>

    <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(s, i) in services"
        :key="s.key"
        v-reveal
        :style="{ transitionDelay: `${i * 70}ms` }"
        class="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transform transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1"
      >
        <!-- Top image area (placeholder ready for real image) -->
        <div class="h-40 w-full bg-white">
          <img v-if="s.image" :src="s.image" :alt="s.title" class="h-full w-full object-cover">
          <div v-else class="grid h-full w-full place-items-center text-sm font-medium uppercase tracking-wide text-slate-400">
            marketing.pe
          </div>
        </div>

        <!-- Overlapping icon between image and content -->
        <div class="mx-auto -mt-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-700 ring-1 ring-primary-100">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
            <!-- identidad visual: palette -->
            <path v-if="s.key==='identidad'" fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 3.75-9.75 8.381 0 3.292 2.239 6.135 5.523 7.53.276.12.473.369.496.664l.126 1.678a1.125 1.125 0 0 0 1.77.86l1.5-1.071a.563.563 0 0 1 .66 0l1.5 1.07a1.125 1.125 0 0 0 1.77-.859l.126-1.678a.938.938 0 0 1 .496-.664c3.284-1.395 5.523-4.238 5.523-7.53C21.75 6 17.385 2.25 12 2.25Zm-4.125 8.25a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm3.75-.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm3.75.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Z" clip-rule="evenodd" />
            <!-- social media: chat bubbles -->
            <path v-else-if="s.key==='social'" fill-rule="evenodd" d="M7.5 2.25A2.25 2.25 0 0 0 5.25 4.5v6A2.25 2.25 0 0 0 7.5 12.75H9v2.25a.75.75 0 0 0 1.28.53l2.78-2.78h3.19A2.25 2.25 0 0 0 18.5 10.5v-6A2.25 2.25 0 0 0 16.25 2.25h-8.75Z" clip-rule="evenodd" />
            <!-- audiovisual / ads: video camera -->
            <path v-else-if="s.key==='audiovisual'" fill-rule="evenodd" d="M2.25 7.5A2.25 2.25 0 0 1 4.5 5.25h8.25A2.25 2.25 0 0 1 15 7.5v1.068l3.22-2.147a1.125 1.125 0 0 1 1.78.93v8.798a1.125 1.125 0 0 1-1.78.93L15 15.862V16.5a2.25 2.25 0 0 1-2.25 2.25H4.5A2.25 2.25 0 0 1 2.25 16.5v-9Z" clip-rule="evenodd" />
            <!-- eventos: calendar -->
            <path v-else-if="s.key==='eventos'" fill-rule="evenodd" d="M6.75 3A.75.75 0 0 1 7.5 2.25h9a.75.75 0 0 1 .75.75V4.5h.75A2.25 2.25 0 0 1 20.25 6.75v10.5A2.25 2.25 0 0 1 18 19.5H6a2.25 2.25 0 0 1-2.25-2.25V6.75A2.25 2.25 0 0 1 6 4.5h.75V3Zm1.5 1.5v.75h7.5V4.5h-7.5Zm-2.25 6A.75.75 0 0 1 6.75 9h.008a.75.75 0 0 1 .742.75v.008a.75.75 0 0 1-.75.742H6.75Z" clip-rule="evenodd" />
            <!-- fallback: sparkles -->
            <path v-else fill-rule="evenodd" d="M9.813 15.904 7.5 21.75l-2.063-4.969L.469 14.25l5.906-2.313L9.75 6l2.156 5.937 6 2.25-5.906 2.25L9.813 15.904Z" clip-rule="evenodd" />
          </svg>
        </div>

        <!-- Content -->
        <div class="px-6 pb-6 pt-8">
          <h3 class="text-lg font-semibold text-slate-900">{{ s.title }}</h3>
          <ul class="mt-4 space-y-2">
            <li v-for="(item, j) in s.items.slice(0,3)" :key="j" class="flex items-start gap-3 text-slate-700">
              <svg class="mt-0.5 h-5 w-5 flex-none text-primary-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M2.25 12a9.75 9.75 0 1 0 19.5 0 9.75 9.75 0 0 0-19.5 0Zm13.036-1.53a.75.75 0 1 0-1.072-1.05l-3.41 3.484-1.696-1.697a.75.75 0 0 0-1.061 1.06l2.25 2.25a.75.75 0 0 0 1.08-.01l3.909-4.037Z" clip-rule="evenodd" />
              </svg>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
type Service = {
  key: 'identidad' | 'social' | 'audiovisual' | 'eventos'
  title: string
  items: string[]
  image?: string
}

const services: Service[] = [
  {
    key: 'identidad',
    title: 'Creación de una identidad visual',
    items: [
      'Diseño o rediseño de logotipo institucional.',
      'Paleta cromática, tipografía y estilo gráfico.',
      'Dirección de arte para medios digitales y redes sociales.',
      'Diseño de sitio web corporativo.',
      'Aplicaciones de marca: papelería, merchandising, entre otros.',
      'Manual de identidad visual y normativas de uso.',
    ],
  },
  {
    key: 'social',
    title: 'Gestión mensual de redes sociales y diseños',
    items: [
      'Dirección estratégica de marketing digital.',
      'Diseño gráfico profesional para redes sociales.',
      'Redacción creativa y planificación de contenido.',
      'Gestión de comunidad y canales digitales (Community Manager).',
      'Diseño profesional de documentos corporativos.',
      'Dirección de fotografía y video profesional.',
    ],
  },
  {
    key: 'audiovisual',
    title: 'Servicio audiovisual y Ads',
    items: [
      'Fotografía profesional.',
      'Grabación y edición de videos.',
      'Gestión de Meta, TikTok y Google Ads.',
    ],
  },
  {
    key: 'eventos',
    title: 'Eventos corporativos y merchandising',
    items: [
      'Planificación, ejecución y dirección de eventos.',
      'Gestión de proveedores: locaciones, sonido, catering, ambientación, entre otros.',
      'Producción de merchandising, piezas gráficas y escenografía.',
      'Activaciones y experiencias alineadas a la identidad de marca.',
    ],
  },
]
</script>
