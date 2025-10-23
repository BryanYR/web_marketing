<template>
  <div :class="containerClass">
    <p v-if="eyebrow" :class="eyebrowClass">
      {{ eyebrow }}
    </p>
    <h2 :class="titleClass">
      <slot />
    </h2>
    <p v-if="sub" :class="subClass">
      {{ sub }}
    </p>
  </div>
  
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { sectionHeadingEyebrow, sectionHeadingContainer, sectionHeadingTitle, sectionHeadingSub } from './SectionHeading.style'

const props = withDefaults(defineProps<{
  eyebrow?: string
  sub?: string
  variant?: 'primary' | 'secondary'
}>(), {
  eyebrow: undefined,
  sub: undefined,
  variant: 'primary',
})

const containerClass = computed(() => sectionHeadingContainer())
const eyebrowClass = computed(() => sectionHeadingEyebrow({ variant: props.variant }))
const titleClass = computed(() => sectionHeadingTitle())
const subClass = computed(() => sectionHeadingSub())
</script>
