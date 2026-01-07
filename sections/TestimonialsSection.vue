<template>
  <SectionContainer id="testimonials" padding="lg" class="">
    <SectionHeading eyebrow="Testimonios" sub="Lo que dicen nuestros clientes.">
      Confian en nosotros
    </SectionHeading>
    <div class="mt-10">
      <ClientOnly>
        <Swiper
          :slides-per-view="1"
          :space-between="24"
          :breakpoints="{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }"
          :autoplay="{ delay: 3500 }"
          :loop="true"
        >
          <SwiperSlide v-for="(t, i) in testimonials" :key="i" class="!h-full">
            <div class="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p class="text-slate-700">“{{ t.quote }}”</p>
              <div class="mt-4 flex items-center gap-3">
                <div class="h-10 w-10 rounded-full bg-slate-200" />
                <div>
                  <div class="text-sm font-semibold text-slate-900">{{ t.author }}</div>
                  <div class="text-xs text-slate-500">{{ t.role }}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </ClientOnly>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
const testimonials = [
  { quote: 'El equipo entendió a la perfección nuestras necesidades y las superó.', author: 'María López', role: 'CMO, Nébula' },
  { quote: 'Diseño impecable y ejecución impecable. 10/10.', author: 'Carlos Pérez', role: 'CEO, Futura' },
  { quote: 'Un socio estratégico que aporta valor real.', author: 'Ana Ruiz', role: 'Product Lead, Kibo' },
  { quote: 'Resultados medibles y un trato excelente.', author: 'Jorge Silva', role: 'Founder, Folio' },
]
</script>
