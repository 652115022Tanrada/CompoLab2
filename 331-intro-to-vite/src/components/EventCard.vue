<script setup lang="ts">
  import { type Event } from '@/types'
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
    <!-- <RouterLink :to="{name: 'event-detail-view',params: {id: event.id }}"> -->
    <RouterLink class="event-link" :to="{ name: 'event-detail-view',params: {
      id: event.id }}">
      <div class="cursor-pointer border border-gray-600 p-[20px] w-[250px] mb-[18px] hover:scale-101 hover:shadow-sp">
        <!-- <h2>{{ event.title }}</h2> -->
        <h2 class="text-xl">{{ event.title }}</h2>
        <p class="they-want-it">{{ event.category }}</p>
        <p class="they-want-it">{{ event.organizer }}</p>
        <span>@{{  event.time }} on {{ event.date }}</span>
      </div>
    </RouterLink>
  <!-- </div> -->
</template>

<!-- <style scoped>
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
.event-link {
  text-decoration: none;
  color: #2c3e50;
}
.they-want-it {
    font-size: 0.87em;
    text-align: right;
  }
</style> -->


