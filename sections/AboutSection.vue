<script setup lang="ts">
import Corporative from '@/assets/icons/Corporative.vue';
import Services from '@/assets/icons/Services.vue';
import Reputation from '@/assets/icons/Reputation.vue';
const features = [
  {
    title: 'B2B y marcas corporativas',
    desc: 'Empresas B2B y marcas corporativas.',
    icon: Corporative,
  },
  {
    title: 'Servicios profesionales',
    desc: 'Legales, financieros, seguros, educación y más.',
    icon: Services,
  },
  {
    title: 'Enfoque en reputación y estrategia',
    desc: 'Empresas que priorizan reputación, posicionamiento y estrategia.',
    icon: Reputation,
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
          Markting.pe
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
            class="text-center"
            wrapper-class="mx-auto"
          >
            <template #icon>
              <component :is="f.icon" class="h-10 w-10" />
            </template>
          </FeatureCard>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>