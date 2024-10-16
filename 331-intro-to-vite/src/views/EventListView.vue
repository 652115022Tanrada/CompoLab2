<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import type { Event } from '@/types'
import { ref, onMounted, computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import EventService from '@/services/EventService'
import BaseInput from '@/components/BaseInput.vue'
import router from '@/router'

const route = useRoute()

const events = ref<Event[] | null>(null)
const totalEvents = ref(0)
const perPage = computed(() => parseInt(route.query.perPage as string) || 2)
const page = computed(() => parseInt(route.query.page as string) || 1)
const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / perPage.value)
  return page.value < totalPages
})

onMounted(() => {
  watchEffect(() => {
    updateKeyword
  })
})

const keyword = ref('')
function updateKeyword (value: string) {
  let queryFunction;
  if (keyword.value === '') {
    queryFunction = EventService.getEvents(3, page.value)
  } else {
    queryFunction = EventService.getEventsByKeyword(keyword.value, 3, page.value)
  }
  queryFunction.then((response) => {
    events.value = response.data
    console.log('events', events.value)
    totalEvents.value = response.headers['x-total-count']
    console.log('totalEvent',totalEvents.value)
  }).catch(() => {
    router.push({ name: 'network-error-view'})
  })
}
</script>

<template>
  <h1>Events For Good</h1>
  <div class="flex flex-col items-center">
    <div class="w-64">
      <BaseInput
        v-model="keyword"
        type="text"
        label="Search..."
        @input="updateKeyword"
        />
    </div>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <div class="flex w-72">
      <RouterLink
        class="flex-1 text-left text-gray-700"
        :to="{ name: 'event-list-view', query: { page: page - 1, perPage: perPage } }"
        rel="prev"
        v-if="page != 1"
        >&#60; Prev Page</RouterLink
      >

      <RouterLink
        class="flex-1 text-right text-gray-700"
        :to="{ name: 'event-list-view', query: { page: page + 1, perPage: perPage } }"
        rel="next"
        v-if="hasNextPage"
        >Next Page &#62;</RouterLink
      >
    </div>
  </div>
</template>

<!-- <style scoped>
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}
#page-prev {
  text-align: left;
}
#page-next {
  text-align: right;
}
</style> -->
