<template>
  <button :type="type" :class="[$attrs.class, classes]">
    <span v-if="$slots.iconLeft" class="mr-2 inline-flex"><slot name="iconLeft" /></span>
    <span><slot /></span>
    <span v-if="$slots.iconRight" class="ml-2 inline-flex"><slot name="iconRight" /></span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
  className?: string
}>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  className: '',
})

const base = 'inline-flex items-center justify-center rounded-full font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'
const sizeMap = {
  sm: 'text-sm px-3 py-2',
  md: 'text-sm px-4 py-2.5',
  lg: 'text-base px-6 py-3',
}
const variantMap = {
  primary: 'bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-400',
  secondary: 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:ring-indigo-400',
  ghost: 'bg-transparent text-slate-900 hover:bg-slate-100 focus-visible:ring-slate-300',
}

const classes = computed(() => [
  base,
  sizeMap[props.size],
  variantMap[props.variant],
  props.className,
].filter(Boolean).join(' '))
</script>
