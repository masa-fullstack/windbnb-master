import Head from 'next/head'
import { Header } from './Header'
import { DispLocation, DispGuests, HandleSearch } from '../types/stay'
import { Dispatch, SetStateAction } from 'react'

type Props = {
  title?: string
  dispLocation: DispLocation
  dispGuests: DispGuests
  setIsOpen: Dispatch<SetStateAction<boolean>>
  handleSearch: HandleSearch
}

const Layout: React.FC<Props> = ({
  children,
  title = 'Default title',
  dispLocation,
  dispGuests,
  setIsOpen,
  handleSearch,
}) => {
  return (
    <div className="flex justify-center item-center flex-col min-h-screen font-montserrat">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <Header
          dispLocation={dispLocation}
          dispGuests={dispGuests}
          setIsOpen={setIsOpen}
          handleSearch={handleSearch}
        />
      </header>
      <main className="container mx-auto xl:px-40 px-5 mt-5 flex flex-1 justify-center item-center flex-col mb-10">
        {children}
      </main>
      <footer className="w-full h-6 flex justify-center item-center text-gray-400 mb-10">
        <div className="w-2/6 border-t text-center pt-5">
          created by masa @ DevChallenges.io
        </div>
      </footer>
    </div>
  )
}

export default Layout
