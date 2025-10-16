<template>
  <div :class="wrapperClasses">
    <div :class="iconWrapClasses">
      <slot name="icon" />
    </div>
    <h3 :class="titleClasses">{{ title }}</h3>
    <p :class="descClasses">{{ desc }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  title: string
  desc: string
  tone?: 'light' | 'dark'
}>(), {
  tone: 'light'
})

const isDark = computed(() => props.tone === 'dark')

const wrapperClasses = computed(() => [
  'rounded-2xl p-6 shadow-sm transform transition-all duration-300 ease-out will-change-transform',
  isDark.value
    ? 'bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-lg hover:-translate-y-1'
    : 'bg-white/90 border border-slate-200 hover:bg-white/95 hover:backdrop-blur-sm hover:shadow-lg hover:-translate-y-1'
].join(' '))

const iconWrapClasses = computed(() => [
  'mb-4 flex h-12 w-12 items-center justify-center rounded-xl',
  isDark.value ? 'bg-white/10 text-white' : 'bg-primary-50 text-primary-700'
].join(' '))

const titleClasses = computed(() => [
  'text-lg font-semibold',
  isDark.value ? 'text-white' : 'text-slate-900'
].join(' '))

const descClasses = computed(() => [
  'mt-2 text-sm',
  isDark.value ? 'text-white/70' : 'text-slate-600'
].join(' '))
</script>
