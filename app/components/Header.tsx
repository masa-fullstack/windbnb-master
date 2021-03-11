import Image from 'next/image'
import { DispLocation, DispGuests, HandleSearch } from '../types/stay'
import { Dispatch, SetStateAction } from 'react'

type Props = {
  dispLocation: DispLocation
  dispGuests: DispGuests
  setIsOpen: Dispatch<SetStateAction<boolean>>
  handleSearch: HandleSearch
}

export const Header: React.FC<Props> = ({
  dispLocation,
  dispGuests,
  setIsOpen,
  handleSearch,
}) => {
  return (
    <div className="container mx-auto xl:px-40 px-5 mt-5 flex justify-between">
      <Image src="/logo.svg" alt="logo" width={69} height={14} />
      <div className="rounded-2xl shadow-lg flex items-center w-80 h-14">
        <div className="flex-frow flex items-center h-full">
          {/* location */}
          <input
            type="text"
            placeholder="Add location"
            className="border pl-4 w-full h-full rounded-2xl rounded-r-none text-sm focus:outline-none focus:border-gray-600"
            value={dispLocation}
            readOnly={true}
            onFocus={() => setIsOpen(true)}
          />
        </div>
        <div className="flex-frow flex items-center h-full">
          {/* guests */}
          <input
            type="text"
            placeholder="Add guests"
            className="border pl-4 w-full h-full rounded-none text-sm focus:outline-none focus:border-gray-600"
            value={dispGuests}
            readOnly={true}
            onFocus={() => setIsOpen(true)}
          />
        </div>
        <div
          className="flex-frow-0 h-full flex items-center justify-center border rounded-2xl rounded-l-none"
          onClick={() => handleSearch()}
        >
          <span className="material-icons text-yellow-500 px-3">search</span>
        </div>
      </div>
    </div>
  )
}
