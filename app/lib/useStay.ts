import useSwr from 'swr'
import staysData from '../data/stays.json'
import { CntGuests, Location, StaysData } from '../types/stay'
import { initialLocation } from '../pages/index'

//type
type StaysResponse = {
  data?: StaysData
  error?: {
    message: string
  }
}
type UseStay = (
  location?: Location,
  cntGuests?: CntGuests
) => {
  stays: StaysData
  isLoading: boolean
  error: {
    message: string
  }
}

export const useStay: UseStay = (location = initialLocation, cntGuests = 0) => {
  const fetcher = (url: string): Promise<typeof staysData | null> =>
    fetch(url).then((res) => res.json())

  const { data, error }: StaysResponse = useSwr(
    `/api/stays?location=${location.city}&location=${location.country}&cntGuests=${cntGuests}`,
    fetcher
  )

  const stays = data

  return {
    stays,
    isLoading: !error && !data,
    error,
  }
}
