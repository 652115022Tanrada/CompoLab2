<script setup lang="ts">
import { toRefs, defineProps } from "vue"
import { type Event } from '@/types'
// import EventService from '@/services/EventService'
// const event = ref<Event | null>(null)
// const id = ref<number>(5928101)
const props = defineProps<{
    event: Event
    id: String
}>()
// eslint-disable-next-line @typescript-eslint/no-unused-vars 
const {event} = toRefs(props)
</script>
<template>
    <p>Register event here</p>
</template>