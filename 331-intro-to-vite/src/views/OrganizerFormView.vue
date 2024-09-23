<script setup lang="ts">
import type { Organizer } from '@/types'
import { ref } from 'vue'
import EventService from '@/services/EventService'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'
const router = useRouter()
const store = useMessageStore()
const { message } = storeToRefs(store)

const organizer = ref<Organizer>({
  id: 0,
  organizationName: '',
  address: ''
})

function resetForm() {
  organizer.value = {
    id: 0,
    organizationName: '',
    address: ''
  }
}

function saveOrganizer() {
  EventService.saveOrganizer(organizer.value)
    .then((response) => {
      store.updateMessage(
        'You have successfully added a new organizer for ' + response.data.organizationName
      )
      resetForm()
      setTimeout(() => {
        store.resetMessage()
      }, 3000)
    })
    .catch(() => {
      router.push({ name: 'network-error-view' })
    })
}
</script>

<template>
  <div id="flashMessage" class="animate-fade" v-if="message">
    <h4>{{ message }}</h4>
  </div>
  <div class="container">
    <div class="form-container">
      <h1>Add an Organizer</h1>
      <div class="form-section">
        <form class="organizer-form" @submit.prevent="saveOrganizer">
        <div class="form-group">
          <label for="organization-name">Organization Name</label>
          <input
            v-model="organizer.organizationName"
            id="organization-name"
            type="text"
            placeholder="Organization Name"
          />
        </div>

        <div class="form-group">
          <label for="address">Address</label>
          <input v-model="organizer.address" id="address" type="text" placeholder="Address" />
        </div>
        <button class="submit-btn" type="submit">Submit</button>
      </form>
      </div>
    </div>

    <div class="pre-container">
      <h2>Preview</h2>
      <pre>{{ organizer }}</pre>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.form-container,
.pre-container {
  flex: 1;
  margin: 0 10px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-container {
  max-width: 600px;
}

h1,
h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.organizer-form .form-group {
  margin-bottom: 15px;
}

.organizer-form label {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
}

.organizer-form input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.form-section label{
  font-size: 17px;
  color: #333;
  margin-bottom: 10px;
  text-align: left; /* Align h3 to the left */
}

.submit-btn {
  display: block;
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #45a049;
}

.pre-container {
  max-width: 600px;
}

pre {
  background-color: #f4f4f4;
  padding: 15px;
  border-radius: 4px;
  font-size: 14px;
  overflow-x: auto;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .form-container,
  .pre-container {
    max-width: 100%;
    margin: 10px 0;
  }
}
</style>