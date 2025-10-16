<template>
  <div class="mx-auto max-w-3xl text-center">
    <p
      v-if="eyebrow"
      class="mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
      :class="eyebrowClass"
    >
      {{ eyebrow }}
    </p>
    <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
      <slot />
    </h2>
    <p v-if="sub" class="mt-4 ">
      {{ sub }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  eyebrow?: string
  sub?: string
  variant?: 'primary' | 'secondary'
}>(), {
  eyebrow: undefined,
  sub: undefined,
  variant: 'primary',
})

const eyebrowClass = computed(() =>
  props.variant === 'primary'
    ? 'bg-primary-500 text-white'
    : 'bg-white text-primary-500'
)
</script>
