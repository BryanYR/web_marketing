<template>
  <section :id="id" :class="wrapperClass">
    <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8" :class="contentClass">
      <slot />
    </div>
  </section>
  
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{
  id?: string
  padding?: 'none' | 'sm' | 'md' | 'lg'
  bg?: string
  class?: string
  contentClass?: string
}>()

const paddingMap = {
  none: 'py-0',
  sm: 'py-10 sm:py-12',
  md: 'py-16 sm:py-20',
  lg: 'py-24 sm:py-28',
}

const wrapperClass = computed(() => {
  const p = paddingMap[props.padding ?? 'md']
  const bg = props.bg ?? ''
  return [p, bg, props.class].filter(Boolean).join(' ')
})
</script>
