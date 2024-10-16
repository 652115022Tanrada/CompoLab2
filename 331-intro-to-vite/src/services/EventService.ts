import axios, { Axios, type AxiosResponse } from 'axios'
import type { Event, Organizer } from '@/types'


const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents(perPage: Number, page: Number) {
    return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
  },
  getEvent(id: number) {
    return apiClient.get('/events/' + id)
  },
  saveEvent(event: Event) {
    return apiClient.post('/events', event)
  },
  saveOrganizer(organizer: Organizer) {
    return apiClient.post('/organizers', organizer)
  },
  getEventsByKeyword(keyword: string, perPage: number, page: number) : Promise<AxiosResponse<Event[]>> {
    return apiClient.get<Event[]>('/events?title=' + keyword + '&_limit=' + perPage + '&_page=' + page)
  }
}
