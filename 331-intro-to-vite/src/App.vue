<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import { useMessageStore } from '@/stores/message'
// import { storeToRefs } from 'pinia'
// const store = useMessageStore()
// const { message } = storeToRefs(store)
</script>

<template>
  <div class="text-center font-sans text-gray-700 antialias">
    <header>
      <!-- <div id="flashMessage" v-if="message">
        <h4>{{ message }}</h4>
      </div> -->
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <!-- <nav>
          <RouterLink :to="{ name: 'event-list-view', query: { perPage: 2, page: 1 } }">Event</RouterLink> |
          <RouterLink :to="{ name: 'organizer' }">Oraganizer</RouterLink> |
          <RouterLink :to="{ name: 'about' }">Student</RouterLink>  -->
          <nav class="py-6">
          <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{ name: 'event-list-view', query: { perPage: 2, page: 1 } }">Event</RouterLink> |
          <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{ name: 'about' }">About</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style>

nav {
padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
h1 {
  text-align: center;
}

h2 {
  font-size: 20px;
}
/* @keyframes yellofade {
  from {
    background-color: yellow;
  }
  to {
    background-color: transparent;
  }
}
#flashMessage {
  animation: yellofade 3s ease-in-out;
} */
</style>
