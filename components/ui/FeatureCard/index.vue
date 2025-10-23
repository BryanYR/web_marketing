<template>
  <div :class="wrapperClasses">
    <div :class="[iconWrapClasses, wrapperClass]">
      <slot name="icon" />
    </div>
    <h3 :class="titleClasses">{{ title }}</h3>
    <p :class="descClasses">{{ desc }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { featureCardWrapper, featureCardIconWrap, featureCardTitle, featureCardDesc } from './FeatureCard.style'

const props = withDefaults(
  defineProps<{
    title: string
    desc: string
    tone?: 'light' | 'dark'
    wrapperClass?: string
  }>(),
  {
    tone: 'light',
    wrapperClass: '',
  }
)

const wrapperClasses = computed(() => featureCardWrapper({ tone: props.tone }))
const iconWrapClasses = computed(() => featureCardIconWrap({ tone: props.tone }))
const titleClasses = computed(() => featureCardTitle({ tone: props.tone }))
const descClasses = computed(() => featureCardDesc({ tone: props.tone }))
</script>
