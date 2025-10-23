<template>
  <span :class="classes"><slot /></span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { badgeStyles } from './Badge.style'

const props = withDefaults(
  defineProps<{ tone?: 'indigo' | 'slate' | 'emerald'; soft?: boolean }>(),
  { tone: 'indigo', soft: true }
)

const classes = computed(() => badgeStyles({ tone: props.tone, soft: props.soft }))
</script>
