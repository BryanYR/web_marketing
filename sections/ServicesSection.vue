<script setup lang="ts">
import { services } from '@/constants/services';
</script>
<template>
  <SectionContainer id="services" padding="lg" class="bg-primary-50 relative">
    <SectionHeading
      eyebrow="Servicios"
      sub="Soluciones integrales: identidad, social media, audiovisual, eventos y más."
    >
      Nuestros servicios
    </SectionHeading>

    <div class="mt-12 space-y-8">
      <div
        v-for="(s, i) in services"
        :key="s.key"
        v-reveal
        :style="{ transitionDelay: `${i * 80}ms` }"
        class="rounded-2xl"
      >
        <div
          class="flex flex-col items-center gap-6 p-6 sm:p-8 lg:gap-10 lg:p-10"
        >
          <div
            class="grid grid-cols-1 items-start gap-4 lg:grid-cols-12 lg:gap-6"
          >
            <!-- Title and optional subtitle -->
            <div
              class="lg:col-span-5 text-center flex justify-center items-center h-full"
            >
              <h3
                class="text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-semibold text-slate-800"
              >
                {{ s.title }}
              </h3>
              <p v-if="s.subtitle" class="mt-2 text-sm text-slate-600">
                {{ s.subtitle }}
              </p>
            </div>

            <!-- Items list -->
            <div class="lg:col-span-7 relative">
              <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div
                  v-for="(it, j) in s.items"
                  :key="j"
                  class="group rounded-xl border border-slate-200 bg-white/95 p-5 sm:p-6 text-left shadow-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md hover:border-primary-200"
                >
                  <div class="flex items-start flex-col text-center gap-3">
                    <div class="text-sm font-semibold text-slate-900">
                      {{ it.title }}
                    </div>
                    <p
                      v-if="it.description"
                      class="mt-1 text-sm leading-6 text-slate-600"
                    >
                      {{ it.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>
