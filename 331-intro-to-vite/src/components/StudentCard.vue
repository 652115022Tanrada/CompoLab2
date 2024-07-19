<script setup lang="ts">
  import { ref } from 'vue'
  import Event from '@/types/Student'
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

<!-- fix template -->
<template>
    <div class="event-class">
      <div class="event-card">
        <h2>{{ event.studentId}}</h2>
        <p>{{ event.name }} {{ event.surname }}</p>
        <span>GPA: {{ event.gpa }}</span>
      </div>
    </div>
  </template>

  
<style scoped>
 .event-class{
  display: flex;
  flex-direction: column;
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

