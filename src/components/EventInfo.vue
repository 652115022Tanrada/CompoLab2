<script setup lang="ts">
import type { Event } from '@/types'

defineProps<{
  event: Event
}>()
</script>

<template>
  <div class="event-info">
    <div class="event-card">
      <h2>{{ event.category }}</h2>
      {{ event.organizer }}
    </div>
  </div>
</template>

<style scoped>
.event-card {
  @apply p-5 w-[250px] cursor-pointer border border-[#39495c] mb-4 text-right text-[20px] transition-transform duration-300 hover:scale-105 hover:shadow-lg;
}
/* .event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
} */
</style>
