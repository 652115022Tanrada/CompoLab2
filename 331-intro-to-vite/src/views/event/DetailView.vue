<script setup lang="ts">
import { toRefs, defineProps } from "vue"
import { type Event } from '@/types'
// import EventService from '@/services/EventService'
// const event = ref<Event | null>(null)
// const id = ref<number>(5928101)
const props = defineProps<{
    event: Event
}>()
const {event} = toRefs(props)
</script>
<template>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
</template>