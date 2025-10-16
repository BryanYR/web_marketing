<template>
  <SectionContainer id="contact" padding="lg" class="bg-primary-50">
    <div class="grid grid-cols-1 gap-10 lg:grid-cols-2">
      <div>
        <SectionHeading eyebrow="Contáctanos" sub="Cuéntanos sobre tus objetivos y te contactamos en menos de 24h.">
          Empecemos una conversación
        </SectionHeading>
        <div class="mt-6 space-y-4 text-slate-600">
          <p><strong>Correo:</strong> hola@tuagencia.com</p>
          <p><strong>Tel:</strong> +51 999 999 999</p>
          <p><strong>Ubicación:</strong> Remoto / LATAM</p>
        </div>
      </div>
      <form class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label for="contact-name" class="text-sm font-medium text-slate-700">Nombre</label>
            <input id="contact-name" name="name" type="text" class="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200">
          </div>
          <div>
            <label for="contact-email" class="text-sm font-medium text-slate-700">Email</label>
            <input id="contact-email" name="email" type="email" class="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200">
          </div>
          <div class="sm:col-span-2">
            <label for="contact-project" class="text-sm font-medium text-slate-700">Proyecto</label>
            <textarea id="contact-project" name="project" rows="5" class="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200" />
          </div>
        </div>
        <div class="mt-4">
          <AppButton type="submit" variant="secondary">Enviar</AppButton>
        </div>
      </form>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
// Form is static for now
</script>
