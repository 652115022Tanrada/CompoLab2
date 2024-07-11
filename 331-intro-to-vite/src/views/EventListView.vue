<script setup lang="ts">
  import EventCard from '@/components/EventCard.vue'
  import Event from '@/types/Event'
  import { ref } from 'vue'
  const events = ref<Event[]>([
    {
      id: 5928101,
      category: 'animal welfare',
      title: 'Car Adoption Day',
      description: 'Find your new feline friend at this event.',
      location: 'Meow Town',
      date: 'January 28, 2022',
      time: '12:00',
      petsAllowed: true,
      organizer: 'Kat Laydee',
    },
    {
      id: 4582797,
      category: 'food',
      title: 'Community Gardening',
      description: 'Join us as we tend to the community edible plants.',
      location: 'Flora City',
      date: 'March 14, 2022',
      time: '10:00',
      petsAllowed: true,
      organizer: 'Fern Pollin',
    },
    {
      id: 8419988,
      category: 'sustainability',
      title: 'Beach Cleanup',
      description: 'Help pick up trash along the shore.',
      location: 'Playa Del Carmen',
      date: 'July 22, 2022',
      time: '11:00',
      petsAllowed: false,
      organizer: 'Carey Wales',
    },
    {
      id: 1234567,
      category: 'food',
      title: 'Cooking with Teddy',
      description: 'Hope yall bring your slave to help me cook some food.',
      location: 'In Paris',
      date: 'September 11, 2001',
      time: '7:14 pm GMT+7',
      petsAllowed: false,
      organizer: 'Teddy Choi',
    },
    ])
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