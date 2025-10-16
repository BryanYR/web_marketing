<script setup lang="ts">
const features = [
  {
    title: 'B2B y marcas corporativas',
    desc: 'Empresas B2B y marcas corporativas.',
    icon: 'corporate',
  },
  {
    title: 'Servicios profesionales',
    desc: 'Legales, financieros, seguros, educación y más.',
    icon: 'services',
  },
  {
    title: 'Enfoque en reputación y estrategia',
    desc: 'Empresas que priorizan reputación, posicionamiento y estrategia.',
    icon: 'reputation',
  },
]
</script>
<template>
  <SectionContainer id="about" padding="lg" class="bg-primary-700 text-white">
    <div class="flex flex-col gap-8">
      <div>
        <SectionHeading
          variant="secondary"
          eyebrow="Sobre nosotros"
          sub="Agencia especializada en construir y posicionar marcas que se distinguen por su propuesta de valor, comunicación estratégica y excelencia en cada detalle."
        >
          Marketing.pe
        </SectionHeading>
      </div>
      <div class="w-full">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            v-for="(f, i) in features"
            :key="i"
            v-reveal
            :style="{ transitionDelay: `${i * 60}ms` }"
            :title="f.title"
            :desc="f.desc"
            tone="dark"
          >
            <template #icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-6 w-6"
              >
                <!-- corporate: building/office -->
                <path
                  v-if="f.icon === 'corporate'"
                  fill-rule="evenodd"
                  d="M3.75 3A.75.75 0 0 0 3 3.75v16.5a.75.75 0 0 0 .75.75h6.5a.75.75 0 0 0 .75-.75V3.75A.75.75 0 0 0 10.25 3h-6.5Zm1 4.5h4.5V6h-4.5v1.5Zm0 3h4.5V9h-4.5v1.5Zm0 3h4.5V12h-4.5v1.5Zm0 3h4.5V15h-4.5v1.5Zm7.5-12h7a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1-.75-.75v-13a.75.75 0 0 1 .75-.75Zm1 2.25h5V8h-5V6.75Zm0 3h5V11h-5V9.75Zm0 3h5V14h-5v-1.25Zm0 3h5V17h-5v-1.25Z"
                  clip-rule="evenodd"
                />
                <!-- services: briefcase -->
                <path
                  v-else-if="f.icon === 'services'"
                  fill-rule="evenodd"
                  d="M9 5.25A2.25 2.25 0 0 1 11.25 3h1.5A2.25 2.25 0 0 1 15 5.25V6h3.75A2.25 2.25 0 0 1 21 8.25V10.5a2.25 2.25 0 0 1-2.25 2.25H15v.75a.75.75 0 0 1-1.5 0V12.75H10.5v.75a.75.75 0 0 1-1.5 0V12.75H5.25A2.25 2.25 0 0 1 3 10.5V8.25A2.25 2.25 0 0 1 5.25 6H9v-.75Zm1.5.75V5.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75V6h-3Z"
                  clip-rule="evenodd"
                />
                <!-- reputation: target/bullseye -->
                <path
                  v-else-if="f.icon === 'reputation'"
                  fill-rule="evenodd"
                  d="M12 2.25a9.75 9.75 0 1 0 9.75 9.75A9.761 9.761 0 0 0 12 2.25Zm0 16.5a6.75 6.75 0 1 1 6.75-6.75A6.758 6.758 0 0 1 12 18.75Zm0-3a3.75 3.75 0 1 0-3.75-3.75A3.754 3.754 0 0 0 12 15.75Zm0-2.25a1.5 1.5 0 1 1 1.5-1.5A1.502 1.502 0 0 1 12 13.5Z"
                  clip-rule="evenodd"
                />
                <!-- fallback: star -->
                <path
                  v-else
                  fill-rule="evenodd"
                  d="M12 2.25a.75.75 0 0 1 .696.474l1.9 4.584 4.927.39a.75.75 0 0 1 .42 1.314l-3.75 3.191 1.176 4.778a.75.75 0 0 1-1.11.83L12 15.83l-4.259 2.981a.75.75 0 0 1-1.11-.83l1.176-4.778-3.75-3.19a.75.75 0 0 1 .42-1.315l4.927-.39 1.9-4.584A.75.75 0 0 1 12 2.25Z"
                  clip-rule="evenodd"
                />
              </svg>
            </template>
          </FeatureCard>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>