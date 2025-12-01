<script setup lang="ts">
import { ProgressProvider } from '@bprogress/vue';
</script>

<template>
  <ProgressProvider>
    <RouterView />
  </ProgressProvider>
</template>