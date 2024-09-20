<script setup lang="ts">
import type { Event } from '@/types'
defineProps<{
  event: Event
}>()
</script>

<template>
  <div class="event-class">
    <RouterLink class="event-link" :to="{ name: 'event-detail-view', params: { id: event.id } }">
      <div class="cursor-pointer border border-gray-600 p-[20px] w-[250px] mb-[18px] hover:scale-101 hover:shadow-sp">
        <h2 class="text-xl">{{ event.title }}</h2>
        <span>{{ event.category }} @ {{ event.location }}</span>
      </div>
    </RouterLink>
  </div>
</template>
