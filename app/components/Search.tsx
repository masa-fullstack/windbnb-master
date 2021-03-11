import Guest from './Guest'
import SelectLocation from './SelectLocation'
import { Dispatch, SetStateAction, useState } from 'react'
import { CntGuests, DispGuests, HandleSearch, Location } from '../types/stay'

type Props = {
  location: Location
  setLocation: Dispatch<SetStateAction<Location>>
  cntAdults: CntGuests
  setCntAdults: Dispatch<SetStateAction<CntGuests>>
  cntChildren: CntGuests
  setCntChildren: Dispatch<SetStateAction<CntGuests>>
  dispGuests: DispGuests
  handleSearch: HandleSearch
}

const Search: React.FC<Props> = ({
  location,
  setLocation,
  cntAdults,
  setCntAdults,
  cntChildren,
  setCntChildren,
  dispGuests,
  handleSearch,
}) => {
  const [isInputFocus, setIsInputFocus] = useState(false)

  return (
    <div className="container mx-auto xl:px-40 px-5 mt-5">
      <div className="grid md:grid-cols-5 gap-3">
        <div className="col-span-2" onFocus={() => setIsInputFocus(false)}>
          <SelectLocation location={location} setLocation={setLocation} />
        </div>
        <div className="col-span-2">
          <Guest
            cntAdults={cntAdults}
            setCntAdults={setCntAdults}
            cntChildren={cntChildren}
            setCntChildren={setCntChildren}
            dispGuests={dispGuests}
            isInputFocus={isInputFocus}
            setIsInputFocus={setIsInputFocus}
          />
        </div>
        <div>
          <button
            className="flex-frow-0 h-14 w-full flex items-center justify-center rounded-2xl bg-yellow-500"
            onClick={handleSearch}
          >
            <span className="material-icons text-white">search</span>
            <span className="text-white">Search</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Search
