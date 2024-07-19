<script setup lang="ts">
import { ref } from 'vue'
  import Event from '@/types/Event'
  defineProps<{
    event: Event
  }>()
  // const event = ref({
  //   id: 5928101,
  //   category: 'animal welfare',
  //   title: 'Car Adoption Day',
  //   description: 'Find your new feline friend at this event.',
  //   location: 'Meow Town',
  //   date: 'January 28, 2022',
  //   time: '12:00',
  //   petsAllowed: true,
  //   organizer: 'Kat Laydee',
  // });
</script>

<template>
  <!-- <div class="event-class"> -->
    <RouterLink to="/event/5928101">
      <div class="event-card">
        <h2>{{ event.title }}</h2>
        <p class="they-want-it">{{ event.category }}</p>
        <p class="they-want-it">{{ event.organizer }}</p>
        <span>{{  event.time }} on {{ event.date }}</span>
      </div>
    </RouterLink>
  <!-- </div> -->
</template>

<style scoped>
.event-class{
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.they-want-it {
    font-size: 0.87em;
    text-align: right;
  }
</style>


