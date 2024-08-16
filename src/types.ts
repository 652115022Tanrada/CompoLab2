export interface Event {
  id: number
  category: string
  title: string
  description: string
  location: string
  date: string
  time: string
  petsAllowed: boolean
  organizer: string
}
export interface Student {
  id: number
  name: string
  surname: string
  gpa: number
}
export interface Airline {
  _id: string
  name: string
  country: string
  logo: string
  slogan: string
  head_quarters: string
  website: string
  established: string
}

export interface Passenger {
  _id: string
  name: string
  trips: number
  airline: Airline[]
}
export interface MessageState {
  message: string
}
export interface EventState {
  event: Event | null
}
