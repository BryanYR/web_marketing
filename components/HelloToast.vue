<script setup lang="ts">
import { useToast } from 'vue-toastification'
import { onMounted } from 'vue'

const toast = useToast()

onMounted(() => {
  toast.info('Listo para empezar 🚀')
})
</script>

<template>
  <div class="p-4 bg-white shadow rounded">
    <p class="text-slate-700">Componente listo.</p>
  </div>
</template>
