<script setup lang="ts">
import { toRefs, defineProps } from "vue"
import { type Event } from '@/types'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'
// import EventService from '@/services/EventService'
// const event = ref<Event | null>(null)
// const id = ref<number>(5928101)
const props = defineProps<{
    event: Event
    id: String
}>()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const {event} = toRefs(props)
const router = useRouter()
const store = useMessageStore()
const edit = () => {
  store.updateMessage('The detail of ' + props.event.title + ' has been updated successfully!')
  setTimeout(() => {
    store.resetMessage()
  }, 3000)
  router.push({ name: 'event-detail-view', params: { id: props.event.id }})
}
</script>
<template>
    <p>Edit event here</p>
    <button @click="edit">Edit</button>
</template>