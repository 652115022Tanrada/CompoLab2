<script setup lang="ts">
  import EventCard from '@/components/EventCard.vue'
  import Event from '@/types/Event'
  import { ref, onMounted } from 'vue'
  import axios from 'axios'

  const events = ref<Event[]>(null)

  onMounted(() => {
    axios
      .get('https://my-json-server.typicode.com/IngM5058/mockServer/events')
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  })
  
</script>

<template>
  <div class="home">
  <h1>Events For Good</h1>
  <!-- new element -->
  <div class="events"></div>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style>
  .events {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>