<template>
  <SectionContainer id="process" padding="lg">
    <SectionHeading eyebrow="Nuestra metodología" sub="Proceso claro de principio a fin.">
      Cómo trabajamos
    </SectionHeading>
    <ol class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="(step, i) in steps" :key="i" class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div class="text-xs font-semibold uppercase tracking-wider text-slate-500">{{ step.num }}</div>
        <h3 class="mt-2 font-semibold text-slate-900">{{ step.title }}</h3>
        <p class="mt-1 text-sm text-slate-600">{{ step.desc }}</p>
      </li>
    </ol>
  </SectionContainer>
</template>

<script setup lang="ts">
const steps = [
  { num: '01', title: 'Análisis y diagnóstico', desc: 'Revisión de marca, competencia y objetivos.' },
  { num: '02', title: 'Plan estratégico', desc: 'Definición de plan de marketing y acciones.' },
  { num: '03', title: 'Desarrollo creativo', desc: 'Exploraciones visuales y propuestas al cliente.' },
  { num: '04', title: 'Ajustes y aprobación', desc: 'Iteraciones según feedback del cliente.' },
  { num: '05', title: 'Ejecución', desc: 'Producción y despliegue del plan.' },
  { num: '06', title: 'Evaluación de resultados', desc: 'Métricas, reportes y optimizaciones.' },
]
</script>
