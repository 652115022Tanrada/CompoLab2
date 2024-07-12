<script setup lang="ts">
import OrganizerCard from '@/components/OrganizerCard.vue'
import Event from '@/types/Event'
import { ref, onMounted } from 'vue'
import EventService from '@/services/EventService'

const events = ref<Event[]>(null)

onMounted(() => {
  EventService.getEvents()
    .then((response) => {
      console.log(response.data)
      events.value = response.data
    })
    .catch((error) => {
      console.error(error)
    })
})
  
</script>

<template>
  <div class="home">
    <h1>Organizer</h1>
    <!-- new element -->
    <div class="events"></div>
    <OrganizerCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style>
  .events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>