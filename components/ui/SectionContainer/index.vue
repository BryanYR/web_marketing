<template>
  <section :id="id" :class="wrapperClass">
    <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8" :class="contentClass">
      <slot />
    </div>
  </section>
  
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { sectionContainerStyles } from './SectionContainer.style'
const props = defineProps<{
  id?: string
  padding?: 'none' | 'sm' | 'md' | 'lg'
  bg?: string
  class?: string
  contentClass?: string
}>()

const wrapperClass = computed(() => sectionContainerStyles({ padding: props.padding, class: [props.bg, props.class].filter(Boolean).join(' ') }))
</script>
