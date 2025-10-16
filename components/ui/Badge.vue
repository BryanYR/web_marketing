<template>
  <span :class="classes"><slot /></span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = withDefaults(defineProps<{ tone?: 'indigo' | 'slate' | 'emerald'; soft?: boolean }>(), { tone: 'indigo', soft: true })

const toneMap = {
  indigo: {
    solid: 'bg-indigo-600 text-white',
    soft: 'bg-indigo-50 text-indigo-700',
  },
  slate: {
    solid: 'bg-slate-900 text-white',
    soft: 'bg-slate-100 text-slate-800',
  },
  emerald: {
    solid: 'bg-emerald-600 text-white',
    soft: 'bg-emerald-50 text-emerald-700',
  }
}

const classes = computed(() => `inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${props.soft ? toneMap[props.tone].soft : toneMap[props.tone].solid}`)
</script>
