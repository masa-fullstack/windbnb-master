import Layout from '../components/Layout'
import Search from '../components/Search'
import { MutableRefObject, useRef, useState } from 'react'
import Stays from '../components/Stays'
import { DispGuests, DispLocation, HandleSearch, Location } from '../types/stay'

export const initialLocation: Location = {
  city: '',
  country: '',
}

const Home = (): JSX.Element => {
  //state
  const [isOpen, setIsOpen] = useState(false) //Searchモーダルの開閉状態
  const [cntAdults, setCntAdults] = useState(0) //adultsのカウンタ
  const [cntChildren, setCntChildren] = useState(0) //childrenのカウンタ
  const [location, setLocation] = useState(initialLocation) //location(=city)の値

  //ref
  const refLocation: MutableRefObject<Location> = useRef(initialLocation) //検索ボタン押下時のlocation(=city)の値
  const refCntGuests: MutableRefObject<number> = useRef(0) //検索ボタン押下時のguests(adults+children)の値

  //検索ボタン用ハンドラ
  const handleSearch: HandleSearch = () => {
    refLocation.current = location
    refCntGuests.current = cntAdults + cntChildren
    setIsOpen(false)
  }

  //display variable
  let dispGuests: DispGuests
  if (cntAdults === 0 && cntChildren === 0) {
    dispGuests = ''
  } else {
    dispGuests = cntAdults + cntChildren + '  guests'
  }

  let dispLocation: DispLocation
  if (location.city) {
    dispLocation = `${location.city}, ${location.country}`
  } else {
    dispLocation = ''
  }

  return (
    <Layout
      title="Stays in Finland"
      dispLocation={dispLocation}
      dispGuests={dispGuests}
      setIsOpen={setIsOpen}
      handleSearch={handleSearch}
    >
      {/* Searchモーダル */}
      {isOpen && (
        <div>
          <div className="fixed top-0 left-0 z-50 w-full h-auto pb-20 bg-white">
            <Search
              location={location}
              setLocation={setLocation}
              cntAdults={cntAdults}
              setCntAdults={setCntAdults}
              cntChildren={cntChildren}
              setCntChildren={setCntChildren}
              dispGuests={dispGuests}
              handleSearch={handleSearch}
            />
          </div>
          <div
            className="fixed top-0 left-0 z-10 w-screen h-screen bg-gray-700 bg-opacity-60"
            onClick={() => setIsOpen(false)}
          ></div>
        </div>
      )}
      {/* 見出し */}
      <div className="flex justify-between mb-8">
        <div className="text-2xl font-bold">Stays in Finland</div>
        <div className="text-sm text-gray-500">12+ stays</div>
      </div>
      {/* 検索結果 */}
      <Stays location={refLocation.current} cntGuests={refCntGuests.current} />
    </Layout>
  )
}

export default Home
