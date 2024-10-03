<script setup lang="ts">
import type { Event, Organizer } from '@/types'
import { onMounted, ref } from 'vue'
import EventService from '@/services/EventService'
import OrganizerService from '@/services/OrganizerService'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import BaseInput from '@/components/BaseInput.vue'

const event = ref<Event>({
  id: 0,
  category: '',
  title: '',
  description: '',
  location: '',
  date: '',
  time: '',
  petsAllowed: false,
  organizer: {
    id: 0,
    name: ''
  }
})

const router = useRouter()
const store = useMessageStore()
function saveEvent() {
  EventService.saveEvent(event.value)
    .then((response) => {
      router.push({ name: 'event-detail-view', params: { id: response.data.id } })
      store.updateMessage('You are successfully add a new event for ' + response.data.title)
      setTimeout(() => {
        store.resetMessage()
      }, 3000)
    })
    .catch(() => {
      router.push({ name: 'network-error-view' })
    })
}

const organizers = ref<Organizer[]>([])
onMounted(() => {
  OrganizerService.getOrganizers()
    .then((response) => {
      organizers.value = response.data
    })
    .catch(() =>  {
      router.push({ name: 'network-error-view'})
    })
})
</script>

<template>
  <div class="container">
    <div class="form-container">
      <h1>Create an event</h1>
      <form class="event-form" @submit.prevent="saveEvent">
        <div class="form-group">
          <BaseInput v-model="event.category" id="category" type="text" label="Category"/>
        </div>

        <div class="form-section">
          <h3>Name & describe your event</h3>
          <div class="form-group">
            <BaseInput v-model="event.title" id="title" type="text" label="Title" />
          </div>

          <div class="form-group">
            <BaseInput v-model="event.description" id="description" type="text" label="Description" />
          </div>
        </div>

        <div class="form-section">
          <h3>Where is your event?</h3>
          <div class="form-group">
            <BaseInput v-model="event.location" id="location" type="text" label="Location" />
          </div>
        </div>

        <div class="form-section">
          <h3>Who is your organizer?</h3>
          <div class="form-group">
            <label>Select an organizer</label>
            <select v-model="event.organizer.id">
              <option 
                v-for="option in organizers"
                :value="option.id"
                :key="option.id"
                :selected="option.id === event.organizer.id"
              > {{ option.name }}
              </option>
            </select>
          </div>
        </div>
        <button class="submit-btn" type="submit">Submit</button>
      </form>
    </div>

    <div class="pre-container">
      <h2>Preview</h2>
      <pre>{{ event }}</pre>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.form-container,
.pre-container {
  flex: 1;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1,
h2 {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

.event-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.form-group label {
  font-size: 14px;
  font-weight: 600;
  color: #555;
  text-align: left; /* Align label to the left */
}

/* BaseInput{
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  border: solid 2px #4caf50;
}

.form-group textarea {
  resize: vertical;
  height: 100px;
} */

.form-section h3 {
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
  text-align: left; /* Align h3 to the left */
}

.submit-btn {
  background-color: #4caf50;
  color: #fff;
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #45a049;
}

.pre-container {
  padding: 20px;
  background-color: #eee;
}

pre {
  margin-top: 20px;
  padding: 15px;
  background-color: #eee;
  border-radius: 5px;
  font-size: 13px;
  color: #333;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
