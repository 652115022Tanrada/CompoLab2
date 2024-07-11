<script setup lang="ts">
import EventCard from '@/components/StudentCard.vue'
import Event from '@/types/Student'
import { ref, onMounted } from 'vue'
import EventService from '@/services/AnotherEventService'

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

<style>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<template>
  <div class="student">
    <h1>Students Info</h1>
    <!-- new element -->
    <div class="events"></div>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .student {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
