
<script setup lang="ts">
import { useScrollToSection } from '@/composables/useScrollToSection'
const { scrollToSection } = useScrollToSection()
</script>
<template>
  <SectionContainer id="hero" padding="lg" class="relative overflow-hidden my-16 md:h-[100dvh] lg:my-0" content-class="h-full">
    <MarqueeText
      :words="['Creatividad', 'visión', 'inspiración']"
      opacity-class="opacity-10"
      size-class="text-6xl sm:text-[10rem] lg:text-[16rem]"
      y-class="top-1/2 -translate-y-1/2"
    />
    <div class="grid grid-cols-12 items-center gap-10 h-full">
      <div class="w-full col-span-12 lg:col-span-8 px-4 md:px-0">
        <Badge>Marketing.pe</Badge>
        <h1
          class="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-8xl"
        >
          Tu marca, es lo que te diferencia
        </h1>
        <p class="mt-5 max-w-xl text-lg text-slate-600">
          Agencia especializada en construir y posicionar marcas que se
          distinguen por su propuesta de valor, comunicación estratégica y
          excelencia en cada detalle.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <AppButton variant="secondary" @click="scrollToSection('#contact', { updateHash: false })"> Comenzar proyecto </AppButton>
          <AppButton variant="ghost" @click="scrollToSection('#portfolio', { updateHash: false })"> Nuestro portafolio </AppButton>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>