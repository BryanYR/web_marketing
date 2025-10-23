<template>
  <button :type="type" :class="[$attrs.class, classes]">
    <span v-if="$slots.iconLeft" class="mr-2 inline-flex"><slot name="iconLeft" /></span>
    <span><slot /></span>
    <span v-if="$slots.iconRight" class="ml-2 inline-flex"><slot name="iconRight" /></span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { appButtonStyles } from './AppButton.style'
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

const classes = computed(() =>
  appButtonStyles({ size: props.size, variant: props.variant, class: props.className })
)
</script>
