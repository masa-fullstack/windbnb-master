import staysData from '../data/stays.json'

//API
export type Country = string
export type City = string
export type Location = {
  city: City
  country: Country
}
export type CntGuests = number
export type StaysData = typeof staysData
export type Stay = typeof staysData[number]

//FrontEnd
export type HandleSearch = () => void
export type DispGuests = string
export type DispLocation = string
